// ==========================================================================
// Suíte de rotas — sobe o NGINX REAL com o deploy/nginx.conf do projeto e
// verifica cada rota. É esta suíte que pega os bugs que só aparecem em
// produção: laço de redirecionamento (/blog), 301 absoluto virando http://,
// arquivos ocultos expostos.
//
// Se o nginx não estiver instalado, a suíte é pulada com aviso — mas em
// qualquer máquina de deploy ele está (é o servidor do container).
// ==========================================================================
import fs from "node:fs";
import os from "node:os";
import net from "node:net";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { DOMINIO, listarPaginas, urlPublica, refsInternas, urlsDoSitemap } from "./_shared.mjs";

const RAIZ = path.resolve(import.meta.dirname, "..");

const CANDIDATOS_NGINX = ["nginx", "/opt/homebrew/bin/nginx", "/usr/local/bin/nginx", "/usr/sbin/nginx", "/usr/bin/nginx"];

function acharNginx() {
  for (const bin of CANDIDATOS_NGINX) {
    const r = spawnSync(bin, ["-v"], { encoding: "utf8" });
    if (/nginx version/i.test((r.stderr || "") + (r.stdout || ""))) return bin;
  }
  return null;
}

const TIPOS = `types {
  text/html html; text/css css; text/javascript js;
  text/plain txt md; application/json json; application/xml xml;
  image/svg+xml svg; image/png png; image/jpeg jpg jpeg; image/webp webp; image/x-icon ico;
}`;

function porta() {
  return new Promise((resolve, reject) => {
    const s = net.createServer();
    s.once("error", reject);
    s.listen(0, "127.0.0.1", () => {
      const p = s.address().port;
      s.close(() => resolve(p));
    });
  });
}

const espera = (ms) => new Promise((r) => setTimeout(r, ms));

export default async function nginxSuite(h, ctx) {
  h.section("rotas (nginx real)");

  const bin = acharNginx();
  if (!bin) {
    h.skip("suíte de rotas", "nginx não instalado (brew install nginx)");
    return;
  }

  const { dist } = ctx;
  const prefix = fs.mkdtempSync(path.join(os.tmpdir(), "beend-ngx-"));
  const html = path.join(prefix, "html");
  fs.cpSync(dist, html, { recursive: true });
  fs.mkdirSync(path.join(prefix, "logs"), { recursive: true });

  // ---- configuração: usa o arquivo real, trocando só root e porta ----
  const original = fs.readFileSync(path.join(RAIZ, "deploy/nginx.conf"), "utf8");
  const port = await porta();
  const site = original
    .replace(/root\s+\/usr\/share\/nginx\/html;/g, `root ${html};`)
    .replace(/listen\s+\[::\]:80;/g, `listen [::]:${port};`)
    .replace(/listen\s+80;/g, `listen ${port};`);

  fs.writeFileSync(path.join(prefix, "site.conf"), site);
  fs.writeFileSync(
    path.join(prefix, "nginx.conf"),
    `worker_processes 1;\npid ${prefix}/nginx.pid;\nerror_log ${prefix}/logs/error.log warn;\n` +
      `events { worker_connections 128; }\n` +
      `http {\n  ${TIPOS}\n  default_type application/octet-stream;\n  access_log off;\n  sendfile off;\n` +
      `  include ${prefix}/site.conf;\n}\n`
  );

  const conf = path.join(prefix, "nginx.conf");
  const base = `http://127.0.0.1:${port}`;
  let iniciado = false;

  const parar = () => {
    if (!iniciado) return;
    try {
      spawnSync(bin, ["-c", conf, "-p", prefix, "-s", "stop"], { encoding: "utf8" });
    } catch {
      /* segue */
    }
    try {
      const pid = Number(fs.readFileSync(path.join(prefix, "nginx.pid"), "utf8").trim());
      if (pid) process.kill(pid, "SIGKILL");
    } catch {
      /* já parado */
    }
  };

  try {
    let teste = { status: null };
    await h.test("a configuração do nginx compila (nginx -t)", () => {
      teste = spawnSync(bin, ["-t", "-c", conf, "-p", prefix], { encoding: "utf8" });
      const saida = (teste.stderr || "") + (teste.stdout || "");
      // a cópia do config precisa ter sido realmente reescrita
      h.assert(site.includes(`root ${html};`), "o caminho root não foi substituído — config mudou de forma?");
      h.assert(!/listen 80;/.test(site), "a porta 80 não foi substituída — config mudou de forma?");
      h.assert(/test is successful/.test(saida), `nginx -t falhou:\n${saida.trim()}`);
    });

    if (teste.status !== 0) return;

    // ---- sobe o servidor ----
    spawnSync(bin, ["-c", conf, "-p", prefix], { encoding: "utf8" });
    iniciado = true;
    let pronto = false;
    for (let i = 0; i < 40 && !pronto; i++) {
      try {
        await fetch(base + "/", { redirect: "manual" });
        pronto = true;
      } catch {
        await espera(100);
      }
    }
    if (!pronto) {
      const log = fs.existsSync(path.join(prefix, "logs/error.log"))
        ? fs.readFileSync(path.join(prefix, "logs/error.log"), "utf8")
        : "";
      throw new Error(`nginx não subiu.\n${log}`);
    }

    /* ---------- helpers de requisição ---------- */

    const pedir = async (p) => {
      const r = await fetch(base + p, { redirect: "manual" });
      return { status: r.status, location: r.headers.get("location") };
    };

    /** Segue redirecionamentos e detecta laço. */
    const seguir = async (inicio, max = 6) => {
      let atual = inicio;
      const saltos = [];
      for (let n = 0; n <= max; n++) {
        const r = await pedir(atual);
        if (r.status >= 300 && r.status < 400 && r.location) {
          saltos.push(r.location);
          if (saltos.length > max) throw new Error(`laço de redirecionamento em ${inicio}: ${saltos.join(" → ")}`);
          atual = r.location.startsWith("http") ? new URL(r.location).pathname : r.location;
          continue;
        }
        return { status: r.status, saltos, final: atual };
      }
      throw new Error(`cadeia longa demais em ${inicio}: ${saltos.join(" → ")}`);
    };

    const conteudo = new Map(
      listarPaginas(dist).map((p) => [p, fs.readFileSync(path.join(dist, p), "utf8")])
    );

    /* ---------------------------- testes ---------------------------- */

    await h.test("toda URL do sitemap responde 200 sem redirecionar", async () => {
      const urls = urlsDoSitemap(dist).map((u) => u.replace(DOMINIO, ""));
      const problemas = [];
      for (const u of urls) {
        const r = await seguir(u);
        if (r.status !== 200) problemas.push(`${u} → ${r.status}${r.saltos.length ? ` (via ${r.saltos.join(" → ")})` : ""}`);
        else if (r.saltos.length) problemas.push(`${u} redireciona (${r.saltos.join(" → ")}) — a URL canônica deve servir direto`);
      }
      h.assertEmpty(problemas, "URLs canônicas com problema");
    });

    await h.test("/blog é servido direto e /blog/ converge para ele", async () => {
      const direto = await pedir("/blog");
      h.eq(direto.status, 200, "/blog deveria servir 200 direto (sem redirecionar)");
      const comBarra = await seguir("/blog/");
      h.eq(comBarra.status, 200, "/blog/ deveria terminar em 200");
      h.eq(comBarra.final, "/blog", "destino final de /blog/");
      for (const u of ["/blog/index.html"]) {
        const r = await seguir(u);
        h.eq(r.status, 200, `${u} deveria terminar em 200`);
        h.eq(r.final, "/blog", `destino final de ${u}`);
      }
    });

    await h.test("URLs .html antigas caem em 301, em 1 salto", async () => {
      const antigas = listarPaginas(dist)
        .filter((p) => p !== "404.html" && !/^google[a-z0-9]+\.html$/i.test(p))
        .map((p) => `/${p.split(path.sep).join("/")}`);
      const problemas = [];
      for (const u of antigas) {
        const r = await seguir(u);
        if (r.status !== 200) problemas.push(`${u} → ${r.status}`);
        else if (r.saltos.length !== 1) problemas.push(`${u} → ${r.saltos.length} saltos (${r.saltos.join(" → ")})`);
        else if (r.final !== urlPublica(u.replace(/^\//, ""))) problemas.push(`${u} → ${r.final} (esperado ${urlPublica(u.replace(/^\//, ""))})`);
      }
      h.assertEmpty(problemas, "redirecionamentos das URLs antigas");
    });

    await h.test("nenhum redirecionamento usa URL absoluta (http:// ou https://)", async () => {
      const rotas = [
        "/planos-e-precos.html",
        "/blog/index.html",
        "/index.html",
        "/services-details.html",
        "/portfolio-details.html",
        "/index.php",
        "/sobre.html",
      ];
      const problemas = [];
      for (const u of rotas) {
        const r = await pedir(u);
        if (!r.location) continue;
        if (/^https?:\/\//i.test(r.location)) problemas.push(`${u} → ${r.location}`);
      }
      h.assertEmpty(problemas, "Location absoluto (deve usar absolute_redirect off)");
    });

    await h.test("todo link interno do HTML responde 200 sem redirecionar", async () => {
      const links = new Map();
      for (const [rel, html] of conteudo) {
        if (rel.startsWith("lp/")) continue;
        for (const r of refsInternas(html)) if (!links.has(r)) links.set(r, rel);
      }
      const problemas = [];
      for (const [u] of links) {
        const r = await seguir(u);
        if (r.status !== 200) problemas.push(`${u} → ${r.status} (em ${links.get(u)})`);
        else if (r.saltos.length) problemas.push(`${u} redireciona ${r.saltos.join(" → ")} (em ${links.get(u)})`);
      }
      h.assertEmpty(problemas, "links internos com problema", 12);
    });

    await h.test("arquivos ocultos e do gerador ficam bloqueados", async () => {
      const alvos = ["/.htaccess", "/.env", "/.git/config", "/build.mjs", "/content/index.mjs", "/tools/check.mjs"];
      const problemas = [];
      for (const u of alvos) {
        const r = await pedir(u);
        if (r.status !== 403) problemas.push(`${u} → ${r.status} (esperado 403)`);
      }
      h.assertEmpty(problemas, "arquivos que deveriam estar bloqueados");
    });

    await h.test("o arquivo de verificação do Google é servido, não redirecionado", async () => {
      const g = fs.readdirSync(dist).find((f) => /^google[a-z0-9]+\.html$/i.test(f));
      h.assert(g, "nenhum arquivo google*.html no build (a verificação do Search Console quebraria)");
      const r = await seguir("/" + g);
      h.eq(r.status, 200, `${g} deveria servir 200`);
      h.eq(r.saltos.length, 0, `número de redirecionamentos de ${g}`);
    });

    await h.test("a página de erro e o 404 se comportam", async () => {
      const erro = await pedir("/404.html");
      h.eq(erro.status, 200, "/404.html deve ser servida direto (error_page)");
      const inexistente = await pedir("/nao-existe-esta-rota");
      h.eq(inexistente.status, 404, "rota inexistente");
      const html = await (await fetch(base + "/nao-existe-esta-rota")).text();
      h.assert(html.includes("beend.tech"), "a página 404 servida não é a do site");
    });

    await h.test("a home e as rotas principais servem 200 direto", async () => {
      for (const u of ["/", "/contato", "/planos-e-precos", "/teste-gratis", "/blog", "/lp/teste-gratis"]) {
        const r = await pedir(u);
        h.eq(r.status, 200, `${u} deveria servir 200`);
      }
    });
  } finally {
    parar();
    fs.rmSync(prefix, { recursive: true, force: true });
  }
}
