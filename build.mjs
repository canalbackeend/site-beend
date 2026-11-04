import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import { pages } from "./content/index.mjs";

export const SITE = {
  // ── Destino canônico do site ────────────────────────────────────────────
  // Hoje o site é publicado em backeend.com.br (captação de clientes).
  // Quando migrar para beend.tech, troque esta linha por "https://beend.tech".
  // Domínio canônico. Pode ser definido no deploy (Coolify/Docker) via SITE_URL.
  // Ex.: SITE_URL=https://beend.tech npm run build
  url: process.env.SITE_URL || "https://www.backeend.com.br",
  legacyUrl: "https://www.backeend.com.br",
  brand: "beend.tech",
  brandReg: "beend.tech®",
  tagline: "Smart Solution",
  name: "beend.tech",
  legalName: "Backeend Soluções Inteligentes",
  short: "beend.tech",
  phoneDisplay: "(61) 99595-7461",
  phone: "+5561995957461",
  phone2Display: "(61) 99145-9009",
  phone2: "+5561991459009",
  email: "sac@backeend.com.br",
  email2: "canalbackeend@gmail.com",
  supportEmail: "suporte@beend.tech",
  street: "Quadra 305, Conjunto 08",
  district: "Recanto das Emas",
  city: "Brasília",
  region: "DF",
  hours: "Segunda a sexta, das 9h às 18h",
  cnpj: "61.171.282/0001-84",
  founded: "2017-11-28",
  // Área de acesso do cliente (login). Mantido em backeend.com.br.
  login: "https://www.backeend.com.br/cliente/index.php",
  appUrl: "https://www.backeend.com.br/cliente/index.php",
  // Perfis oficiais — ligam a entidade "beend.tech / Backeend" no Google e na IA.
  sameAs: [
    "https://maps.google.com/?cid=12703534258198116818",
    "https://www.linkedin.com/in/beendtech",
  ],
  updated: "2026-11-02",
  // Verificação do Google Search Console (propriedade de prefixo de URL)
  googleVerification: "f5ROYlF53YvWNdg6ypF7XPnlvA7CJj-m908ICZ4aoRI",
  // ── Rastreamento de campanhas (Google Ads / GA4) ─────────────────────────
  // Vazio = nenhum script de terceiros é carregado (site 100% sem cookies).
  // Defina no Coolify:
  //   GADS_ID=AW-123456789  GADS_LABEL=AbC-D_efGhIj  GA4_ID=G-XXXXXXXXXX
  tracking: {
    ads: process.env.GADS_ID || "",
    adsLabel: process.env.GADS_LABEL || "",
    ga4: process.env.GA4_ID || "",
  },
};

const OUT = path.resolve(process.cwd());

// Versão de cache dos assets estáticos: muda quando o arquivo muda.
// Evita que o visitante fique preso na versão antiga do CSS.
function assetVersion(rel) {
  try {
    const p = path.join(OUT, rel);
    return crypto.createHash("sha1").update(fs.readFileSync(p)).digest("hex").slice(0, 8);
  } catch {
    return "1";
  }
}
const CSS_V = assetVersion("assets/css/styles.css");

const wa = (msg = "Olá! Quero um orçamento de totem de pesquisa de satisfação.") =>
  `https://wa.me/${SITE.phone.replace("+", "")}?text=${encodeURIComponent(msg)}`;

// ── URLs amigáveis ────────────────────────────────────────────────────────
// O arquivo continua sendo gerado como "planos-e-precos.html", mas a URL
// pública é "/planos-e-precos" (o nginx resolve com try_files, e as URLs
// .html antigas recebem 301 — ver deploy/nginx.conf).
// O canonical, o sitemap, o JSON-LD e TODOS os links internos usam esta forma.
export const prettyPath = (slug = "") => {
  const [rawPath, hash] = String(slug).split("#");
  let p = rawPath;
  if (p === "index.html" || p === "" || p === "/") p = "";
  else p = p.replace(/\/index\.html$/, "").replace(/\.html$/, "");
  return `/${p}${hash ? `#${hash}` : ""}`;
};

const isExternal = (href = "") => /^(https?:|mailto:|tel:|#)/.test(href);

const NAV = [
  ["Totem de pesquisa", "totem-de-pesquisa-de-satisfacao.html"],
  ["Locação", "locacao-de-totens.html"],
  ["Venda", "venda-de-totens.html"],
  ["Planos", "planos-e-precos.html"],
  ["Conteúdo", "blog/index.html"],
  ["Contato", "contato.html"],
];

const FOOTER_COLS = [
  {
    title: "Soluções",
    links: [
      ["Totem de pesquisa de satisfação", "totem-de-pesquisa-de-satisfacao.html"],
      ["Locação de totens", "locacao-de-totens.html"],
      ["Venda de totens", "venda-de-totens.html"],
      ["Totem de mesa", "totem-de-mesa.html"],
      ["Totem de piso", "totem-de-piso.html"],
    ],
  },
  {
    title: "Canais",
    links: [
      ["Pesquisa por WhatsApp", "pesquisa-de-satisfacao-whatsapp.html"],
      ["Pesquisa por QR Code", "pesquisa-de-satisfacao-qrcode.html"],
      ["Guia de pesquisa de satisfação", "pesquisa-de-satisfacao.html"],
      ["Segmentos atendidos", "segmentos.html"],
      ["Planos e preços", "planos-e-precos.html"],
    ],
  },
  {
    title: "Empresa",
    links: [
      ["Sobre a beend.tech", "sobre.html"],
      ["Conteúdo", "blog/index.html"],
      ["Contato", "contato.html"],
      ["Perguntas frequentes", "totem-de-pesquisa-de-satisfacao.html#faq"],
      ["Acessar o sistema", SITE.login],
    ],
  },
];

const svgCheck = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>`;
const svgWa = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z"/></svg>`;
const svgArrow = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"/></svg>`;

export const esc = (s = "") =>
  String(s).replace(/&(?!(amp|lt|gt|quot|#\d+);)/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export const faqHtml = (faq = []) =>
  faq.length
    ? `<div class="faq-list">${faq
        .map(
          (f, i) => `<details class="faq"${i === 0 ? " open" : ""}>
  <summary>${f.q}</summary>
  <div class="faq__a">${f.a}</div>
</details>`
        )
        .join("\n")}</div>`
    : "";

export const ctaBand = (root) => `<section class="section section--tight" aria-labelledby="cta-title">
  <div class="wrap">
    <div class="cta-band">
      <div>
        <h2 id="cta-title">Quer medir a satisfação no seu ponto de atendimento?</h2>
        <p>Receba uma proposta com modelo de totem, plano de software e prazo de implantação. Atendemos todo o Brasil.</p>
      </div>
      <div class="btn-row">
        <a class="btn btn--wa" href="${wa()}" target="_blank" rel="noopener">${svgWa} Falar no WhatsApp</a>
        <a class="btn btn--on-dark" href="${prettyPath("teste-gratis.html")}">Teste grátis 7 dias</a>
      </div>
    </div>
  </div>
</section>`;

const crumbsHtml = (items, root) =>
  `<nav class="crumbs" aria-label="Você está aqui"><ol>${items
    .map((c, i) =>
      i === items.length - 1
        ? `<li><span aria-current="page">${c.name}</span></li>`
        : `<li><a href="${isExternal(c.href) ? c.href : prettyPath(c.href)}">${c.name}</a></li>`
    )
    .join("")}</ol></nav>`;

function jsonLd(page, canonical) {
  const org = {
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${SITE.url}/#organization`,
    name: SITE.brandReg,
    alternateName: SITE.legalName,
    legalName: SITE.legalName,
    url: `${SITE.url}/`,
    logo: {
      "@type": "ImageObject",
      url: `${SITE.url}/assets/img/logo-512.png`,
      width: 512,
      height: 512,
    },
    image: `${SITE.url}/assets/img/og-default.jpg`,
    description:
      "beend.tech fornece totens e uma plataforma de pesquisa de satisfação do cliente com NPS, CSAT, CES, SMILE e QUIZ, além de coleta por QR Code e WhatsApp e análise de sentimento com IA.",
    slogan: "Smart Solution",
    email: SITE.email,
    telephone: SITE.phone,
    taxID: SITE.cnpj,
    foundingDate: SITE.founded,
    ...(SITE.sameAs.length ? { sameAs: SITE.sameAs } : {}),
    address: {
      "@type": "PostalAddress",
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: "BR",
    },
    areaServed: { "@type": "Country", name: "Brasil" },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: SITE.phone,
        contactType: "sales",
        areaServed: "BR",
        availableLanguage: "Portuguese",
      },
      {
        "@type": "ContactPoint",
        telephone: SITE.phone2,
        contactType: "customer support",
        areaServed: "BR",
        availableLanguage: "Portuguese",
      },
    ],
  };

  const website = {
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: `${SITE.url}/`,
    name: SITE.short,
    inLanguage: "pt-BR",
    publisher: { "@id": `${SITE.url}/#organization` },
  };

  const graph = [org, website];

  if (page.crumbs?.length > 1) {
    graph.push({
      "@type": "BreadcrumbList",
      "@id": `${canonical}#breadcrumb`,
      itemListElement: page.crumbs.map((c, i) => ({
        "@type": "ListItem",
        position: i + 1,
        name: c.name,
        item: c.href ? `${SITE.url}${prettyPath(c.href)}` : canonical,
      })),
    });
  }

  if (page.faq?.length) {
    graph.push({
      "@type": "FAQPage",
      "@id": `${canonical}#faq`,
      mainEntity: page.faq.map((f) => ({
        "@type": "Question",
        name: f.q.replace(/<[^>]+>/g, ""),
        acceptedAnswer: {
          "@type": "Answer",
          text: f.a.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim(),
        },
      })),
    });
  }

  for (const extra of page.schema || []) graph.push(extra);

  return JSON.stringify({ "@context": "https://schema.org", "@graph": graph }, null, 2);
}

function logoMarkup(root, cls = "", link = true) {
  const inner = `<span class="logo__word">${SITE.brand}<span class="logo__reg" aria-hidden="true">®</span></span>
      <span class="logo__sub" aria-hidden="true">${SITE.tagline}</span>`;
  return link
    ? `<a class="logo${cls}" href="/">
      ${inner}
    </a>`
    : `<span class="logo${cls}">${inner}</span>`;
}

function header(active, root) {
  return `<header class="header" data-menu="closed">
  <div class="wrap header__in">
    ${logoMarkup(root)}
    <div class="header__actions">
      <a class="btn btn--ghost btn--sm only-desktop" href="${SITE.login}" rel="noopener">Acessar plataforma</a>
      <a class="btn btn--primary btn--sm" href="${prettyPath("teste-gratis.html")}">Teste grátis</a>
    </div>
    <button class="nav-toggle" type="button" aria-expanded="false" aria-controls="menu-principal" aria-label="Abrir menu">
      <span class="nav-toggle__bars" aria-hidden="true"></span>
    </button>
    <nav class="nav" id="menu-principal" aria-label="Navegação principal">
      <ul>
        ${NAV.map(
          ([label, href]) =>
            `<li><a href="${prettyPath(href)}"${active === href ? ' aria-current="page"' : ""}>${label}</a></li>`
        ).join("\n        ")}
      </ul>
      <div class="nav__foot">
        <a class="btn btn--ghost btn--sm only-mobile" href="${SITE.login}" rel="noopener">Acessar plataforma</a>
      </div>
    </nav>
  </div>
</header>`;
}

function footer(root) {
  return `<footer class="footer">
  <div class="wrap">
    <div class="footer__grid">
      <div>
        ${logoMarkup(root)}
        <p>Totens e plataforma de pesquisa de satisfação do cliente. Coleta por totem, QR Code e WhatsApp, com NPS, CSAT e CES em tempo real.</p>
        <p><strong style="color:#fff">${SITE.legalName}</strong><br>CNPJ ${SITE.cnpj}<br>${SITE.city} — ${SITE.region}</p>
      </div>
      ${FOOTER_COLS.map(
        (col) => `<div>
        <h3>${col.title}</h3>
        <ul>${col.links
          .map(([label, href]) =>
            isExternal(href)
              ? `<li><a href="${href}" target="_blank" rel="noopener">${label}</a></li>`
              : `<li><a href="${prettyPath(href)}">${label}</a></li>`
          )
          .join("")}</ul>
      </div>`
      ).join("\n      ")}
      <div>
        <h3>Contato</h3>
        <ul>
          <li><a href="tel:${SITE.phone}">${SITE.phoneDisplay}</a></li>
          <li><a href="tel:${SITE.phone2}">${SITE.phone2Display}</a></li>
          <li><a href="mailto:${SITE.email}">${SITE.email}</a></li>
          <li>${SITE.hours}</li>
        </ul>
        <p style="margin-top:14px"><a href="${wa()}" target="_blank" rel="noopener">WhatsApp comercial →</a></p>
      </div>
    </div>
    <div class="footer__bottom">
      <span>© ${new Date().getFullYear()} ${SITE.name}. Todos os direitos reservados.</span>
      <span>Conteúdo atualizado em 02/11/2026 · <a href="${prettyPath("politica-de-privacidade.html")}">Privacidade e LGPD</a></span>
    </div>
  </div>
</footer>`;
}

/* ---------- landing page de campanha (sem menu, um único CTA) ---------- */
function lpHeader(root) {
  return `<header class="lp-head">
  <div class="wrap lp-head__in">
    ${logoMarkup(root, "", false)}
    <a class="btn btn--wa btn--sm" href="${wa("Olá! Quero ativar o teste grátis de 7 dias do sistema de pesquisa de satisfação.")}" target="_blank" rel="noopener" data-cta="header">${svgWa} Falar no WhatsApp</a>
  </div>
</header>`;
}

function lpFooter(root) {
  return `<footer class="lp-foot">
  <div class="wrap">
    <p><strong>${SITE.legalName}</strong> · CNPJ ${SITE.cnpj} · ${SITE.city} — ${SITE.region}</p>
    <p class="small">
      <a href="${prettyPath("politica-de-privacidade.html")}">Política de privacidade e LGPD</a> ·
      <a href="/">beend.tech</a> ·
      <a href="tel:${SITE.phone}">${SITE.phoneDisplay}</a>
    </p>
  </div>
</footer>`;
}

/* ---------- rastreamento (só carrega se houver ID configurado) ---------- */
const UI_JS = assetVersion("assets/js/ui.js");
const TRACKING_JS = assetVersion("assets/js/track.js");
const hasTracking = () => Boolean(SITE.tracking.ads || SITE.tracking.ga4);

const trackingSnippet = (root) =>
  !hasTracking()
    ? ""
    : `<script>window.BEEND_TRACKING=${JSON.stringify(SITE.tracking)};</script>
<script src="${root}assets/js/track.js?v=${TRACKING_JS}" defer></script>`;

const resolve = (html, root) =>
  String(html)
    // links internos com {{root}} viram URL amigável absoluta
    .replace(/\{\{root\}\}((?:[a-z0-9][a-z0-9\-_/]*)?\.html)(#[a-z0-9\-_]+)?/gi, (_, p, h) =>
      prettyPath(p + (h || ""))
    )
    .replaceAll("{{root}}", root)
    .replaceAll("{{wa}}", wa())
    .replaceAll("{{phone}}", SITE.phoneDisplay)
    .replaceAll("{{phone2}}", SITE.phone2Display)
    .replaceAll("{{email}}", SITE.email);

export function layout(page) {
  const isBlog = page.slug.startsWith("blog/");
  const isLp = Boolean(page.lp);
  // Páginas em subpasta (blog/, lp/) precisam de "../" para assets e links.
  const root = page.slug.includes("/") ? "../" : "";
  const canonical = `${SITE.url}${prettyPath(page.slug)}`;
  const ogImage = `${SITE.url}/assets/img/og-default.jpg`;

  const crumbs = page.crumbs?.length ? crumbsHtml(page.crumbs, root) : "";
  const pageHero = page.customHero
    ? resolve(page.customHero, root)
    : `<section class="page-hero">
  <div class="wrap">
    ${crumbs}
    ${page.kicker ? `<p class="kicker">${page.kicker}</p>` : ""}
    <h1>${page.h1}</h1>
    <p class="lead">${page.lead}</p>
    ${page.heroExtra ? resolve(page.heroExtra, root) : ""}
  </div>
</section>`;

  const faqSection = page.faq?.length
    ? `<section class="section" id="faq" aria-labelledby="faq-title">
  <div class="wrap">
    <div class="section__head">
      <p class="kicker">Dúvidas</p>
      <h2 id="faq-title">${page.faqTitle || "Perguntas frequentes"}</h2>
    </div>
    ${faqHtml(page.faq.map((f) => ({ ...f, a: resolve(f.a, root) })))}
  </div>
</section>`
    : "";

  const updated = isLp
    ? ""
    : `<div class="wrap"><p class="updated">Conteúdo atualizado em 02/11/2026. ${page.updatedNote || ""}</p></div>`;

  const bodyHtml = `${pageHero}${resolve(page.body, root)}${faqSection}${updated}`;

  const head = `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${page.title}</title>
<meta name="description" content="${page.description}">
<meta name="robots" content="${page.noindex ? "noindex,follow" : "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1"}">
<meta name="author" content="${SITE.name}">
<meta name="google-site-verification" content="${SITE.googleVerification}">
<link rel="canonical" href="${canonical}">
<link rel="alternate" hreflang="pt-BR" href="${canonical}">
<link rel="alternate" hreflang="x-default" href="${canonical}">
<link rel="icon" href="${root}assets/img/favicon.svg" type="image/svg+xml">
<link rel="apple-touch-icon" href="${root}assets/img/apple-touch-icon.png">
<link rel="stylesheet" href="${root}assets/css/styles.css?v=${CSS_V}">
<link rel="alternate" type="text/plain" href="${SITE.url}/llms.txt" title="Resumo para modelos de linguagem">
<meta property="og:type" content="${page.type === "article" ? "article" : "website"}">
<meta property="og:site_name" content="${SITE.short}">
<meta property="og:locale" content="pt_BR">
<meta property="og:title" content="${page.title}">
<meta property="og:description" content="${page.description}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="${ogImage}">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="beend.tech — totens e plataforma de pesquisa de satisfação">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${page.title}">
<meta name="twitter:description" content="${page.description}">
<meta name="twitter:image" content="${ogImage}">
<meta name="theme-color" content="#14161a">
${page.preload ? `<link rel="preload" as="image" href="${root}${page.preload}"${page.preloadSrcset ? ` imagesrcset="${page.preloadSrcset.replaceAll("assets/", root + "assets/")}" imagesizes="${page.preloadSizes}"` : ""} fetchpriority="high">` : ""}
<script type="application/ld+json">
${jsonLd(page, canonical)}
</script>
</head>
<body>
<a class="skip" href="#conteudo">Pular para o conteúdo</a>
${isLp ? lpHeader(root) : header(page.active, root)}
<main id="conteudo">
${bodyHtml}
</main>
${isLp ? "" : ctaBand(root)}
${isLp ? lpFooter(root) : footer(root)}
<noscript><style>.nav{display:block!important}.nav__foot{display:block!important}</style></noscript>
<script>
(function () {
  var header = document.querySelector('.header');
  var btn = document.querySelector('.nav-toggle');
  if (!header || !btn) return;
  function setMenu(open) {
    header.setAttribute('data-menu', open ? 'open' : 'closed');
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    btn.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  }
  btn.addEventListener('click', function () {
    setMenu(header.getAttribute('data-menu') !== 'open');
  });
  header.addEventListener('click', function (e) {
    if (e.target.closest('.nav a')) setMenu(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && header.getAttribute('data-menu') === 'open') { setMenu(false); btn.focus(); }
  });
  window.addEventListener('resize', function () {
    if (window.innerWidth > 900) setMenu(false);
  });
})();
</script>
<script src="${root}assets/js/ui.js?v=${UI_JS}" defer></script>
${trackingSnippet(root)}
</body>
</html>`;

  const dest = path.join(OUT, page.slug);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, head);

  return { ...page, canonical, root, html: head };
}

/* ------------------------------ build ------------------------------ */
const built = pages.map(layout);

const toUrl = (slug) => `${SITE.url}${prettyPath(slug)}`;

const sitemapPages = built.filter((p) => !p.noindex && p.slug !== "404.html");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapPages
  .map(
    (p) => `  <url>
    <loc>${toUrl(p.slug)}</loc>
    <lastmod>${SITE.updated}</lastmod>
    <changefreq>${p.slug === "index.html" ? "weekly" : "monthly"}</changefreq>
    <priority>${p.slug === "index.html" ? "1.0" : p.priority || "0.7"}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;
fs.writeFileSync(path.join(OUT, "sitemap.xml"), sitemap);

const robots = `# robots.txt — beend.tech
# Site: ${SITE.url}

User-agent: *
Allow: /
Disallow: /cliente
Disallow: /app/
Disallow: /totem/
Disallow: /totempro/

# Busca e resposta por IA — permitidos explicitamente
User-agent: GPTBot
Allow: /
Disallow: /cliente

User-agent: OAI-SearchBot
Allow: /
Disallow: /cliente

User-agent: ChatGPT-User
Allow: /

User-agent: PerplexityBot
Allow: /
Disallow: /cliente

User-agent: ClaudeBot
Allow: /
Disallow: /cliente

User-agent: Claude-SearchBot
Allow: /
Disallow: /cliente

User-agent: Claude-User
Allow: /

User-agent: Google-Extended
Allow: /

User-agent: Applebot-Extended
Allow: /

User-agent: CCBot
Allow: /

User-agent: meta-externalagent
Allow: /

Sitemap: ${SITE.url}/sitemap.xml
`;

fs.writeFileSync(path.join(OUT, "robots.txt"), robots);

/* llms.txt — resumo estruturado para agentes */
const primary = built.filter((p) => p.llms?.section === "principal");
const svc = built.filter((p) => p.llms?.section === "servicos");
const guides = built.filter((p) => p.llms?.section === "conteudo");
const inst = built.filter((p) => p.llms?.section === "empresa");

const llmsLines = (list) =>
  list.map((p) => `- [${p.h1.replace(/<[^>]+>/g, "")}](${toUrl(p.slug)}): ${p.llms.summary}`).join("\n");

const llms = `# beend.tech (Backeend Soluções Inteligentes)

> beend.tech é a marca da Backeend Soluções Inteligentes: totens e uma plataforma para medir NPS, CSAT, CES, SMILE e QUIZ no ponto de atendimento, com coleta por totem touch, QR Code e WhatsApp, painel em tempo real e análise de sentimento com IA. Atende empresas de todo o Brasil, com aquisição do equipamento ou locação, e planos de software sob consulta.

## Fatos essenciais

- Empresa: ${SITE.brandReg} — ${SITE.legalName}
- CNPJ: ${SITE.cnpj}
- Fundação: 28/11/2017
- Sede: ${SITE.city} — ${SITE.region}, Brasil
- Atendimento: ${SITE.hours}
- Telefones: ${SITE.phoneDisplay} e ${SITE.phone2Display}
- E-mail: ${SITE.email}
- Modelo comercial: aquisição do equipamento (plano PRO INFINITY, sem mensalidade) ou locação; software em assinatura
- Preço do software: planos publicados a partir de R$ 69,90/mês (Básico), R$ 129,90 (Profissional), R$ 239,90 (Premium) e R$ 389,90 (Master). No anual, dez mensalidades
- Teste grátis: 7 dias, sem cartão de crédito, usando tablet próprio (Android 5.1+)
- Equipamento (totem): contratado separadamente, por aquisição ou locação; valor em proposta
- Canais de coleta: totem touch, QR Code, WhatsApp e tablet próprio (Android 5.1 ou superior)
- Métricas: NPS (Net Promoter Score), CSAT (Customer Satisfaction Score), CES (Customer Effort Score), escala de carinhas (SMILE) e quiz
- Funcionamento offline: o aplicativo armazena as respostas e sincroniza quando a conexão retorna
- Personalização: identidade visual da empresa no totem e nas telas
- Acesso do cliente: ${SITE.login} (painel administrativo, campanhas, terminais, relatórios)
- Perfil no Google: https://maps.google.com/?cid=12703534258198116818

## Recursos do sistema

${[
  "Campanhas NPS, CSAT, SMILE e QUIZ",
  "Feedback dos clientes em tempo real",
  "Relatório diário enviado por e-mail no horário configurado",
  "Terminais online e offline, com sincronização automática",
  "Gestão de perguntas e respostas de forma simples",
  "Pergunta aberta com comentário do cliente",
  "Rotas de resposta em node (fluxo de campanha ramificado)",
  "Vários terminais ao mesmo tempo, de forma geral ou individual",
  "Gráfico de evolução da satisfação",
  "Relatórios por data e horário",
  "Lista de clientes cadastrados (quando o formulário de cadastro está ativo)",
  "Exportação de dados em PDF, Excel e CSV",
  "Gestão de várias campanhas simultâneas",
  "Acesso individual para cada terminal",
  "Análise de sentimento com IA",
]
  .map((f) => `- ${f}`)
  .join("\n")}

## Páginas principais

${llmsLines(primary)}

## Serviços e modelos

${llmsLines(svc)}

## Guias e conteúdo

${llmsLines(guides)}

## Empresa e contato

${llmsLines(inst)}

## Observações para agentes

- O preço do software é público: a partir de R$ 69,90/mês, com teste grátis de 7 dias. O equipamento é contratado separadamente.
- Para orçamentos, o canal mais rápido é o WhatsApp ${SITE.phoneDisplay}.
- O acesso do cliente é feito em ${SITE.login}.
- Conteúdo completo em ${SITE.url}/llms-full.txt
`;

fs.writeFileSync(path.join(OUT, "llms.txt"), llms);

/* llms-full.txt — texto integral das páginas principais */
const strip = (html) =>
  html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<\/(p|div|section|li|h1|h2|h3|h4|tr|summary|details|blockquote)>/gi, "\n")
    .replace(/<br\s*\/?>/gi, "\n")
    .replace(/<[^>]+>/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&nbsp;/g, " ")
    .replace(/[ \t]+/g, " ")
    .replace(/\n{3,}/g, "\n\n")
    .trim();

const full = built
  .filter((p) => !p.noindex)
  .map((p) => {
    const faq = (p.faq || [])
      .map((f) => `## ${f.q}\n${strip(resolve(f.a, p.root))}`)
      .join("\n\n");
    return `# ${p.h1.replace(/<[^>]+>/g, "")}
URL: ${toUrl(p.slug)}

${p.llms?.summary ? p.llms.summary + "\n" : ""}
${strip(resolve(p.body, p.root))}
${faq ? "\n\n## Perguntas frequentes\n\n" + faq : ""}
`;
  })
  .join("\n\n---\n\n");

fs.writeFileSync(
  path.join(OUT, "llms-full.txt"),
  `# beend.tech — conteúdo completo\n\n${full}`
);

console.log(`✓ ${built.length} páginas geradas`);
console.log(`✓ sitemap.xml, robots.txt, llms.txt, llms-full.txt`);
for (const p of built) console.log("  " + p.slug);
