// ==========================================================================
// Runner de testes — sem dependências externas.
//
//   npm test                 roda tudo (inclui nginx real, se instalado)
//   node tests/run.mjs --no-nginx   pula a suíte de nginx
// ==========================================================================
import { createHarness } from "./_harness.mjs";
import { buildDist } from "./_build.mjs";
import siteSuite from "./site.spec.mjs";
import nginxSuite from "./nginx.spec.mjs";

const skipNginx = process.argv.includes("--no-nginx");
const h = createHarness();

console.log("\n  beend.tech — testes\n");

/* ---------- preparação: build limpo em pasta temporária ---------- */
let ctx = null;
await h.test("build limpo (sem SITE_URL) em pasta temporária", async () => {
  ctx = buildDist();
  h.assert(ctx.dist.endsWith("producao"), "pasta de produção não foi gerada");
});

if (ctx) {
  try {
    await siteSuite(h, ctx);
    if (skipNginx) h.skip("suíte nginx", "pulado com --no-nginx");
    else await nginxSuite(h, ctx);
  } finally {
    ctx.cleanup();
  }
} else {
  h.skip("demais suítes", "o build falhou");
}

const failures = h.report();
process.exit(failures ? 1 : 0);
