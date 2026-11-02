export const section = ({ id, kicker, title, intro, body, alt = false, tight = false }) => `
<section class="section${alt ? " section--alt" : ""}${tight ? " section--tight" : ""}"${id ? ` id="${id}"` : ""}>
  <div class="wrap">
    ${
      title
        ? `<div class="section__head">
      ${kicker ? `<p class="kicker">${kicker}</p>` : ""}
      <h2>${title}</h2>
      ${intro ? `<p>${intro}</p>` : ""}
    </div>`
        : ""
    }
    ${body}
  </div>
</section>`;

export const answer = (html, label = "Resposta rápida") => `
<div class="answer" role="note" aria-label="${label}">
  ${html}
</div>`;

export const checks = (items) => `<ul class="link-list">${items
  .map((i) => `<li>${i}</li>`)
  .join("")}</ul>`;

export const card = ({ title, text, href, more = "Saiba mais" }) =>
  href
    ? `<a class="card card--link" href="${href}">
  <h3>${title}</h3>
  <p>${text}</p>
  <span class="card__more">${more}</span>
</a>`
    : `<div class="card"><h3>${title}</h3><p>${text}</p></div>`;
