import { section, answer } from "./_ui.mjs";

export const pillar = {
  slug: "totem-de-pesquisa-de-satisfacao.html",
  active: "totem-de-pesquisa-de-satisfacao.html",
  type: "article",
  kicker: "Guia completo",
  title: "Totem de Pesquisa de Satisfação: o que é e como funciona",
  description:
    "O que é um totem de pesquisa de satisfação, como funciona, o que mede (NPS, CSAT e CES), quanto custa e como escolher entre totem de mesa, de piso ou tablet próprio.",
  h1: "Totem de pesquisa de satisfação: o que é, como funciona e quanto custa",
  lead:
    "Um guia direto para quem precisa medir a satisfação do cliente no ponto de atendimento e está avaliando um totem pela primeira vez.",
  crumbs: [
    { name: "Home", href: "index.html" },
    { name: "Totem de pesquisa de satisfação" },
  ],
  body: `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>Um totem de pesquisa de satisfação é um terminal com tela touch instalado no ponto de atendimento.</strong> O cliente responde a uma pesquisa curta — de duas carinhas a uma nota de 0 a 10 — e a resposta vai para um painel que calcula indicadores como NPS, CSAT e CES.</p>
      <p>O totem pode ser alugado (comodato) ou adquirido, e a plataforma de gestão é contratada à parte — equipamento e software com valor sob consulta. A coleta também pode ser feita por QR Code, WhatsApp ou pelo tablet da própria empresa.</p>
    `)}

    <div class="toc">
      <p>Neste guia</p>
      <ol>
        <li><a href="#o-que-e">O que é um totem de pesquisa de satisfação</a></li>
        <li><a href="#como-funciona">Como funciona, passo a passo</a></li>
        <li><a href="#metricas">O que dá para medir</a></li>
        <li><a href="#tipos">Tipos de totem: mesa, piso ou tablet</a></li>
        <li><a href="#onde-instalar">Onde instalar</a></li>
        <li><a href="#offline">Funciona sem internet?</a></li>
        <li><a href="#preco">Quanto custa</a></li>
        <li><a href="#como-escolher">Como escolher</a></li>
        <li><a href="#faq">Perguntas frequentes</a></li>
      </ol>
    </div>

    <div class="prose">
      <h2 id="o-que-e">O que é um totem de pesquisa de satisfação</h2>
      <p>O totem de pesquisa de satisfação — também chamado de totem de avaliação de atendimento ou opiniômetro digital — é um equipamento colocado onde o cliente termina a experiência: na saída do caixa, no balcão da farmácia, na recepção da clínica ou na mesa do restaurante.</p>
      <p>A função é reduzir ao mínimo o esforço de responder. Em vez de um formulário longo enviado por e-mail, o cliente toca em uma carinha, escolhe uma nota ou responde a duas ou três perguntas. O dado chega ao gestor no mesmo dia, e não na semana seguinte.</p>
      <p>Um totem completo tem três partes:</p>
      <ul>
        <li><strong>Hardware:</strong> tela touch, estrutura, fonte e conectividade.</li>
        <li><strong>Aplicativo de coleta:</strong> a pesquisa que aparece na tela, com a identidade visual da empresa.</li>
        <li><strong>Plataforma de gestão:</strong> o painel onde as respostas viram indicadores, gráficos e relatórios.</li>
      </ul>
      <p>É essa terceira parte que separa um totem de pesquisa de um totem puramente publicitário. Sem o painel, o equipamento coleta dados que ninguém consegue analisar.</p>

      <h2 id="como-funciona">Como funciona, passo a passo</h2>
      <ol>
        <li><strong>Escolha do modelo e do ponto:</strong> totem de mesa para balcões e consultórios, totem de piso para locais de alto fluxo, ou o próprio tablet da empresa.</li>
        <li><strong>Configuração da pesquisa:</strong> definição do tipo (NPS, CSAT, CES, carinhas ou quiz), das perguntas e da escala.</li>
        <li><strong>Personalização visual:</strong> logo, cores e mensagem de convite na tela e na estrutura do totem.</li>
        <li><strong>Coleta:</strong> o cliente responde sem cadastro e sem instalar aplicativo. Se a internet cair, as respostas ficam armazenadas no dispositivo.</li>
        <li><strong>Sincronização e análise:</strong> as respostas sobem para a plataforma e aparecem no painel, por período, campanha e unidade.</li>
        <li><strong>Ação:</strong> o gestor usa o resultado para treinar a equipe, corrigir o processo e comparar a evolução ao longo do tempo.</li>
      </ol>

      <h2 id="metricas">O que dá para medir</h2>
      <p>A plataforma da beend.tech trabalha com as principais métricas de experiência do cliente. Cada uma responde a uma pergunta diferente:</p>
      <div class="table-wrap">
        <table>
          <caption>Métricas disponíveis no totem de pesquisa</caption>
          <thead>
            <tr><th>Métrica</th><th>O que mede</th><th>Pergunta típica</th><th>Cálculo</th></tr>
          </thead>
          <tbody>
            <tr><th>NPS</th><td>Lealdade e disposição de recomendar</td><td>“De 0 a 10, quanto você recomendaria nossa empresa?”</td><td>% promotores (9–10) − % detratores (0–6)</td></tr>
            <tr><th>CSAT</th><td>Satisfação com uma experiência específica</td><td>“Qual seu grau de satisfação com o atendimento?”</td><td>% de respostas 4 e 5 em uma escala de 1 a 5</td></tr>
            <tr><th>CES</th><td>Esforço para resolver o que precisava</td><td>“Foi fácil resolver o que você precisava?”</td><td>Média da escala de esforço</td></tr>
            <tr><th>SMILE</th><td>Percepção imediata, sem texto</td><td>“Como foi seu atendimento hoje?”</td><td>Distribuição entre as carinhas</td></tr>
            <tr><th>QUIZ</th><td>Respostas específicas sobre produtos e processos</td><td>Perguntas de múltipla escolha</td><td>Distribuição por alternativa</td></tr>
          </tbody>
        </table>
      </div>
      <p>Para entender quando usar cada uma, veja o <a href="{{root}}pesquisa-de-satisfacao.html">guia de pesquisa de satisfação com NPS, CSAT e CES</a>.</p>

      <h2 id="tipos">Tipos de totem: mesa, piso ou tablet</h2>
      <h3>Totem de mesa</h3>
      <p>Compacto, fica sobre o balcão ou a recepção. É indicado para atendimentos individuais, como consultórios, clínicas, farmácias, cafés e pequenas lojas. O cliente responde enquanto ainda está na frente do atendente.</p>
      <p><a href="{{root}}totem-de-mesa.html">Ver detalhes do totem de mesa →</a></p>

      <h3>Totem de piso</h3>
      <p>Fica apoiado no chão e tem maior presença visual. Funciona melhor em locais de circulação intensa: shoppings, supermercados, restaurantes, concessionárias e recepções de grande porte.</p>
      <p><a href="{{root}}totem-de-piso.html">Ver detalhes do totem de piso →</a></p>

      <h3>Tablet próprio</h3>
      <p>Quem já tem tablets Android pode usá-los como terminal de pesquisa, com o aplicativo em modo quiosque. É a opção de menor investimento em hardware, desde que o dispositivo tenha Android 5.1 ou superior.</p>

      <h2 id="onde-instalar">Onde instalar o totem</h2>
      <p>O melhor ponto é aquele em que o cliente já para naturalmente depois do atendimento. Alguns exemplos:</p>
      <ul>
        <li><strong>Farmácias:</strong> ao lado do caixa, depois do pagamento.</li>
        <li><strong>Clínicas e consultórios:</strong> na recepção, na saída do consultório.</li>
        <li><strong>Restaurantes e cafeterias:</strong> próximo ao caixa ou na saída.</li>
        <li><strong>Varejo:</strong> no balcão de pagamento ou na entrega do produto.</li>
        <li><strong>Academias:</strong> na recepção e na saída do vestiário.</li>
        <li><strong>Shoppings e eventos:</strong> em áreas de circulação, com convite visual claro.</li>
      </ul>
      <p>Colocar o totem escondido ou de costas para o fluxo reduz a taxa de resposta. Um convite visível, com uma pergunta curta, faz mais diferença do que a quantidade de perguntas.</p>

      <h2 id="offline">Funciona sem internet?</h2>
      <p>Sim. O aplicativo armazena as respostas no próprio dispositivo e sincroniza com a plataforma quando a conexão volta. Isso evita perda de dados em locais com Wi-Fi instável ou em eventos.</p>
      <p>A recomendação é manter uma conexão estável quando o objetivo é acompanhar os resultados em tempo real. Para operação offline, o totem continua coletando normalmente e envia o que ficou pendente na primeira oportunidade.</p>

      <h2 id="preco">Quanto custa um totem de pesquisa de satisfação</h2>
      <p>O custo tem dois componentes: o software e o equipamento.</p>
      <ul>
        <li><strong>Software:</strong> a plataforma de coleta e gestão é cobrada à parte do equipamento. O valor depende do número de terminais e dos canais usados (totem, QR Code e WhatsApp) e é informado em proposta.</li>
        <li><strong>Equipamento:</strong> pode ser alugado em regime de comodato ou comprado. O preço varia conforme o modelo (mesa ou piso), o tamanho da tela, a personalização e a quantidade.</li>
      </ul>
      <p>Para comparar os dois modelos comerciais, veja <a href="{{root}}locacao-de-totens.html">locação de totens</a> e <a href="{{root}}venda-de-totens.html">venda de totens</a>. Os valores de hardware são informados em proposta, porque dependem da configuração.</p>

      <h2 id="como-escolher">Como escolher um totem de pesquisa</h2>
      <p>Antes de decidir, vale responder a sete perguntas:</p>
      <ol>
        <li><strong>Onde o totem vai ficar?</strong> Balcão pede modelo de mesa; grande circulação pede piso.</li>
        <li><strong>Quantos pontos de coleta?</strong> O número de terminais muda o plano e o investimento.</li>
        <li><strong>Qual métrica importa?</strong> NPS para relação de longo prazo, CSAT para a experiência imediata, CES para atritos de processo.</li>
        <li><strong>Precisa de offline?</strong> Se a internet é instável, confirme o armazenamento local e a sincronização automática.</li>
        <li><strong>Quem vai analisar os dados?</strong> O painel precisa ser simples para quem vai usar no dia a dia.</li>
        <li><strong>Há personalização?</strong> A identidade visual aumenta o engajamento e a percepção de marca.</li>
        <li><strong>Qual o suporte?</strong> Implantação, treinamento e atendimento em horário comercial evitam que o totem vire mobília.</li>
      </ol>

      <div class="note">
        <p><strong>Erro comum:</strong> comprar o equipamento e tratar o software como detalhe. O totem é a ponta visível; o valor está na capacidade de transformar respostas em decisão. Avalie o painel e o suporte antes de comparar apenas o preço do hardware.</p>
      </div>
    </div>
  </div>
</section>

${section({
  alt: true,
  kicker: "Próximo passo",
  title: "Veja como aplicar no seu tipo de negócio",
  body: `<div class="grid grid--3">
    <a class="card card--link" href="{{root}}segmentos.html"><h3>Por segmento</h3><p>Farmácias, clínicas, restaurantes, varejo, academias e eventos.</p><span class="card__more">Ver segmentos</span></a>
    <a class="card card--link" href="{{root}}planos-e-precos.html"><h3>Planos e preços</h3><p>O que está incluso, o que muda o valor e como pedir proposta.</p><span class="card__more">Ver planos</span></a>
    <a class="card card--link" href="{{root}}pesquisa-de-satisfacao.html"><h3>Guia de métricas</h3><p>NPS, CSAT e CES com fórmulas, exemplos e perguntas prontas.</p><span class="card__more">Ler o guia</span></a>
  </div>`,
})}
`,
  faqTitle: "Perguntas frequentes sobre totem de pesquisa",
  faq: [
    {
      q: "Qual a diferença entre totem de pesquisa e totem de autoatendimento?",
      a: "<p>O totem de autoatendimento permite que o cliente faça pedidos, pagamentos ou emissão de senhas. O totem de pesquisa é dedicado a coletar a opinião do cliente sobre a experiência. Um mesmo equipamento pode ter as duas funções, mas o objetivo e o software são diferentes.</p>",
    },
    {
      q: "Quantas perguntas deve ter a pesquisa no totem?",
      a: "<p>O ideal é de uma a três perguntas. No totem, o cliente está em pé e de saída: uma pergunta de nota ou carinha seguida de um comentário opcional costuma ter a melhor taxa de resposta.</p>",
    },
    {
      q: "O totem de pesquisa precisa de internet?",
      a: "<p>Para coletar, não. O aplicativo funciona offline e armazena as respostas no dispositivo. Para acompanhar os resultados em tempo real, é necessária uma conexão para sincronizar os dados.</p>",
    },
    {
      q: "Posso personalizar o totem com a minha marca?",
      a: "<p>Sim. A estrutura e a tela podem receber a identidade visual da empresa, incluindo logo, cores e mensagem de convite. A personalização é definida junto com o modelo na proposta.</p>",
    },
    {
      q: "O totem substitui a pesquisa por e-mail ou WhatsApp?",
      a: "<p>Não precisa substituir: os canais se complementam. O totem captura a experiência presencial; o WhatsApp e o QR Code alcançam o cliente depois. A plataforma consolida tudo no mesmo painel.</p>",
    },
    {
      q: "Quanto tempo leva para implantar?",
      a: "<p>Depende do modelo escolhido, da personalização e da quantidade de terminais. O prazo é informado na proposta, junto com o cronograma de entrega e configuração.</p>",
    },
  ],
  schema: [
    {
      "@type": "Service",
      "@id": "https://beend.tech/totem-de-pesquisa-de-satisfacao.html#servico",
      name: "Totem de pesquisa de satisfação",
      serviceType:
        "Locação e venda de totens de pesquisa de satisfação com plataforma de NPS, CSAT e CES",
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
      "Guia sobre totem de pesquisa de satisfação: definição, funcionamento, métricas (NPS, CSAT, CES), tipos (mesa, piso, tablet), instalação, modo offline e preço.",
  },
  priority: "0.9",
};
