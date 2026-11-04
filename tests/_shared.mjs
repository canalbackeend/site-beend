// ==========================================================================
// Utilitários compartilhados entre as suítes.
// ==========================================================================
import fs from "node:fs";
import path from "node:path";

export const DOMINIO = "https://beend.tech";

/** Todas as páginas do build, com caminho relativo à raiz de producao/. */
export function listarPaginas(dist) {
  const out = [];
  const walk = (dir) => {
    for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
      const p = path.join(dir, e.name);
      if (e.isDirectory()) walk(p);
      else if (e.name.endsWith(".html")) out.push(path.relative(dist, p));
    }
  };
  walk(dist);
  return out.sort();
}

/** "/blog/quanto-custa-....html" → "/blog/quanto-custa-..." (URL pública). */
export function urlPublica(rel) {
  const p = rel.split(path.sep).join("/");
  if (p === "index.html") return "/";
  return "/" + p.replace(/\/index\.html$/, "").replace(/\.html$/, "");
}

/**
 * Referências internas de um HTML: href/src começando com "/", sem
 * fragmento nem query. Ignora absolutas, mailto:, tel: e data:.
 */
export function refsInternas(html) {
  const refs = new Set();
  for (const m of html.matchAll(/(?:href|src)="([^"]+)"/g)) {
    let v = m[1];
    if (!v.startsWith("/")) continue;
    if (v.startsWith("//")) continue;
    v = v.split("#")[0].split("?")[0];
    if (!v) continue;
    refs.add(v.endsWith("/") && v !== "/" ? v.slice(0, -1) : v);
  }
  return [...refs].sort();
}

/** Resolve uma URL pública para o arquivo correspondente no build, ou null. */
export function resolverNoBuild(dist, url) {
  const rel = url.replace(/^\//, "");
  const candidatos = rel === ""
    ? [path.join(dist, "index.html")]
    : [
        path.join(dist, rel),
        path.join(dist, rel + ".html"),
        path.join(dist, rel, "index.html"),
      ];
  for (const c of candidatos) {
    try {
      if (fs.statSync(c).isFile()) return c;
    } catch {
      /* segue */
    }
  }
  return null;
}

/** URLs declaradas no sitemap.xml. */
export function urlsDoSitemap(dist) {
  const xml = fs.readFileSync(path.join(dist, "sitemap.xml"), "utf8");
  return [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
}

/** Objetos de todos os blocos JSON-LD de uma página. */
export function jsonLdDe(html) {
  return [...html.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(
    (m) => JSON.parse(m[1])
  );
}
