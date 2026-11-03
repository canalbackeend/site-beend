import { section, answer, card } from "./_ui.mjs";

/* ------------------------------- PLANOS -------------------------------- */
export const pricing = {
  slug: "planos-e-precos.html",
  active: "planos-e-precos.html",
  type: "article",
  kicker: "Planos e preços",
  title: "Planos e Preços: Sistema de Pesquisa de Satisfação | beend.tech",
  description:
    "Sistema de pesquisa de satisfação a partir de R$ 69,90/mês. Totem, QR Code e WhatsApp com NPS, CSAT e CES. Teste grátis por 7 dias, sem cartão.",
  h1: "Planos e preços do sistema de pesquisa de satisfação",
  lead:
    "Preço publicado, sem orçamento e sem reunião. A partir de R$ 69,90 por mês, com teste grátis de 7 dias. No plano anual, você paga dez mensalidades.",
  crumbs: [
    { name: "Home", href: "index.html" },
    { name: "Planos e preços" },
  ],
  body: `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>O sistema de pesquisa de satisfação da beend.tech começa em R$ 69,90 por mês</strong> e inclui totem, QR Code e WhatsApp na mesma plataforma, com NPS, CSAT e CES em tempo real. Você testa 7 dias grátis, sem cartão de crédito.</p>
      <p>São quatro planos. O que muda entre eles é o número de terminais, de campanhas simultâneas e de avaliações por mês. Não há cobrança por resposta: quando você passa do limite do plano, avisamos — o totem continua coletando.</p>
    `)}

    <div class="prose">
      <h2>Escolha o plano</h2>
      <p>Todos os planos incluem o aplicativo de coleta, o painel em tempo real e o suporte em horário comercial. Os valores são por mês; no anual, você paga dez mensalidades.</p>
    </div>

    <div class="grid grid--4" style="margin:8px 0 8px">
      <div class="card" style="display:flex;flex-direction:column">
        <h3>Básico</h3>
        <p style="font-size:2rem;font-weight:800;color:var(--ink);margin:6px 0 0;letter-spacing:-.02em">R$ 69,90<span style="font-size:1rem;font-weight:600;color:var(--muted)">/mês</span></p>
        <p class="small muted" style="margin:2px 0 14px">ou R$ 699/ano</p>
        <ul style="flex:1">
          <li>2 terminais</li>
          <li>5 campanhas ativas</li>
          <li>4.000 avaliações/mês</li>
          <li>3 usuários</li>
          <li>NPS, CSAT e CES</li>
          <li>Totem, QR Code e WhatsApp</li>
          <li>Exportação em PDF, Excel e CSV</li>
        </ul>
        <p style="margin:18px 0 0"><a class="btn btn--ghost btn--block" href="{{root}}teste-gratis.html">Testar 7 dias grátis</a></p>
      </div>

      <div class="card" style="display:flex;flex-direction:column;border-color:var(--brand-ink);box-shadow:var(--shadow)">
        <p class="pill pill--brand" style="align-self:flex-start">Mais escolhido</p>
        <h3 style="margin-top:12px">Profissional</h3>
        <p style="font-size:2rem;font-weight:800;color:var(--ink);margin:6px 0 0;letter-spacing:-.02em">R$ 129,90<span style="font-size:1rem;font-weight:600;color:var(--muted)">/mês</span></p>
        <p class="small muted" style="margin:2px 0 14px">ou R$ 1.299/ano</p>
        <ul style="flex:1">
          <li>5 terminais</li>
          <li>15 campanhas ativas</li>
          <li>10.000 avaliações/mês</li>
          <li>8 usuários</li>
          <li>Tudo do Básico</li>
          <li>SMILE (carinhas) e QUIZ</li>
          <li>Análise de sentimento com IA</li>
          <li>Fluxo de campanha em node</li>
        </ul>
        <p style="margin:18px 0 0"><a class="btn btn--primary btn--block" href="{{root}}teste-gratis.html">Testar 7 dias grátis</a></p>
      </div>

      <div class="card" style="display:flex;flex-direction:column">
        <h3>Premium</h3>
        <p style="font-size:2rem;font-weight:800;color:var(--ink);margin:6px 0 0;letter-spacing:-.02em">R$ 239,90<span style="font-size:1rem;font-weight:600;color:var(--muted)">/mês</span></p>
        <p class="small muted" style="margin:2px 0 14px">ou R$ 2.399/ano</p>
        <ul style="flex:1">
          <li>15 terminais</li>
          <li>Campanhas ilimitadas</li>
          <li>50.000 avaliações/mês</li>
          <li>20 usuários</li>
          <li>Tudo do Profissional</li>
          <li>Relatórios com filtros por período e terminal</li>
          <li>Suporte prioritário</li>
        </ul>
        <p style="margin:18px 0 0"><a class="btn btn--ghost btn--block" href="{{root}}teste-gratis.html">Testar 7 dias grátis</a></p>
      </div>

      <div class="card" style="display:flex;flex-direction:column">
        <h3>Master</h3>
        <p style="font-size:2rem;font-weight:800;color:var(--ink);margin:6px 0 0;letter-spacing:-.02em">R$ 389,90<span style="font-size:1rem;font-weight:600;color:var(--muted)">/mês</span></p>
        <p class="small muted" style="margin:2px 0 14px">ou R$ 3.899/ano</p>
        <ul style="flex:1">
          <li>Terminais ilimitados</li>
          <li>Campanhas ilimitadas</li>
          <li>Avaliações ilimitadas</li>
          <li>Tudo do Premium</li>
          <li>Suporte dedicado</li>
          <li>Onboarding assistido</li>
        </ul>
        <p style="margin:18px 0 0"><a class="btn btn--ghost btn--block" href="{{root}}teste-gratis.html">Testar 7 dias grátis</a></p>
      </div>
    </div>

    <p class="small muted" style="margin-top:6px">Órgão público, licitação ou projeto com desenvolvimento dedicado? <a href="{{root}}contato.html">Fale com a nossa equipe</a> para uma proposta sob medida.</p>

    <div class="prose" style="margin-top:36px">
      <h2>O que está incluído em todos os planos</h2>
      <ul>
        <li>Aplicativo de coleta com NPS, CSAT, CES, SMILE e QUIZ.</li>
        <li>Painel online com resultados em tempo real, por período e por terminal.</li>
        <li>Coleta por totem, QR Code e WhatsApp na mesma plataforma.</li>
        <li>Personalização das telas com a identidade visual da empresa.</li>
        <li>Funcionamento offline: as respostas ficam no dispositivo e sincronizam depois.</li>
        <li>Relatório diário enviado por e-mail no horário que você escolher.</li>
        <li>Exportação de dados em PDF, Excel e CSV.</li>
        <li>Suporte em horário comercial (segunda a sexta, 9h às 18h).</li>
      </ul>

      <h2>Como funciona a contagem de avaliações</h2>
      <p>O limite de avaliações do plano <strong>avisa, não bloqueia</strong>. Se a sua operação passar do número do plano, o totem continua recebendo respostas e nós entramos em contato para ajustar o plano. Nenhum cliente perde coleta por causa de teto.</p>

      <h2>E o equipamento?</h2>
      <p>A assinatura é do <strong>software</strong>. O totem pode ser adquirido ou alugado separadamente, conforme o modelo e a quantidade. Você também pode usar um tablet Android 5.1 ou superior que já tenha — nesse caso, não há custo de equipamento.</p>
      <p>Para comparar os dois caminhos, veja <a href="{{root}}locacao-de-totens.html">locação de totens</a> e <a href="{{root}}venda-de-totens.html">venda de totens</a>.</p>

      <h2>Por que o preço é público</h2>
      <p>A maioria dos fornecedores esconde o preço atrás de um formulário. A gente publica porque você tem o direito de comparar antes de falar com alguém. Se o valor não couber no seu orçamento, melhor descobrir agora do que depois de três reuniões.</p>
    </div>
  </div>
</section>

${section({
  alt: true,
  kicker: "Comece agora",
  title: "Teste grátis por 7 dias",
  body: `<p>Use o seu próprio tablet (Android 5.1 ou superior), monte uma campanha e veja as respostas chegando no painel. <strong>Sem cartão de crédito e sem compromisso.</strong></p>
  <div class="btn-row">
    <a class="btn btn--primary" href="{{root}}teste-gratis.html">Começar o teste grátis</a>
    <a class="btn btn--ghost" href="{{root}}contato.html">Falar com a equipe</a>
  </div>`,
})}
`,
  faqTitle: "Perguntas frequentes sobre preços",
  faq: [
    {
      q: "Quanto custa o sistema de pesquisa de satisfação?",
      a: "<p>A partir de R$ 69,90 por mês, no plano Básico. O Profissional custa R$ 129,90/mês, o Premium R$ 239,90/mês e o Master R$ 389,90/mês. No plano anual, você paga dez mensalidades.</p>",
    },
    {
      q: "O totem está incluído no plano?",
      a: "<p>Não. A assinatura é do software (coleta, painel, relatórios e suporte). O totem é adquirido ou alugado separadamente. Se você já tem um tablet Android 5.1 ou superior, pode usá-lo sem custo de equipamento.</p>",
    },
    {
      q: "O que acontece se eu passar do limite de avaliações?",
      a: "<p>Nada é bloqueado. Nós avisamos e sugerimos o ajuste do plano. A coleta continua funcionando normalmente enquanto isso.</p>",
    },
    {
      q: "Como funciona o teste grátis de 7 dias?",
      a: "<p>Você cria a conta, usa o seu tablet e monta a pesquisa. Não pedimos cartão de crédito. Ao final dos 7 dias, você decide se continua em um dos planos.</p>",
    },
    {
      q: "Preciso de internet no totem?",
      a: "<p>Para coletar, não — as respostas ficam armazenadas no dispositivo e sincronizam quando a conexão volta. Para acompanhar os resultados em tempo real, é necessária uma conexão.</p>",
    },
    {
      q: "Existe fidelidade ou multa de cancelamento?",
      a: "<p>O plano mensal não tem fidelidade. O plano anual dá desconto porque é pago adiantado. As condições são informadas antes da contratação.</p>",
    },
    {
      q: "Vocês emitem nota fiscal?",
      a: "<p>Sim. Emitimos nota fiscal e aceitamos boleto, PIX e cartão, conforme as condições informadas na contratação.</p>",
    },
  ],
  schema: [
    {
      "@type": "Product",
      "@id": "https://www.backeend.com.br/planos-e-precos.html#produto",
      name: "Sistema de pesquisa de satisfação beend.tech",
      description:
        "Plataforma de pesquisa de satisfação com NPS, CSAT, CES, SMILE e QUIZ, coleta por totem, QR Code e WhatsApp, com análise de sentimento por IA.",
      brand: { "@type": "Brand", name: "beend.tech" },
      offers: [
        { "@type": "Offer", name: "Básico", price: "69.90", priceCurrency: "BRL", description: "2 terminais, 5 campanhas ativas, 4.000 avaliações por mês" },
        { "@type": "Offer", name: "Profissional", price: "129.90", priceCurrency: "BRL", description: "5 terminais, 15 campanhas ativas, 10.000 avaliações por mês" },
        { "@type": "Offer", name: "Premium", price: "239.90", priceCurrency: "BRL", description: "15 terminais, campanhas ilimitadas, 50.000 avaliações por mês" },
        { "@type": "Offer", name: "Master", price: "389.90", priceCurrency: "BRL", description: "Terminais, campanhas e avaliações ilimitados" },
      ],
    },
  ],
  llms: {
    section: "principal",
    summary:
      "Planos e preços publicados: Básico R$ 69,90/mês, Profissional R$ 129,90/mês, Premium R$ 239,90/mês e Master R$ 389,90/mês. Anual com dez mensalidades. Teste grátis de 7 dias, sem cartão. O equipamento é contratado separadamente.",
  },
  priority: "0.9",
};

/* ------------------------------ TESTE GRÁTIS ----------------------------- */
export const freeTrial = {
  slug: "teste-gratis.html",
  active: null,
  type: "article",
  kicker: "Teste grátis",
  title: "Teste Grátis: 7 Dias de Pesquisa de Satisfação | beend.tech",
  description:
    "Teste o sistema de pesquisa de satisfação da beend.tech por 7 dias, sem cartão de crédito. Use seu tablet, monte a campanha e veja as respostas no painel.",
  h1: "Teste grátis por 7 dias, sem cartão de crédito",
  lead:
    "Monte uma campanha, colete respostas reais e veja o painel funcionando. Se não fizer sentido para o seu negócio, você simplesmente não continua.",
  crumbs: [
    { name: "Home", href: "index.html" },
    { name: "Teste grátis" },
  ],
  body: `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>O teste grátis da beend.tech dura 7 dias e inclui o software completo</strong> — aplicativo de coleta, painel em tempo real, relatórios e exportação. Não pedimos cartão de crédito e não há compromisso de continuidade.</p>
      <p>Você usa o seu próprio tablet Android 5.1 ou superior (ou faz o teste no navegador). O equipamento é contratado só depois, se você quiser.</p>
    `)}

    <div class="btn-row" style="margin-top:0">
      <a class="btn btn--wa" href="{{wa}}" target="_blank" rel="noopener">Quero começar o teste</a>
      <a class="btn btn--ghost" href="{{root}}planos-e-precos.html">Ver planos e preços</a>
    </div>

    <div class="prose" style="margin-top:40px">
      <h2>O que está incluído no teste</h2>
      <ul>
        <li><strong>Aplicativo de coleta</strong> com NPS, CSAT, CES, SMILE e QUIZ.</li>
        <li><strong>Painel em tempo real</strong> com resultados por período e por terminal.</li>
        <li><strong>Coleta por QR Code e WhatsApp</strong>, além do totem.</li>
        <li><strong>Personalização</strong> das telas com o nome e as cores da sua empresa.</li>
        <li><strong>Relatório diário por e-mail</strong> e exportação em PDF, Excel e CSV.</li>
        <li><strong>Modo offline</strong>: as respostas ficam no dispositivo e sincronizam depois.</li>
        <li><strong>Suporte em horário comercial</strong> para configurar a primeira campanha.</li>
      </ul>

      <h2>O que você precisa para começar</h2>
      <ol>
        <li>Um <strong>tablet Android 5.1 ou superior</strong> (Samsung, Lenovo, Amazon ou similar) — pode ser um que você já tenha.</li>
        <li>Uma <strong>conexão de internet</strong> para sincronizar os resultados (a coleta funciona offline).</li>
        <li>Definir <strong>qual pergunta</strong> quer fazer: nota de 0 a 10 (NPS), grau de satisfação (CSAT) ou carinhas (SMILE).</li>
      </ol>
      <p>Não precisa de equipe de TI, instalação complexa nem mudança na sua operação.</p>

      <h2>Como funciona, dia a dia</h2>
      <ol>
        <li><strong>Dia 0:</strong> você fala com a gente pelo WhatsApp e recebe o acesso.</li>
        <li><strong>Dia 1:</strong> montamos a campanha juntos, com a sua pergunta e a sua identidade visual.</li>
        <li><strong>Dias 2 a 6:</strong> você coleta respostas no ponto de atendimento e acompanha no painel.</li>
        <li><strong>Dia 7:</strong> você decide se continua. Se sim, escolhe um plano. Se não, o acesso simplesmente expira.</li>
      </ol>

      <h2>Por que só 7 dias</h2>
      <p>Sete dias é o suficiente para você responder às três perguntas que importam: os clientes respondem? O painel é fácil de usar? A equipe consegue operar no dia a dia? Se a resposta for sim, você contrata com segurança. Se for não, você economizou tempo e dinheiro.</p>

      <h2>E depois do teste?</h2>
      <div class="table-wrap">
        <table>
          <caption>O que acontece no fim dos 7 dias</caption>
          <thead><tr><th>Você decide</th><th>O que acontece</th></tr></thead>
          <tbody>
            <tr><th>Continuar</th><td>Escolhe um plano a partir de <strong>R$ 69,90/mês</strong>. As campanhas e respostas do teste são mantidas.</td></tr>
            <tr><th>Continuar com totem</th><td>Adiciona o equipamento por aluguel ou compra. Veja <a href="{{root}}locacao-de-totens.html">locação</a> ou <a href="{{root}}venda-de-totens.html">aquisição</a>.</td></tr>
            <tr><th>Não continuar</th><td>O acesso expira e nada é cobrado. Sem multa, sem letra miúda.</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Para quem o teste faz sentido</h2>
      <ul>
        <li><strong>Farmácias e drogarias:</strong> avaliar a orientação do farmacêutico.</li>
        <li><strong>Clínicas e consultórios:</strong> medir tempo de espera e atenção da recepção.</li>
        <li><strong>Restaurantes e cafeterias:</strong> atendimento, tempo de preparo e ambiente.</li>
        <li><strong>Varejo e lojas:</strong> se o cliente encontrou o que procurava.</li>
        <li><strong>Academias, concessionárias e eventos:</strong> experiência geral.</li>
      </ul>
      <p>Se o seu negócio tem atendimento presencial, o teste mostra o que a pesquisa entrega na prática. Veja também as <a href="{{root}}segmentos.html">aplicações por segmento</a>.</p>

      <div class="note">
        <p><strong>Uma ressalva honesta:</strong> com 7 dias, você valida a operação e o painel, mas <strong>não</strong> tem tempo de acumular histórico suficiente para conclusões estatísticas. Para isso, recomendamos 30 dias de coleta — já dentro do plano.</p>
      </div>
    </div>
  </div>
</section>

${section({
  alt: true,
  kicker: "Próximo passo",
  title: "Comece o teste hoje",
  body: `<p>Fale com a nossa equipe pelo WhatsApp, monte a primeira campanha e veja as respostas chegando no painel.</p>
  <div class="btn-row">
    <a class="btn btn--wa" href="{{wa}}" target="_blank" rel="noopener">Começar o teste grátis</a>
    <a class="btn btn--ghost" href="{{root}}planos-e-precos.html">Ver os planos</a>
  </div>`,
})}
`,
  faqTitle: "Perguntas frequentes sobre o teste grátis",
  faq: [
    {
      q: "O teste grátis é realmente grátis?",
      a: "<p>Sim. Não pedimos cartão de crédito e não há cobrança automática ao final. Se você não quiser continuar, o acesso expira e nada é cobrado.</p>",
    },
    {
      q: "Preciso comprar o totem para testar?",
      a: "<p>Não. O teste usa o software com o seu próprio tablet Android 5.1 ou superior. O equipamento só entra se você quiser, depois do teste.</p>",
    },
    {
      q: "Posso testar no computador?",
      a: "<p>Sim, é possível responder pelo navegador para validar as perguntas e o painel. Para simular a experiência real do cliente no balcão, o tablet é o mais indicado.</p>",
    },
    {
      q: "Quantas respostas consigo coletar em 7 dias?",
      a: "<p>Depende do fluxo do seu ponto de atendimento. Como orientação, uma operação com movimento costuma receber dezenas de respostas por dia durante o teste.</p>",
    },
    {
      q: "Preciso de equipe de TI para configurar?",
      a: "<p>Não. A configuração é feita em conjunto com o nosso suporte, em horário comercial, e leva poucos minutos.</p>",
    },
    {
      q: "Meus dados ficam com vocês depois do teste?",
      a: "<p>As respostas coletadas no teste são mantidas se você continuar. Se não continuar, os dados são excluídos conforme a nossa <a href='{{root}}politica-de-privacidade.html'>política de privacidade</a> e a LGPD.</p>",
    },
  ],
  llms: {
    section: "principal",
    summary:
      "Teste grátis de 7 dias do sistema de pesquisa de satisfação: software completo, sem cartão de crédito, usando tablet próprio. Ao final, planos a partir de R$ 69,90/mês.",
  },
  priority: "0.9",
};

/* ------------------------------ SEGMENTOS ------------------------------- */
const segmentsList = [
  ["farmacias", "Farmácias e drogarias", "Avalie a orientação do farmacêutico, o tempo de espera e a clareza sobre o uso do medicamento. O totem fica ao lado do caixa, depois do pagamento.", "“O farmacêutico esclareceu suas dúvidas sobre o medicamento?”"],
  ["clinicas", "Clínicas e consultórios", "Meça a experiência na recepção, o tempo de espera e a clareza das orientações. O paciente responde antes de sair, sem formulário no balcão.", "“Como você avalia o tempo de espera e a atenção da recepção?”"],
  ["restaurantes", "Restaurantes e cafeterias", "Colete a avaliação do atendimento, do tempo de preparo e do ambiente. O totem pode ficar na entrada, no caixa ou na saída.", "“Como avalia o atendimento, o tempo de preparo e o ambiente?”"],
  ["varejo", "Varejo e lojas", "Entenda se o cliente encontrou o que procurava e como foi atendido pelo vendedor. Ideal para o balcão de pagamento e a entrega do produto.", "“O vendedor ajudou você a encontrar o que precisava?”"],
  ["academias", "Academias", "Avalie recepção, limpeza, equipamentos e suporte dos professores. A coleta na saída captura a percepção com a experiência ainda fresca.", "“Como você avalia a estrutura e o atendimento da academia hoje?”"],
  ["concessionarias", "Concessionárias", "Meça a experiência no showroom, no test drive e na entrega do veículo. O totem de piso funciona bem em áreas de circulação.", "“Como foi sua experiência na concessionária hoje?”"],
  ["shoppings", "Shoppings e centros comerciais", "Colete a percepção sobre limpeza, segurança, sinalização e experiência geral. Totens de piso em áreas de circulação ampliam o alcance.", "“Como você avalia sua experiência no shopping hoje?”"],
  ["eventos", "Eventos e feiras", "Avalie conteúdo, organização, estandes e atendimento durante o evento. A locação por período permite usar o totem só nos dias necessários.", "“Como você avalia o evento até agora?”"],
  ["orgaos-publicos", "Órgãos públicos", "Meça a satisfação com o atendimento, o tempo de espera e a clareza das informações. A pesquisa ajuda a acompanhar a qualidade do serviço prestado.", "“Como você avalia o atendimento que recebeu hoje?”"],
];

export const segments = {
  slug: "segmentos.html",
  active: null,
  type: "article",
  kicker: "Aplicações",
  title: "Totem de Pesquisa por Segmento | beend.tech",
  description:
    "Totem de pesquisa de satisfação para farmácias, clínicas, restaurantes, varejo, academias, concessionárias, shoppings, eventos e órgãos públicos.",
  h1: "Totem de pesquisa de satisfação por segmento",
  lead:
    "O mesmo equipamento, aplicado ao fluxo de cada negócio. Veja onde instalar e qual pergunta faz sentido em cada operação.",
  crumbs: [
    { name: "Home", href: "index.html" },
    { name: "Segmentos" },
  ],
  body: `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>O totem de pesquisa de satisfação se adapta a qualquer operação com atendimento presencial.</strong> O que muda entre segmentos é o ponto de instalação, a pergunta principal e a métrica usada.</p>
      <p>Abaixo, aplicações para farmácias, clínicas, restaurantes, varejo, academias, concessionárias, shoppings, eventos e órgãos públicos.</p>
    `)}

    <div class="section__head">
      <p class="kicker">Segmentos</p>
      <h2>Aplicações por tipo de negócio</h2>
      <p>Escolha o segmento mais próximo da sua operação para ver onde instalar e qual pergunta usar.</p>
    </div>

    <div class="grid grid--2" style="margin-top:8px">
      ${segmentsList
        .map(
          ([id, title, text, question]) => `<section class="card" id="${id}">
        <h3>${title}</h3>
        <p>${text}</p>
        <p style="margin-top:12px"><strong>Pergunta exemplo:</strong> ${question}</p>
      </section>`
        )
        .join("\n      ")}
    </div>

    <div class="prose" style="margin-top:44px">
      <h2>Como escolher a pergunta certa para o seu segmento</h2>
      <p>A regra é simples: a pergunta precisa estar ligada ao que o cliente acabou de viver. Em uma farmácia, a orientação sobre o medicamento importa mais do que o ambiente. Em um restaurante, tempo de preparo e atendimento pesam mais do que a sinalização.</p>
      <p>Se o objetivo é acompanhar a relação de longo prazo, use NPS. Se é medir a experiência de hoje, use CSAT. Se o processo tem muitas etapas, use CES. O <a href="{{root}}pesquisa-de-satisfacao.html">guia de métricas</a> explica cada caso.</p>

      <h2>Um ou vários pontos de coleta</h2>
      <p>Redes podem padronizar a pesquisa e comparar unidades no mesmo painel. Nesse caso, vale manter o mesmo conjunto de perguntas e a mesma escala em todas as lojas, para que a comparação seja válida.</p>
      <p>Para operações com muitos pontos, a locação costuma ser mais simples do que a compra. Veja <a href="{{root}}locacao-de-totens.html">locação de totens</a>.</p>
    </div>
  </div>
</section>
`,
  faqTitle: "Perguntas frequentes sobre aplicação",
  faq: [
    {
      q: "Meu segmento não está na lista. O totem serve?",
      a: "<p>Provavelmente sim. Qualquer operação com atendimento presencial e clientes circulando pode usar o totem. O que muda é o ponto de instalação e a pergunta. Fale com a equipe para avaliar o seu fluxo.</p>",
    },
    {
      q: "Posso usar perguntas diferentes em cada loja?",
      a: "<p>Pode, mas a comparação entre unidades fica prejudicada. O recomendado é manter a mesma pergunta e a mesma escala, mudando apenas a personalização visual.</p>",
    },
    {
      q: "Qual modelo é indicado para lojas pequenas?",
      a: "<p>O totem de mesa, por ocupar menos espaço e ficar próximo do atendente. Em lojas com grande circulação, o modelo de piso tende a captar mais respostas.</p>",
    },
    {
      q: "Órgãos públicos podem usar?",
      a: "<p>Sim. A pesquisa ajuda a medir tempo de espera, clareza das informações e qualidade do atendimento. A configuração deve respeitar as regras de tratamento de dados aplicáveis ao órgão.</p>",
    },
  ],
  schema: [
    {
      "@type": "ItemList",
      "@id": "https://beend.tech/segmentos.html#lista",
      name: "Segmentos atendidos",
      itemListElement: segmentsList.map(([id, name], i) => ({
        "@type": "ListItem",
        position: i + 1,
        name,
        url: `https://beend.tech/segmentos.html#${id}`,
      })),
    },
  ],
  llms: {
    section: "principal",
    summary:
      "Aplicações do totem de pesquisa por segmento: farmácias, clínicas, restaurantes, varejo, academias, concessionárias, shoppings, eventos e órgãos públicos.",
  },
  priority: "0.7",
};

/* -------------------------------- CONTATO -------------------------------- */
export const contact = {
  slug: "contato.html",
  active: "contato.html",
  type: "contact",
  kicker: "Fale com a beend.tech",
  title: "Contato e Orçamento | beend.tech",
  description:
    "Peça um orçamento de totem de pesquisa de satisfação. WhatsApp (61) 99595-7461, e-mail beendtech@gmail.com ou formulário. Atendimento em todo o Brasil.",
  h1: "Peça um orçamento de totem de pesquisa",
  lead:
    "Conte quantos pontos de coleta você precisa e qual métrica quer acompanhar. A equipe responde com modelo, plano e prazo de implantação.",
  crumbs: [{ name: "Home", href: "index.html" }, { name: "Contato" }],
  body: `
<section class="section">
  <div class="wrap">
    <div class="contact-grid">
      <div>
        <h2>Fale direto com a equipe</h2>
        <p>O caminho mais rápido é o WhatsApp. Se preferir, use o formulário ao lado ou envie um e-mail.</p>
        <ul class="contact-list">
          <li><b>WhatsApp comercial</b><a href="{{wa}}" target="_blank" rel="noopener">{{phone}}</a></li>
          <li><b>Telefone alternativo</b><a href="tel:+5561991459009">{{phone2}}</a></li>
          <li><b>E-mail</b><a href="mailto:beendtech@gmail.com">beendtech@gmail.com</a></li>
          <li><b>Atendimento</b><span>Segunda a sexta, das 9h às 18h</span></li>
        </ul>
        <p style="margin-top:26px"><a class="btn btn--wa" href="{{wa}}" target="_blank" rel="noopener">Abrir conversa no WhatsApp</a></p>
        <p class="small muted">Atendemos empresas de todo o Brasil. A implantação é combinada conforme a localização.</p>
      </div>

      <form class="form" id="form-orcamento" novalidate>
        <h2 style="font-size:1.3rem;margin-bottom:16px">Pedir proposta</h2>
        <div class="field">
          <label for="nome">Nome*</label>
          <input id="nome" name="nome" type="text" autocomplete="name" required>
        </div>
        <div class="field">
          <label for="empresa">Empresa</label>
          <input id="empresa" name="empresa" type="text" autocomplete="organization">
        </div>
        <div class="field">
          <label for="telefone">WhatsApp*</label>
          <input id="telefone" name="telefone" type="tel" autocomplete="tel" inputmode="tel" data-mask="phone" placeholder="(61) 99999-9999" required>
        </div>
        <div class="field">
          <label for="segmento">Segmento</label>
          <select id="segmento" name="segmento">
            <option value="">Selecione</option>
            <option>Farmácia</option>
            <option>Clínica ou consultório</option>
            <option>Restaurante ou cafeteria</option>
            <option>Varejo ou loja</option>
            <option>Academia</option>
            <option>Concessionária</option>
            <option>Shopping</option>
            <option>Evento ou feira</option>
            <option>Órgão público</option>
            <option>Outro</option>
          </select>
        </div>
        <div class="field">
          <label for="mensagem">O que você precisa?</label>
          <textarea id="mensagem" name="mensagem" placeholder="Ex.: 3 lojas, totem de mesa, pesquisa de CSAT."></textarea>
        </div>
        <button class="btn btn--primary btn--block" type="submit">Enviar pelo WhatsApp</button>
        <p class="hint">Ao enviar, você será direcionado ao WhatsApp com a mensagem preenchida. Nenhum dado é armazenado neste site.</p>
        <p class="status" id="form-status" role="status" aria-live="polite"></p>
      </form>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="wrap">
    <div class="section__head">
      <p class="kicker">Cobertura</p>
      <h2>Atendemos empresas de todo o Brasil</h2>
      <p>Base em Brasília — DF, com instalação e suporte remoto para as demais regiões. A logística é combinada conforme o projeto.</p>
    </div>
  </div>
</section>

<script>
(function () {
  var form = document.getElementById('form-orcamento');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var nome = form.nome.value.trim();
    var tel = form.telefone.value.trim();
    if (!nome || !tel) {
      document.getElementById('form-status').textContent = 'Preencha nome e WhatsApp para continuar.';
      return;
    }
    var texto = 'Olá! Quero um orçamento de totem de pesquisa de satisfação.'
      + '\\n\\nNome: ' + nome
      + '\\nEmpresa: ' + (form.empresa.value.trim() || 'não informada')
      + '\\nWhatsApp: ' + tel
      + '\\nSegmento: ' + (form.segmento.value || 'não informado')
      + '\\nNecessidade: ' + (form.mensagem.value.trim() || 'não informada');
    document.getElementById('form-status').textContent = 'Abrindo o WhatsApp…';
    var url = 'https://wa.me/5561995957461?text=' + encodeURIComponent(texto);
    var w = window.open(url, '_blank', 'noopener');
    if (!w) location.href = url;
  });
})();
</script>
`,
  faqTitle: "Antes de falar com a gente",
  faq: [
    {
      q: "Qual o prazo de resposta?",
      a: "<p>O atendimento é de segunda a sexta, das 9h às 18h. Mensagens no WhatsApp costumam ser respondidas no mesmo dia útil.</p>",
    },
    {
      q: "Vocês atendem fora de Brasília?",
      a: "<p>Sim. A sede fica em Brasília, mas a implantação e o suporte atendem empresas de todo o Brasil, com logística combinada conforme o projeto.</p>",
    },
    {
      q: "O que devo informar no primeiro contato?",
      a: "<p>Quantos pontos de coleta você precisa, se prefere locação ou compra, qual modelo interessa (mesa ou piso) e qual métrica quer acompanhar. Com isso, a proposta sai mais rápida.</p>",
    },
  ],
  llms: {
    section: "empresa",
    summary:
      "Contato comercial: WhatsApp (61) 99595-7461, e-mail beendtech@gmail.com e formulário de orçamento. Atendimento em todo o Brasil.",
  },
  priority: "0.8",
};

/* --------------------------------- 404 ---------------------------------- */
export const notFound = {
  slug: "404.html",
  active: null,
  type: "website",
  noindex: true,
  kicker: "Erro 404",
  title: "Página não encontrada | beend.tech",
  description: "A página que você procura não existe ou foi movida. Veja os links para totem de pesquisa, planos e preços ou contato.",
  h1: "Página não encontrada",
  lead: "O endereço pode ter mudado. Use os links abaixo para continuar.",
  body: `
<section class="section">
  <div class="wrap">
    <h2 class="visually-hidden">Links úteis</h2>
    <div class="grid grid--3">
      <a class="card card--link" href="{{root}}totem-de-pesquisa-de-satisfacao.html"><h3>Totem de pesquisa</h3><p>O que é, como funciona e quanto custa.</p><span class="card__more">Abrir</span></a>
      <a class="card card--link" href="{{root}}planos-e-precos.html"><h3>Planos e preços</h3><p>Aquisição (PRO INFINITY) ou locação. Valores sob consulta.</p><span class="card__more">Abrir</span></a>
      <a class="card card--link" href="{{root}}contato.html"><h3>Contato</h3><p>Fale com a equipe e peça uma proposta.</p><span class="card__more">Abrir</span></a>
    </div>
  </div>
</section>
`,
  llms: null,
};

/* ------------------------------- PRIVACIDADE ---------------------------- */
export const privacy = {
  slug: "politica-de-privacidade.html",
  active: null,
  type: "article",
  title: "Política de Privacidade e LGPD | beend.tech",
  description:
    "Como a beend.tech trata dados pessoais em pesquisas de satisfação, formulários e contato comercial, conforme a LGPD.",
  h1: "Política de privacidade e LGPD",
  lead:
    "Como coletamos, usamos e protegemos dados pessoais no site, nos formulários e na plataforma de pesquisa de satisfação.",
  crumbs: [
    { name: "Home", href: "index.html" },
    { name: "Privacidade" },
  ],
  body: `
<section class="section">
  <div class="wrap">
    <div class="prose">
      <h2>Quais dados coletamos</h2>
      <p>Neste site, coletamos apenas os dados que você informa voluntariamente no formulário de contato: nome, empresa, WhatsApp, segmento e descrição da necessidade. O envio abre uma conversa no WhatsApp; o site não armazena esses dados em banco próprio.</p>
      <p>Na plataforma de pesquisa de satisfação contratada pelos clientes, podem ser tratados dados de respondentes, como nota, comentário e identificadores definidos pelo cliente.</p>

      <h2>Para que usamos</h2>
      <ul>
        <li>Responder solicitações de orçamento e contato comercial.</li>
        <li>Prestar suporte e operar a plataforma contratada.</li>
        <li>Cumprir obrigações legais e regulatórias.</li>
      </ul>

      <h2>Base legal</h2>
      <p>O tratamento pode se apoiar em consentimento, execução de contrato, cumprimento de obrigação legal ou legítimo interesse, conforme o caso e o artigo aplicável da Lei nº 13.709/2018 (LGPD).</p>

      <h2>Compartilhamento</h2>
      <p>Não vendemos dados pessoais. O compartilhamento ocorre apenas com fornecedores necessários à operação, como hospedagem e comunicação, e com autoridades quando houver obrigação legal.</p>

      <h2>Direitos do titular</h2>
      <p>O titular pode solicitar confirmação de tratamento, acesso, correção, anonimização, portabilidade, eliminação e informação sobre compartilhamento. Para exercer os direitos, envie um e-mail para <a href="mailto:{{email}}">{{email}}</a>.</p>

      <h2>Segurança e retenção</h2>
      <p>Adotamos medidas técnicas e administrativas para proteger os dados. As informações são mantidas pelo tempo necessário às finalidades descritas ou conforme exigência legal.</p>

      <h2>Contato do encarregado</h2>
      <p>Dúvidas sobre privacidade podem ser encaminhadas para <a href="mailto:{{email}}">{{email}}</a> ou pelo telefone {{phone}}.</p>

      <p class="small muted">Última atualização: 02/11/2026.</p>
    </div>
  </div>
</section>
`,
  llms: {
    section: "empresa",
    summary:
      "Política de privacidade e LGPD: dados coletados, finalidades, base legal, compartilhamento, direitos do titular e contato.",
  },
  priority: "0.3",
};

/* --------------------------------- SOBRE --------------------------------- */
export const about = {
  slug: "sobre.html",
  active: null,
  type: "article",
  kicker: "A empresa",
  title: "Sobre a beend.tech | Totens e Pesquisa de Satisfação",
  description:
    "Conheça a beend.tech: empresa de Brasília-DF, desde 2017, especializada em totens e plataforma de pesquisa de satisfação do cliente com NPS, CSAT e CES.",
  h1: "Sobre a beend.tech",
  lead:
    "Empresa brasileira de Brasília-DF que fornece totens e uma plataforma de pesquisa de satisfação do cliente para medir NPS, CSAT e CES no ponto de atendimento.",
  crumbs: [{ name: "Home", href: "index.html" }, { name: "Sobre" }],
  body: `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>beend.tech é a marca da Backeend Soluções Inteligentes, empresa de Brasília-DF fundada em 28 de novembro de 2017 (CNPJ 61.171.282/0001-84).</strong> Ela fornece totens e uma plataforma de pesquisa de satisfação do cliente, com coleta por totem, QR Code e WhatsApp e indicadores NPS, CSAT, CES, SMILE e QUIZ.</p>
      <p>O trabalho começou com totens interativos e evoluiu para um ecossistema completo: o equipamento, o aplicativo de coleta e o painel online que transforma as respostas em decisão.</p>
    `)}

    <div class="prose">
      <h2>O que a beend.tech faz</h2>
      <p>A beend.tech ajuda empresas a ouvir o cliente no momento certo. Em vez de depender de um formulário enviado dias depois, a coleta acontece no ponto de atendimento, enquanto a experiência ainda está fresca.</p>
      <ul>
        <li><strong>Totens:</strong> modelos de mesa e de piso, em locação (comodato) ou venda, personalizados com a identidade visual da empresa.</li>
        <li><strong>Aplicativo de coleta:</strong> pesquisas NPS, CSAT, CES, escala de carinhas (SMILE) e quiz, com funcionamento offline.</li>
        <li><strong>Plataforma online:</strong> painel com resultados por período, campanha e unidade, com filtros e exportação.</li>
        <li><strong>Canais complementares:</strong> a mesma campanha pode rodar no totem, por QR Code e por WhatsApp.</li>
      </ul>
      <p>Para entender cada formato, veja o <a href="{{root}}totem-de-pesquisa-de-satisfacao.html">guia do totem de pesquisa</a> e as páginas de <a href="{{root}}locacao-de-totens.html">locação</a> e <a href="{{root}}venda-de-totens.html">venda</a>.</p>

      <h2>Dados da empresa</h2>
      <div class="table-wrap">
        <table>
          <caption>Informações cadastrais e de atendimento</caption>
          <tbody>
            <tr><th>Razão social</th><td>Backeend Soluções Inteligentes</td></tr>
            <tr><th>CNPJ</th><td>61.171.282/0001-84</td></tr>
            <tr><th>Fundação</th><td>28 de novembro de 2017</td></tr>
            <tr><th>Sede</th><td>Brasília — DF, Brasil</td></tr>
            <tr><th>Atendimento</th><td>Segunda a sexta, das 9h às 18h</td></tr>
            <tr><th>Telefones</th><td><a href="tel:+5561995957461">{{phone}}</a> e <a href="tel:+5561991459009">{{phone2}}</a></td></tr>
            <tr><th>E-mail</th><td><a href="mailto:{{email}}">{{email}}</a></td></tr>
            <tr><th>Área de atuação</th><td>Todo o Brasil, com sede em Brasília-DF</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Números da operação</h2>
      <div class="stats">
        <div class="stat"><b>200+</b><span>clientes atendidos</span></div>
        <div class="stat"><b>400+</b><span>terminais ativos</span></div>
        <div class="stat"><b>300+</b><span>campanhas ativas</span></div>
        <div class="stat"><b>140 mil+</b><span>pesquisas realizadas</span></div>
      </div>

      <h2>Como trabalhamos</h2>
      <ol>
        <li><strong>Diagnóstico:</strong> entendemos o fluxo de atendimento, o número de pontos de coleta e a métrica que importa.</li>
        <li><strong>Proposta:</strong> definimos modelo, quantidade de terminais, personalização, prazo e formato comercial (locação ou compra).</li>
        <li><strong>Implantação:</strong> o totem e a pesquisa são configurados com a identidade visual e as perguntas da empresa.</li>
        <li><strong>Operação e suporte:</strong> acompanhamento dos resultados no painel e atendimento em horário comercial.</li>
      </ol>

      <h2>Por que a beend.tech</h2>
      <ul>
        <li><strong>Equipamento e software no mesmo fornecedor:</strong> reduz a fricção entre o totem, o aplicativo e o painel.</li>
        <li><strong>Funciona offline:</strong> as respostas ficam no dispositivo e sincronizam quando a conexão volta.</li>
        <li><strong>Aceita tablet próprio:</strong> compatível com Android 5.1 ou superior, o que diminui o investimento em hardware.</li>
        <li><strong>Transparência comercial:</strong> os dois formatos são explicados abertamente; o valor é fechado em proposta, sem taxa escondida.</li>
        <li><strong>Multicanal:</strong> totem, QR Code e WhatsApp alimentando o mesmo painel.</li>
      </ul>

      <h2>Contato</h2>
      <p>Para orçamento, o caminho mais rápido é o WhatsApp <a href="{{wa}}" target="_blank" rel="noopener">{{phone}}</a>. Você também pode usar a <a href="{{root}}contato.html">página de contato</a> ou enviar um e-mail para <a href="mailto:{{email}}">{{email}}</a>.</p>
    </div>
  </div>
</section>
`,
  faqTitle: "Perguntas frequentes sobre a empresa",
  faq: [
    {
      q: "Onde fica a beend.tech?",
      a: "<p>A sede fica em Brasília — DF. A empresa atende clientes de todo o Brasil, com logística de implantação combinada conforme o projeto.</p>",
    },
    {
      q: "Desde quando a beend.tech existe?",
      a: "<p>A Backeend Soluções Inteligentes foi fundada em 28 de novembro de 2017. Desde então, passou de totens interativos a um ecossistema completo de coleta e análise de satisfação do cliente.</p>",
    },
    {
      q: "O que a beend.tech vende?",
      a: "<p>Totens de pesquisa de satisfação (em locação ou venda) e a assinatura da plataforma que faz a coleta e mostra os resultados, com métricas NPS, CSAT e CES. Também atende por QR Code e WhatsApp.</p>",
    },
    {
      q: "A beend.tech atende fora de Brasília?",
      a: "<p>Sim. A sede é em Brasília, mas a empresa atende empresas de todo o Brasil. O formato da implantação é definido na proposta, conforme a localização.</p>",
    },
    {
      q: "Qual é o preço?",
      a: "<p>Equipamento e software têm valor sob consulta. O totem pode ser adquirido (PRO INFINITY) ou alugado, e o investimento é informado em proposta, conforme modelo, quantidade e personalização.</p>",
    },
  ],
  schema: [
    {
      "@type": "AboutPage",
      "@id": "https://beend.tech/sobre.html#pagina",
      name: "Sobre a beend.tech",
      about: { "@id": "https://beend.tech/#organization" },
      inLanguage: "pt-BR",
    },
  ],
  llms: {
    section: "empresa",
    summary:
      "Sobre a beend.tech: empresa de Brasília-DF fundada em 2017 (CNPJ 61.171.282/0001-84), que fornece totens e plataforma de pesquisa de satisfação com NPS, CSAT e CES.",
  },
  priority: "0.6",
};
