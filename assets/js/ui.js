/* ==========================================================================
   beend.tech — utilidades de interface (sem dependências)
   - Máscara de telefone em campos com [data-mask="phone"]
   - Mantém o cursor no fim enquanto o usuário digita
   ========================================================================== */
(function () {
  "use strict";

  function onlyDigits(v) {
    return String(v || "").replace(/\D+/g, "");
  }

  function formatPhone(digits) {
    var d = digits.slice(0, 11);
    if (d.length === 0) return "";
    if (d.length <= 2) return "(" + d;
    if (d.length <= 6) return "(" + d.slice(0, 2) + ") " + d.slice(2);
    if (d.length <= 10)
      return "(" + d.slice(0, 2) + ") " + d.slice(2, 6) + "-" + d.slice(6);
    return "(" + d.slice(0, 2) + ") " + d.slice(2, 7) + "-" + d.slice(7);
  }

  function applyMask(input) {
    function handler(e) {
      var d = onlyDigits(input.value);
      var masked = formatPhone(d);
      if (input.value !== masked) input.value = masked;
      // Evento 'input' é essencial para máscaras.
      if (e && e.type === "input") return;
    }
    input.addEventListener("input", handler);
    input.addEventListener("blur", function () {
      input.value = formatPhone(onlyDigits(input.value));
    });
    // Normaliza valor inicial (ex.: autofill do navegador).
    if (input.value) input.value = formatPhone(onlyDigits(input.value));
  }

  function init() {
    var fields = document.querySelectorAll('[data-mask="phone"]');
    for (var i = 0; i < fields.length; i++) applyMask(fields[i]);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
