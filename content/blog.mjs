import { section, answer } from "./_ui.mjs";

const articleSchema = (slug, headline, description) => ({
  "@type": "Article",
  "@id": `https://beend.tech/${slug}#artigo`,
  headline,
  description,
  author: { "@id": "https://beend.tech/#organization" },
  publisher: { "@id": "https://beend.tech/#organization" },
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  inLanguage: "pt-BR",
  mainEntityOfPage: `https://beend.tech/${slug}`,
});

export const blogIndex = {
  slug: "blog/index.html",
  active: "blog/index.html",
  type: "website",
  kicker: "Conteúdo",
  title: "Conteúdo sobre Pesquisa de Satisfação | beend.tech",
  description:
    "Guias sobre totem de pesquisa, NPS, CSAT, CES, QR Code e WhatsApp. Conteúdo prático para medir a satisfação do cliente no ponto de atendimento.",
  h1: "Conteúdo sobre pesquisa de satisfação",
  lead:
    "Guias curtos e práticos para quem precisa medir a experiência do cliente sem transformar a pesquisa em burocracia.",
  crumbs: [{ name: "Home", href: "index.html" }, { name: "Conteúdo" }],
  body: `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>Comece pelo guia de <a href="{{root}}pesquisa-de-satisfacao.html">pesquisa de satisfação com NPS, CSAT e CES</a></strong> se você ainda está escolhendo a métrica. Se a dúvida é de equipamento, veja o <a href="{{root}}totem-de-pesquisa-de-satisfacao.html">guia do totem de pesquisa</a>.</p>
    `)}

    <div class="grid grid--2">
      <a class="card card--link" href="{{root}}blog/quanto-custa-totem-de-pesquisa-de-satisfacao.html">
        <p class="pill pill--brand">Preço</p>
        <h2 style="font-size:1.35rem;margin:14px 0 10px">Quanto custa um totem de pesquisa de satisfação?</h2>
        <p>O que compõe o investimento, por que o hardware varia e como comparar propostas sem cair em armadilha.</p>
        <span class="card__more">Ler artigo</span>
      </a>
      <a class="card card--link" href="{{root}}blog/totem-de-pesquisa-funciona-sem-internet.html">
        <p class="pill">Operação</p>
        <h2 style="font-size:1.35rem;margin:14px 0 10px">Totem de pesquisa funciona sem internet?</h2>
        <p>Como o modo offline armazena as respostas e o que muda quando a conexão volta.</p>
        <span class="card__more">Ler artigo</span>
      </a>
      <a class="card card--link" href="{{root}}blog/erros-ao-instalar-totem-de-pesquisa.html">
        <p class="pill">Boas práticas</p>
        <h2 style="font-size:1.35rem;margin:14px 0 10px">7 erros que reduzem a taxa de resposta do totem</h2>
        <p>Posicionamento, texto na tela, tamanho da pesquisa e outros fatores que afastam o cliente.</p>
        <span class="card__more">Ler artigo</span>
      </a>
      <a class="card card--link" href="{{root}}pesquisa-de-satisfacao-whatsapp.html">
        <p class="pill">Canal</p>
        <h2 style="font-size:1.35rem;margin:14px 0 10px">Pesquisa de satisfação pelo WhatsApp</h2>
        <p>Passo a passo, modelo de mensagem e boas práticas de LGPD.</p>
        <span class="card__more">Ler guia</span>
      </a>
    </div>
  </div>
</section>
`,
  schema: [
    {
      "@type": "Blog",
      "@id": "https://beend.tech/blog/index.html#blog",
      name: "Conteúdo beend.tech",
      description:
        "Guias sobre totem de pesquisa, NPS, CSAT, CES, QR Code e WhatsApp.",
      publisher: { "@id": "https://beend.tech/#organization" },
      inLanguage: "pt-BR",
    },
  ],
  llms: {
    section: "conteudo",
    summary:
      "Índice de conteúdo: artigos sobre preço de totem, modo offline, erros de instalação e pesquisa por WhatsApp.",
  },
  priority: "0.6",
};

/* ------------------------------ POST 1 ---------------------------------- */
const postPrice = {
  slug: "blog/quanto-custa-totem-de-pesquisa-de-satisfacao.html",
  active: null,
  type: "article",
  kicker: "Preço",
  title: "Quanto Custa um Totem de Pesquisa de Satisfação?",
  description:
    "Quanto custa um totem de pesquisa de satisfação: o que compõe o investimento, aquisição (PRO INFINITY) ou locação e os fatores que mudam o valor.",
  h1: "Quanto custa um totem de pesquisa de satisfação?",
  lead:
    "O preço não está no equipamento: está na combinação entre hardware, software, personalização e suporte. Veja como comparar.",
  crumbs: [
    { name: "Home", href: "index.html" },
    { name: "Conteúdo", href: "blog/index.html" },
    { name: "Quanto custa um totem" },
  ],
  body: `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>O valor de um totem de pesquisa de satisfação é sob consulta</strong>, porque depende do modelo, da tela, da personalização, da quantidade e do formato comercial — aquisição do equipamento ou locação.</p>
      <p>Quem já tem um tablet Android 5.1+ pode usar o próprio dispositivo e contratar apenas o software.</p>
    `)}

    <div class="prose">
      <h2>O que compõe o custo</h2>
      <p>Uma proposta de totem de pesquisa tem quatro blocos. Comparar só o número final esconde diferenças importantes:</p>
      <ul>
        <li><strong>Equipamento:</strong> estrutura, tela touch, fonte e acabamento.</li>
        <li><strong>Software:</strong> aplicativo de coleta, painel, armazenamento e atualizações.</li>
        <li><strong>Personalização:</strong> aplicação de marca, cores e telas sob medida.</li>
        <li><strong>Implantação e suporte:</strong> configuração, treinamento, logística e atendimento.</li>
      </ul>

      <h2>Quanto custa cada formato</h2>
      <div class="table-wrap">
        <table>
          <caption>Faixas de investimento por formato</caption>
          <thead><tr><th>Formato</th><th>Hardware</th><th>Software</th><th>Observação</th></tr></thead>
          <tbody>
            <tr><th>Tablet próprio</th><td>Já possui</td><td>Assinatura sob consulta</td><td>Menor investimento; exige Android 5.1+</td></tr>
            <tr><th>Totem de mesa</th><td>Sob consulta</td><td>Incluso na locação ou assinatura na compra</td><td>Compacto, para balcões</td></tr>
            <tr><th>Totem de piso</th><td>Sob consulta</td><td>Incluso na locação ou assinatura na compra</td><td>Maior presença visual</td></tr>
          </tbody>
        </table>
      </div>
      <p>Os valores de hardware não são públicos porque dependem da configuração. Um totem de piso com tela grande e personalização especial não custa o mesmo que um modelo de mesa padrão.</p>

      <h2>Locação ou compra: o que muda no bolso</h2>
      <p>Na <a href="{{root}}locacao-de-totens.html">locação (comodato)</a>, o investimento inicial é menor e o equipamento fica com o fornecedor. A mensalidade inclui o uso do totem, o software e o suporte. É a opção para testar o canal, equipar várias lojas ou usar por um período determinado.</p>
      <p>Na <a href="{{root}}venda-de-totens.html">compra</a>, o equipamento passa a ser patrimônio da empresa. O desembolso inicial é maior, mas o custo por ano tende a cair em operações permanentes. O software continua como assinatura.</p>

      <h2>Cinco fatores que mudam o preço</h2>
      <ol>
        <li><strong>Quantidade de terminais:</strong> o plano acompanha o número de pontos de coleta.</li>
        <li><strong>Modelo e tela:</strong> piso custa mais que mesa; telas maiores custam mais que telas compactas.</li>
        <li><strong>Personalização:</strong> aplicação de marca e acabamentos especiais.</li>
        <li><strong>Prazo de contrato:</strong> locações mais longas podem ter condições melhores.</li>
        <li><strong>Canais:</strong> totem, QR Code e WhatsApp podem ser combinados no mesmo plano.</li>
      </ol>

      <h2>Como reduzir o investimento sem perder qualidade</h2>
      <ul>
        <li><strong>Use o tablet que você já tem</strong> para validar a operação antes de comprar um totem.</li>
        <li><strong>Comece com um ponto</strong> e expanda depois de confirmar a taxa de resposta.</li>
        <li><strong>Padronize a pesquisa</strong> para não pagar personalização diferente em cada loja.</li>
        <li><strong>Escolha o modelo certo:</strong> um totem de piso em um balcão pequeno é desperdício de espaço e de verba.</li>
        <li><strong>Compare o pacote completo</strong>, não só a mensalidade: suporte e modo offline fazem diferença na operação.</li>
      </ul>

      <h2>O que comparar em uma proposta</h2>
      <p>Ao receber propostas de fornecedores diferentes, verifique se cada uma inclui:</p>
      <ul>
        <li>Equipamento, instalação e logística.</li>
        <li>Aplicativo, painel e armazenamento das respostas.</li>
        <li>Modo offline e sincronização automática.</li>
        <li>Personalização visual.</li>
        <li>Suporte, prazo de contrato e condições de manutenção.</li>
        <li>Canais incluídos: totem, QR Code e WhatsApp.</li>
      </ul>
      <p>Um preço menor pode esconder a cobrança separada de itens essenciais. A pergunta certa não é “quanto custa o totem?”, mas “quanto custa operar a pesquisa por mês, com tudo incluído?”.</p>
    </div>
  </div>
</section>

${section({
  alt: true,
  kicker: "Próximo passo",
  title: "Veja os planos",
  body: `<p>Equipamento e software têm valor sob consulta, definido conforme o projeto.</p>
  <p><a class="btn btn--dark" href="{{root}}planos-e-precos.html">Ver planos e preços</a></p>`,
})}
`,
  faqTitle: "Perguntas frequentes sobre preço",
  faq: [
    {
      q: "Dá para usar um totem de pesquisa sem comprar equipamento?",
      a: "<p>Sim, se você já tiver um tablet Android 5.1 ou superior e usar o próprio dispositivo. Nesse caso, não há custo de hardware, apenas a contratação do software.</p>",
    },
    {
      q: "O totem de piso é muito mais caro que o de mesa?",
      a: "<p>Costuma ser, por causa da estrutura e do tamanho da tela. A diferença exata depende do modelo e da personalização, por isso o valor é informado em proposta.</p>",
    },
    {
      q: "A locação inclui manutenção?",
      a: "<p>As condições de manutenção fazem parte do contrato de locação e são detalhadas na proposta. Na compra, vale conferir o prazo e as condições de garantia.</p>",
    },
    {
      q: "Existe custo por resposta coletada?",
      a: "<p>Não. O plano é por assinatura e não por resposta. O volume de pesquisas faz parte da operação, não é cobrado por unidade.</p>",
    },
  ],
  schema: [articleSchema(
    "blog/quanto-custa-totem-de-pesquisa-de-satisfacao.html",
    "Quanto custa um totem de pesquisa de satisfação?",
    "Análise dos custos de um totem de pesquisa: o que compõe o investimento, aquisição (PRO INFINITY) ou locação e fatores que mudam o valor."
  )],
  llms: {
    section: "conteudo",
    summary:
      "Quanto custa um totem de pesquisa: software e hardware sob consulta, aquisição versus locação e o que comparar na proposta.",
  },
  priority: "0.7",
};

/* ------------------------------ POST 2 ---------------------------------- */
const postOffline = {
  slug: "blog/totem-de-pesquisa-funciona-sem-internet.html",
  active: null,
  type: "article",
  kicker: "Operação",
  title: "Totem de Pesquisa Funciona sem Internet?",
  description:
    "Totem de pesquisa funciona sem internet? Entenda como o modo offline armazena respostas, quando sincroniza e o que muda no acompanhamento em tempo real.",
  h1: "Totem de pesquisa funciona sem internet?",
  lead:
    "Sim — e esse é um dos detalhes que mais importam em eventos, lojas com Wi-Fi instável e unidades afastadas.",
  crumbs: [
    { name: "Home", href: "index.html" },
    { name: "Conteúdo", href: "blog/index.html" },
    { name: "Totem sem internet" },
  ],
  body: `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>Sim. O totem de pesquisa continua coletando sem internet:</strong> as respostas ficam armazenadas no próprio dispositivo e são sincronizadas com o painel quando a conexão volta.</p>
      <p>A ressalva é o tempo real. Sem conexão, o gestor não vê a resposta na hora; ele recebe o lote assim que o equipamento volta a ficar online.</p>
    `)}

    <div class="prose">
      <h2>Como funciona o modo offline</h2>
      <p>O aplicativo mantém a pesquisa disponível localmente e grava cada resposta no armazenamento do dispositivo. Não é necessário que o cliente esteja conectado para responder.</p>
      <p>Quando o totem encontra uma rede, ele envia as respostas pendentes para a plataforma. O processo é automático e não exige que alguém vá até o equipamento para “baixar” os dados.</p>

      <h2>O que sincroniza</h2>
      <ul>
        <li>Notas de NPS, CSAT e CES.</li>
        <li>Respostas de escala de carinhas (SMILE).</li>
        <li>Respostas de quiz e comentários.</li>
        <li>Data e hora de cada resposta.</li>
      </ul>
      <p>A sincronização é feita em lote. Quanto mais tempo offline, maior o volume enviado de uma vez.</p>

      <h2>O que muda sem conexão</h2>
      <div class="table-wrap">
        <table>
          <caption>Operação online versus offline</caption>
          <thead><tr><th>Recurso</th><th>Com internet</th><th>Sem internet</th></tr></thead>
          <tbody>
            <tr><th>Cliente responde</th><td>Sim</td><td>Sim</td></tr>
            <tr><th>Resposta chega ao painel</th><td>Em tempo real</td><td>Quando sincronizar</td></tr>
            <tr><th>Troca de pesquisa</th><td>Remota</td><td>Precisa de conexão</td></tr>
            <tr><th>Monitoramento do terminal</th><td>Sim</td><td>Limitado</td></tr>
            <tr><th>Risco de perda</th><td>Baixo</td><td>Baixo, se o dispositivo for preservado</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Quando o offline é essencial</h2>
      <ul>
        <li><strong>Eventos e feiras:</strong> a internet do local costuma ser instável ou sobrecarregada.</li>
        <li><strong>Lojas em regiões afastadas:</strong> conexão lenta ou intermitente.</li>
        <li><strong>Operações com queda de energia:</strong> o totem pode ficar um período sem rede.</li>
        <li><strong>Alto volume:</strong> muitos terminais disputando a mesma conexão.</li>
      </ul>

      <h2>O que verificar antes de contratar</h2>
      <ol>
        <li>O aplicativo armazena respostas localmente? Por quanto tempo?</li>
        <li>A sincronização é automática ou precisa de ação manual?</li>
        <li>O que acontece se o dispositivo reiniciar antes de sincronizar?</li>
        <li>O painel sinaliza quais terminais estão online?</li>
        <li>Há limite de respostas armazenadas?</li>
      </ol>
      <p>Essas respostas valem mais do que a promessa genérica de “funciona offline”. Na beend.tech, o aplicativo foi desenhado para coletar sem rede e sincronizar depois, e a operação padrão recomenda conexão estável para acompanhamento em tempo real.</p>

      <h2>Offline não substitui conexão</h2>
      <p>O modo offline protege a coleta, mas não elimina a necessidade de internet para gestão. Trocar a pesquisa, acompanhar resultados e monitorar os terminais depende de conexão.</p>
      <p>Para locais sem nenhuma rede, o ideal é combinar o totem com um período de sincronização — por exemplo, ao final do dia ou quando o equipamento retornar a uma área com Wi-Fi.</p>
    </div>
  </div>
</section>

${section({
  alt: true,
  kicker: "Aplicar",
  title: "Veja o guia do totem",
  body: `<p>Entenda o que é, como funciona e como escolher o modelo certo para o seu ponto de atendimento.</p>
  <p><a class="btn btn--dark" href="{{root}}totem-de-pesquisa-de-satisfacao.html">Abrir o guia</a></p>`,
})}
`,
  faqTitle: "Perguntas frequentes sobre modo offline",
  faq: [
    {
      q: "O totem perde respostas se a internet cair?",
      a: "<p>Não, se o modo offline estiver ativo. As respostas ficam no dispositivo e são enviadas quando a conexão volta. O risco existe apenas se o equipamento for desligado ou danificado antes da sincronização.</p>",
    },
    {
      q: "Quanto tempo as respostas ficam armazenadas?",
      a: "<p>Depende da configuração e da capacidade do dispositivo. O ideal é sincronizar com frequência para reduzir o volume pendente e liberar espaço.</p>",
    },
    {
      q: "Preciso de internet para instalar o totem?",
      a: "<p>Sim, a configuração inicial da pesquisa e da personalização exige conexão. Depois disso, a coleta pode operar offline.</p>",
    },
    {
      q: "Dá para usar o totem em evento sem Wi-Fi?",
      a: "<p>Sim. O totem coleta offline e sincroniza quando houver rede. Para o relatório do evento, basta garantir a sincronização antes de encerrar a operação.</p>",
    },
  ],
  schema: [articleSchema(
    "blog/totem-de-pesquisa-funciona-sem-internet.html",
    "Totem de pesquisa funciona sem internet?",
    "Como o modo offline do totem de pesquisa armazena respostas e sincroniza quando a conexão retorna."
  )],
  llms: {
    section: "conteudo",
    summary:
      "Totem de pesquisa sem internet: como funciona o modo offline, o que sincroniza, limitações e o que verificar antes de contratar.",
  },
  priority: "0.6",
};

/* ------------------------------ POST 3 ---------------------------------- */
const postMistakes = {
  slug: "blog/erros-ao-instalar-totem-de-pesquisa.html",
  active: null,
  type: "article",
  kicker: "Boas práticas",
  title: "7 Erros que Reduzem a Taxa de Resposta do Totem",
  description:
    "Sete erros de instalação e configuração que reduzem a taxa de resposta do totem de pesquisa — e como corrigir cada um na prática.",
  h1: "7 erros que reduzem a taxa de resposta do totem de pesquisa",
  lead:
    "O equipamento está instalado, mas ninguém responde. Na maioria das vezes, o problema não é o totem: é o contexto em volta dele.",
  crumbs: [
    { name: "Home", href: "index.html" },
    { name: "Conteúdo", href: "blog/index.html" },
    { name: "Erros na instalação" },
  ],
  body: `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>Os erros mais comuns são posicionamento fora do fluxo, pesquisa longa, convite confuso, tela com brilho excessivo e falta de acompanhamento dos resultados.</strong> Corrigir esses pontos costuma ter mais efeito do que trocar de equipamento.</p>
    `)}

    <div class="prose">
      <h2>1. Esconder o totem fora do fluxo</h2>
      <p>Totem em canto de parede, de costas para o cliente ou atrás do caixa não é visto. O equipamento precisa estar no caminho natural de saída, depois do atendimento ou do pagamento.</p>
      <p><strong>Correção:</strong> observe por onde o cliente passa ao terminar a experiência e reposicione o totem nesse trajeto.</p>

      <h2>2. Fazer uma pesquisa longa</h2>
      <p>Cada pergunta adicional reduz a conclusão. No totem, o cliente está em pé e de saída: uma pergunta principal basta.</p>
      <p><strong>Correção:</strong> deixe uma pergunta de nota ou carinha e um comentário opcional. Se precisar de mais dados, use o WhatsApp depois.</p>

      <h2>3. Escrever um convite confuso</h2>
      <p>“Participe da nossa pesquisa de avaliação de qualidade percebida” não diz o que fazer. O cliente precisa entender em dois segundos.</p>
      <p><strong>Correção:</strong> use algo como “Como foi seu atendimento hoje? Toque em uma carinha.”</p>

      <h2>4. Deixar a tela ilegível</h2>
      <p>Brilho baixo, reflexo do sol, fonte pequena ou contraste fraco afastam o cliente. O mesmo vale para totens instalados em áreas externas sem proteção.</p>
      <p><strong>Correção:</strong> teste a leitura à distância, em diferentes horários, e ajuste brilho e contraste.</p>

      <h2>5. Não personalizar</h2>
      <p>Um totem genérico parece um objeto estranho no balcão. Com a marca da empresa, ele passa a fazer parte da operação e o cliente entende por que está ali.</p>
      <p><strong>Correção:</strong> aplique logo, cores e uma mensagem alinhada ao tom da marca.</p>

      <h2>6. Não treinar a equipe</h2>
      <p>Se o atendente não sabe para que o totem serve, ele não indica. Pior: pode pedir “nota 10”, o que contamina a amostra.</p>
      <p><strong>Correção:</strong> explique o objetivo, oriente o convite neutro e deixe claro que a pesquisa não é uma avaliação punitiva do colaborador.</p>

      <h2>7. Coletar e não fazer nada com o dado</h2>
      <p>A pesquisa perde sentido quando ninguém olha o resultado. O cliente percebe que respondeu e nada mudou.</p>
      <p><strong>Correção:</strong> defina uma rotina de leitura — semanal ou mensal —, escolha uma melhoria por ciclo e comunique o que foi feito.</p>

      <h2>Como medir se está funcionando</h2>
      <p>A taxa de resposta é o primeiro indicador. Divida o número de respostas pelo número estimado de clientes atendidos no período. Se o totem recebe muito fluxo e poucas respostas, revise os sete pontos acima.</p>
      <p>Depois, acompanhe a distribuição das notas e os comentários. Uma taxa alta com notas sempre máximas pode indicar que a equipe está induzindo a resposta.</p>

      <div class="note">
        <p><strong>Regra prática:</strong> o totem precisa ser visto, entendido e fácil. Se o cliente precisar pensar para saber o que fazer, ele passa direto.</p>
      </div>
    </div>
  </div>
</section>

${section({
  alt: true,
  kicker: "Próximo passo",
  title: "Coloque a pesquisa para funcionar",
  body: `<div class="grid grid--2">
    <a class="card card--link" href="{{root}}totem-de-pesquisa-de-satisfacao.html"><h3>Guia do totem</h3><p>Modelos, métricas, instalação e preço.</p><span class="card__more">Abrir guia</span></a>
    <a class="card card--link" href="{{root}}contato.html"><h3>Falar com especialista</h3><p>Peça uma proposta para o seu ponto de atendimento.</p><span class="card__more">Contato</span></a>
  </div>`,
})}
`,
  faqTitle: "Perguntas frequentes",
  faq: [
    {
      q: "Qual é uma boa taxa de resposta para totem de pesquisa?",
      a: "<p>Depende do fluxo e do setor. O mais útil é medir a sua própria taxa ao longo do tempo e comparar unidades semelhantes. O importante é que o volume seja suficiente para a análise não ser anecdótica.</p>",
    },
    {
      q: "O totem deve ficar perto do caixa?",
      a: "<p>Sim, desde que esteja no caminho de saída e não atrapalhe a fila. O cliente precisa conseguir parar por alguns segundos para responder.</p>",
    },
    {
      q: "Posso pedir nota 10 ao cliente?",
      a: "<p>Não é recomendado. Induzir a resposta contamina a amostra e esconde problemas reais. O convite deve ser neutro: convidar a avaliar, sem sugerir a nota.</p>",
    },
  ],
  schema: [articleSchema(
    "blog/erros-ao-instalar-totem-de-pesquisa.html",
    "7 erros que reduzem a taxa de resposta do totem de pesquisa",
    "Erros de posicionamento, configuração e operação que reduzem a taxa de resposta do totem de pesquisa e como corrigi-los."
  )],
  llms: {
    section: "conteudo",
    summary:
      "Sete erros que reduzem a taxa de resposta do totem de pesquisa e como corrigir posicionamento, pesquisa longa, convite, tela, personalização e rotina de análise.",
  },
  priority: "0.6",
};

export const posts = [postPrice, postOffline, postMistakes];
