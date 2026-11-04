// ==========================================================================
// Suíte estática — roda sobre o site gerado (dist), sem servidor.
// Cobre as regressões que já aconteceram: domínio errado no canonical,
// links .html, schema de comerciante, arquivos internos publicados.
// ==========================================================================
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import {
  DOMINIO,
  listarPaginas,
  urlPublica,
  refsInternas,
  resolverNoBuild,
  urlsDoSitemap,
  jsonLdDe,
} from "./_shared.mjs";

const PAGINAS_ESPERADAS = [
  "404.html",
  "index.html",
  "contato.html",
  "locacao-de-totens.html",
  "pesquisa-de-satisfacao-qrcode.html",
  "pesquisa-de-satisfacao-whatsapp.html",
  "pesquisa-de-satisfacao.html",
  "planos-e-precos.html",
  "politica-de-privacidade.html",
  "segmentos.html",
  "sobre.html",
  "teste-gratis.html",
  "totem-de-mesa.html",
  "totem-de-pesquisa-de-satisfacao.html",
  "totem-de-piso.html",
  "venda-de-totens.html",
  "lp/teste-gratis.html",
  "blog/index.html",
  "blog/benchmark-de-nps.html",
  "blog/como-aumentar-taxa-de-resposta.html",
  "blog/erros-ao-instalar-totem-de-pesquisa.html",
  "blog/nps-ou-csat-qual-escolher.html",
  "blog/o-que-e-ces-customer-effort-score.html",
  "blog/o-que-e-csat.html",
  "blog/o-que-e-nps.html",
  "blog/perguntas-para-pesquisa-de-satisfacao.html",
  "blog/quanto-custa-totem-de-pesquisa-de-satisfacao.html",
  "blog/relatorio-de-pesquisa-de-satisfacao.html",
  "blog/totem-de-pesquisa-funciona-sem-internet.html",
];

export default async function siteSuite(h, ctx) {
  const { dist } = ctx;
  const ler = (rel) => fs.readFileSync(path.join(dist, rel), "utf8");
  const paginas = listarPaginas(dist);
  const conteudo = new Map(paginas.map((p) => [p, ler(p)]));

  h.section("site gerado");

  await h.test("todas as páginas esperadas estão no build", () => {
    const faltando = PAGINAS_ESPERADAS.filter((p) => !fs.existsSync(path.join(dist, p)));
    h.assertEmpty(faltando, "páginas ausentes");
    const extra = paginas.filter((p) => !PAGINAS_ESPERADAS.includes(p) && !/^google[a-z0-9]+\.html$/i.test(p));
    h.assertEmpty(extra, "páginas não previstas (atualize a lista se for intencional)");
  });

  await h.test("build sem SITE_URL publica o domínio correto", () => {
    const home = conteudo.get("index.html");
    const canonical = (home.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
    h.eq(canonical, `${DOMINIO}/`, "canonical da home");
    const og = (home.match(/<meta property="og:url" content="([^"]+)"/) || [])[1];
    h.eq(og, `${DOMINIO}/`, "og:url da home");
    const primeira = urlsDoSitemap(dist)[0];
    h.eq(primeira, `${DOMINIO}/`, "primeira URL do sitemap");
  });

  await h.test("nenhuma página publica o domínio antigo como canônico", () => {
    const problemas = [];
    for (const [rel, html] of conteudo) {
      const canon = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1] || "";
      if (canon.includes("backeend.com.br")) problemas.push(`${rel} → ${canon}`);
      if (/<meta property="og:url" content="[^"]*backeend\.com\.br/.test(html)) problemas.push(`${rel} → og:url antigo`);
    }
    h.assertEmpty(problemas, "canonical/og:url no domínio antigo");
  });

  await h.test("canonical de cada página bate com a própria URL", () => {
    const problemas = [];
    for (const [rel, html] of conteudo) {
      if (rel === "404.html" || rel.startsWith("lp/") || /^google[a-z0-9]+\.html$/i.test(rel)) continue;
      const esperado = `${DOMINIO}${urlPublica(rel)}`;
      const canon = (html.match(/<link rel="canonical" href="([^"]+)"/) || [])[1];
      if (canon !== esperado) problemas.push(`${rel}: esperado ${esperado}, obtido ${canon}`);
    }
    h.assertEmpty(problemas, "canonical divergente");
  });

  await h.test("sitemap lista exatamente as páginas indexáveis", () => {
    const indexaveis = paginas
      .filter((p) => p !== "404.html" && !p.startsWith("lp/") && !/^google[a-z0-9]+\.html$/i.test(p))
      .map((p) => `${DOMINIO}${urlPublica(p)}`)
      .sort();
    const noSitemap = [...urlsDoSitemap(dist)].sort();
    h.eq(noSitemap.length, indexaveis.length, "quantidade de URLs no sitemap");
    const diff = noSitemap.filter((u) => !indexaveis.includes(u));
    h.assertEmpty(diff, "URLs no sitemap que não correspondem a páginas indexáveis");
  });

  await h.test("nenhum link ou asset interno usa .html", () => {
    const problemas = [];
    for (const [rel, html] of conteudo) {
      for (const r of refsInternas(html)) {
        if (r.endsWith(".html") && !/^\/google[a-z0-9]+\.html$/i.test(r) && r !== "/404.html") {
          problemas.push(`${rel} → ${r}`);
        }
      }
    }
    h.assertEmpty(problemas, "links internos com .html");
  });

  await h.test("nenhum placeholder de template sobrou", () => {
    const problemas = [];
    for (const [rel, html] of conteudo) {
      for (const ph of ["{{root}}", "{{wa}}", "{{phone}}", "{{phone2}}", "{{email}}"]) {
        if (html.includes(ph)) problemas.push(`${rel} contém ${ph}`);
      }
    }
    h.assertEmpty(problemas, "placeholders não resolvidos");
  });

  await h.test("todo JSON-LD é JSON válido", () => {
    const problemas = [];
    for (const [rel, html] of conteudo) {
      try {
        jsonLdDe(html);
      } catch (e) {
        problemas.push(`${rel}: ${e.message}`);
      }
    }
    h.assertEmpty(problemas, "blocos JSON-LD inválidos");
  });

  await h.test("nenhuma oferta de produto no schema (Listagens do comerciante)", () => {
    const problemas = [];
    for (const [rel, html] of conteudo) {
      if (!html.includes("application/ld+json")) continue;
      for (const bloco of jsonLdDe(html)) {
        const fila = [...(bloco["@graph"] || [bloco])];
        while (fila.length) {
          const n = fila.pop();
          if (!n || typeof n !== "object") continue;
          const tipos = [].concat(n["@type"] || []);
          if (tipos.includes("Offer")) problemas.push(`${rel}: Offer`);
          if (tipos.includes("Product") && n.offers) problemas.push(`${rel}: Product com offers`);
          for (const v of Object.values(n)) {
            if (v && typeof v === "object") fila.push(...(Array.isArray(v) ? v : [v]));
          }
        }
      }
    }
    h.assertEmpty(problemas, "schema que dispara 'Listagens do comerciante'");
  });

  await h.test("arquivos internos e do gerador não vão para produção", () => {
    const proibidos = [
      ".htaccess",
      "Dockerfile",
      "package.json",
      "CHECKLIST-FINAL.md",
      "deploy/nginx.conf",
      "content/index.mjs",
      "tools/check.mjs",
      "build.mjs",
    ];
    const presentes = proibidos.filter((p) => fs.existsSync(path.join(dist, p)));
    h.assertEmpty(presentes, "arquivos internos publicados");
  });

  await h.test("todo link e asset interno resolve para um arquivo do build", () => {
    const problemas = [];
    const vistos = new Set();
    for (const [rel, html] of conteudo) {
      for (const r of refsInternas(html)) {
        if (vistos.has(r)) continue;
        vistos.add(r);
        if (!resolverNoBuild(dist, r)) problemas.push(`${r} (referenciado por ${rel})`);
      }
    }
    h.assertEmpty(problemas, "referências internas quebradas");
  });

  await h.test("a landing de campanha está noindex e fora do sitemap", () => {
    const lp = conteudo.get("lp/teste-gratis.html");
    h.assert(lp, "lp/teste-gratis.html não existe");
    h.assert(/name="robots" content="noindex/.test(lp), "a landing não está noindex");
    const noSitemap = urlsDoSitemap(dist).some((u) => u.includes("/lp/"));
    h.assert(!noSitemap, "a landing apareceu no sitemap");
  });

  await h.test("toda imagem tem atributo alt", () => {
    const problemas = [];
    for (const [rel, html] of conteudo) {
      for (const m of html.matchAll(/<img\b[^>]*>/g)) {
        if (!/\balt=/.test(m[0])) problemas.push(`${rel}: ${m[0].slice(0, 70)}`);
      }
    }
    h.assertEmpty(problemas, "imagens sem alt");
  });

  await h.test("nenhuma dependência externa de fonte ou script", () => {
    const problemas = [];
    const css = fs.readFileSync(path.join(dist, "assets/css/styles.css"), "utf8");
    if (/fonts\.(googleapis|gstatic)/.test(css)) problemas.push("CSS referencia Google Fonts");
    if (/@import\s+url\(\s*['"]?https?:/i.test(css)) problemas.push("CSS importa folha externa");
    for (const [rel, html] of conteudo) {
      if (/<link[^>]+rel="stylesheet"[^>]+href="https?:/.test(html)) problemas.push(`${rel}: folha de estilo externa`);
      if (/<script[^>]+src="https?:/.test(html)) problemas.push(`${rel}: script externo`);
    }
    h.assertEmpty(problemas, "dependências externas");
  });

  await h.test("llms.txt e llms-full.txt existem e usam o domínio correto", () => {
    for (const f of ["llms.txt", "llms-full.txt"]) {
      const p = path.join(dist, f);
      h.assert(fs.existsSync(p), `${f} não existe`);
      const txt = fs.readFileSync(p, "utf8");
      h.assert(txt.includes(DOMINIO), `${f} não menciona ${DOMINIO}`);
      // e-mails e a área do cliente (que fica no domínio antigo) são legítimos;
      // qualquer outra URL para o domínio antigo, não.
      const limpo = txt
        .replace(/[\w.+-]+@[\w.-]+/g, "")
        .replace(/https:\/\/www\.backeend\.com\.br\/cliente[\w./?=-]*/g, "");
      h.assert(!limpo.includes("backeend.com.br"), `${f} aponta para o domínio antigo`);
    }
  });

  await h.test("e-mail e nome da empresa são os atuais em todo o site", () => {
    const antigos = [
      { rotulo: "sac@backeend.com.br", re: /sac@backeend\.com\.br/ },
      { rotulo: "Backeend Soluções Inteligentes", re: /Backeend Soluções Inteligentes/ },
    ];
    const problemas = [];
    for (const { rotulo, re } of antigos) {
      for (const [rel, html] of conteudo) if (re.test(html)) problemas.push(`${rel}: ${rotulo}`);
      for (const f of ["llms.txt", "llms-full.txt"]) {
        if (re.test(fs.readFileSync(path.join(dist, f), "utf8"))) problemas.push(`${f}: ${rotulo}`);
      }
    }
    h.assertEmpty(problemas, "textos antigos ainda publicados");

    const home = conteudo.get("index.html");
    h.assert(home.includes("beendtech@gmail.com"), "a home não mostra beendtech@gmail.com");
    h.assert(home.includes("Beend.tech Smart Solution"), "a home não mostra Beend.tech Smart Solution");
  });

  await h.test("robots.txt bloqueia a área do cliente e libera bots de IA", () => {
    const robots = fs.readFileSync(path.join(dist, "robots.txt"), "utf8");
    h.assert(/Disallow: \/cliente/.test(robots), "não bloqueia /cliente");
    for (const bot of ["GPTBot", "PerplexityBot", "ClaudeBot", "Google-Extended"]) {
      h.assert(robots.includes(bot), `não permite ${bot}`);
    }
    h.assert(robots.includes(`${DOMINIO}/sitemap.xml`), "sitemap não declarado no robots");
  });

  await h.test("linter de SEO do projeto passa (tools/check.mjs)", () => {
    let saida = "";
    try {
      saida = execFileSync("node", [path.join(ctx.tmp, "tools/check.mjs")], {
        cwd: ctx.tmp,
        encoding: "utf8",
      });
    } catch (e) {
      saida = String(e.stdout || "") + String(e.stderr || "");
    }
    const falhas = saida.split("\n").filter((l) => l.includes("✗"));
    h.assertEmpty(falhas, "apontamentos do linter de SEO");
  });
}
