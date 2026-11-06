/* ==========================================================================
   beend.tech — utilidades de interface (sem dependências)
   - Máscaras em campos com [data-mask="phone" | "cnpj" | "cep"]
   - Mantém o cursor no fim enquanto o usuário digita
   ========================================================================== */
(function () {
  "use strict";

  function onlyDigits(v) {
    return String(v || "").replace(/\D+/g, "");
  }

  function formatPhone(input) {
    var d = input.slice(0, 11);
    if (d.length === 0) return "";
    if (d.length <= 2) return "(" + d;
    if (d.length <= 6) return "(" + d.slice(0, 2) + ") " + d.slice(2);
    if (d.length <= 10)
      return "(" + d.slice(0, 2) + ") " + d.slice(2, 6) + "-" + d.slice(6);
    return "(" + d.slice(0, 2) + ") " + d.slice(2, 7) + "-" + d.slice(7);
  }

  // 00.000.000/0000-00
  function formatCnpj(input) {
    var d = input.slice(0, 14);
    if (d.length === 0) return "";
    if (d.length <= 2) return d;
    if (d.length <= 5) return d.slice(0, 2) + "." + d.slice(2);
    if (d.length <= 8) return d.slice(0, 2) + "." + d.slice(2, 5) + "." + d.slice(5);
    if (d.length <= 12)
      return d.slice(0, 2) + "." + d.slice(2, 5) + "." + d.slice(5, 8) + "/" + d.slice(8);
    return (
      d.slice(0, 2) + "." + d.slice(2, 5) + "." + d.slice(5, 8) + "/" +
      d.slice(8, 12) + "-" + d.slice(12)
    );
  }

  // 00000-000
  function formatCep(input) {
    var d = input.slice(0, 8);
    if (d.length === 0) return "";
    if (d.length <= 5) return d;
    return d.slice(0, 5) + "-" + d.slice(5);
  }

  var FORMATTERS = {
    phone: formatPhone,
    cnpj: formatCnpj,
    cep: formatCep,
  };

  function applyMask(input, format) {
    function handler() {
      var masked = format(onlyDigits(input.value));
      if (input.value !== masked) input.value = masked;
    }
    input.addEventListener("input", handler);
    input.addEventListener("blur", handler);
    // Normaliza valor inicial (ex.: autofill do navegador).
    if (input.value) input.value = format(onlyDigits(input.value));
  }

  function init() {
    var fields = document.querySelectorAll("[data-mask]");
    for (var i = 0; i < fields.length; i++) {
      var format = FORMATTERS[fields[i].getAttribute("data-mask")];
      if (format) applyMask(fields[i], format);
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();