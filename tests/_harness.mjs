// ==========================================================================
// Harness mínimo de testes (sem dependências).
// ==========================================================================

const GREEN = "\x1b[32m";
const RED = "\x1b[31m";
const DIM = "\x1b[2m";
const BOLD = "\x1b[1m";
const OFF = "\x1b[0m";

export function createHarness() {
  const results = [];

  const api = {
    results,

    /** Registra e executa um teste. Falha = exceção. */
    async test(name, fn) {
      const t0 = Date.now();
      try {
        await fn();
        results.push({ name, ok: true, ms: Date.now() - t0 });
        console.log(`  ${GREEN}✓${OFF} ${name} ${DIM}(${Date.now() - t0}ms)${OFF}`);
      } catch (e) {
        const msg = e && e.message ? e.message : String(e);
        results.push({ name, ok: false, ms: Date.now() - t0, err: msg });
        console.log(`  ${RED}✗${OFF} ${name}`);
        console.log(`      ${RED}${msg.split("\n").join("\n      ")}${OFF}`);
      }
    },

    skip(name, why = "") {
      results.push({ name, ok: true, skipped: why });
      console.log(`  ${DIM}• ${name} — pulado${why ? `: ${why}` : ""}${OFF}`);
    },

    section(title) {
      console.log(`\n${BOLD}▶ ${title}${OFF}`);
    },

    assert(cond, msg) {
      if (!cond) throw new Error(msg);
    },

    eq(got, want, what) {
      if (got !== want) {
        throw new Error(`${what}\n      esperado: ${want}\n      obtido:   ${got}`);
      }
    },

    /** Falha listando os itens, quando houver. */
    assertEmpty(items, what, limit = 8) {
      if (!items.length) return;
      const shown = items.slice(0, limit).map((i) => `      • ${i}`).join("\n");
      const rest = items.length > limit ? `\n      … e mais ${items.length - limit}` : "";
      throw new Error(`${what} (${items.length})\n${shown}${rest}`);
    },
  };

  api.report = () => {
    const failed = results.filter((r) => !r.ok);
    const passed = results.filter((r) => r.ok && !r.skipped).length;
    const skipped = results.filter((r) => r.skipped).length;
    console.log(
      `\n  ${failed.length ? RED + BOLD : GREEN + BOLD}${passed} passaram` +
        `${skipped ? `, ${skipped} pulados` : ""}${failed.length ? `, ${failed.length} falharam` : ""}${OFF}`
    );
    if (failed.length) {
      console.log(`\n${RED}Falhas:${OFF}`);
      for (const f of failed) console.log(`  ${RED}✗${OFF} ${f.name}`);
    }
    console.log("");
    return failed.length;
  };

  return api;
}
