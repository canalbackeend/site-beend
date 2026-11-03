// Monta a pasta "producao/" só com o que vai para produção.
// Uso: node tools/make-dist.mjs   (ou: npm run dist)
import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const OUT = path.join(ROOT, "producao");

// Arquivos da raiz que vão para o servidor
const ROOT_FILES = [
  "robots.txt",
  "sitemap.xml",
  "llms.txt",
  "llms-full.txt",
  ".htaccess",
];

// Pastas copiadas inteiras
const DIRS = ["assets", "blog", "lp"];

fs.rmSync(OUT, { recursive: true, force: true });
fs.mkdirSync(OUT, { recursive: true });

let count = 0;
let bytes = 0;

const size = (p) => fs.statSync(p).size;

function copyFile(src, dest) {
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
  count++;
  bytes += size(dest);
}

// 1) todos os .html da raiz
for (const f of fs.readdirSync(ROOT)) {
  if (f.endsWith(".html")) copyFile(path.join(ROOT, f), path.join(OUT, f));
}

// 2) arquivos soltos (robots, sitemap, llms, .htaccess)
for (const f of ROOT_FILES) {
  const src = path.join(ROOT, f);
  if (fs.existsSync(src)) copyFile(src, path.join(OUT, f));
  else console.log(`  ! ausente: ${f}`);
}

// 3) pastas
function copyDir(from, to) {
  for (const e of fs.readdirSync(from, { withFileTypes: true })) {
    if (e.name.startsWith("_")) continue;
    const s = path.join(from, e.name);
    const d = path.join(to, e.name);
    if (e.isDirectory()) copyDir(s, d);
    else copyFile(s, d);
  }
}
for (const dir of DIRS) {
  const src = path.join(ROOT, dir);
  if (fs.existsSync(src)) copyDir(src, path.join(OUT, dir));
}

console.log(`\n✓ producao/ pronta — ${count} arquivos, ${(bytes / 1048576).toFixed(2)} MB`);
console.log(`  ${OUT}\n`);
console.log("Suba APENAS o conteúdo de producao/ para o servidor.");
