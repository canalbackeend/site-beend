import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(".");
const pages = [];
function walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.name.startsWith("_")) continue; // arquivos de apoio (_redirects, testes)
    if (e.isDirectory()) {
      if (["assets", "node_modules", ".git", "producao"].includes(e.name)) continue;
      walk(p);
    } else if (/^google[a-z0-9]+\.html$/i.test(e.name)) {
      continue; // arquivo de verificação do Google Search Console
    } else if (e.name.endsWith(".html")) pages.push(p);
  }
}
walk(ROOT);

let errors = 0;
const warn = (m) => { errors++; console.log("  ✗ " + m); };
const ok = [];

for (const file of pages) {
  const rel = path.relative(ROOT, file);
  const html = fs.readFileSync(file, "utf8");
  const problems = [];

  // title / description
  const title = (html.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || "";
  const desc = (html.match(/<meta name="description" content="([^"]*)"/) || [])[1] || "";
  if (!title) problems.push("sem <title>");
  if (title.length > 65) problems.push(`title com ${title.length} caracteres`);
  if (!desc) problems.push("sem meta description");
  if (desc.length > 165) problems.push(`description com ${desc.length} caracteres`);
  if (desc.length < 70) problems.push(`description curta (${desc.length})`);

  // h1
  const h1s = [...html.matchAll(/<h1[^>]*>([\s\S]*?)<\/h1>/g)];
  if (h1s.length !== 1) problems.push(`${h1s.length} H1`);

  // heading order
  const heads = [...html.matchAll(/<h([1-4])[^>]*>/g)].map((m) => +m[1]);
  let prev = 0;
  for (const h of heads) {
    if (prev && h > prev + 1) problems.push(`salto de h${prev} para h${h}`);
    prev = h;
  }

  // duplicate ids
  const ids = [...html.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]);
  const dup = ids.filter((v, i) => ids.indexOf(v) !== i);
  if (dup.length) problems.push("ids duplicados: " + [...new Set(dup)].join(", "));

  // images
  const imgs = [...html.matchAll(/<img\b[^>]*>/g)].map((m) => m[0]);
  for (const img of imgs) {
    if (!/\balt="/.test(img)) problems.push("img sem alt");
    if (!/\bwidth="/.test(img) || !/\bheight="/.test(img)) problems.push("img sem width/height");
    if (!/\bloading="/.test(img) && !/fetchpriority="high"/.test(img)) problems.push("img sem loading/fetchpriority");
  }

  // links + assets
  const hrefs = [...html.matchAll(/(?:href|src)="([^"]+)"/g)].map((m) => m[1]);
  for (const h of hrefs) {
    if (/^(https?:|mailto:|tel:|#|\{\{)/.test(h)) continue;
    const target = path.resolve(path.dirname(file), h.split("#")[0].split("?")[0]);
    if (!fs.existsSync(target)) problems.push("link quebrado: " + h);
  }

  // json-ld
  const blocks = [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  for (const b of blocks) {
    try { JSON.parse(b[1]); } catch (e) { problems.push("JSON-LD inválido: " + e.message); }
  }

  if (problems.length) {
    console.log(`\n${rel}`);
    for (const p of [...new Set(problems)]) warn(p);
  } else {
    ok.push(rel);
  }
}

console.log(`\n${ok.length}/${pages.length} páginas sem problemas.`);
if (errors) process.exitCode = 1;
