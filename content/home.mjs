import { section, answer, card } from "./_ui.mjs";

const hero = `
<section class="hero">
  <img class="hero__bg"
       src="{{root}}assets/img/opt/totens-900.webp"
       srcset="{{root}}assets/img/opt/totens-900.webp 900w, {{root}}assets/img/opt/totens.webp 1600w"
       sizes="100vw" width="1600" height="1073"
       alt="Três totens de piso personalizados para pesquisa de satisfação, nas cores amarelo, branco e laranja"
       fetchpriority="high" decoding="async">
  <div class="wrap hero__in">
    <div>
      <p class="kicker">Totens + plataforma de pesquisa de satisfação</p>
      <h1>Totem de pesquisa de satisfação para ouvir o cliente na hora certa</h1>
      <p class="lead">O cliente avalia o atendimento em poucos toques, no ponto de venda. A beend.tech entrega o totem, o aplicativo e o painel que transformam as respostas em NPS, CSAT e CES.</p>
      <div class="btn-row">
        <a class="btn btn--primary" href="{{root}}teste-gratis.html">Começar teste grátis</a>
        <a class="btn btn--wa" href="{{wa}}" target="_blank" rel="noopener">Pedir orçamento no WhatsApp</a>
      </div>
      <ul class="badge-row">
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Locação ou venda</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Implantação em todo o Brasil</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Teste grátis de 7 dias</li>
      </ul>
    </div>
    <aside class="quick-card" aria-label="Resumo da solução em formato de leitura rápida">
      <h2>Resumo rápido</h2>
      <p>Um totem de pesquisa de satisfação é um terminal com tela touch colocado no ponto de atendimento para o cliente avaliar a experiência em poucos toques.</p>
      <ul>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Coleta por totem, QR Code ou WhatsApp</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>NPS, CSAT, CES, SMILE e QUIZ</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Painel online com os resultados</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Análise de sentimento com IA</li>
        <li><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M20 6 9 17l-5-5"/></svg>Funciona com tablet Android próprio</li>
      </ul>
      <p class="mini">Planos a partir de R$ 69,90/mês. Teste grátis de 7 dias, sem cartão de crédito.</p>
    </aside>
  </div>
</section>

<section class="section section--tight" aria-label="Números da beend.tech">
  <div class="wrap">
    <div class="stats">
      <div class="stat"><b>200+</b><span>clientes atendidos</span></div>
      <div class="stat"><b>400+</b><span>terminais ativos</span></div>
      <div class="stat"><b>300+</b><span>campanhas ativas</span></div>
      <div class="stat"><b>140 mil+</b><span>pesquisas realizadas</span></div>
    </div>
  </div>
</section>`;

const why = section({
  kicker: "Por que importa",
  title: "A opinião do cliente perde valor quando chega tarde",
  intro:
    "Pesquisa por e-mail chega horas depois. No totem, a avaliação acontece enquanto a experiência ainda está fresca — e vira dado para o gestor agir.",
  body: `<div class="grid grid--3">
    ${card({
      title: "Resposta no momento da verdade",
      text: "O cliente avalia logo após o atendimento, sem esperar e-mail, sem instalar aplicativo e sem criar conta.",
    })}
    ${card({
      title: "Mais volume de respostas",
      text: "Duas carinhas ou uma nota de 0 a 10 levam segundos. A barreira baixa e a amostra cresce.",
    })}
    ${card({
      title: "Decisão com dado, não com impressão",
      text: "O painel consolida NPS, CSAT e CES por período, unidade e campanha para orientar treinamento e melhoria.",
    })}
  </div>`,
});

const solution = section({
  kicker: "Solução completa",
  title: "Totem, aplicativo e painel no mesmo pacote",
  intro:
    "A beend.tech cuida do equipamento, do software de coleta e da leitura dos dados. Você escolhe o modelo, personaliza a tela com a sua marca e acompanha tudo online.",
  alt: true,
  body: `<div class="grid grid--2" style="align-items:center;gap:40px">
    <figure class="figure" style="margin:0">
      <img src="{{root}}assets/img/opt/painel-900.webp" srcset="{{root}}assets/img/opt/painel-900.webp 900w, {{root}}assets/img/opt/painel.webp 1600w" sizes="(max-width:900px) 100vw, 520px" width="1600" height="884" loading="lazy" decoding="async"
           alt="Painel do sistema beend.tech com indicadores de NPS, filtros de pesquisa e exportação de relatórios">
      <figcaption>Painel do sistema beend.tech, com NPS, filtros por período e terminal, e exportação de relatórios.</figcaption>
    </figure>
    <div>
      <h3>O que está incluído</h3>
      <ul>
        <li><strong>Totem ou tablet:</strong> locação (comodato) ou venda, com personalização visual.</li>
        <li><strong>Aplicativo de coleta:</strong> pesquisas NPS, CSAT, CES, SMILE e QUIZ, com modo offline.</li>
        <li><strong>Painel administrativo:</strong> resultados em tempo real, filtros e exportação de dados.</li>
        <li><strong>Multicanal:</strong> a mesma campanha pode rodar no totem, por QR Code e por WhatsApp.</li>
        <li><strong>Suporte humanizado:</strong> atendimento em horário comercial para implantação e operação.</li>
      </ul>
      <p class="mb-0"><a href="{{root}}totem-de-pesquisa-de-satisfacao.html"><strong>Entenda o que é um totem de pesquisa de satisfação →</strong></a></p>
    </div>
  </div>`,
});

const how = section({
  kicker: "Como funciona",
  title: "Da instalação ao primeiro relatório",
  body: `<ol class="steps">
    <li>
      <h3>Definimos o modelo e o canal</h3>
      <p>Totem de mesa, totem de piso ou seu próprio tablet. A coleta pode ser no totem, por QR Code ou por WhatsApp, conforme o fluxo do seu atendimento.</p>
    </li>
    <li>
      <h3>Personalizamos a pesquisa</h3>
      <p>Logo, cores, perguntas e escala. Você escolhe entre NPS (0 a 10), CSAT, CES, carinhas ou um quiz com perguntas e respostas.</p>
    </li>
    <li>
      <h3>O cliente responde na hora</h3>
      <p>Sem cadastro e sem aplicativo. As respostas ficam no dispositivo quando a internet cai e sincronizam quando a conexão volta.</p>
    </li>
    <li>
      <h3>Você acompanha e age</h3>
      <p>O painel mostra as métricas por período, campanha e unidade. Com o dado na mão, dá para corrigir o atendimento e acompanhar a evolução.</p>
    </li>
  </ol>`,
  alt: true,
});

const metrics = section({
  kicker: "Métricas",
  title: "NPS, CSAT e CES — cada um responde a uma pergunta",
  intro:
    "Não existe uma métrica melhor que a outra: existe a métrica certa para cada decisão. A plataforma calcula as três e permite combinar campanhas.",
  body: `<div class="grid grid--3">
    ${card({
      title: "NPS — recomendação",
      text: "“De 0 a 10, quanto você recomendaria nossa empresa a um amigo?” Mede lealdade e relação de longo prazo.",
      href: "{{root}}pesquisa-de-satisfacao.html#nps",
      more: "Como calcular",
    })}
    ${card({
      title: "CSAT — satisfação",
      text: "“Qual seu grau de satisfação com o atendimento?” Mede a experiência imediata em uma escala de 1 a 5.",
      href: "{{root}}pesquisa-de-satisfacao.html#csat",
      more: "Como calcular",
    })}
    ${card({
      title: "CES — esforço",
      text: "“Foi fácil resolver o que você precisava?” Mede o esforço do cliente e aponta atritos no processo.",
      href: "{{root}}pesquisa-de-satisfacao.html#ces",
      more: "Como calcular",
    })}
  </div>`,
});

const models = section({
  kicker: "Modelos",
  title: "Totem de mesa ou de piso?",
  intro: "A escolha depende do fluxo e do espaço. Os dois modelos rodam o mesmo aplicativo e o mesmo painel.",
  alt: true,
  body: `<div class="grid grid--2">
    <a class="card card--link" href="{{root}}totem-de-mesa.html">
      <img src="{{root}}assets/img/opt/totem-mesa.webp" width="800" height="1066" loading="lazy" decoding="async"
           alt="Totem de mesa branco exibindo a pergunta como você avalia a qualidade do atendimento prestado" style="border-radius:12px;margin-bottom:18px">
      <h3>Totem de mesa</h3>
      <p>Compacto, para balcões, caixas, consultórios e recepções. Ideal para pontos de atendimento individuais.</p>
      <span class="card__more">Ver totem de mesa</span>
    </a>
    <a class="card card--link" href="{{root}}totem-de-piso.html">
      <img src="{{root}}assets/img/opt/totens-900.webp" srcset="{{root}}assets/img/opt/totens-900.webp 900w, {{root}}assets/img/opt/totens.webp 1600w" sizes="(max-width:900px) 100vw, 520px" width="1600" height="1073" loading="lazy" decoding="async"
           alt="Três totens de piso personalizados para pesquisa de satisfação, nas cores amarelo, branco e laranja" style="border-radius:12px;margin-bottom:18px">
      <h3>Totem de piso</h3>
      <p>Maior visibilidade em lojas, shoppings, restaurantes e recepções de alto fluxo. Chama a atenção de quem passa.</p>
      <span class="card__more">Ver totem de piso</span>
    </a>
  </div>`,
});

const channels = section({
  kicker: "Canais",
  title: "O cliente responde onde for mais fácil",
  body: `<div class="grid grid--3">
    ${card({
      title: "Totem touch",
      text: "Coleta presencial, no ponto de atendimento, com a identidade visual da empresa.",
      href: "{{root}}totem-de-pesquisa-de-satisfacao.html",
    })}
    ${card({
      title: "QR Code",
      text: "Um scan abre a pesquisa no celular do cliente. Funciona em recibos, mesas, embalagens e cartazes.",
      href: "{{root}}pesquisa-de-satisfacao-qrcode.html",
    })}
    ${card({
      title: "WhatsApp",
      text: "Disparo de pesquisa pelo canal em que o cliente já está. Alta taxa de abertura e resposta.",
      href: "{{root}}pesquisa-de-satisfacao-whatsapp.html",
    })}
  </div>`,
  alt: true,
});

const segments = section({
  kicker: "Segmentos",
  title: "Onde o totem de pesquisa faz diferença",
  intro: "A mesma plataforma se adapta ao fluxo de farmácias, clínicas, restaurantes, lojas, academias, concessionárias e eventos.",
  body: `<ul class="pill-row">
    <li class="pill">Farmácias</li>
    <li class="pill">Clínicas e consultórios</li>
    <li class="pill">Restaurantes e cafeterias</li>
    <li class="pill">Varejo e lojas</li>
    <li class="pill">Academias</li>
    <li class="pill">Concessionárias</li>
    <li class="pill">Shoppings</li>
    <li class="pill">Eventos e feiras</li>
    <li class="pill">Órgãos públicos</li>
  </ul>
  <p><a href="{{root}}segmentos.html"><strong>Ver aplicações por segmento →</strong></a></p>`,
});

const pricing = section({
  kicker: "Investimento",
  title: "A partir de R$ 69,90 por mês, com teste grátis",
  intro:
    "O preço do sistema é público: quatro planos, a partir de R$ 69,90/mês, e 7 dias de teste sem cartão de crédito. O totem é contratado separadamente.",
  alt: true,
  body: `<div class="grid grid--3" style="align-items:start">
    <div class="card">
      <p class="pill pill--brand">Sistema</p>
      <h3 style="margin-top:14px">A partir de R$ 69,90/mês</h3>
      <p>Básico, Profissional, Premium e Master. No plano anual, você paga dez mensalidades. <strong>Teste grátis por 7 dias, sem cartão.</strong></p>
      <p class="mb-0"><a href="{{root}}planos-e-precos.html"><strong>Ver os planos →</strong></a> · <a href="{{root}}teste-gratis.html"><strong>Testar grátis →</strong></a></p>
    </div>
    <div class="card">
      <p class="pill">Aquisição do totem</p>
      <h3 style="margin-top:14px">Totem PRO INFINITY</h3>
      <p>Você adquire o equipamento e ele passa a ser patrimônio da empresa. Se já tem um tablet Android 5.1+, pode usá-lo sem custo de hardware.</p>
      <p class="mb-0"><a href="{{root}}venda-de-totens.html"><strong>Ver venda de totens →</strong></a></p>
    </div>
    <div class="card">
      <p class="pill">Locação</p>
      <h3 style="margin-top:14px">Comodato mensal</h3>
      <p>Investimento inicial menor: você paga pelo uso do totem junto com a plataforma. Indicado para testes, redes com várias unidades e eventos.</p>
      <p class="mb-0"><a href="{{root}}locacao-de-totens.html"><strong>Locação de totens →</strong></a></p>
    </div>
  </div>`,
});

const recursos = section({
  kicker: "Recursos do sistema",
  title: "O que a plataforma beend.tech faz",
  intro: "Recursos reais do sistema, do totem ao relatório — inclusive o que quase nenhum concorrente entrega: análise de sentimento com IA e fluxo de campanha em node.",
  body: `<div class="grid grid--3">
    ${card({ title: "Campanhas NPS, CSAT, SMILE e QUIZ", text: "Quatro modelos de pesquisa, combináveis na mesma operação." })}
    ${card({ title: "Feedback em tempo real", text: "A resposta aparece no painel assim que o cliente conclui." })}
    ${card({ title: "Análise de sentimento com IA", text: "Os comentários abertos são classificados automaticamente por sentimento." })}
    ${card({ title: "Rotas em node", text: "Monte o fluxo da campanha em um editor visual: cada resposta leva a uma próxima pergunta ou ao fim." })}
    ${card({ title: "Relatório diário por e-mail", text: "Resumo enviado automaticamente no horário configurado." })}
    ${card({ title: "Terminais online e offline", text: "Coleta sem internet, com sincronização automática quando a conexão volta." })}
    ${card({ title: "Vários terminais", text: "Gestão geral ou individual, com acesso separado para cada terminal." })}
    ${card({ title: "Gráfico de evolução", text: "Acompanhe a satisfação ao longo do tempo e compare períodos." })}
    ${card({ title: "Exportação PDF, Excel e CSV", text: "Relatórios por data e horário, prontos para levar à reunião." })}
  </div>
  <figure class="figure" style="margin-top:32px">
    <img src="{{root}}assets/img/opt/campanhas-900.webp" srcset="{{root}}assets/img/opt/campanhas-900.webp 900w, {{root}}assets/img/opt/campanhas.webp 1600w" sizes="(max-width:900px) 100vw, 1160px" width="1600" height="912" loading="lazy" decoding="async"
         alt="Editor de campanha em node do sistema beend.tech, com perguntas ramificadas e tela de agradecimento">
    <figcaption>Editor de campanha em node: cada resposta pode levar a uma nova pergunta.</figcaption>
  </figure>`,
});

export const home = {
  slug: "index.html",
  active: "index.html",
  type: "website",
  title: "Totem de Pesquisa de Satisfação | beend.tech",
  description:
    "Sistema de pesquisa de satisfação a partir de R$ 69,90/mês. NPS, CSAT e CES por totem, QR Code e WhatsApp. Teste grátis por 7 dias, sem cartão.",
  h1: "Totem de pesquisa de satisfação para ouvir o cliente na hora certa",
  customHero: hero,
  body: why + solution + recursos + how + metrics + models + channels + segments + pricing,
  faqTitle: "Perguntas frequentes sobre totem de pesquisa",
  faq: [
    {
      q: "O que é um totem de pesquisa de satisfação?",
      a: "<p>É um terminal com tela touch instalado no ponto de atendimento para o cliente avaliar a experiência em poucos toques. As respostas alimentam um painel que calcula indicadores como NPS, CSAT e CES.</p>",
    },
    {
      q: "Quanto custa um totem de pesquisa de satisfação?",
      a: "<p>O sistema começa em <strong>R$ 69,90 por mês</strong>, com quatro planos (Básico, Profissional, Premium e Master). O totem é contratado separadamente, por aquisição ou locação. O plano anual equivale a dez mensalidades.</p>",
    },
    {
      q: "O totem funciona sem internet?",
      a: "<p>Sim. O aplicativo armazena as respostas no dispositivo e sincroniza com o painel quando a conexão é restabelecida. Para relatórios em tempo real, recomendamos uma conexão estável.</p>",
    },
    {
      q: "Posso usar meu próprio tablet?",
      a: "<p>Sim. O sistema é compatível com dispositivos Android 5.1 ou superior, incluindo tablets e boxes próprios, o que reduz o investimento em hardware.</p>",
    },
    {
      q: "A beend.tech vende ou aluga os totens?",
      a: "<p>As duas opções estão disponíveis. Na locação (comodato), o cliente paga uma mensalidade pelo uso do equipamento. Na compra, o totem passa a ser patrimônio da empresa.</p>",
    },
    {
      q: "Quais métricas a plataforma calcula?",
      a: "<p>NPS (Net Promoter Score), CSAT (Customer Satisfaction Score), CES (Customer Effort Score), além de pesquisas com escala de carinhas (SMILE) e quiz com perguntas e respostas.</p>",
    },
    {
      q: "Tem teste grátis?",
      a: "<p>Sim. São 7 dias de teste com o sistema completo, sem cartão de crédito, usando o seu próprio tablet Android 5.1 ou superior. Ao final, você decide se continua.</p>",
    },
  ],
  schema: [
    {
      "@type": "Service",
      "@id": "https://beend.tech/#servico-totem",
      name: "Totem de pesquisa de satisfação",
      serviceType:
        "Fornecimento e locação de totens de pesquisa de satisfação com plataforma de NPS, CSAT e CES",
      provider: { "@id": "https://beend.tech/#organization" },
      areaServed: { "@type": "Country", name: "Brasil" },
      offers: {
        "@type": "Offer",
        priceCurrency: "BRL",
        description: "Equipamento e software sob consulta, conforme modelo, quantidade e prazo",
      },
    },
  ],
  llms: {
    section: "principal",
    summary:
      "Página inicial: totens e plataforma beend.tech para pesquisa de satisfação com NPS, CSAT, CES, SMILE e QUIZ, coleta por totem, QR Code e WhatsApp, análise de sentimento com IA, em aquisição ou locação.",
  },
  priority: "1.0",
  preload: "assets/img/opt/totens-900.webp",
  preloadSrcset: "assets/img/opt/totens-900.webp 900w, assets/img/opt/totens.webp 1600w",
  preloadSizes: "100vw",
};
