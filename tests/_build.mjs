// ==========================================================================
// Build isolado para os testes.
//
// Copia o projeto para uma pasta temporária, gera o site e a pasta
// producao/ SEM a variável SITE_URL. Esse é justamente o cenário que já
// quebrou o canonical uma vez (o padrão antigo apontava para o domínio
// antigo) — por isso o teste sempre roda sem ela.
// ==========================================================================
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { execFileSync } from "node:child_process";

const ROOT = path.resolve(import.meta.dirname, "..");
const IGNORAR = new Set(["node_modules", ".git", "producao", "tests", ".DS_Store", "tmp"]);

export function buildDist() {
  const tmp = fs.mkdtempSync(path.join(os.tmpdir(), "beend-test-"));

  fs.cpSync(ROOT, tmp, {
    recursive: true,
    filter: (src) => {
      const rel = path.relative(ROOT, src);
      if (!rel) return true;
      return !IGNORAR.has(rel.split(path.sep)[0]);
    },
  });

  const env = { ...process.env };
  delete env.SITE_URL; // sempre testa o caminho "sem build-arg"

  const run = (script) =>
    execFileSync("node", [path.join(tmp, script)], { cwd: tmp, env, stdio: "pipe", encoding: "utf8" });

  run("build.mjs");
  run("tools/make-producao.mjs");

  const dist = path.join(tmp, "producao");
  if (!fs.existsSync(dist)) throw new Error("producao/ não foi gerada");

  return {
    tmp,
    dist,
    /** roda um script do projeto dentro da cópia temporária */
    exec: (script) => run(script),
    cleanup: () => fs.rmSync(tmp, { recursive: true, force: true }),
  };
}
