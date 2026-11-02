import { section, answer } from "./_ui.mjs";

const serviceSchema = (name, url, description) => [
  {
    "@type": "Service",
    "@id": `${url}#servico`,
    name,
    serviceType: description,
    provider: { "@id": "https://beend.tech/#organization" },
    areaServed: { "@type": "Country", name: "Brasil" },
    offers: {
      "@type": "Offer",
      priceCurrency: "BRL",
      description: "Equipamento e software sob consulta, conforme modelo, quantidade e prazo",
    },
  },
];

export const services = [
  /* ------------------------------- LOCAÇÃO ------------------------------- */
  {
    slug: "locacao-de-totens.html",
    active: "locacao-de-totens.html",
    type: "article",
    kicker: "Locação e comodato",
    title: "Locação de Totem de Pesquisa de Satisfação | beend.tech",
    description:
      "Locação de totem de pesquisa de satisfação em regime de comodato: menor investimento inicial, equipamento incluso e suporte. Ideal para redes, eventos e testes.",
    h1: "Locação de totem de pesquisa de satisfação",
    lead:
      "Para quem quer medir a satisfação sem comprar equipamento: você paga uma mensalidade pelo uso do totem e pela plataforma, com suporte incluído.",
    crumbs: [
      { name: "Home", href: "index.html" },
      { name: "Locação de totens" },
    ],
    body: `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>Na locação (comodato), a beend.tech fornece o totem, o aplicativo e o painel de resultados por uma mensalidade.</strong> O equipamento fica na sua empresa durante o contrato e não exige o investimento inicial de uma compra.</p>
      <p>É a opção mais usada por redes que estão testando o canal, por operações com várias unidades e por empresas que preferem tratar o totem como serviço, e não como patrimônio.</p>
    `)}

    <div class="prose">
      <h2>Como funciona a locação</h2>
      <ol>
        <li><strong>Diagnóstico:</strong> entendemos o fluxo de atendimento, o número de pontos e a métrica principal.</li>
        <li><strong>Proposta:</strong> definimos modelo (mesa ou piso), quantidade de terminais, personalização e mensalidade.</li>
        <li><strong>Implantação:</strong> o totem é configurado com a sua pesquisa e a sua identidade visual.</li>
        <li><strong>Operação:</strong> o cliente responde no ponto de atendimento e você acompanha tudo no painel.</li>
        <li><strong>Suporte:</strong> atendimento em horário comercial para ajustes, dúvidas e manutenção.</li>
      </ol>

      <h2>O que está incluído</h2>
      <ul>
        <li>Uso do totem durante o período contratado.</li>
        <li>Aplicativo de coleta com pesquisas NPS, CSAT, CES, SMILE e QUIZ.</li>
        <li>Painel online de resultados, com filtros e exportação.</li>
        <li>Personalização visual do equipamento e da tela.</li>
        <li>Suporte humanizado em horário comercial.</li>
      </ul>
      <p>As condições de prazo, manutenção e devolução do equipamento são definidas em contrato e informadas na proposta.</p>

      <h2>Para quem a locação faz mais sentido</h2>
      <ul>
        <li><strong>Redes com várias unidades:</strong> padroniza a coleta sem imobilizar capital em equipamentos.</li>
        <li><strong>Empresas testando o canal:</strong> permite validar a operação antes de decidir pela compra.</li>
        <li><strong>Eventos e ações temporárias:</strong> o totem é usado por um período determinado e devolvido depois.</li>
        <li><strong>Operações que preferem serviço a patrimônio:</strong> manutenção e suporte ficam com o fornecedor.</li>
      </ul>

      <h2>Locação ou venda?</h2>
      <div class="table-wrap">
        <table>
          <caption>Comparativo entre locação e venda do totem</caption>
          <thead><tr><th>Critério</th><th>Locação (comodato)</th><th>Venda</th></tr></thead>
          <tbody>
            <tr><th>Investimento inicial</th><td>Menor</td><td>Maior</td></tr>
            <tr><th>Propriedade do equipamento</th><td>Do fornecedor</td><td>Da sua empresa</td></tr>
            <tr><th>Manutenção</th><td>Incluída no contrato</td><td>Conforme condições da compra</td></tr>
            <tr><th>Indicado para</th><td>Testes, redes, eventos e uso contínuo sem compra</td><td>Operação permanente com uso intenso</td></tr>
            <tr><th>Personalização</th><td>Sim</td><td>Sim</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Locação para eventos</h2>
      <p>Feiras, convenções e ações de curta duração também podem usar o totem para captar a avaliação dos participantes. Nesse caso, o escopo inclui o período de uso, a personalização da tela e a configuração da pesquisa.</p>
      <p>Para eventos, vale definir antes: quantos dias de coleta, se haverá internet estável no local e qual métrica será apresentada no relatório final.</p>
    </div>
  </div>
</section>

${section({
  alt: true,
  kicker: "Compare",
  title: "Prefere comprar o equipamento?",
  body: `<p>Na venda, o totem passa a ser patrimônio da empresa e o software continua como assinatura. Entenda as diferenças antes de decidir.</p>
  <p><a class="btn btn--dark" href="{{root}}venda-de-totens.html">Ver venda de totens</a></p>`,
})}
`,
    faqTitle: "Perguntas frequentes sobre locação",
    faq: [
      {
        q: "O que é comodato?",
        a: "<p>No comodato, o fornecedor cede o equipamento para uso durante o contrato, e o cliente paga uma mensalidade. O totem não passa a ser propriedade da empresa ao final, salvo condição específica prevista em contrato.</p>",
      },
      {
        q: "A locação inclui o software?",
        a: "<p>Sim. O pacote de locação combina o uso do equipamento com o aplicativo de coleta e o painel de resultados. As condições são detalhadas na proposta.</p>",
      },
      {
        q: "Posso personalizar o totem alugado?",
        a: "<p>Sim. A estrutura e a tela podem receber a identidade visual da empresa. O grau de personalização e o prazo são definidos junto com o modelo escolhido.</p>",
      },
      {
        q: "Qual o prazo mínimo de locação?",
        a: "<p>O prazo depende do projeto e da quantidade de terminais. Ele é informado na proposta comercial, junto com as condições de renovação e devolução.</p>",
      },
      {
        q: "A locação serve para eventos?",
        a: "<p>Sim, para ações de curta duração o escopo é ajustado ao período do evento. É importante confirmar a disponibilidade do modelo e a logística de entrega com antecedência.</p>",
      },
    ],
    schema: serviceSchema(
      "Locação de totem de pesquisa de satisfação",
      "https://beend.tech/locacao-de-totens.html",
      "Locação de totens de pesquisa de satisfação em regime de comodato, com software e suporte"
    ),
    llms: {
      section: "servicos",
      summary:
        "Locação de totem de pesquisa de satisfação em comodato: menor investimento inicial, equipamento, software e suporte incluídos, para redes, testes e eventos.",
    },
    priority: "0.8",
  },

  /* -------------------------------- VENDA -------------------------------- */
  {
    slug: "venda-de-totens.html",
    active: "venda-de-totens.html",
    type: "article",
    kicker: "Compra",
    title: "Venda de Totem de Pesquisa de Satisfação | beend.tech",
    description:
      "Compra de totem de pesquisa de satisfação personalizado, com aplicativo Android, modo offline e painel de NPS, CSAT e CES. Peça uma proposta.",
    h1: "Venda de totem de pesquisa de satisfação",
    lead:
      "Para operações permanentes que querem o equipamento como patrimônio: totem personalizado, aplicativo instalado e software em assinatura.",
    crumbs: [
      { name: "Home", href: "index.html" },
      { name: "Venda de totens" },
    ],
    body: `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>Na compra, o totem é fabricado com a identidade visual da empresa e passa a ser patrimônio dela.</strong> O aplicativo de coleta já sai configurado, e a plataforma de resultados é contratada como assinatura, com valor sob consulta.</p>
      <p>A compra é indicada para quem vai usar o totem de forma contínua, em um ou mais pontos fixos de atendimento.</p>
    `)}

    <div class="prose">
      <h2>O que você recebe</h2>
      <ul>
        <li><strong>Totem personalizado:</strong> estrutura com a identidade visual da empresa.</li>
        <li><strong>Aplicativo de coleta:</strong> pesquisas NPS, CSAT, CES, SMILE e QUIZ, com modo offline.</li>
        <li><strong>Painel de resultados:</strong> acesso online às respostas, métricas e relatórios.</li>
        <li><strong>Configuração inicial:</strong> pesquisa e telas ajustadas ao seu fluxo de atendimento.</li>
        <li><strong>Suporte:</strong> atendimento em horário comercial para operação e dúvidas.</li>
      </ul>

      <h2>Quando vale a pena comprar</h2>
      <ul>
        <li>O totem ficará em uso contínuo, por mais de um ciclo de contrato.</li>
        <li>A empresa quer o equipamento no ativo e prefere não pagar locação indefinidamente.</li>
        <li>Há necessidade de personalização profunda da estrutura.</li>
        <li>O ponto de atendimento é fixo e tem previsão de permanência longa.</li>
      </ul>
      <p>Se o objetivo é testar o canal, cobrir várias unidades temporariamente ou usar o totem em um evento, a <a href="{{root}}locacao-de-totens.html">locação</a> costuma ser mais racional.</p>

      <h2>Especificações da solução</h2>
      <div class="table-wrap">
        <table>
          <caption>Características do totem e do software</caption>
          <thead><tr><th>Item</th><th>Detalhe</th></tr></thead>
          <tbody>
            <tr><th>Sistema</th><td>Android 5.1 ou superior</td></tr>
            <tr><th>Tela</th><td>Touch screen, com interface personalizável</td></tr>
            <tr><th>Coleta</th><td>NPS, CSAT, CES, SMILE (carinhas) e QUIZ</td></tr>
            <tr><th>Conectividade</th><td>Wi-Fi; operação offline com sincronização posterior</td></tr>
            <tr><th>Personalização</th><td>Logo, cores e mensagens da empresa</td></tr>
            <tr><th>Gestão</th><td>Painel online, com resultados por período e campanha</td></tr>
            <tr><th>Dispositivo próprio</th><td>Compatível com tablets e boxes Android 5.1+</td></tr>
          </tbody>
        </table>
      </div>
      <p class="small muted">Modelos, tamanhos de tela e materiais variam conforme a configuração escolhida. As especificações finais constam na proposta.</p>

      <h2>Compra e assinatura do software</h2>
      <p>A compra do equipamento e a assinatura da plataforma são contratos distintos. O totem pode ser adquirido uma vez; o software é cobrado mensalmente para manter coleta, painel, armazenamento e suporte.</p>
      <p>Isso permite atualizar a pesquisa, criar novas campanhas e acompanhar os indicadores sem trocar o equipamento.</p>

      <h2>Personalização</h2>
      <p>A personalização pode incluir a cor da estrutura, a aplicação da logo, a tela de espera, a mensagem de convite e as telas de agradecimento. O objetivo é que o totem pareça parte da operação, e não um corpo estranho no balcão.</p>
      <p>Quanto mais alinhado ao ambiente, maior tende a ser a taxa de resposta.</p>
    </div>
  </div>
</section>

${section({
  alt: true,
  kicker: "Antes de decidir",
  title: "Compare compra e locação",
  body: `<div class="grid grid--2">
    <a class="card card--link" href="{{root}}locacao-de-totens.html"><h3>Locação (comodato)</h3><p>Menor investimento inicial, manutenção incluída e foco no serviço.</p><span class="card__more">Ver locação</span></a>
    <a class="card card--link" href="{{root}}planos-e-precos.html"><h3>Planos e preços</h3><p>O que está incluso, o que muda o valor e como pedir proposta.</p><span class="card__more">Ver planos</span></a>
  </div>`,
})}
`,
    faqTitle: "Perguntas frequentes sobre compra",
    faq: [
      {
        q: "O totem comprado inclui o software?",
        a: "<p>O equipamento é vendido separadamente da assinatura da plataforma. O software é contratado por mensalidade e inclui coleta, painel e suporte. O valor é informado em proposta.</p>",
      },
      {
        q: "Posso comprar só o software e usar meu tablet?",
        a: "<p>Sim. O aplicativo é compatível com dispositivos Android 5.1 ou superior. Nesse caso, o investimento em hardware é zero, desde que o tablet atenda aos requisitos e possa ficar dedicado à pesquisa.</p>",
      },
      {
        q: "Qual o prazo de entrega do totem?",
        a: "<p>Depende do modelo, da personalização e da quantidade. O prazo é informado na proposta, junto com o cronograma de produção e configuração.</p>",
      },
      {
        q: "Há garantia no equipamento?",
        a: "<p>As condições de garantia e assistência são definidas em contrato e informadas na proposta comercial, conforme o modelo adquirido.</p>",
      },
      {
        q: "O totem pode ser usado em mais de uma unidade?",
        a: "<p>Sim. Cada ponto pode ter um terminal próprio, todos ligados à mesma plataforma. O plano é dimensionado pelo número de terminais e canais.</p>",
      },
    ],
    schema: serviceSchema(
      "Venda de totem de pesquisa de satisfação",
      "https://beend.tech/venda-de-totens.html",
      "Venda de totens personalizados de pesquisa de satisfação com aplicativo Android e painel de resultados"
    ),
    llms: {
      section: "servicos",
      summary:
        "Venda de totem de pesquisa de satisfação personalizado, com aplicativo Android, modo offline e painel de NPS, CSAT e CES; software em assinatura.",
    },
    priority: "0.8",
  },

  /* ------------------------------ TOTEM MESA ------------------------------ */
  {
    slug: "totem-de-mesa.html",
    active: null,
    type: "article",
    kicker: "Modelo compacto",
    title: "Totem de Mesa para Pesquisa de Satisfação | beend.tech",
    description:
      "Totem de mesa para pesquisa de satisfação: compacto, touch, personalizado e com modo offline. Ideal para balcões, clínicas, farmácias e restaurantes.",
    h1: "Totem de mesa para pesquisa de satisfação",
    lead:
      "O modelo compacto para balcões e recepções: o cliente avalia o atendimento sem sair da frente de quem o atendeu.",
    crumbs: [
      { name: "Home", href: "index.html" },
      { name: "Totem de mesa" },
    ],
    body: `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>O totem de mesa é um terminal touch compacto, apoiado sobre o balcão ou a recepção, usado para o cliente responder à pesquisa de satisfação logo após o atendimento.</strong> Ele roda o mesmo aplicativo e o mesmo painel do totem de piso.</p>
      <p>Atenção: aqui falamos de totem digital para pesquisa de satisfação, não de totens de papel ou de acrílico usados em festas e sinalização.</p>
    `)}

    <div class="prose">
      <h2>Onde usar</h2>
      <ul>
        <li><strong>Farmácias:</strong> ao lado do caixa, após a orientação do farmacêutico.</li>
        <li><strong>Clínicas e consultórios:</strong> na recepção e na saída do atendimento.</li>
        <li><strong>Restaurantes e cafeterias:</strong> no caixa ou na entrega da conta.</li>
        <li><strong>Lojas e concessionárias:</strong> no balcão de vendas e na entrega do produto.</li>
        <li><strong>Academias:</strong> na recepção e no acesso à área de treino.</li>
      </ul>

      <h2>Por que escolher o modelo de mesa</h2>
      <ul>
        <li><strong>Ocupa pouco espaço:</strong> cabe em balcões estreitos e recepções pequenas.</li>
        <li><strong>Fica no campo de visão:</strong> o cliente vê o convite enquanto espera o atendimento terminar.</li>
        <li><strong>Interação assistida:</strong> o atendente pode indicar o totem no momento certo.</li>
        <li><strong>Mesma plataforma:</strong> métricas, campanhas e painel idênticos aos do modelo de piso.</li>
      </ul>

      <h2>Como o cliente responde</h2>
      <p>A tela mostra a pesquisa configurada pela empresa. Pode ser uma escala de carinhas, uma nota de 0 a 10 (NPS), uma escala de 1 a 5 (CSAT) ou um quiz com perguntas de múltipla escolha.</p>
      <p>Em poucos toques, a resposta é registrada. Se a internet cair, ela fica armazenada no dispositivo e sincroniza quando a conexão volta.</p>

      <h2>Especificações</h2>
      <div class="table-wrap">
        <table>
          <caption>Ficha técnica do totem de mesa</caption>
          <thead><tr><th>Item</th><th>Detalhe</th></tr></thead>
          <tbody>
            <tr><th>Formato</th><td>Compacto, para apoio em balcão ou recepção</td></tr>
            <tr><th>Tela</th><td>Touch screen</td></tr>
            <tr><th>Sistema</th><td>Android 5.1 ou superior</td></tr>
            <tr><th>Conectividade</th><td>Wi-Fi, com operação offline e sincronização</td></tr>
            <tr><th>Pesquisas</th><td>NPS, CSAT, CES, SMILE e QUIZ</td></tr>
            <tr><th>Personalização</th><td>Logo, cores e mensagens da empresa</td></tr>
            <tr><th>Gestão</th><td>Painel online com resultados por período e campanha</td></tr>
          </tbody>
        </table>
      </div>
      <p class="small muted">Tamanhos de tela, materiais e acabamentos variam conforme o modelo. As especificações finais constam na proposta.</p>

      <h2>Personalização e instalação</h2>
      <p>O totem pode receber a identidade visual da empresa na estrutura e na tela. A instalação é simples: basta um ponto de energia e, para tempo real, uma conexão Wi-Fi estável.</p>
      <p>Para redes com várias unidades, o ideal é padronizar a pesquisa e a comunicação visual, mantendo o mesmo conjunto de perguntas para permitir comparação entre lojas.</p>
    </div>
  </div>
</section>

${section({
  alt: true,
  kicker: "Outro formato",
  title: "Precisa de mais visibilidade?",
  body: `<p>Em locais de alto fluxo, o totem de piso chama mais atenção e captura respostas de quem passa.</p>
  <p><a class="btn btn--dark" href="{{root}}totem-de-piso.html">Ver totem de piso</a></p>`,
})}
`,
    faqTitle: "Perguntas frequentes sobre o totem de mesa",
    faq: [
      {
        q: "Qual a diferença entre totem de mesa e totem de piso?",
        a: "<p>O de mesa é compacto e fica sobre o balcão, indicado para atendimento individual. O de piso fica apoiado no chão, tem maior presença visual e é usado em locais de grande circulação. O software e as métricas são os mesmos.</p>",
      },
      {
        q: "O totem de mesa precisa de internet?",
        a: "<p>Para coletar, não: as respostas ficam no dispositivo e sincronizam depois. Para acompanhar os resultados em tempo real, é necessária uma conexão Wi-Fi.</p>",
      },
      {
        q: "Cabe em balcão pequeno?",
        a: "<p>O modelo é compacto e foi pensado para balcões e recepções com pouco espaço. As dimensões exatas variam conforme o modelo e são informadas na proposta.</p>",
      },
      {
        q: "Posso usar em consultório ou clínica?",
        a: "<p>Sim. É um dos usos mais comuns: o paciente avalia o atendimento na recepção, logo após a consulta, sem precisar preencher formulário.</p>",
      },
    ],
    schema: serviceSchema(
      "Totem de mesa para pesquisa de satisfação",
      "https://beend.tech/totem-de-mesa.html",
      "Totem de mesa touch para pesquisa de satisfação em balcões, clínicas, farmácias e restaurantes"
    ),
    llms: {
      section: "servicos",
      summary:
        "Totem de mesa para pesquisa de satisfação: compacto, touch, personalizado, com modo offline; indicado para balcões, clínicas, farmácias e restaurantes.",
    },
    priority: "0.7",
  },

  /* ------------------------------ TOTEM PISO ------------------------------ */
  {
    slug: "totem-de-piso.html",
    active: null,
    type: "article",
    kicker: "Alto fluxo",
    title: "Totem de Piso para Pesquisa de Satisfação | beend.tech",
    description:
      "Totem de piso para pesquisa de satisfação: maior visibilidade, tela touch, personalização e modo offline. Para shoppings, lojas, restaurantes e eventos.",
    h1: "Totem de piso para pesquisa de satisfação",
    lead:
      "O modelo de maior presença visual, para captar a opinião de quem circula por lojas, shoppings, restaurantes e eventos.",
    crumbs: [
      { name: "Home", href: "index.html" },
      { name: "Totem de piso" },
    ],
    body: `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>O totem de piso é um terminal touch apoiado no chão, com estrutura vertical, usado para coletar a pesquisa de satisfação em locais de grande circulação.</strong> A altura e a presença visual fazem o convite antes de o cliente chegar ao balcão.</p>
      <p>É indicado para shoppings, supermercados, restaurantes, concessionárias, recepções de grande porte e eventos.</p>
    `)}

    <div class="prose">
      <h2>Onde usar</h2>
      <ul>
        <li><strong>Shoppings e centros comerciais:</strong> áreas de circulação e praças de alimentação.</li>
        <li><strong>Supermercados:</strong> saída do caixa e corredores de maior fluxo.</li>
        <li><strong>Restaurantes:</strong> entrada, caixa e saída.</li>
        <li><strong>Concessionárias:</strong> showroom e área de entrega.</li>
        <li><strong>Eventos e feiras:</strong> pontos de saída e estandes.</li>
        <li><strong>Recepções corporativas:</strong> halls de atendimento e áreas de espera.</li>
      </ul>

      <h2>Vantagens do modelo de piso</h2>
      <ul>
        <li><strong>Visibilidade:</strong> é visto de longe e funciona como convite à participação.</li>
        <li><strong>Fluxo independente:</strong> o cliente responde sem depender do atendente.</li>
        <li><strong>Volume:</strong> em locais movimentados, tende a gerar mais respostas por dia.</li>
        <li><strong>Personalização:</strong> a estrutura pode receber a identidade visual da marca.</li>
      </ul>

      <h2>Como funciona a coleta</h2>
      <p>O cliente se aproxima, lê o convite na tela e responde à pesquisa em poucos toques. A resposta é enviada ao painel, que consolida NPS, CSAT, CES e comentários.</p>
      <p>Em caso de queda de internet, as respostas ficam armazenadas no equipamento e são sincronizadas automaticamente quando a conexão retorna.</p>

      <h2>Especificações</h2>
      <div class="table-wrap">
        <table>
          <caption>Ficha técnica do totem de piso</caption>
          <thead><tr><th>Item</th><th>Detalhe</th></tr></thead>
          <tbody>
            <tr><th>Formato</th><td>Estrutura vertical de piso</td></tr>
            <tr><th>Tela</th><td>Touch screen</td></tr>
            <tr><th>Sistema</th><td>Android 5.1 ou superior</td></tr>
            <tr><th>Conectividade</th><td>Wi-Fi, com operação offline e sincronização</td></tr>
            <tr><th>Pesquisas</th><td>NPS, CSAT, CES, SMILE e QUIZ</td></tr>
            <tr><th>Personalização</th><td>Logo, cores e mensagens da empresa</td></tr>
            <tr><th>Gestão</th><td>Painel online com resultados por período e campanha</td></tr>
          </tbody>
        </table>
      </div>
      <p class="small muted">Tamanhos de tela, materiais e acabamentos variam conforme o modelo. As especificações finais constam na proposta.</p>

      <h2>Onde posicionar para aumentar a taxa de resposta</h2>
      <p>O totem precisa estar no caminho natural do cliente, e não escondido em um canto. Alguns princípios ajudam:</p>
      <ul>
        <li>Posicione na saída, depois do atendimento ou do pagamento.</li>
        <li>Deixe a tela na altura dos olhos e o convite legível à distância.</li>
        <li>Evite refletores e luz solar direta sobre a tela.</li>
        <li>Mantenha o texto curto: uma pergunta e uma instrução.</li>
        <li>Garanta espaço para o cliente parar sem atrapalhar o fluxo.</li>
      </ul>
    </div>
  </div>
</section>

${section({
  alt: true,
  kicker: "Outro formato",
  title: "Pouco espaço no balcão?",
  body: `<p>O totem de mesa ocupa menos área e mantém a mesma plataforma de coleta e análise.</p>
  <p><a class="btn btn--dark" href="{{root}}totem-de-mesa.html">Ver totem de mesa</a></p>`,
})}
`,
    faqTitle: "Perguntas frequentes sobre o totem de piso",
    faq: [
      {
        q: "O totem de piso precisa de ponto de energia?",
        a: "<p>Sim. O equipamento precisa de tomada e, para sincronização em tempo real, de uma conexão Wi-Fi estável. A instalação é definida no local durante a implantação.</p>",
      },
      {
        q: "Funciona em local sem internet?",
        a: "<p>Sim. As respostas ficam armazenadas no dispositivo e são sincronizadas quando a conexão retorna. Para acompanhamento em tempo real, é necessária conexão.</p>",
      },
      {
        q: "Pode ficar exposto ao sol ou à chuva?",
        a: "<p>O totem é indicado para ambientes internos e cobertos. Para áreas externas, é necessário avaliar a proteção do equipamento com a equipe técnica antes da instalação.</p>",
      },
      {
        q: "Qual a diferença de preço entre mesa e piso?",
        a: "<p>O modelo de piso costuma ter custo maior por causa da estrutura e do tamanho da tela. O valor final depende da configuração e é informado na proposta.</p>",
      },
    ],
    schema: serviceSchema(
      "Totem de piso para pesquisa de satisfação",
      "https://beend.tech/totem-de-piso.html",
      "Totem de piso touch para pesquisa de satisfação em shoppings, lojas, restaurantes e eventos"
    ),
    llms: {
      section: "servicos",
      summary:
        "Totem de piso para pesquisa de satisfação: maior visibilidade, touch, personalização e modo offline; indicado para shoppings, lojas, restaurantes e eventos.",
    },
    priority: "0.7",
  },

  /* -------------------------------- WHATSAPP ------------------------------ */
  {
    slug: "pesquisa-de-satisfacao-whatsapp.html",
    active: null,
    type: "article",
    kicker: "Canal digital",
    title: "Pesquisa de Satisfação pelo WhatsApp: Como Fazer",
    description:
      "Como fazer pesquisa de satisfação pelo WhatsApp: passo a passo, modelo de mensagem pronto, boas práticas, LGPD e integração com o totem.",
    h1: "Pesquisa de satisfação pelo WhatsApp: como fazer",
    lead:
      "O canal em que o cliente já está, com taxa de abertura alta e resposta rápida. Veja como estruturar a pesquisa sem incomodar.",
    crumbs: [
      { name: "Home", href: "index.html" },
      { name: "Pesquisa por WhatsApp" },
    ],
    body: `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>Para fazer pesquisa de satisfação pelo WhatsApp, envie uma mensagem curta com uma pergunta de nota ou carinha e um link para a resposta.</strong> O ideal é disparar logo depois do atendimento, com opt-in registrado e uma única pergunta principal.</p>
      <p>Na beend.tech, o WhatsApp é um dos canais da mesma plataforma: as respostas caem no mesmo painel do totem e do QR Code, com NPS, CSAT e CES consolidados.</p>
    `)}

    <div class="prose">
      <h2>Por que usar o WhatsApp</h2>
      <ul>
        <li><strong>Alcance:</strong> é o canal em que a maioria dos clientes brasileiros já está todos os dias.</li>
        <li><strong>Abertura:</strong> mensagens de WhatsApp tendem a ser vistas muito mais rápido do que e-mail.</li>
        <li><strong>Simplicidade:</strong> o cliente responde em dois toques, sem instalar nada.</li>
        <li><strong>Rastreabilidade:</strong> é possível saber quem respondeu e cruzar com a unidade ou o atendente.</li>
      </ul>

      <h2>Como fazer, passo a passo</h2>
      <ol>
        <li><strong>Defina a pergunta principal:</strong> NPS (“de 0 a 10, quanto recomendaria?”) ou CSAT (“qual seu grau de satisfação?”).</li>
        <li><strong>Escolha o momento:</strong> logo após o atendimento, a compra ou a entrega. Quanto mais perto da experiência, melhor.</li>
        <li><strong>Registre o opt-in:</strong> o cliente precisa ter concordado em receber contato. Isso protege a operação e atende à LGPD.</li>
        <li><strong>Monte a mensagem:</strong> identifique a empresa, explique o motivo em uma frase e inclua o link direto para a pesquisa.</li>
        <li><strong>Dispare em lotes:</strong> evite mensagens fora de horário e repetições para quem já respondeu.</li>
        <li><strong>Analise e feche o ciclo:</strong> acompanhe as respostas no painel e comunique as melhorias feitas.</li>
      </ol>

      <h2>Modelo de mensagem pronto</h2>
      <blockquote>
        <p>Olá, [nome]! Aqui é a [empresa]. Você fez [serviço/compra] com a gente hoje. Podemos saber como foi? São só 2 toques:</p>
        <p>[link da pesquisa]</p>
        <p>Seu retorno ajuda a melhorar nosso atendimento. Obrigado!</p>
      </blockquote>
      <p>Para NPS, o link pode abrir uma escala de 0 a 10. Para CSAT, uma escala de carinhas ou de 1 a 5. Evite pedir nota e comentário na mesma mensagem: o comentário pode vir na tela seguinte, como opcional.</p>

      <h2>Boas práticas</h2>
      <ul>
        <li><strong>Uma pergunta por mensagem.</strong> Pesquisa longa no WhatsApp vira abandono.</li>
        <li><strong>Identifique-se.</strong> O cliente precisa saber quem está falando e por quê.</li>
        <li><strong>Respeite o horário.</strong> Dispare em horário comercial, de preferência perto do atendimento.</li>
        <li><strong>Não insista.</strong> Uma mensagem é convite; três viram spam.</li>
        <li><strong>Ofereça saída.</strong> Deixe claro como o cliente pode deixar de receber mensagens.</li>
        <li><strong>Não prometa anonimato se o número estiver identificado.</strong> Seja transparente sobre o uso do dado.</li>
      </ul>

      <h2>LGPD e consentimento</h2>
      <p>A pesquisa de satisfação trata dados pessoais (nome, telefone e opinião). Por isso, é necessário informar a finalidade, coletar apenas o necessário e permitir que o cliente solicite a exclusão.</p>
      <p>O consentimento para receber a pesquisa pode ser registrado no cadastro, no momento da compra ou no primeiro contato. Guarde o registro e respeite o descadastro.</p>

      <h2>WhatsApp + totem: os canais se complementam</h2>
      <p>O totem captura a experiência presencial, no momento em que o cliente está na sua frente. O WhatsApp alcança quem saiu da loja e permite uma segunda pergunta, alguns dias depois.</p>
      <p>Uma operação comum combina <strong>CSAT no totem</strong> e <strong>NPS no WhatsApp</strong>. Os dois resultados aparecem no mesmo painel, o que permite comparar a percepção imediata com a lembrança posterior.</p>
      <p>Se o seu objetivo é captar no balcão, veja também a <a href="{{root}}pesquisa-de-satisfacao-qrcode.html">pesquisa por QR Code</a>.</p>
    </div>
  </div>
</section>

${section({
  alt: true,
  kicker: "Próximo passo",
  title: "Coloque a pesquisa no ar",
  body: `<div class="grid grid--2">
    <a class="card card--link" href="{{root}}planos-e-precos.html"><h3>Planos e preços</h3><p>Plataforma com totem, QR Code e WhatsApp. Valores sob consulta.</p><span class="card__more">Ver planos</span></a>
    <a class="card card--link" href="{{root}}pesquisa-de-satisfacao.html"><h3>Guia de métricas</h3><p>NPS, CSAT e CES: fórmulas e exemplos de perguntas.</p><span class="card__more">Ler o guia</span></a>
  </div>`,
})}
`,
    faqTitle: "Perguntas frequentes sobre pesquisa no WhatsApp",
    faq: [
      {
        q: "Como enviar pesquisa de satisfação pelo WhatsApp?",
        a: "<p>Envie uma mensagem curta logo após o atendimento, com uma pergunta de nota ou carinha e um link direto para a resposta. O cliente precisa ter autorizado o contato, e o disparo deve respeitar horário comercial e descadastro.</p>",
      },
      {
        q: "Qual a melhor pergunta para WhatsApp?",
        a: "<p>Uma pergunta de NPS (0 a 10) ou CSAT (1 a 5) funciona bem porque é rápida de responder. Comentários abertos devem ser opcionais, em uma segunda etapa.</p>",
      },
      {
        q: "Pesquisa por WhatsApp pode ser considerada spam?",
        a: "<p>Pode, se enviada sem consentimento ou em excesso. Registre a autorização, identifique a empresa, envie uma única mensagem e ofereça uma forma simples de descadastro.</p>",
      },
      {
        q: "O WhatsApp substitui o totem?",
        a: "<p>Não. O totem captura a experiência presencial no momento em que ela acontece; o WhatsApp alcança o cliente depois. Os dois canais se complementam e podem alimentar o mesmo painel.</p>",
      },
      {
        q: "Preciso de API oficial do WhatsApp?",
        a: "<p>Depende do volume e do tipo de disparo. Para operações maiores e integradas à plataforma, o uso de uma API oficial traz mais controle e conformidade. As condições são definidas na proposta.</p>",
      },
    ],
    schema: [
      {
        "@type": "Article",
        "@id": "https://beend.tech/pesquisa-de-satisfacao-whatsapp.html#artigo",
        headline: "Pesquisa de satisfação pelo WhatsApp: como fazer",
        description:
          "Passo a passo para fazer pesquisa de satisfação pelo WhatsApp, com modelo de mensagem, boas práticas e LGPD.",
        author: { "@id": "https://beend.tech/#organization" },
        publisher: { "@id": "https://beend.tech/#organization" },
        datePublished: "2026-11-02",
        dateModified: "2026-11-02",
        inLanguage: "pt-BR",
        mainEntityOfPage:
          "https://beend.tech/pesquisa-de-satisfacao-whatsapp.html",
      },
    ],
    llms: {
      section: "servicos",
      summary:
        "Como fazer pesquisa de satisfação pelo WhatsApp: passo a passo, modelo de mensagem pronto, boas práticas, LGPD e integração com o totem.",
    },
    priority: "0.8",
  },

  /* --------------------------------- QR CODE ------------------------------ */
  {
    slug: "pesquisa-de-satisfacao-qrcode.html",
    active: null,
    type: "article",
    kicker: "Canal presencial",
    title: "Pesquisa de Satisfação por QR Code: Como Criar",
    description:
      "Como criar pesquisa de satisfação por QR Code: passo a passo, onde posicionar, boas práticas e como medir NPS e CSAT sem instalar aplicativo.",
    h1: "Pesquisa de satisfação por QR Code: como criar e onde usar",
    lead:
      "Um código impresso no recibo, na mesa ou no balcão transforma o celular do cliente em terminal de pesquisa — sem app e sem cadastro.",
    crumbs: [
      { name: "Home", href: "index.html" },
      { name: "Pesquisa por QR Code" },
    ],
    body: `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>Para criar uma pesquisa de satisfação por QR Code, gere um link de pesquisa e transforme esse link em um código QR.</strong> O cliente aponta a câmera, abre a página no navegador e responde em poucos toques.</p>
      <p>Na beend.tech, o QR Code é um dos canais da plataforma: as respostas entram no mesmo painel do totem e do WhatsApp, com NPS, CSAT e CES consolidados.</p>
    `)}

    <div class="prose">
      <h2>Como funciona</h2>
      <ol>
        <li>Você cria a pesquisa na plataforma (NPS, CSAT, CES, carinhas ou quiz).</li>
        <li>A plataforma gera um link público para responder.</li>
        <li>O link é convertido em um QR Code.</li>
        <li>O código é impresso no recibo, na mesa, na embalagem ou em um cartaz.</li>
        <li>O cliente escaneia com a câmera e responde no navegador.</li>
        <li>A resposta aparece no painel, identificada pelo canal.</li>
      </ol>

      <h2>Como criar, passo a passo</h2>
      <ol>
        <li><strong>Defina a pergunta:</strong> NPS (“de 0 a 10, quanto recomendaria?”) ou CSAT (“qual seu grau de satisfação?”).</li>
        <li><strong>Crie a pesquisa na plataforma:</strong> escolha o tipo, a escala e a mensagem de agradecimento.</li>
        <li><strong>Copie o link:</strong> use um endereço curto e estável.</li>
        <li><strong>Gere o QR Code:</strong> a própria plataforma pode gerar, ou você pode usar um gerador confiável.</li>
        <li><strong>Teste com o celular:</strong> escaneie o código impresso, responda e confira se a resposta aparece no painel.</li>
        <li><strong>Imprima e posicione:</strong> use tamanho legível e uma frase de convite curta.</li>
      </ol>

      <h2>Onde colocar o QR Code</h2>
      <ul>
        <li><strong>Recibo ou nota:</strong> o cliente já está com o papel na mão.</li>
        <li><strong>Mesa do restaurante:</strong> adesivo ou display de mesa.</li>
        <li><strong>Balcão e caixa:</strong> placa pequena voltada para o cliente.</li>
        <li><strong>Embalagem:</strong> para compras levadas para casa.</li>
        <li><strong>Cartaz e wobler:</strong> em locais de espera e saída.</li>
        <li><strong>E-mail ou WhatsApp:</strong> o mesmo link pode ser compartilhado digitalmente.</li>
      </ul>

      <h2>Boas práticas</h2>
      <ul>
        <li><strong>Escreva o convite.</strong> “Avalie nosso atendimento em 30 segundos” funciona melhor do que só o código.</li>
        <li><strong>Teste a impressão.</strong> QR Code pequeno, com pouco contraste ou em superfície curva falha na leitura.</li>
        <li><strong>Mantenha o link estável.</strong> Se o endereço mudar, os códigos impressos param de funcionar.</li>
        <li><strong>Não peça login.</strong> Cada etapa extra reduz a taxa de resposta.</li>
        <li><strong>Use uma pergunta principal.</strong> O comentário deve ser opcional.</li>
        <li><strong>Meça por canal.</strong> Separe as respostas do QR Code das do totem para saber o que funciona.</li>
      </ul>

      <h2>Vantagens e limitações</h2>
      <div class="table-wrap">
        <table>
          <caption>QR Code na pesquisa de satisfação</caption>
          <thead><tr><th>Vantagens</th><th>Limitações</th></tr></thead>
          <tbody>
            <tr><td>Baixo custo de implantação</td><td>Depende do cliente querer escanear</td></tr>
            <tr><td>Funciona no celular, sem aplicativo</td><td>Exige boa impressão e posicionamento</td></tr>
            <tr><td>Pode ser replicado em vários pontos</td><td>Não captura quem não tem celular ou não quer usar</td></tr>
            <tr><td>Integra-se ao mesmo painel do totem</td><td>Taxa de resposta costuma ser menor que a do totem</td></tr>
          </tbody>
        </table>
      </div>
      <p>Para locais de alto fluxo, o totem costuma captar mais respostas porque elimina a etapa do scan. O QR Code é útil como complemento, especialmente em recibos e embalagens.</p>
    </div>
  </div>
</section>

${section({
  alt: true,
  kicker: "Combine canais",
  title: "QR Code no recibo, totem no balcão",
  body: `<p>Os dois canais podem rodar a mesma campanha e alimentar o mesmo painel. Assim você compara a experiência presencial com a lembrança posterior.</p>
  <p><a class="btn btn--dark" href="{{root}}totem-de-pesquisa-de-satisfacao.html">Conhecer o totem</a></p>`,
})}
`,
    faqTitle: "Perguntas frequentes sobre QR Code",
    faq: [
      {
        q: "Como criar um QR Code para pesquisa de satisfação?",
        a: "<p>Crie a pesquisa na plataforma, copie o link público e gere o QR Code a partir desse link. Depois, imprima em recibo, mesa, balcão ou cartaz e teste com o celular antes de distribuir.</p>",
      },
      {
        q: "O cliente precisa instalar aplicativo?",
        a: "<p>Não. O QR Code abre a pesquisa no navegador do celular. Isso reduz a barreira e aumenta a taxa de conclusão.</p>",
      },
      {
        q: "QR Code ou totem: qual responde mais?",
        a: "<p>Em geral, o totem responde mais em locais de fluxo, porque elimina a etapa do scan. O QR Code é mais barato e útil em recibos e embalagens. O ideal é medir os dois canais separadamente.</p>",
      },
      {
        q: "O QR Code pode ser usado em impressos?",
        a: "<p>Sim. Recibos, embalagens, cartazes, displays de mesa e materiais de PDV funcionam bem, desde que o código tenha tamanho e contraste adequados.</p>",
      },
    ],
    schema: [
      {
        "@type": "Article",
        "@id": "https://beend.tech/pesquisa-de-satisfacao-qrcode.html#artigo",
        headline: "Pesquisa de satisfação por QR Code: como criar e onde usar",
        description:
          "Passo a passo para criar pesquisa de satisfação por QR Code, onde posicionar e boas práticas.",
        author: { "@id": "https://beend.tech/#organization" },
        publisher: { "@id": "https://beend.tech/#organization" },
        datePublished: "2026-11-02",
        dateModified: "2026-11-02",
        inLanguage: "pt-BR",
        mainEntityOfPage:
          "https://beend.tech/pesquisa-de-satisfacao-qrcode.html",
      },
    ],
    llms: {
      section: "servicos",
      summary:
        "Como criar pesquisa de satisfação por QR Code: passo a passo, onde posicionar, vantagens, limitações e integração com o painel.",
    },
    priority: "0.8",
  },
];
