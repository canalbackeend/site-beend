// ==========================================================================
// Prova dos testes (mutation testing).
//
// Reintroduz, um de cada vez, cada bug que já chegou em produção e confirma
// que a suíte FALHA. Um teste que nunca falha não protege nada.
//
//   npm run testes:prova
// ==========================================================================
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";

const RAIZ = path.resolve(import.meta.dirname, "..");
const IGNORAR = new Set(["node_modules", ".git", "producao", ".DS_Store"]);

const VERDE = "\x1b[32m";
const VERMELHO = "\x1b[31m";
const DIM = "\x1b[2m";
const NEGRITO = "\x1b[1m";
const OFF = "\x1b[0m";

/** Cada mutação reintroduz um bug real e diz qual teste deve acusá-lo. */
const MUTACOES = [
  {
    nome: "nginx: 301 volta a ser absoluto (http:// atrás do proxy TLS)",
    arquivo: "deploy/nginx.conf",
    de: "    absolute_redirect off;",
    para: "    absolute_redirect on;",
    teste: "nenhum redirecionamento usa URL absoluta",
  },
  {
    nome: "nginx: arquivos ocultos voltam a ser servidos (.htaccess público)",
    arquivo: "deploy/nginx.conf",
    de: "    location ~ /\\.(?!well-known) { deny all; }",
    para: "    # regra removida",
    teste: "arquivos ocultos e do gerador ficam bloqueados",
  },
  {
    nome: "nginx: arquivo de verificação do Google passa a redirecionar",
    arquivo: "deploy/nginx.conf",
    de: "(?!404\\.html$|google[a-z0-9]+\\.html$)",
    para: "(?!404\\.html$)",
    teste: "o arquivo de verificação do Google é servido, não redirecionado",
  },
  {
    nome: "build: padrão do SITE_URL volta para o domínio antigo",
    arquivo: "build.mjs",
    de: 'url: process.env.SITE_URL || "https://beend.tech"',
    para: 'url: process.env.SITE_URL || "https://www.backeend.com.br"',
    teste: "build sem SITE_URL publica o domínio correto",
  },
  {
    nome: "distribuição: .htaccess do domínio antigo volta a ser publicado",
    arquivo: "tools/make-producao.mjs",
    de: '  "llms-full.txt",\n];',
    para: '  "llms-full.txt",\n  ".htaccess",\n];',
    teste: "arquivos internos e do gerador não vão para produção",
  },
  {
    nome: "build: links internos voltam a usar .html",
    arquivo: "build.mjs",
    de: 'export const prettyPath = (slug = "") => {',
    para: 'export const prettyPath = (slug = "") => {\n  if (String(slug).endsWith(".html")) return "/" + String(slug);',
    teste: "nenhum link ou asset interno usa .html",
  },
  {
    nome: "schema: volta o Product com Offer (erro 'Listagens do comerciante')",
    arquivo: "content/institutional.mjs",
    de: '      brand: { "@type": "Brand", name: "beend.tech" },',
    para: '      brand: { "@type": "Brand", name: "beend.tech" },\n      offers: [{ "@type": "Offer", price: "69.90", priceCurrency: "BRL" }],',
    teste: "nenhuma oferta de produto no schema",
  },
  {
    nome: "sitemap: landing de campanha (noindex) entra no sitemap",
    arquivo: "build.mjs",
    de: 'const sitemapPages = built.filter((p) => !p.noindex && p.slug !== "404.html");',
    para: 'const sitemapPages = built.filter((p) => p.slug !== "404.html");',
    teste: "sitemap lista exatamente as páginas indexáveis",
  },
  {
    nome: "nginx: página canônica do sitemap passa a redirecionar",
    arquivo: "deploy/nginx.conf",
    de: "    location = /index.html { return 301 /; }",
    para: "    location = /index.html { return 301 /; }\n    location = /planos-e-precos { return 301 /planos-e-precos.html; }",
    teste: "toda URL do sitemap responde 200 sem redirecionar",
  },
];

console.log(`\n  ${NEGRITO}Prova dos testes — cada bug conhecido deve fazer a suíte falhar${OFF}\n`);

let falhas = 0;

for (const m of MUTACOES) {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "beend-prova-"));
  try {
    fs.cpSync(RAIZ, tmp, {
      recursive: true,
      filter: (src) => {
        const rel = path.relative(RAIZ, src);
        if (!rel) return true;
        return !IGNORAR.has(rel.split(path.sep)[0]);
      },
    });

    const arquivo = path.join(tmp, m.arquivo);
    const original = fs.readFileSync(arquivo, "utf8");
    if (!original.includes(m.de)) {
      console.log(`  ${VERMELHO}?${OFF} ${m.nome}\n      ${DIM}não consegui aplicar a mutação — o arquivo mudou de forma?${OFF}`);
      falhas++;
      continue;
    }
    fs.writeFileSync(arquivo, original.replace(m.de, m.para));

    const r = spawnSync("node", ["tests/run.mjs"], { cwd: tmp, encoding: "utf8", timeout: 180000 });
    const saida = (r.stdout || "") + (r.stderr || "");
    const detectado = r.status !== 0 && saida.includes(m.teste);

    if (detectado) {
      console.log(`  ${VERDE}✓${OFF} ${m.nome}\n      ${DIM}detectado por: "${m.teste}"${OFF}`);
    } else {
      falhas++;
      console.log(`  ${VERMELHO}✗${OFF} ${m.nome}`);
      console.log(
        `      ${VERMELHO}${
          r.status === 0
            ? "a suíte PASSOU com o bug presente — o teste não protege"
            : `a suíte falhou, mas não pelo teste esperado: "${m.teste}"`
        }${OFF}`
      );
      const linhas = saida.split("\n").filter((l) => l.includes("✗")).slice(0, 4);
      for (const l of linhas) console.log(`      ${DIM}${l.trim()}${OFF}`);
    }
  } finally {
    fs.rmSync(tmp, { recursive: true, force: true });
  }
}

const total = MUTACOES.length;
console.log(
  `\n  ${falhas ? VERMELHO + NEGRITO : VERDE + NEGRITO}${total - falhas}/${total} bugs conhecidos são detectados pela suíte${OFF}\n`
);
process.exit(falhas ? 1 : 0);
