/* =========================================================================
   Imagens de compartilhamento (Open Graph / Twitter / schema Article).

   Cada página com imagem própria aponta para um JPEG 1200×630 em
   assets/img/og/. O formato JPEG é o que WhatsApp, LinkedIn, Facebook e X
   aceitam sem risco (WebP ainda não é universal nesses rastreadores).

   O build usa este mapa para og:image, twitter:image e para o campo
   "image" do Article. O sitemap de imagens é gerado à parte, lendo o HTML.
   ========================================================================= */

const img = (arquivo, alt) => ({
  src: `assets/img/og/${arquivo}.jpg`,
  alt,
  width: 1200,
  height: 630,
});

export const ogImages = {
  // ── artigos do blog ────────────────────────────────────────────────────
  "blog/o-que-e-nps.html": img(
    "o-que-e-nps",
    "Painel com gráfico de barras e anotações sobre uma mesa de trabalho"
  ),
  "blog/o-que-e-csat.html": img(
    "o-que-e-csat",
    "Atendente sorrindo com headset em um escritório"
  ),
  "blog/nps-ou-csat-qual-escolher.html": img(
    "nps-ou-csat-qual-escolher",
    "Duas pessoas fechando um acordo com aperto de mão"
  ),
  "blog/o-que-e-ces-customer-effort-score.html": img(
    "o-que-e-ces-customer-effort-score",
    "Pessoa com headset de atendimento em primeiro plano"
  ),
  "blog/como-aumentar-taxa-de-resposta.html": img(
    "como-aumentar-taxa-de-resposta",
    "Atendente conversando com cliente no caixa de uma loja"
  ),
  "blog/perguntas-para-pesquisa-de-satisfacao.html": img(
    "perguntas-para-pesquisa-de-satisfacao",
    "Mãos escrevendo perguntas em formulários de papel sobre a mesa"
  ),
  "blog/benchmark-de-nps.html": img(
    "benchmark-de-nps",
    "Equipe analisando gráficos impressos em uma reunião"
  ),
  "blog/relatorio-de-pesquisa-de-satisfacao.html": img(
    "relatorio-de-pesquisa-de-satisfacao",
    "Pessoa apontando caneta para um relatório com gráficos"
  ),
  "blog/quanto-custa-totem-de-pesquisa-de-satisfacao.html": img(
    "quanto-custa-totem-de-pesquisa-de-satisfacao",
    "Pessoas usando calculadora e notebook em uma mesa de trabalho"
  ),
  "blog/totem-de-pesquisa-funciona-sem-internet.html": img(
    "totem-de-pesquisa-funciona-sem-internet",
    "Pessoa usando um tablet apoiado no colo"
  ),
  "blog/erros-ao-instalar-totem-de-pesquisa.html": img(
    "erros-ao-instalar-totem-de-pesquisa",
    "Interior de loja de roupas com araras organizadas"
  ),
  "pesquisa-de-satisfacao-whatsapp.html": img(
    "pesquisa-de-satisfacao-whatsapp",
    "Pessoa usando o celular para navegar em redes sociais"
  ),

  // ── páginas de segmento ────────────────────────────────────────────────
  "pesquisa-de-satisfacao-para-farmacias.html": img(
    "farmacias",
    "Entrada de uma farmácia de rua vista da calçada"
  ),
  "pesquisa-de-satisfacao-para-clinicas.html": img(
    "clinicas",
    "Dentista conversando com a paciente na sala de atendimento"
  ),
  "pesquisa-de-satisfacao-para-restaurantes.html": img(
    "restaurantes",
    "Salão de restaurante com balcão e mesas ao fundo"
  ),
  "pesquisa-de-satisfacao-para-varejo.html": img(
    "varejo",
    "Cliente escolhendo roupas em uma loja"
  ),
  "pesquisa-de-satisfacao-para-academias.html": img(
    "academias",
    "Pessoa levantando barra de peso na academia"
  ),
  "pesquisa-de-satisfacao-para-concessionarias.html": img(
    "concessionarias",
    "Carro azul antigo à venda em um pátio"
  ),
  "pesquisa-de-satisfacao-para-shoppings.html": img(
    "shoppings",
    "Corredor de shopping com escadas rolantes e lojas"
  ),
  "pesquisa-de-satisfacao-para-eventos.html": img(
    "eventos",
    "Plateia de um evento com as mãos levantadas"
  ),
  "pesquisa-de-satisfacao-para-orgaos-publicos.html": img(
    "orgaos-publicos",
    "Salão amplo de biblioteca pública com mesas e pessoas estudando"
  ),
};

export const ogImageFor = (slug) => ogImages[slug] || null;
