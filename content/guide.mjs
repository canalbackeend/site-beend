import { section, answer } from "./_ui.mjs";

export const guide = {
  slug: "pesquisa-de-satisfacao.html",
  active: null,
  type: "article",
  kicker: "Guia prático",
  title: "Pesquisa de Satisfação: NPS, CSAT e CES com Exemplos",
  description:
    "Guia de pesquisa de satisfação do cliente: o que é, como calcular NPS, CSAT e CES, 12 exemplos de perguntas prontas, boas práticas e erros comuns.",
  h1: "Pesquisa de satisfação: guia com NPS, CSAT e CES",
  lead:
    "O que medir, qual pergunta fazer e como interpretar o resultado — sem transformar a pesquisa em um questionário que ninguém responde.",
  crumbs: [
    { name: "Home", href: "index.html" },
    { name: "Pesquisa de satisfação" },
  ],
  body: `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>Pesquisa de satisfação é o processo de medir a percepção do cliente sobre uma experiência, produto ou serviço.</strong> As três métricas mais usadas são NPS (disposição de recomendar), CSAT (satisfação imediata) e CES (esforço para resolver um problema).</p>
      <p>A escolha depende da pergunta que a empresa quer responder. O ideal é combinar uma métrica principal com um comentário aberto e coletar no momento mais próximo possível da experiência.</p>
    `)}

    <div class="toc">
      <p>Neste guia</p>
      <ol>
        <li><a href="#o-que-e">O que é pesquisa de satisfação</a></li>
        <li><a href="#nps">NPS: recomendação</a></li>
        <li><a href="#csat">CSAT: satisfação</a></li>
        <li><a href="#ces">CES: esforço</a></li>
        <li><a href="#comparativo">Qual métrica usar</a></li>
        <li><a href="#exemplos">12 exemplos de perguntas</a></li>
        <li><a href="#boas-praticas">Boas práticas</a></li>
        <li><a href="#erros">Erros comuns</a></li>
        <li><a href="#faq">Perguntas frequentes</a></li>
      </ol>
    </div>

    <div class="prose">
      <h2 id="o-que-e">O que é pesquisa de satisfação</h2>
      <p>Pesquisa de satisfação é a coleta estruturada da opinião do cliente sobre a experiência que ele acabou de ter. Ela pode acontecer no ponto de atendimento, por WhatsApp, por e-mail ou por QR Code.</p>
      <p>O objetivo não é acumular notas, e sim responder a três perguntas de gestão: o cliente está satisfeito? Ele voltaria e recomendaria? O que precisa ser corrigido?</p>
      <p>Uma pesquisa útil tem quatro características:</p>
      <ul>
        <li><strong>Curta:</strong> uma a três perguntas, respondidas em menos de um minuto.</li>
        <li><strong>Próxima da experiência:</strong> aplicada logo depois do atendimento, não dias depois.</li>
        <li><strong>Comparável:</strong> mesma escala e mesma pergunta ao longo do tempo.</li>
        <li><strong>Acionável:</strong> o resultado chega a quem pode tomar decisão.</li>
      </ul>

      <h2 id="nps">NPS: Net Promoter Score</h2>
      <p>O NPS mede a disposição do cliente de recomendar a empresa. É a métrica de lealdade mais usada no mundo e funciona bem para acompanhar a relação de longo prazo.</p>
      <p><strong>Pergunta:</strong> “De 0 a 10, qual a chance de você recomendar nossa empresa a um amigo ou colega?”</p>
      <p>As respostas são classificadas em três grupos:</p>
      <ul>
        <li><strong>Promotores (9–10):</strong> clientes leais, que recomendam e impulsionam o crescimento.</li>
        <li><strong>Neutros (7–8):</strong> satisfeitos, mas sem entusiasmo; podem migrar para um concorrente.</li>
        <li><strong>Detratores (0–6):</strong> insatisfeitos, que podem prejudicar a reputação.</li>
      </ul>
      <p><strong>Fórmula:</strong> NPS = % de promotores − % de detratores. O resultado vai de −100 a +100.</p>
      <div class="table-wrap">
        <table>
          <caption>Faixas de referência para interpretar o NPS</caption>
          <thead><tr><th>Faixa</th><th>Leitura</th><th>O que fazer</th></tr></thead>
          <tbody>
            <tr><th>75 a 100</th><td>Zona de excelência</td><td>Manter o padrão e usar os promotores como fonte de prova social.</td></tr>
            <tr><th>50 a 74</th><td>Muito bom</td><td>Identificar o que separa os neutros dos promotores.</td></tr>
            <tr><th>0 a 49</th><td>Razoável</td><td>Priorizar os detratores e entender os motivos recorrentes.</td></tr>
            <tr><th>Abaixo de 0</th><td>Crítico</td><td>Tratar como alerta: há mais detratores do que promotores.</td></tr>
          </tbody>
        </table>
      </div>
      <p class="small muted">As faixas são referências de mercado, não regras absolutas. O mais importante é comparar o NPS com ele mesmo ao longo do tempo e entre unidades comparáveis.</p>

      <h2 id="csat">CSAT: Customer Satisfaction Score</h2>
      <p>O CSAT mede a satisfação com uma experiência específica: o atendimento de hoje, a compra, a entrega, o suporte. É a métrica certa quando a pergunta é “como foi desta vez?”.</p>
      <p><strong>Pergunta:</strong> “Qual seu grau de satisfação com o atendimento que você recebeu hoje?”</p>
      <p>O formato mais comum é uma escala de 1 a 5, em que 5 é “muito satisfeito”. Também é possível usar uma escala de carinhas, mais rápida e acessível para o público em geral.</p>
      <p><strong>Fórmula:</strong> CSAT = (respostas 4 e 5 ÷ total de respostas) × 100.</p>
      <p>Um CSAT de 80% significa que oito em cada dez clientes avaliaram a experiência como satisfatória ou muito satisfatória.</p>

      <h2 id="ces">CES: Customer Effort Score</h2>
      <p>O CES mede o esforço que o cliente precisou fazer para resolver o que queria. Ele captura atritos que o NPS e o CSAT não explicam: quantas etapas, quantas transferências, quanto tempo de espera.</p>
      <p><strong>Pergunta:</strong> “Foi fácil resolver o que você precisava hoje?”</p>
      <p>A escala pode ser de 1 a 5 ou de 1 a 7, de “muito difícil” a “muito fácil”. <strong>Quanto maior a média, melhor</strong> — porque maior facilidade significa menos esforço.</p>
      <p>O CES é especialmente útil em atendimento, suporte técnico, ouvidoria e jornadas com várias etapas.</p>

      <h2 id="comparativo">Qual métrica usar</h2>
      <div class="table-wrap">
        <table>
          <caption>Comparativo entre NPS, CSAT e CES</caption>
          <thead><tr><th>Métrica</th><th>Pergunta que responde</th><th>Horizonte</th><th>Quando usar</th></tr></thead>
          <tbody>
            <tr><th>NPS</th><td>O cliente recomendaria a empresa?</td><td>Longo prazo</td><td>Acompanhamento mensal da relação com a marca.</td></tr>
            <tr><th>CSAT</th><td>O cliente ficou satisfeito nesta experiência?</td><td>Imediato</td><td>Pós-atendimento, pós-compra, pós-entrega.</td></tr>
            <tr><th>CES</th><td>Foi fácil resolver o problema?</td><td>Jornada</td><td>Processos com etapas, suporte e ouvidoria.</td></tr>
          </tbody>
        </table>
      </div>
      <p>Uma boa combinação é usar <strong>CSAT no totem</strong>, no momento do atendimento, e <strong>NPS por WhatsApp</strong>, alguns dias depois. O CES entra quando o processo tem várias etapas e você suspeita que o atrito está no caminho, não no resultado.</p>

      <h2 id="exemplos">12 exemplos de perguntas de pesquisa de satisfação</h2>
      <h3>No ponto de atendimento (totem)</h3>
      <ol>
        <li>“Como foi seu atendimento hoje?” — escala de carinhas.</li>
        <li>“Qual seu grau de satisfação com o atendimento?” — escala de 1 a 5.</li>
        <li>“O que poderíamos melhorar?” — campo aberto opcional.</li>
        <li>“Você encontrou o que procurava?” — sim ou não.</li>
      </ol>
      <h3>Depois da compra ou do serviço</h3>
      <ol start="5">
        <li>“De 0 a 10, quanto você recomendaria nossa empresa?” — NPS.</li>
        <li>“O produto atendeu sua expectativa?” — escala de 1 a 5.</li>
        <li>“A entrega chegou no prazo?” — sim, não ou parcialmente.</li>
        <li>“Foi fácil resolver o que você precisava?” — CES.</li>
      </ol>
      <h3>Por segmento</h3>
      <ol start="9">
        <li><strong>Farmácia:</strong> “O farmacêutico esclareceu suas dúvidas sobre o medicamento?”</li>
        <li><strong>Clínica:</strong> “Como você avalia o tempo de espera e a atenção da recepção?”</li>
        <li><strong>Restaurante:</strong> “Como avalia o atendimento, o tempo de preparo e o ambiente?”</li>
        <li><strong>Varejo:</strong> “O vendedor ajudou você a encontrar o que precisava?”</li>
      </ol>

      <h2 id="boas-praticas">Boas práticas para uma pesquisa que gera ação</h2>
      <ul>
        <li><strong>Pergunte perto da experiência.</strong> A memória do cliente esfria rápido; o totem resolve isso melhor do que o e-mail.</li>
        <li><strong>Use uma pergunta principal.</strong> Nota ou carinha primeiro; comentário depois, sempre opcional.</li>
        <li><strong>Mantenha a escala estável.</strong> Mudar de 1 a 5 para 0 a 10 no meio da série quebra a comparação.</li>
        <li><strong>Feche o ciclo.</strong> Quem responde precisa saber que algo mudou. Comunique as melhorias feitas.</li>
        <li><strong>Olhe a distribuição, não só a média.</strong> Dois clientes com notas opostas podem gerar a mesma média.</li>
        <li><strong>Respeite a LGPD.</strong> Informe a finalidade, colete o mínimo necessário e não exponha comentários identificáveis sem autorização.</li>
      </ul>

      <h2 id="erros">Erros comuns</h2>
      <ul>
        <li><strong>Pesquisa longa demais.</strong> No totem, cada pergunta adicional derruba a taxa de conclusão.</li>
        <li><strong>Perguntar e não agir.</strong> A pesquisa vira burocracia e o cliente percebe.</li>
        <li><strong>Comparar métricas diferentes.</strong> NPS, CSAT e CES medem coisas distintas; não misture os números no mesmo gráfico.</li>
        <li><strong>Incentivar só notas altas.</strong> O atendente que pede “nota 10” contamina a amostra e esconde o problema.</li>
        <li><strong>Ignorar o comentário.</strong> A nota mostra o tamanho do problema; o comentário mostra a causa.</li>
      </ul>
    </div>
  </div>
</section>

${section({
  alt: true,
  kicker: "Aplicar na prática",
  title: "Da teoria ao totem no balcão",
  body: `<div class="grid grid--3">
    <a class="card card--link" href="{{root}}totem-de-pesquisa-de-satisfacao.html"><h3>Totem de pesquisa</h3><p>O que é, como funciona, modelos e preço.</p><span class="card__more">Ver guia</span></a>
    <a class="card card--link" href="{{root}}pesquisa-de-satisfacao-whatsapp.html"><h3>Pesquisa por WhatsApp</h3><p>Como aplicar depois do atendimento, com modelo de mensagem.</p><span class="card__more">Ver guia</span></a>
    <a class="card card--link" href="{{root}}pesquisa-de-satisfacao-qrcode.html"><h3>Pesquisa por QR Code</h3><p>Como criar e onde posicionar para aumentar respostas.</p><span class="card__more">Ver guia</span></a>
  </div>`,
})}
`,
  faqTitle: "Perguntas frequentes sobre pesquisa de satisfação",
  faq: [
    {
      q: "Qual a diferença entre NPS e CSAT?",
      a: "<p>O NPS mede a disposição de recomendar a empresa e reflete a relação de longo prazo. O CSAT mede a satisfação com uma experiência específica, como o atendimento de hoje. Os dois podem ser usados juntos: CSAT no ponto de atendimento e NPS em pesquisas periódicas.</p>",
    },
    {
      q: "Qual é um bom índice de satisfação?",
      a: "<p>Depende do setor e do histórico da própria empresa. Como referência, CSAT acima de 80% é considerado bom, e NPS acima de 50 é muito bom. O mais importante é acompanhar a evolução e comparar unidades semelhantes.</p>",
    },
    {
      q: "Quantas perguntas deve ter uma pesquisa de satisfação?",
      a: "<p>De uma a três. A pergunta principal deve capturar a métrica (nota ou carinha) e as demais devem ser opcionais. Pesquisas longas reduzem a taxa de resposta, especialmente no totem.</p>",
    },
    {
      q: "Como calcular o NPS?",
      a: "<p>Subtraia o percentual de detratores (notas 0 a 6) do percentual de promotores (notas 9 e 10). Os neutros (7 e 8) entram no total, mas não na conta. O resultado varia de −100 a +100.</p>",
    },
    {
      q: "Pesquisa de satisfação precisa de consentimento?",
      a: "<p>A LGPD exige finalidade clara e tratamento adequado dos dados. Colete o mínimo necessário, informe para que a resposta será usada e evite expor comentários identificáveis. Para contato posterior, registre o consentimento.</p>",
    },
  ],
  schema: [
    {
      "@type": "Article",
      "@id": "https://beend.tech/pesquisa-de-satisfacao#artigo",
      headline: "Pesquisa de satisfação: guia com NPS, CSAT e CES",
      description:
        "Guia completo de pesquisa de satisfação com NPS, CSAT e CES, fórmulas, exemplos de perguntas e boas práticas.",
      author: { "@id": "https://beend.tech/#organization" },
      publisher: { "@id": "https://beend.tech/#organization" },
      datePublished: "2026-11-02",
      dateModified: "2026-11-02",
      inLanguage: "pt-BR",
      mainEntityOfPage: "https://beend.tech/pesquisa-de-satisfacao.html",
    },
  ],
  llms: {
    section: "conteudo",
    summary:
      "Guia de pesquisa de satisfação com definições e fórmulas de NPS, CSAT e CES, comparativo, 12 exemplos de perguntas e boas práticas.",
  },
  priority: "0.8",
};
