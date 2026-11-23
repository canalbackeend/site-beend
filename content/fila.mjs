import { section, answer, card } from "./_ui.mjs";

/* =========================================================================
   Beend Fila — controle de fila e senhas (produto separado da pesquisa).
   Sistema em https://fila.beend.tech. Preços ainda sob consulta: o CTA
   principal é o orçamento pelo WhatsApp.
   ========================================================================= */

export const FILA_APP = "https://fila.beend.tech/entrar";

const waFila = (msg) => `https://wa.me/{{waNumber}}?text=${encodeURIComponent(msg)}`;
const WA_ORCAMENTO = waFila("Olá! Quero um orçamento do sistema de controle de fila e senhas (Beend Fila).");
const WA_DEMO = waFila("Olá! Quero ver uma demonstração do Beend Fila (controle de fila e senhas).");

const svgWa = `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.15h-.01a8.2 8.2 0 0 1-4.19-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.24 8.23Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.38.11-.5.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.85-.86 2.07s.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z"/></svg>`;

const heroExtra = `<div class="btn-row" style="margin-top:22px">
  <a class="btn btn--wa" href="${WA_ORCAMENTO}" target="_blank" rel="noopener">${svgWa} Pedir orçamento no WhatsApp</a>
  <a class="btn btn--ghost" href="${WA_DEMO}" target="_blank" rel="noopener">Agendar demonstração</a>
</div>
<ul class="pill-row" style="margin-top:18px">
  <li class="pill">Senha impressa e no celular</li>
  <li class="pill">Painel de TV</li>
  <li class="pill">Prioridades legais</li>
  <li class="pill">Relatórios de espera</li>
</ul>`;

const resumo = `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>O Beend Fila organiza o atendimento ao público do começo ao fim:</strong> o cliente retira a senha no totem (impressa e com QR Code), acompanha a fila pelo celular e é chamado no painel de TV, com alerta sonoro. O atendente chama, encaminha e finaliza cada senha em um painel no navegador.</p>
      <p>É indicado para clínicas, laboratórios, cartórios, balcões de atendimento e qualquer recepção com espera. Funciona em totem touch, TV com TV box ou mini PC, e no computador da recepção, sem instalar programas.</p>
    `)}
    <figure class="figure" style="margin:28px 0 0">
      <img src="{{root}}assets/img/opt/fila-conjunto-900.webp" srcset="{{root}}assets/img/opt/fila-conjunto-900.webp 900w, {{root}}assets/img/opt/fila-conjunto.webp 1600w" sizes="(max-width:900px) 100vw, 1160px" width="1600" height="1000" fetchpriority="high" decoding="async"
           alt="Painel de TV chamando a senha R001, totem com a senha emitida e QR Code, e celular acompanhando a senha T002">
      <figcaption>Painel de TV, totem de senha e acompanhamento no celular, todos ligados ao mesmo sistema em tempo real.</figcaption>
    </figure>
  </div>
</section>`;

const comoFunciona = section({
  kicker: "Como funciona",
  title: "Da retirada da senha ao fim do atendimento",
  alt: true,
  body: `<ol class="steps">
    <li><h3>O cliente retira a senha</h3><p>No totem, escolhe o serviço e o tipo de atendimento (normal, preferencial ou 80+). A senha sai impressa com QR Code. No balcão, o atendente também pode emitir a senha.</p></li>
    <li><h3>Acompanha a fila pelo celular</h3><p>Pelo QR Code, vê quantas pessoas estão à frente, sem baixar aplicativo. O navegador avisa quando a vez se aproxima e quando a senha é chamada.</p></li>
    <li><h3>É chamado no painel de TV</h3><p>A senha aparece em destaque na TV, com o guichê ou sala e um alerta sonoro. Entre as chamadas, a TV exibe avisos da unidade, notícias e clima.</p></li>
    <li><h3>O atendente conduz o atendimento</h3><p>Chama o próximo, rechama, inicia, encaminha para outra etapa (recepção → triagem → consultório) e finaliza. A prioridade legal é respeitada automaticamente.</p></li>
    <li><h3>O gestor acompanha os números</h3><p>Relatórios por período, serviço e atendente: volume, tempo médio de espera e de atendimento, não comparecimento e distribuição por hora, com exportação em CSV.</p></li>
  </ol>`,
});

const telas = section({
  kicker: "Por dentro do sistema",
  title: "Totem, TV e celular falando a mesma língua",
  intro: "As telas abaixo são do sistema em funcionamento, com dados de uma clínica de demonstração.",
  body: `<div class="grid grid--2" style="gap:28px">
    <figure class="figure" style="margin:0">
      <img src="{{root}}assets/img/opt/fila-totem.webp" width="1024" height="768" loading="lazy" decoding="async"
           alt="Tela do totem de senha com os botões Recepção, Triagem e Consultório">
      <figcaption>Totem: o cliente escolhe o serviço em um toque.</figcaption>
    </figure>
    <figure class="figure" style="margin:0">
      <img src="{{root}}assets/img/opt/fila-comprovante.webp" width="1024" height="768" loading="lazy" decoding="async"
           alt="Comprovante de senha emitida com código R001, pessoas à frente e QR Code de acompanhamento">
      <figcaption>Senha emitida com QR Code para acompanhar pelo celular.</figcaption>
    </figure>
    <figure class="figure" style="margin:0">
      <img src="{{root}}assets/img/opt/fila-tv-chamada.webp" width="1200" height="675" loading="lazy" decoding="async"
           alt="Painel de TV exibindo em destaque a senha chamada R001 para a Recepção">
      <figcaption>Chamada em destaque na TV, com alerta sonoro.</figcaption>
    </figure>
    <figure class="figure" style="margin:0;max-width:300px;justify-self:center">
      <img src="{{root}}assets/img/opt/fila-celular.webp" width="390" height="844" loading="lazy" decoding="async"
           alt="Página de acompanhamento no celular mostrando a senha T002 e pessoas à frente">
      <figcaption>Acompanhamento no celular, sem aplicativo.</figcaption>
    </figure>
  </div>`,
});

const recursos = section({
  kicker: "Recursos",
  title: "O que o Beend Fila faz",
  alt: true,
  body: `<div class="grid grid--3">
    ${card({ title: "Senha impressa e digital", text: "Impressão em impressora térmica de 80 mm e QR Code para acompanhar a fila no celular." })}
    ${card({ title: "Prioridades da lei", text: "Normal, preferencial e 80+, com intercalação configurável. O 80+ tem precedência, como determina o Estatuto da Pessoa Idosa." })}
    ${card({ title: "Atendimento em etapas", text: "Encaminhe a mesma senha de uma fila para outra, como recepção, triagem e consultório, sem emitir senha nova." })}
    ${card({ title: "Painel de TV configurável", text: "Senha em destaque, últimas chamadas, logotipo, relógio, letreiro e carrossel de avisos, notícias e clima." })}
    ${card({ title: "Chamada por senha ou por nome", text: "Na chamada por nome, a TV mostra só o primeiro nome e a inicial do sobrenome, em linha com a LGPD." })}
    ${card({ title: "Painel do atendente", text: "Filas do guichê com o tempo de espera, chamar senha específica, rechamar e registrar não comparecimento." })}
    ${card({ title: "Relatórios de atendimento", text: "Espera média, tempo de atendimento, não comparecimento e movimento por hora, com exportação em CSV." })}
    ${card({ title: "Modelos prontos", text: "Serviços e guichês pré-configurados para clínica, cartório e balcão. A implantação leva minutos." })}
    ${card({ title: "Vários guichês e equipes", text: "Usuários com permissões, guichês, salas e consultórios, com cada atendente escolhendo o que atende no turno." })}
  </div>`,
});

const segmentosFila = section({
  kicker: "Onde usar",
  title: "Para quem atende público e tem espera",
  body: `<ul class="pill-row">
    <li class="pill">Clínicas e consultórios</li>
    <li class="pill">Laboratórios e centros de exame</li>
    <li class="pill">Hospitais e pronto atendimento privados</li>
    <li class="pill">Cartórios e despachantes</li>
    <li class="pill">Farmácias</li>
    <li class="pill">Açougues, padarias e balcões</li>
    <li class="pill">Lojas e assistências técnicas</li>
    <li class="pill">Pet shops e clínicas veterinárias</li>
    <li class="pill">Concessionárias (pós-venda)</li>
    <li class="pill">Órgãos públicos</li>
  </ul>
  <p>Na clínica, o fluxo típico é recepção → triagem → consultório, com a mesma senha. No cartório e no balcão, cada serviço tem sua fila e seu prefixo de senha, e o painel mostra para qual guichê a pessoa deve ir.</p>`,
});

const equipamentos = section({
  kicker: "Equipamentos",
  title: "O que é preciso para funcionar",
  alt: true,
  body: `<div class="grid grid--3">
    ${card({ title: "Totem de senha", text: "Totem touch com impressora térmica de 80 mm. A beend.tech fornece o totem, ou você usa um equipamento compatível." })}
    ${card({ title: "TV de chamada", text: "Qualquer TV com TV box Android ou mini PC com navegador. A TV continua exibindo o conteúdo mesmo se a internet oscilar." })}
    ${card({ title: "Recepção e guichês", text: "Um computador ou tablet com navegador para cada atendente. Não há programa para instalar." })}
  </div>
  <p style="margin-top:20px">O sistema fica na nuvem: o gestor acessa de qualquer lugar e várias unidades podem ser acompanhadas no mesmo painel.</p>`,
});

const combo = section({
  kicker: "Senha + pesquisa",
  title: "Organize a chegada e meça a experiência na saída",
  body: `<div class="grid grid--2" style="align-items:center;gap:40px">
    <div>
      <p>O Beend Fila mostra <strong>quanto tempo o cliente esperou</strong>. A <a href="{{root}}totem-de-pesquisa-de-satisfacao.html">pesquisa de satisfação beend.tech</a> mostra <strong>como ele se sentiu</strong>. Juntos, ligam o número ao motivo: se a nota cai no fim da tarde, o relatório de espera mostra se foi a fila.</p>
      <ul>
        <li>Uma única proposta, um único fornecedor e o mesmo suporte.</li>
        <li>Totem de senha na entrada e totem de pesquisa na saída do atendimento.</li>
        <li>Relatórios de espera e de satisfação lado a lado na reunião de gestão.</li>
      </ul>
      <p class="mb-0"><a href="${waFila("Olá! Quero um orçamento do combo senha + pesquisa de satisfação.")}" target="_blank" rel="noopener"><strong>Pedir orçamento do combo →</strong></a></p>
    </div>
    <figure class="figure" style="margin:0">
      <img src="{{root}}assets/img/opt/painel-900.webp" srcset="{{root}}assets/img/opt/painel-900.webp 900w, {{root}}assets/img/opt/painel.webp 1600w" sizes="(max-width:900px) 100vw, 520px" width="1600" height="884" loading="lazy" decoding="async"
           alt="Painel da pesquisa de satisfação beend.tech com NPS e evolução do período">
      <figcaption>Painel da pesquisa de satisfação, que complementa os relatórios de espera do Beend Fila.</figcaption>
    </figure>
  </div>`,
});

export const filaCtaBand = `<section class="section section--tight" aria-labelledby="cta-title">
  <div class="wrap">
    <div class="cta-band">
      <div>
        <h2 id="cta-title">Quer acabar com a fila desorganizada na recepção?</h2>
        <p>Receba uma proposta com totem de senha, painel de TV e sistema, e veja uma demonstração com o fluxo da sua unidade.</p>
      </div>
      <div class="btn-row">
        <a class="btn btn--wa" href="${WA_ORCAMENTO}" target="_blank" rel="noopener">${svgWa} Falar no WhatsApp</a>
        <a class="btn btn--on-dark" href="${FILA_APP}" rel="noopener">Acessar o Beend Fila</a>
      </div>
    </div>
  </div>
</section>`;

export const fila = {
  slug: "controle-de-fila.html",
  active: "controle-de-fila.html",
  type: "article",
  kicker: "Beend Fila · controle de fila e senhas",
  title: "Controle de Fila e Sistema de Senhas com TV | beend.tech",
  description:
    "Sistema de senhas com totem, painel de TV e acompanhamento no celular. Prioridades legais, atendimento em etapas e relatórios de espera. Peça uma demonstração.",
  h1: "Sistema de controle de fila e senhas",
  lead:
    "Totem de senha, painel de TV com chamada e acompanhamento da fila no celular, em um sistema online para clínicas, cartórios e balcões de atendimento.",
  crumbs: [{ name: "Home", href: "index.html" }, { name: "Controle de fila" }],
  heroExtra,
  preload: "assets/img/opt/fila-conjunto-900.webp",
  preloadSrcset: "assets/img/opt/fila-conjunto-900.webp 900w, assets/img/opt/fila-conjunto.webp 1600w",
  preloadSizes: "(max-width:900px) 100vw, 1160px",
  body: resumo + comoFunciona + telas + recursos + segmentosFila + equipamentos + combo,
  ctaBand: filaCtaBand,
  faqTitle: "Perguntas frequentes sobre controle de fila",
  faq: [
    {
      q: "O que é um sistema de controle de fila?",
      a: "<p>É um sistema que organiza a ordem de atendimento com senhas. O cliente retira a senha no totem ou no balcão, aguarda e é chamado em um painel de TV. O atendente chama a próxima senha pelo computador, e o gestor acompanha tempos de espera e de atendimento.</p>",
    },
    {
      q: "Precisa instalar algum programa?",
      a: "<p>Não. O Beend Fila funciona no navegador: o totem e a TV abrem o endereço do sistema em tela cheia, e os atendentes usam o computador ou tablet que já têm. O sistema fica na nuvem, com acesso de qualquer lugar.</p>",
    },
    {
      q: "O cliente precisa baixar aplicativo para acompanhar a fila?",
      a: "<p>Não. O QR Code impresso na senha abre uma página no celular com a posição na fila, atualizada em tempo real. Se o cliente permitir, o navegador avisa quando a vez estiver próxima e quando a senha for chamada.</p>",
    },
    {
      q: "Como funcionam as prioridades?",
      a: "<p>O sistema tem senhas normal, preferencial (Lei 10.048/2000) e 80+ (Estatuto da Pessoa Idosa). A intercalação é configurável, por exemplo uma preferencial a cada duas normais, e a senha 80+ tem precedência sobre as demais preferenciais.</p>",
    },
    {
      q: "Dá para usar na TV que já tenho na recepção?",
      a: "<p>Sim. Basta uma TV com TV box Android ou um mini PC com navegador. O painel mostra a senha chamada com alerta sonoro e, entre as chamadas, exibe avisos da unidade, notícias e clima.</p>",
    },
    {
      q: "Quanto custa o sistema de senhas?",
      a: "<p>O valor depende do número de totens, TVs e guichês e de quem fornece o equipamento. Peça uma proposta pelo WhatsApp para receber o orçamento com o fluxo da sua unidade.</p>",
    },
    {
      q: "Funciona junto com a pesquisa de satisfação?",
      a: "<p>Sim. Muitas operações usam o totem de senha na chegada e o <a href=\"{{root}}totem-de-pesquisa-de-satisfacao.html\">totem de pesquisa de satisfação</a> na saída, com a mesma empresa responsável pela implantação e pelo suporte.</p>",
    },
  ],
  schema: [
    {
      "@type": "SoftwareApplication",
      "@id": "https://beend.tech/controle-de-fila#software",
      name: "Beend Fila",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      url: "https://beend.tech/controle-de-fila",
      description:
        "Sistema de controle de fila e senhas com totem, painel de TV, acompanhamento no celular, prioridades legais e relatórios de atendimento.",
      // Sem "offers": o preço ainda é sob consulta, e as ofertas do site
      // ficam só na página de preços (ver tests/site.spec.mjs).
      publisher: { "@id": "https://beend.tech/#organization" },
    },
  ],
  llms: {
    section: "servicos",
    summary:
      "Beend Fila: sistema de controle de fila e senhas com totem (senha impressa e QR Code), painel de TV com chamada, acompanhamento no celular, prioridades legais, atendimento em etapas e relatórios de espera. Preço sob consulta.",
  },
  priority: "0.8",
};
