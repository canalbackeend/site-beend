import { answer, card } from "./_ui.mjs";

/* ---------------------------------------------------------------------------
   Páginas de intenção de compra (comparação e escolha).

   São as buscas que acontecem no fim do funil — "qual escolher", "vale a pena",
   "totem ou e-mail". Têm volume menor que a keyword-mãe, mas convertem muito
   melhor, porque quem busca já decidiu resolver o problema.
--------------------------------------------------------------------------- */

export const comparativos = [
  /* ------------------------- 1. GUIA DE ESCOLHA ------------------------- */
  {
    slug: "melhor-totem-de-pesquisa-de-satisfacao.html",
    active: "totem-de-pesquisa-de-satisfacao.html",
    type: "article",
    kicker: "Como escolher",
    title: "Melhor Totem de Pesquisa de Satisfação: Como Escolher",
    description:
      "Como escolher um totem de pesquisa de satisfação: 7 critérios objetivos para comparar modelos, evitar armadilhas de contrato e acertar no tamanho da tela.",
    h1: "Melhor totem de pesquisa de satisfação: como escolher",
    lead:
      "Não existe um melhor totem em abstrato — existe o totem certo para o seu fluxo de atendimento. Estes são os critérios que realmente mudam o resultado.",
    crumbs: [
      { name: "Home", href: "index.html" },
      { name: "Melhor totem de pesquisa" },
    ],
    body: `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>O melhor totem de pesquisa de satisfação é o que coleta mais respostas com o menor atrito no seu ponto de atendimento.</strong> Antes de comparar preço ou tamanho de tela, responda três perguntas: onde ele vai ficar, quem vai responder e o que você quer medir.</p>
      <p>Abaixo estão os sete critérios que separam uma escolha boa de uma escolha cara — e as armadilhas mais comuns de contrato.</p>
    `)}

    <div class="prose">
      <h2>1. O ponto de instalação define o modelo</h2>
      <p>Totem de mesa serve balcões, recepções e caixas: fica próximo do atendente e ocupa pouco espaço. Totem de piso serve áreas de circulação — shoppings, saguões, showrooms e corredores — e capta quem passa sem parar no balcão.</p>
      <p>Escolher piso para um balcão estreito, ou mesa para um saguão, é o erro mais comum e o mais caro: o equipamento fica mal posicionado e a taxa de resposta cai.</p>

      <h2>2. O modo offline não é detalhe</h2>
      <p>Se a internet cair, o totem continua coletando? Essa pergunta separa soluções maduras de soluções frágeis. Em lojas, clínicas, eventos e órgãos públicos, a conexão oscila — e perder as respostas de um dia inteiro invalida qualquer análise.</p>
      <p>O aplicativo da beend.tech armazena as respostas no próprio dispositivo e sincroniza quando a conexão volta. Vale exigir essa informação por escrito de qualquer fornecedor.</p>

      <h2>3. A métrica precisa caber na tela</h2>
      <p>NPS (0 a 10), CSAT, CES, escala de carinhas e quiz com múltiplas perguntas são formatos diferentes, com tempos de resposta diferentes. Duas carinhas levam menos de três segundos; um quiz de cinco perguntas pode levar um minuto.</p>
      <p>Defina o que você quer medir antes de escolher o hardware. A plataforma precisa calcular os indicadores automaticamente — se o cálculo de NPS for manual, a operação não se sustenta.</p>

      <h2>4. Conte com quantos terminais você realmente vai precisar</h2>
      <p>Um totem por loja é o começo mais comum, mas redes com várias unidades precisam de gestão separada por terminal, com acesso individual e comparação entre lojas. Verifique quantos terminais o plano inclui e qual o limite de respostas por mês.</p>

      <h2>5. Personalização visual não é vaidade</h2>
      <p>A tela e o totem com a identidade da empresa aumentam a taxa de resposta, porque o cliente reconhece o canal como parte da loja — e não como um equipamento estranho no balcão.</p>

      <h2>6. Contrato e manutenção</h2>
      <p>Na locação, o equipamento fica com o fornecedor e a manutenção costuma estar incluída. Na compra, o totem passa a ser patrimônio da empresa. Pergunte sempre: o que acontece se o equipamento quebrar, qual o prazo de reparo, existe fidelidade e como é a devolução.</p>

      <h2>7. O custo total, não a mensalidade</h2>
      <p>Compare o custo total em 12 meses: mensalidade do software, equipamento, instalação, suporte e eventuais taxas por resposta. Uma mensalidade baixa com cobrança por resposta pode custar mais caro no fim do ano.</p>

      <h2>Comparativo rápido dos dois modelos</h2>
      <div class="table-wrap">
        <table>
          <caption>Totem de mesa e totem de piso: quando usar cada um</caption>
          <thead><tr><th>Critério</th><th>Totem de mesa</th><th>Totem de piso</th></tr></thead>
          <tbody>
            <tr><th>Melhor para</th><td>Balcões, caixas e recepções</td><td>Saguões, corredores e showrooms</td></tr>
            <tr><th>Espaço</th><td>Pequeno</td><td>Precisa de área livre</td></tr>
            <tr><th>Alcance</th><td>Quem passa pelo balcão</td><td>Quem circula pelo ambiente</td></tr>
            <tr><th>Visibilidade</th><td>Média</td><td>Alta</td></tr>
            <tr><th>Ideal para</th><td>Farmácias, clínicas, varejo, oficinas</td><td>Shoppings, eventos, concessionárias, saguões</td></tr>
          </tbody>
        </table>
      </div>

      <h2>O que pedir na proposta</h2>
      <ul>
        <li>Modelo do equipamento e dimensões reais;</li>
        <li>Confirmação por escrito do funcionamento offline;</li>
        <li>Limite de terminais, campanhas e respostas por mês;</li>
        <li>O que está incluído em manutenção e suporte;</li>
        <li>Prazo de instalação e de devolução, na locação;</li>
        <li>Como os dados são exportados e quem é o titular deles.</li>
      </ul>
    </div>

    <div class="grid grid--3" style="margin-top:34px">
      ${card({ title: "Totem de mesa", text: "Compacto, touch e personalizado. Para balcões, clínicas, farmácias e restaurantes.", href: "{{root}}totem-de-mesa.html", more: "Ver o modelo" })}
      ${card({ title: "Totem de piso", text: "Maior visibilidade em áreas de circulação, shoppings, eventos e showrooms.", href: "{{root}}totem-de-piso.html", more: "Ver o modelo" })}
      ${card({ title: "Planos e preços", text: "Quatro planos publicados a partir de R$ 69,90/mês, sem cobrança por resposta.", href: "{{root}}planos-e-precos.html", more: "Ver preços" })}
    </div>
  </div>
</section>
`,
    faqTitle: "Perguntas frequentes sobre escolha do totem",
    faq: [
      {
        q: "Qual o melhor tamanho de tela para totem de pesquisa?",
        a: "<p>Depende da distância. Para totem de mesa, telas de 10 a 15 polegadas são suficientes. Para totem de piso em área de circulação, telas maiores melhoram a leitura à distância. O mais importante é que a pergunta principal caiba na tela sem rolagem.</p>",
      },
      {
        q: "Vale mais a pena comprar ou alugar o totem?",
        a: "<p>Alugar faz sentido para testes, eventos e redes que preferem não imobilizar capital. Comprar faz sentido para operação permanente e uso intenso, quando o equipamento passa a ser patrimônio. As duas opções estão disponíveis na beend.tech.</p>",
      },
      {
        q: "Preciso de internet para o totem funcionar?",
        a: "<p>Para coletar, não: as respostas ficam no dispositivo e sincronizam quando a conexão volta. Para acompanhar o painel em tempo real, sim. Em locais com rede instável, o modo offline é o que garante a integridade dos dados.</p>",
      },
      {
        q: "Um totem atende uma rede com várias lojas?",
        a: "<p>Cada loja precisa do seu próprio terminal. A plataforma permite cadastrar vários terminais com acesso individual e consolidar os resultados no mesmo painel, comparando unidades.</p>",
      },
    ],
    schema: [
      {
        "@type": "Article",
        "@id": "https://beend.tech/melhor-totem-de-pesquisa-de-satisfacao#artigo",
        headline: "Melhor totem de pesquisa de satisfação: como escolher",
        description:
          "Critérios objetivos para escolher um totem de pesquisa de satisfação: instalação, offline, métrica, terminais, contrato e custo total.",
        author: { "@id": "https://beend.tech/#organization" },
        publisher: { "@id": "https://beend.tech/#organization" },
        datePublished: "2026-11-05",
        dateModified: "2026-11-05",
        inLanguage: "pt-BR",
      },
    ],
    llms: {
      section: "conteudo",
      summary:
        "Critérios para escolher totem de pesquisa de satisfação: ponto de instalação, modo offline, métrica, número de terminais, personalização, contrato e custo total em 12 meses.",
    },
    priority: "0.8",
  },

  /* ------------------------ 2. TOTEM VS E-MAIL ------------------------ */
  {
    slug: "totem-de-pesquisa-vs-pesquisa-por-email.html",
    active: "totem-de-pesquisa-de-satisfacao.html",
    type: "article",
    kicker: "Comparação",
    title: "Totem de Pesquisa vs Pesquisa por E-mail | beend.tech",
    description:
      "Totem de pesquisa ou pesquisa por e-mail? Compare taxa de resposta, viés, custo e momento da coleta — e veja quando faz sentido usar os dois canais juntos.",
    h1: "Totem de pesquisa ou pesquisa por e-mail?",
    lead:
      "Os dois canais medem satisfação, mas capturam momentos diferentes. Usar só um deles costuma distorcer a leitura — e o totem resolve justamente o que o e-mail não alcança.",
    crumbs: [
      { name: "Home", href: "index.html" },
      { name: "Totem vs e-mail" },
    ],
    body: `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>O totem coleta no momento da experiência; o e-mail coleta depois.</strong> Para medir o atendimento presencial de hoje, o totem é mais preciso e tem taxa de resposta maior. Para acompanhar a relação ao longo do tempo, o e-mail complementa.</p>
      <p>O erro comum não é escolher um dos dois — é usar só o e-mail em operações presenciais e concluir que o cliente está satisfeito porque 3% respondeu.</p>
    `)}

    <div class="prose">
      <h2>A diferença que importa: o momento</h2>
      <p>A satisfação é uma memória com prazo. Quanto mais tempo passa entre a experiência e a pergunta, mais a resposta é reconstruída por outros fatores — o humor do dia, a lembrança de outra visita, a opinião de terceiros.</p>
      <p>No totem, a pergunta aparece segundos depois do atendimento. No e-mail, ela chega horas ou dias depois, com o cliente já em outro contexto.</p>

      <h2>Taxa de resposta</h2>
      <p>Pesquisa enviada por e-mail compete com a caixa de entrada inteira. Mesmo em listas bem cuidadas, a resposta é uma fração pequena do total. No totem, a barreira é um toque na tela, e o cliente está fisicamente no local.</p>
      <p>Isso não significa que o e-mail seja inútil: significa que ele mede uma amostra menor e mais engajada, o que serve para acompanhar tendência, não para retratar o atendimento do dia.</p>

      <h2>Viés de quem responde</h2>
      <p>Quem responde e-mail tende a ser quem tem relação prévia com a marca — cliente frequente ou reclamante motivado. O totem capta também o cliente ocasional, que passou uma vez e não voltaria a responder nada por e-mail.</p>

      <h2>Comparativo direto</h2>
      <div class="table-wrap">
        <table>
          <caption>Totem de pesquisa e pesquisa por e-mail lado a lado</caption>
          <thead><tr><th>Critério</th><th>Totem no ponto de atendimento</th><th>Pesquisa por e-mail</th></tr></thead>
          <tbody>
            <tr><th>Momento</th><td>Segundos após o atendimento</td><td>Horas ou dias depois</td></tr>
            <tr><th>Barreira</th><td>Um toque na tela</td><td>Abrir o e-mail e clicar no link</td></tr>
            <tr><th>Alcance</th><td>Quem passou pelo local</td><td>Quem está na base de contatos</td></tr>
            <tr><th>Viés</th><td>Menor — pega cliente ocasional</td><td>Maior — responde quem já tem relação</td></tr>
            <tr><th>Dado que gera</th><td>Experiência do atendimento</td><td>Relação com a marca</td></tr>
            <tr><th>Melhor uso</th><td>Operação, treinamento e correção rápida</td><td>Acompanhamento de longo prazo</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Quando o e-mail ainda faz sentido</h2>
      <ul>
        <li><strong>Público que não passa por um ponto físico</strong> — clientes online, assinaturas e serviços remotos.</li>
        <li><strong>Pesquisa de relação</strong> — perguntas sobre lealdade, intenção de recompra e percepção de marca.</li>
        <li><strong>Públicos específicos</strong> — decisores B2B, que raramente estão no balcão.</li>
        <li><strong>Complemento ao totem</strong> — para quem não respondeu presencialmente.</li>
      </ul>

      <h2>O que o totem resolve que o e-mail não resolve</h2>
      <p>O e-mail não diz nada sobre a fila do caixa naquela terça-feira, sobre o tempo de preparo do prato ou sobre a clareza da orientação no balcão. Esses são exatamente os problemas que o gestor consegue corrigir na semana seguinte — e que só a coleta presencial captura com volume.</p>
      <p>Se o seu negócio tem atendimento presencial e a única pesquisa que existe é por e-mail, você provavelmente está tomando decisões com uma amostra pequena e enviesada.</p>
    </div>

    <div class="grid grid--3" style="margin-top:34px">
      ${card({ title: "Guia do totem", text: "O que é, como funciona, o que mede e quanto custa um totem de pesquisa.", href: "{{root}}totem-de-pesquisa-de-satisfacao.html", more: "Ler o guia" })}
      ${card({ title: "Pesquisa por QR Code", text: "Alternativa sem totem: o cliente responde pelo celular, apontando a câmera.", href: "{{root}}pesquisa-de-satisfacao-qrcode.html", more: "Ver QR Code" })}
      ${card({ title: "Pesquisa por WhatsApp", text: "Canal complementar para alcançar quem já saiu do ponto de atendimento.", href: "{{root}}pesquisa-de-satisfacao-whatsapp.html", more: "Ver WhatsApp" })}
    </div>
  </div>
</section>
`,
    faqTitle: "Perguntas frequentes sobre os dois canais",
    faq: [
      {
        q: "Posso usar totem e e-mail na mesma campanha?",
        a: "<p>Sim, e é o cenário recomendado. A mesma campanha pode rodar no totem, no QR Code e no WhatsApp, permitindo comparar a percepção de quem respondeu presencialmente com a de quem respondeu depois.</p>",
      },
      {
        q: "A pesquisa por e-mail ainda vale a pena?",
        a: "<p>Vale, para medir relação de longo prazo e para públicos que não passam por um ponto físico. O que não vale é usá-la como única fonte para avaliar a qualidade do atendimento presencial.</p>",
      },
      {
        q: "Qual canal tem taxa de resposta maior?",
        a: "<p>O totem, na maioria dos casos, porque a barreira é um toque na tela e o cliente está no local. A diferença tende a ser ainda maior em operações com atendimento rápido.</p>",
      },
    ],
    schema: [
      {
        "@type": "Article",
        "@id": "https://beend.tech/totem-de-pesquisa-vs-pesquisa-por-email#artigo",
        headline: "Totem de pesquisa ou pesquisa por e-mail?",
        description:
          "Comparação entre totem de pesquisa de satisfação e pesquisa por e-mail: momento, taxa de resposta, viés e quando usar cada canal.",
        author: { "@id": "https://beend.tech/#organization" },
        publisher: { "@id": "https://beend.tech/#organization" },
        datePublished: "2026-11-05",
        dateModified: "2026-11-05",
        inLanguage: "pt-BR",
      },
    ],
    llms: {
      section: "conteudo",
      summary:
        "Comparação entre totem de pesquisa de satisfação e pesquisa por e-mail: momento da coleta, taxa de resposta, viés de amostra e quando combinar os dois canais.",
    },
    priority: "0.8",
  },

  /* --------------------- 3. ALTERNATIVAS / CATEGORIA ------------------- */
  {
    slug: "alternativas-de-pesquisa-de-satisfacao.html",
    active: "totem-de-pesquisa-de-satisfacao.html",
    type: "article",
    kicker: "Alternativas",
    title: "Alternativas de Pesquisa de Satisfação no Ponto de Venda",
    description:
      "Quatro alternativas para pesquisar satisfação no ponto de venda: totem, tablet próprio, QR Code e link. Compare custo, atrito e taxa de resposta.",
    h1: "Alternativas de pesquisa de satisfação no ponto de venda",
    lead:
      "Nem toda operação precisa começar com um totem dedicado. Estas são as quatro formas de coletar no local — com o custo e o atrito de cada uma.",
    crumbs: [
      { name: "Home", href: "index.html" },
      { name: "Alternativas de pesquisa" },
    ],
    body: `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>As alternativas são quatro: totem dedicado, tablet próprio com aplicativo, QR Code impresso e pesquisa por link.</strong> Elas diferem em custo de hardware, atrito para o cliente e volume de respostas — e não são excludentes.</p>
      <p>A escolha depende de quantas respostas você precisa, com que frequência e quanto pode investir para começar.</p>
    `)}

    <div class="prose">
      <h2>1. Totem dedicado (locação ou compra)</h2>
      <p>Equipamento fixo, com tela touch, instalado no ponto de atendimento. É o formato com maior visibilidade e menor atrito: o cliente não precisa pegar o celular nem digitar nada.</p>
      <ul>
        <li><strong>A favor:</strong> maior taxa de resposta, presença física, personalização com a marca, coleta offline.</li>
        <li><strong>Contra:</strong> exige investimento em hardware e espaço físico.</li>
        <li><strong>Indicado para:</strong> operações com fluxo constante e objetivo de medir continuamente.</li>
      </ul>

      <h2>2. Tablet próprio com aplicativo</h2>
      <p>Você usa um tablet Android que já tem na empresa — na recepção, no caixa ou no balcão — e instala o aplicativo de coleta. O custo de hardware é próximo de zero.</p>
      <ul>
        <li><strong>A favor:</strong> começa no mesmo dia, sem comprar equipamento, e depois migra para totem se fizer sentido.</li>
        <li><strong>Contra:</strong> precisa de suporte e carregador, e a aparência é menos “institucional” do que um totem.</li>
        <li><strong>Indicado para:</strong> testes, operações pequenas e quem quer validar antes de investir.</li>
      </ul>

      <h2>3. QR Code impresso</h2>
      <p>Um cartaz com QR Code no caixa, na mesa ou na embalagem. O cliente aponta a câmera e responde no próprio celular.</p>
      <ul>
        <li><strong>A favor:</strong> custo quase nulo e fácil de distribuir em vários pontos.</li>
        <li><strong>Contra:</strong> depende da iniciativa do cliente, o que reduz a taxa de resposta; não funciona para quem não tem celular com internet no momento.</li>
        <li><strong>Indicado para:</strong> complementar o totem, alcançar mesas e embalagens, e operações sem espaço para equipamento.</li>
      </ul>

      <h2>4. Pesquisa por link ou e-mail</h2>
      <p>O convite é enviado depois do atendimento, por e-mail, SMS ou WhatsApp, com um link para o formulário.</p>
      <ul>
        <li><strong>A favor:</strong> alcança quem já saiu e serve para medir relação de longo prazo.</li>
        <li><strong>Contra:</strong> taxa de resposta baixa e viés para quem já tem vínculo com a marca.</li>
        <li><strong>Indicado para:</strong> complemento, não como única fonte em operações presenciais.</li>
      </ul>

      <h2>Comparativo das quatro alternativas</h2>
      <div class="table-wrap">
        <table>
          <caption>Alternativas de coleta no ponto de venda</caption>
          <thead><tr><th>Alternativa</th><th>Custo de hardware</th><th>Atrito para o cliente</th><th>Volume esperado</th></tr></thead>
          <tbody>
            <tr><th>Totem dedicado</th><td>Médio (locação ou compra)</td><td>Muito baixo</td><td>Alto</td></tr>
            <tr><th>Tablet próprio</th><td>Zero (se já tiver)</td><td>Baixo</td><td>Médio a alto</td></tr>
            <tr><th>QR Code</th><td>Quase zero</td><td>Médio</td><td>Baixo a médio</td></tr>
            <tr><th>Link ou e-mail</th><td>Zero</td><td>Alto</td><td>Baixo</td></tr>
          </tbody>
        </table>
      </div>

      <h2>O caminho mais comum: começar simples e evoluir</h2>
      <p>A maioria das operações começa com o tablet que já tem, valida a pergunta e a rotina de leitura do painel, e só depois investe em totem dedicado. Como a campanha é a mesma, a migração não exige refazer o trabalho.</p>
      <p>O importante é não confundir “começar simples” com “coletar pouco”: se a alternativa escolhida não gera volume suficiente, o dado não sustenta decisão nenhuma.</p>
    </div>

    <div class="grid grid--3" style="margin-top:34px">
      ${card({ title: "Totem de mesa", text: "O modelo mais simples para balcões e recepções, com coleta offline.", href: "{{root}}totem-de-mesa.html", more: "Ver modelo" })}
      ${card({ title: "Locação de totens", text: "Para testar sem comprar equipamento, com manutenção incluída.", href: "{{root}}locacao-de-totens.html", more: "Ver locação" })}
      ${card({ title: "Teste grátis", text: "Use seu tablet Android por 7 dias e veja o painel funcionando.", href: "{{root}}teste-gratis.html", more: "Começar" })}
    </div>
  </div>
</section>
`,
    faqTitle: "Perguntas frequentes sobre alternativas",
    faq: [
      {
        q: "Qual alternativa tem a maior taxa de resposta?",
        a: "<p>O totem dedicado, porque o cliente não precisa pegar o celular nem digitar nada. O tablet no balcão vem em seguida. QR Code e link dependem da iniciativa do cliente e tendem a coletar menos.</p>",
      },
      {
        q: "Posso trocar de alternativa depois?",
        a: "<p>Sim. A campanha, as perguntas e o painel são os mesmos — muda apenas o dispositivo onde a coleta acontece. Quem começa no tablet pode migrar para totem sem refazer a configuração.</p>",
      },
      {
        q: "Preciso contratar o totem para usar a plataforma?",
        a: "<p>Não. O sistema funciona com tablet Android 5.1 ou superior que a empresa já tenha, além de QR Code e WhatsApp. O totem é opcional e pode ser contratado depois.</p>",
      },
    ],
    schema: [
      {
        "@type": "Article",
        "@id": "https://beend.tech/alternativas-de-pesquisa-de-satisfacao#artigo",
        headline: "Alternativas de pesquisa de satisfação no ponto de venda",
        description:
          "Comparação entre totem dedicado, tablet próprio, QR Code e pesquisa por link para coletar satisfação no ponto de atendimento.",
        author: { "@id": "https://beend.tech/#organization" },
        publisher: { "@id": "https://beend.tech/#organization" },
        datePublished: "2026-11-05",
        dateModified: "2026-11-05",
        inLanguage: "pt-BR",
      },
    ],
    llms: {
      section: "conteudo",
      summary:
        "Quatro alternativas para pesquisar satisfação no ponto de venda: totem dedicado, tablet próprio com aplicativo, QR Code e pesquisa por link — com custo, atrito e volume de cada uma.",
    },
    priority: "0.8",
  },
];
