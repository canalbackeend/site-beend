/* ==========================================================================
   beend.tech — rastreamento de campanhas (Google Ads / GA4)
   - Não carrega nada de terceiros sem consentimento (LGPD).
   - Só roda quando window.BEEND_TRACKING tem ID configurado.
   Eventos enviados:
     whatsapp_click · cta_click · tel_click · mail_click · form_submit
   ========================================================================== */
(function () {
  "use strict";

  var cfg = window.BEEND_TRACKING || {};
  if (!cfg.ads && !cfg.ga4) return;

  var STORAGE = "beend_consent_v1";
  var started = false;

  function readConsent() {
    try {
      return localStorage.getItem(STORAGE);
    } catch (e) {
      return null;
    }
  }

  function saveConsent(v) {
    try {
      localStorage.setItem(STORAGE, v);
    } catch (e) {}
  }

  /* ---------- carrega o gtag ---------- */
  function boot() {
    if (started) return;
    started = true;

    window.dataLayer = window.dataLayer || [];
    window.gtag =
      window.gtag ||
      function () {
        window.dataLayer.push(arguments);
      };

    var s = document.createElement("script");
    s.async = true;
    s.src =
      "https://www.googletagmanager.com/gtag/js?id=" +
      encodeURIComponent(cfg.ads || cfg.ga4);
    document.head.appendChild(s);

    window.gtag("js", new Date());
    if (cfg.ga4) window.gtag("config", cfg.ga4, { anonymize_ip: true });
    if (cfg.ads) window.gtag("config", cfg.ads);

    bindEvents();
  }

  /* ---------- eventos ---------- */
  function track(name, params) {
    if (!started) return;
    var data = params || {};
    if (cfg.ga4) window.gtag("event", name, data);
    if (cfg.ads && cfg.adsLabel) {
      window.gtag("event", "conversion", {
        send_to: cfg.ads + "/" + cfg.adsLabel,
        value: data.value || 0,
        currency: "BRL",
      });
    }
    // Mantém um rastro local para depuração (Console do navegador).
    if (window.console && console.debug) {
      console.debug("[beend:track]", name, data);
    }
  }

  function bindEvents() {
    document.addEventListener(
      "click",
      function (e) {
        var a = e.target.closest ? e.target.closest("a") : null;
        if (!a) return;
        var href = a.getAttribute("href") || "";

        if (href.indexOf("wa.me") > -1 || href.indexOf("api.whatsapp.com") > -1) {
          track("whatsapp_click", {
            cta: a.getAttribute("data-cta") || "link",
            page: location.pathname,
          });
        } else if (href.indexOf("tel:") === 0) {
          track("tel_click", { page: location.pathname });
        } else if (href.indexOf("mailto:") === 0) {
          track("mail_click", { page: location.pathname });
        } else if (a.hasAttribute("data-cta")) {
          track("cta_click", {
            cta: a.getAttribute("data-cta"),
            page: location.pathname,
          });
        }
      },
      true
    );

    document.addEventListener(
      "submit",
      function (e) {
        if (!e.target || !e.target.id) return;
        var id = e.target.id;
        if (id === "form-orcamento" || id === "lp-form") {
          track("form_submit", { form: id, page: location.pathname });
        }
      },
      true
    );
  }

  /* ---------- banner de consentimento ---------- */
  function banner() {
    var el = document.createElement("div");
    el.className = "consent";
    el.setAttribute("role", "dialog");
    el.setAttribute("aria-label", "Consentimento de cookies");
    el.innerHTML =
      '<p>Usamos cookies para medir o resultado dos anúncios. ' +
      'Nenhum dado é usado para outro fim. ' +
      '<a href="/politica-de-privacidade">Saiba mais</a>.</p>' +
      '<div class="consent__actions">' +
      '<button type="button" class="btn btn--ghost btn--sm" data-consent="no">Recusar</button>' +
      '<button type="button" class="btn btn--primary btn--sm" data-consent="yes">Aceitar</button>' +
      "</div>";
    document.body.appendChild(el);

    el.addEventListener("click", function (e) {
      var b = e.target.closest("[data-consent]");
      if (!b) return;
      var v = b.getAttribute("data-consent");
      saveConsent(v);
      el.remove();
      if (v === "yes") boot();
    });
  }

  /* ---------- início ---------- */
  function init() {
    var consent = readConsent();
    if (consent === "yes") boot();
    else if (consent !== "no") banner();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
