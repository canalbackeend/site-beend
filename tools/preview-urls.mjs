// ==========================================================================
// Preview local das URLs amigáveis — simula as regras do deploy/nginx.conf
// para conferir as rotas sem precisar de docker/nginx na máquina.
//
//   node tools/preview-urls.mjs [porta]
//
// Emula a ORDEM de precedência do nginx:
//   1. location = exatas  (legado, /index.html, /blog, /blog/)
//   2. location ~ regex   (/dir/index.html, /*.html)
//   3. location /         try_files $uri $uri/index.html $uri.html =404
//
// E também a semântica de DIRETÓRIO do módulo estático do nginx: um caminho
// que é diretório e não termina em "/" recebe 301 para a versão com barra.
// É justamente esse comportamento que cria laços quando há uma regra
// genérica de "remover barra final".
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

const isFile = (p) => { try { return fs.statSync(p).isFile(); } catch { return false; } };
const isDir = (p) => { try { return fs.statSync(p).isDirectory(); } catch { return false; } };

function send(res, code, file, extra = {}) {
  res.writeHead(code, { "Content-Type": TYPES[path.extname(file)] || "application/octet-stream", ...extra });
  res.end(file ? fs.readFileSync(file) : "");
}
const redirect = (res, to) => { res.writeHead(301, { Location: to }); res.end(); };

http.createServer((req, res) => {
  const p = decodeURIComponent(new URL(req.url, "http://localhost").pathname);

  // ---------- 1. locations exatas ----------
  const LEGACY = {
    "/index.php": "/",
    "/services-details.html": "/totem-de-pesquisa-de-satisfacao",
    "/service-details.html": "/totem-de-pesquisa-de-satisfacao",
    "/portfolio-details.html": "/segmentos",
  };
  if (LEGACY[p]) return redirect(res, LEGACY[p]);
  if (p === "/index.html") return redirect(res, "/");
  if (p === "/blog/") return redirect(res, "/blog");
  if (p === "/blog") {
    const f = path.join(ROOT, "blog/index.html");
    return isFile(f) ? send(res, 200, f) : send(res, 404, path.join(ROOT, "404.html"));
  }

  // ---------- 2. locations regex ----------
  const dirIndex = p.match(/^\/(.+)\/index\.html$/);
  if (dirIndex) return redirect(res, "/" + dirIndex[1]);
  if (/\.html$/.test(p) && !/^\/404\.html$/.test(p) && !/^\/google[a-z0-9]+\.html$/i.test(p)) {
    return redirect(res, p.replace(/\.html$/, ""));
  }

  // ---------- 3. location / (try_files) ----------
  const abs = path.join(ROOT, p);
  // semântica de diretório do nginx: 301 para a versão com barra
  if (isDir(abs)) {
    if (!p.endsWith("/")) return redirect(res, p + "/");
    const idx = path.join(abs, "index.html");
    return isFile(idx) ? send(res, 200, idx) : send(res, 404, path.join(ROOT, "404.html"));
  }
  if (isFile(abs)) return send(res, 200, abs);
  if (isFile(abs + ".html")) return send(res, 200, abs + ".html");

  return send(res, 404, path.join(ROOT, "404.html"));
}).listen(PORT, () => console.log(`preview em http://localhost:${PORT} (raiz: ${ROOT})`));
