// ==========================================================================
// Preview local das URLs amigáveis — simula as regras do deploy/nginx.conf
// para conferir as rotas sem precisar de docker/nginx na máquina.
//
//   node tools/preview-urls.mjs [porta]
//
// Regras replicadas:
//   0. /services-details.html, /service-details.html, /portfolio-details.html,
//      /index.php → 301 para o destino novo (regras exatas, têm prioridade)
//   1. /index.html                      → 301 /
//   2. /dir/index.html                  → 301 /dir
//   3. /dir/                            → 301 /dir
//   4. /qualquer.html                   → 301 /qualquer   (exceto 404 e google*.html)
//   5. /x                               → x.html
//   6. /dir                             → dir/index.html
//   7. resto                            → 404.html
// ==========================================================================
import http from "node:http";
import fs from "node:fs";
import path from "node:path";

const ROOT = path.resolve(process.cwd(), "producao");
const PORT = Number(process.argv[2] || 8099);

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".webp": "image/webp",
  ".xml": "application/xml",
  ".txt": "text/plain; charset=utf-8",
};

const isFile = (p) => {
  try {
    return fs.statSync(p).isFile();
  } catch {
    return false;
  }
};

function send(res, code, file, extra = {}) {
  const body = fs.readFileSync(file);
  res.writeHead(code, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream", ...extra });
  res.end(body);
}

http
  .createServer((req, res) => {
    const url = new URL(req.url, "http://localhost");
    const p = decodeURIComponent(url.pathname);

    // 0. redirecionamentos legados (location = ... no nginx)
    const LEGACY = {
      "/index.php": "/",
      "/services-details.html": "/totem-de-pesquisa-de-satisfacao",
      "/service-details.html": "/totem-de-pesquisa-de-satisfacao",
      "/portfolio-details.html": "/segmentos",
    };
    if (LEGACY[p]) {
      res.writeHead(301, { Location: LEGACY[p] });
      return res.end();
    }

    // 1. home canônica
    if (p === "/index.html") {
      res.writeHead(301, { Location: "/" });
      return res.end();
    }

    // 2. /dir/index.html → /dir
    const dirIndex = p.match(/^\/(.+)\/index\.html$/);
    if (dirIndex) {
      res.writeHead(301, { Location: "/" + dirIndex[1] });
      return res.end();
    }

    // 3. barra final → sem barra
    const trailing = p.match(/^\/(.+)\/$/);
    if (trailing) {
      res.writeHead(301, { Location: "/" + trailing[1] });
      return res.end();
    }

    // 4. .html antigo → URL amigável (exceções: 404 e google*.html)
    if (/\.html$/.test(p) && !/^\/404\.html$/.test(p) && !/^\/google[a-z0-9]+\.html$/i.test(p)) {
      res.writeHead(301, { Location: p.replace(/\.html$/, "") });
      return res.end();
    }

    // 5/6. try_files $uri → $uri/index.html → $uri.html
    const candidates = [
      path.join(ROOT, p),
      path.join(ROOT, p, "index.html"),
      path.join(ROOT, p + ".html"),
    ];
    for (const c of candidates) {
      if (isFile(c)) return send(res, 200, c);
    }

    // 5. 404
    return send(res, 404, path.join(ROOT, "404.html"));
  })
  .listen(PORT, () => console.log(`preview em http://localhost:${PORT} (raiz: ${ROOT})`));
