import { section, answer } from "./_ui.mjs";

/* =========================================================================
   Blog — métricas de satisfação (NPS, CSAT, CES) e conteúdo semântico.
   Cada post traz ao menos um diagrama vetorial em assets/img/blog/.
   ========================================================================= */

const pretty = (slug) => `https://beend.tech/${slug.replace(/\.html$/, "")}`;

const articleSchema = (slug, headline, description) => ({
  "@type": "Article",
  "@id": `${pretty(slug)}#artigo`,
  headline,
  description,
  author: { "@id": "https://beend.tech/#organization" },
  publisher: { "@id": "https://beend.tech/#organization" },
  datePublished: "2026-11-04",
  dateModified: "2026-11-04",
  inLanguage: "pt-BR",
  mainEntityOfPage: pretty(slug),
  image: "https://beend.tech/assets/img/og-default.jpg",
});

const fig = (file, w, h, alt, caption, lazy = true) => `
      <figure class="figure">
        <img src="{{root}}assets/img/blog/${file}" width="${w}" height="${h}" alt="${alt}"${lazy ? ' loading="lazy" decoding="async"' : ""}>
        <figcaption>${caption}</figcaption>
      </figure>`;

/* ============================== POST 1 — NPS ============================== */
const postNps = {
  slug: "blog/o-que-e-nps.html",
  active: null,
  type: "article",
  kicker: "Métrica",
  title: "O que é NPS: para que serve, como calcular e como implantar",
  description:
    "O que é NPS (Net Promoter Score): a pergunta, como calcular, o que é uma boa nota, como implantar na empresa e como transformar o resultado em ação.",
  h1: "O que é NPS, para que serve e como calcular",
  lead:
    "O NPS transforma uma única pergunta em um número que acompanha a relação do cliente com a sua empresa ao longo do tempo. Entenda a métrica e como colocá-la para funcionar.",
  crumbs: [
    { name: "Home", href: "index.html" },
    { name: "Conteúdo", href: "blog/index.html" },
    { name: "O que é NPS" },
  ],
  body: `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>NPS (Net Promoter Score) é uma métrica de lealdade.</strong> Você faz uma única pergunta — “de 0 a 10, qual a chance de você recomendar a nossa empresa a um amigo?” — e classifica as respostas em detratores, neutros e promotores.</p>
      <p>O resultado é a porcentagem de promotores menos a de detratores, num intervalo de −100 a +100. Quanto mais alto, maior a chance de o cliente recomendar e voltar.</p>
    `)}

    <div class="prose">
      <div class="toc">
        <p>Neste artigo</p>
        <ol>
          <li><a href="#para-que-serve">Para que serve o NPS</a></li>
          <li><a href="#escala">A escala e o que é cada grupo</a></li>
          <li><a href="#como-calcular">Como calcular o NPS</a></li>
          <li><a href="#boa-nota">O que é um NPS bom</a></li>
          <li><a href="#como-implantar">Como implantar na empresa, passo a passo</a></li>
          <li><a href="#erros">Erros que estragam o NPS</a></li>
        </ol>
      </div>

      <h2 id="para-que-serve">Para que serve o NPS</h2>
      <p>O NPS responde a uma pergunta que nenhuma planilha de vendas responde sozinha: <strong>o cliente voltaria e indicaria a sua empresa?</strong> Ele serve para quatro usos práticos:</p>
      <ul>
        <li><strong>Acompanhar a relação ao longo do tempo.</strong> O número de hoje comparado ao do trimestre passado mostra se a percepção está melhorando ou piorando.</li>
        <li><strong>Comparar unidades, lojas ou equipes.</strong> Com a mesma pergunta em todas as praças, você vê onde a experiência falha.</li>
        <li><strong>Priorizar investimento.</strong> Se o NPS cai sempre no mesmo ponto do atendimento, é ali que o dinheiro deve ir.</li>
        <li><strong>Antecipar risco de perda.</strong> Detratores são o grupo mais propenso a sair — e o alvo mais útil de uma ação de recuperação.</li>
      </ul>
      <p>O NPS não é uma pesquisa longa nem um relatório complexo. É um termômetro simples, medido sempre do mesmo jeito.</p>

      ${fig(
        "nps-escala.svg",
        960,
        300,
        "Escala do NPS de 0 a 10 com as faixas de detratores, neutros e promotores",
        "A escala do NPS vai de 0 a 10 e se divide em três grupos: detratores (0 a 6), neutros (7 e 8) e promotores (9 e 10)."
      )}

      <h2 id="escala">A escala e o que é cada grupo</h2>
      <p>A divisão não é aleatória: ela foi desenhada para separar quem defende a marca de quem apenas tolera.</p>
      <ul>
        <li><strong>Promotores (9 e 10):</strong> clientes leais, que recomendam e voltam. São a base de crescimento por indicação.</li>
        <li><strong>Neutros (7 e 8):</strong> satisfeitos, mas sem entusiasmo. Não defendem nem sabotam. São o maior grupo de oportunidade.</li>
        <li><strong>Detratores (0 a 6):</strong> insatisfeitos que podem falar mal da empresa. Aqui mora o risco de reputação.</li>
      </ul>
      <p>Repare que os neutros entram na conta do total, mas não somam nem subtraem. Por isso um NPS pode ser 0 mesmo com a maioria das notas acima de 7.</p>

      <h2 id="como-calcular">Como calcular o NPS</h2>
      <p>O cálculo tem três passos e não exige software especial:</p>
      <ol>
        <li>Conte quantas respostas foram <strong>promotoras</strong> (9 e 10) e divida pelo total de respostas.</li>
        <li>Faça o mesmo com as <strong>detratoras</strong> (0 a 6).</li>
        <li>Subtraia: <strong>% promotores − % detratores</strong>.</li>
      </ol>

      ${fig(
        "nps-formula.svg",
        960,
        320,
        "Fórmula do NPS e exemplo com 100 respostas",
        "O NPS é sempre uma subtração entre duas porcentagens. No exemplo, 62% de promotores menos 18% de detratores resulta em NPS 44."
      )}

      <div class="table-wrap">
        <table>
          <caption>Exemplo de cálculo com 100 respostas</caption>
          <thead><tr><th>Grupo</th><th>Notas</th><th>Respostas</th><th>Percentual</th></tr></thead>
          <tbody>
            <tr><th>Promotores</th><td>9 e 10</td><td>62</td><td>62%</td></tr>
            <tr><th>Neutros</th><td>7 e 8</td><td>20</td><td>20%</td></tr>
            <tr><th>Detratores</th><td>0 a 6</td><td>18</td><td>18%</td></tr>
            <tr><th>Resultado</th><td>62% − 18%</td><td>—</td><td><strong>NPS 44</strong></td></tr>
          </tbody>
        </table>
      </div>
      <p>Atenção ao tamanho da amostra. Um NPS calculado sobre 5 respostas oscila demais para orientar decisão. Só faz sentido comparar períodos quando o volume é parecido.</p>

      <h2 id="boa-nota">O que é um NPS bom</h2>
      <p>Não existe um número universal. Um NPS 40 pode ser excelente numa operação e preocupante em outra, porque o patamar depende do setor, do tipo de relação e do momento da empresa.</p>
      <p>O que funciona na prática é usar <strong>três referências</strong>, nesta ordem:</p>
      <ol>
        <li><strong>Seu próprio histórico.</strong> A melhor comparação é você com você mesmo, na mesma pergunta.</li>
        <li><strong>Suas unidades.</strong> Comparar lojas entre si revela o que a melhor faz de diferente.</li>
        <li><strong>Faixas do setor</strong>, apenas como contexto. Elas variam muito e não substituem o seu dado.</li>
      </ol>
      <p>Se quiser aprofundar, escrevi um artigo só sobre <a href="{{root}}blog/benchmark-de-nps.html">benchmark de NPS e como definir a sua meta</a>.</p>

      <h2 id="como-implantar">Como implantar o NPS na empresa, passo a passo</h2>
      <p>A implantação é menos sobre ferramenta e mais sobre rotina. Estes seis passos evitam a maioria dos problemas:</p>
      <ol>
        <li><strong>Defina a pergunta e não a mude.</strong> “De 0 a 10, qual a chance de você recomendar a nossa empresa a um amigo?” é o padrão. Alterar o texto a cada mês invalida a comparação.</li>
        <li><strong>Escolha o momento da coleta.</strong> Logo após o atendimento, quando a experiência ainda está fresca. No <a href="{{root}}totem-de-pesquisa-de-satisfacao.html">totem de pesquisa</a>, isso acontece no caminho de saída.</li>
        <li><strong>Escolha o canal.</strong> Totem no ponto de venda, QR Code na embalagem ou na nota, WhatsApp depois do atendimento. O ideal é combinar canais, sem inflar a mesma pergunta.</li>
        <li><strong>Deixe um comentário opcional.</strong> A nota diz quanto; o comentário diz por quê. É ele que aponta a correção.</li>
        <li><strong>Defina a frequência de leitura.</strong> Uma leitura semanal para a operação e um fechamento mensal com o time.</li>
        <li><strong>Feche o ciclo com o cliente.</strong> Quando uma melhoria nasce de um comentário, comunique. Isso muda a percepção de quem responde.</li>
      </ol>
      <div class="note">
        <p><strong>Regra prática:</strong> se a pesquisa não gera nenhuma decisão, ela deixa de ser respondida. O cliente percebe quando responde e nada acontece.</p>
      </div>

      <h2 id="erros">Erros que estragam o NPS</h2>
      <ul>
        <li><strong>Perguntar demais.</strong> Dez perguntas reduzem a conclusão. O NPS foi feito para ser curto.</li>
        <li><strong>Pedir nota alta.</strong> Orientar o cliente a dar 10 contamina a amostra e esconde o problema real.</li>
        <li><strong>Misturar públicos.</strong> Somar a nota de quem comprou com a de quem só visitou distorce o número.</li>
        <li><strong>Olhar só a média.</strong> A distribuição mostra o que a média esconde — muitos detratores podem estar diluídos num mar de neutros.</li>
        <li><strong>Comparar perguntas diferentes.</strong> Se o texto mudou, o histórico não vale.</li>
      </ul>
      <p>Erros de operação — posicionamento do totem, convite confuso, tela ilegível — também derrubam o volume de respostas. Reuni esses casos em <a href="{{root}}blog/como-aumentar-taxa-de-resposta.html">como aumentar a taxa de resposta</a>.</p>
    </div>
  </div>
</section>

${section({
  alt: true,
  kicker: "Próximo passo",
  title: "Coloque o NPS para rodar no ponto de atendimento",
  body: `<p>O totem coleta a nota no momento da saída, com comentário opcional e painel em tempo real. O software começa em R$ 69,90/mês e você testa 7 dias grátis.</p>
  <p><a class="btn btn--dark" href="{{root}}teste-gratis.html">Começar teste grátis</a>
     <a class="btn btn--wa" href="{{wa}}">Falar no WhatsApp</a></p>`,
})}
`,
  faqTitle: "Perguntas frequentes sobre NPS",
  faq: [
    {
      q: "Qual é a pergunta oficial do NPS?",
      a: "<p>“De 0 a 10, qual a chance de você recomendar a nossa empresa a um amigo?”. Para manter o histórico comparável, o texto não deve mudar entre medições.</p>",
    },
    {
      q: "O NPS vai de quanto a quanto?",
      a: "<p>De −100 a +100. O pior caso é quando todos são detratores (−100) e o melhor é quando todos são promotores (+100).</p>",
    },
    {
      q: "Preciso de quantas respostas para o NPS valer?",
      a: "<p>Quanto mais respostas, mais estável o número. Como regra, só compare períodos quando o volume for parecido — amostras muito pequenas oscilam e enganam.</p>",
    },
    {
      q: "Dá para calcular NPS com poucos clientes?",
      a: "<p>Dá, desde que você leia o resultado como tendência e não como nota exata. Em volumes baixos, acompanhe a evolução ao longo de vários meses.</p>",
    },
    {
      q: "Qual a diferença entre NPS e CSAT?",
      a: "<p>O NPS mede a relação com a empresa; o CSAT mede a satisfação com um atendimento específico. Expliquei a diferença em detalhe <a href='{{root}}blog/nps-ou-csat-qual-escolher.html'>neste artigo</a>.</p>",
    },
  ],
  schema: [
    articleSchema(
      "blog/o-que-e-nps.html",
      "O que é NPS, para que serve e como calcular",
      "O que é NPS: pergunta, escala, cálculo passo a passo, o que é uma boa nota e como implantar a métrica na empresa."
    ),
  ],
  llms: {
    section: "conteudo",
    summary:
      "O que é NPS: definição, pergunta de 0 a 10, detratores/neutros/promotores, fórmula (%promotores − %detratores), faixas de referência e passo a passo de implantação.",
  },
  priority: "0.8",
};

/* ============================== POST 2 — CSAT ============================= */
const postCsat = {
  slug: "blog/o-que-e-csat.html",
  active: null,
  type: "article",
  kicker: "Métrica",
  title: "O que é CSAT: para que serve e como medir a satisfação",
  description:
    "O que é CSAT (Customer Satisfaction Score): como calcular, exemplos de perguntas, diferença para avaliação em estrelas e quando usar no ponto de atendimento.",
  h1: "O que é CSAT: para que serve e como medir",
  lead:
    "O CSAT mede a satisfação com um atendimento específico. É a métrica que responde mais rápido quando você muda algo na operação.",
  crumbs: [
    { name: "Home", href: "index.html" },
    { name: "Conteúdo", href: "blog/index.html" },
    { name: "O que é CSAT" },
  ],
  body: `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>CSAT (Customer Satisfaction Score) é o percentual de clientes satisfeitos com um atendimento, produto ou serviço específico.</strong> Normalmente vem de uma pergunta com escala de 1 a 5 — “como você avalia o atendimento que recebeu hoje?”.</p>
      <p>Se 80 de 100 clientes marcaram as duas notas mais altas, o CSAT é 80%. É uma métrica de episódio: mede um contato, não a relação inteira.</p>
    `)}

    <div class="prose">
      <div class="toc">
        <p>Neste artigo</p>
        <ol>
          <li><a href="#o-que-e">O que o CSAT mede</a></li>
          <li><a href="#como-calcular">Como calcular o CSAT</a></li>
          <li><a href="#perguntas">Exemplos de perguntas</a></li>
          <li><a href="#quando-usar">Quando usar o CSAT</a></li>
          <li><a href="#totem">CSAT no totem de atendimento</a></li>
          <li><a href="#cuidados">Cuidados ao ler o CSAT</a></li>
        </ol>
      </div>

      <h2 id="o-que-e">O que o CSAT mede</h2>
      <p>O CSAT olha para o <strong>episódio</strong>: aquela compra, aquele suporte, aquela visita. Ele responde “esta experiência funcionou?”. É diferente do NPS, que olha para a relação de longo prazo.</p>
      <p>Por ser específico, o CSAT é ótimo para:</p>
      <ul>
        <li>avaliar um atendimento logo depois que ele termina;</li>
        <li>testar uma mudança (novo fluxo de caixa, novo roteiro de atendimento) e ver o efeito;</li>
        <li>comparar equipes, turnos ou unidades na mesma tarefa;</li>
        <li>acompanhar um canal isolado, como WhatsApp ou telefone.</li>
      </ul>

      ${fig(
        "csat-escala.svg",
        960,
        320,
        "Escala do CSAT de 1 a 5 estrelas, de muito insatisfeito a muito satisfeito",
        "O CSAT usa uma escala curta, normalmente de 1 a 5. As duas notas mais altas contam como satisfação."
      )}

      <h2 id="como-calcular">Como calcular o CSAT</h2>
      <p>A conta é simples e direta:</p>
      <p><strong>CSAT = respostas satisfeitas ÷ total de respostas × 100</strong></p>
      <p>Consideram-se “satisfeitas” as notas que expressam aprovação — com a escala de 5 pontos, normalmente as notas 4 e 5. O critério precisa ser fixo: se um mês você conta 4 e 5 e no outro conta só 5, o número deixa de ser comparável.</p>
      <div class="table-wrap">
        <table>
          <caption>Exemplo com escala de 1 a 5</caption>
          <thead><tr><th>Nota</th><th>Respostas</th><th>Entra no CSAT?</th></tr></thead>
          <tbody>
            <tr><th>5 — muito satisfeito</th><td>58</td><td>Sim</td></tr>
            <tr><th>4 — satisfeito</th><td>22</td><td>Sim</td></tr>
            <tr><th>3 — neutro</th><td>12</td><td>Não</td></tr>
            <tr><th>2 — insatisfeito</th><td>6</td><td>Não</td></tr>
            <tr><th>1 — muito insatisfeito</th><td>2</td><td>Não</td></tr>
            <tr><th>Resultado</th><td>80 de 100</td><td><strong>CSAT 80%</strong></td></tr>
          </tbody>
        </table>
      </div>
      <p>Diferente do NPS, o CSAT não tem faixa negativa: ele vai de 0% a 100%. Isso facilita a leitura, mas também esconde a intensidade da insatisfação — 80% de satisfação com 2% de clientes furiosos ainda é um problema.</p>

      <h2 id="perguntas">Exemplos de perguntas</h2>
      <p>O texto da pergunta define o que você mede. Estes formatos funcionam bem no ponto de atendimento:</p>
      <ul>
        <li><strong>Satisfação geral:</strong> “De 1 a 5, quão satisfeito você ficou com o atendimento hoje?”</li>
        <li><strong>Específica do produto:</strong> “Como você avalia a qualidade do que levou hoje?”</li>
        <li><strong>Do canal:</strong> “Você conseguiu resolver o que precisava?” (sim/não, com comentário).</li>
        <li><strong>Escala de carinhas:</strong> cinco expressões, sem número — ajuda quando o público é amplo.</li>
        <li><strong>Estrelas:</strong> cinco estrelas, formato familiar e rápido de tocar.</li>
      </ul>
      <p>Reuni mais modelos, com exemplos prontos, em <a href="{{root}}blog/perguntas-para-pesquisa-de-satisfacao.html">perguntas para pesquisa de satisfação</a>.</p>

      <h2 id="quando-usar">Quando usar o CSAT</h2>
      <p>Use o CSAT quando a pergunta que você quer responder for <strong>“como foi este atendimento?”</strong>. Ele é a métrica certa para:</p>
      <ul>
        <li>operar um plano de melhoria contínua — mudou algo, mediu de novo;</li>
        <li>avaliar treinamento de equipe;</li>
        <li>medir canais e fluxos específicos;</li>
        <li>dar feedback rápido para quem está na linha de frente.</li>
      </ul>
      <p>Use o NPS quando a pergunta for <strong>“o cliente continuaria com a gente?”</strong>. Não é escolher um ou outro: as duas métricas convivem e contam histórias diferentes. Comparei as duas em <a href="{{root}}blog/nps-ou-csat-qual-escolher.html">NPS ou CSAT: qual escolher</a>.</p>

      <h2 id="totem">CSAT no totem de atendimento</h2>
      <p>O CSAT foi feito para coleta imediata. No <a href="{{root}}totem-de-pesquisa-de-satisfacao.html">totem de pesquisa de satisfação</a>, o cliente responde em poucos toques, antes de sair — e a resposta chega ao painel praticamente em tempo real.</p>
      <p>Isso resolve o maior problema do CSAT: o esquecimento. Perguntar uma semana depois, por e-mail, mede a memória do cliente, não a experiência.</p>

      <h2 id="cuidados">Cuidados ao ler o CSAT</h2>
      <ul>
        <li><strong>CSAT alto não significa lealdade.</strong> Um cliente pode estar satisfeito com o atendimento e, ainda assim, trocar de fornecedor.</li>
        <li><strong>Não compare escalas diferentes.</strong> Uma média de 4,2 numa escala de 5 não é comparável a “80% satisfeito”.</li>
        <li><strong>Cuide da taxa de resposta.</strong> CSAT calculado sobre poucas respostas engana. Veja <a href="{{root}}blog/como-aumentar-taxa-de-resposta.html">como aumentar a taxa de resposta</a>.</li>
        <li><strong>Leia o comentário.</strong> Ele transforma um percentual em uma correção concreta.</li>
      </ul>
    </div>
  </div>
</section>

${section({
  alt: true,
  kicker: "Próximo passo",
  title: "Meça o CSAT no ponto de atendimento",
  body: `<p>Coleta por totem, QR Code ou WhatsApp, com painel em tempo real. Teste grátis por 7 dias, sem cartão de crédito.</p>
  <p><a class="btn btn--dark" href="{{root}}teste-gratis.html">Começar teste grátis</a>
     <a class="btn btn--wa" href="{{wa}}">Falar no WhatsApp</a></p>`,
})}
`,
  faqTitle: "Perguntas frequentes sobre CSAT",
  faq: [
    {
      q: "O que significa a sigla CSAT?",
      a: "<p>Customer Satisfaction Score, ou pontuação de satisfação do cliente. É o percentual de respostas satisfeitas sobre o total de respostas.</p>",
    },
    {
      q: "Qual a diferença entre CSAT e avaliação em estrelas?",
      a: "<p>A avaliação em estrelas é um formato de pergunta; o CSAT é a métrica calculada a partir dela. As estrelas viram número quando você define quais notas contam como satisfação.</p>",
    },
    {
      q: "Um CSAT de 80% é bom?",
      a: "<p>Depende do setor e do histórico da própria empresa. O mais importante é a tendência: o CSAT subiu depois da mudança que você fez?</p>",
    },
    {
      q: "Posso usar CSAT e NPS ao mesmo tempo?",
      a: "<p>Sim, e é o mais comum. O CSAT mede o episódio; o NPS mede a relação. Duas perguntas curtas já dão as duas leituras.</p>",
    },
  ],
  schema: [
    articleSchema(
      "blog/o-que-e-csat.html",
      "O que é CSAT: para que serve e como medir",
      "O que é CSAT: definição, fórmula, exemplos de perguntas, quando usar e como aplicar no ponto de atendimento."
    ),
  ],
  llms: {
    section: "conteudo",
    summary:
      "O que é CSAT: percentual de clientes satisfeitos com um atendimento específico, como calcular, exemplos de pergunta e quando usar em vez do NPS.",
  },
  priority: "0.8",
};

/* ============================ POST 3 — NPS x CSAT ========================= */
const postNpsCsat = {
  slug: "blog/nps-ou-csat-qual-escolher.html",
  active: null,
  type: "article",
  kicker: "Comparativo",
  title: "NPS ou CSAT: diferenças e qual escolher para a sua empresa",
  description:
    "Diferença entre NPS e CSAT: o que cada métrica mede, quando usar cada uma, como combinar as duas e os erros mais comuns na comparação.",
  h1: "Diferença entre NPS e CSAT: qual é a melhor para a sua empresa?",
  lead:
    "As duas métricas respondem a perguntas diferentes. Entender isso evita o erro mais comum: escolher uma e usar no lugar da outra.",
  crumbs: [
    { name: "Home", href: "index.html" },
    { name: "Conteúdo", href: "blog/index.html" },
    { name: "NPS ou CSAT" },
  ],
  body: `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>Não é uma questão de qual é melhor, e sim de qual pergunta você quer responder.</strong> O NPS mede a relação do cliente com a empresa ao longo do tempo; o CSAT mede a satisfação com um atendimento específico.</p>
      <p>Na prática, a maioria das operações usa as duas: o CSAT para corrigir a rotina e o NPS para acompanhar a lealdade.</p>
    `)}

    <div class="prose">
      <h2>O que cada uma mede</h2>
      <p>A diferença começa no objeto da medição. Uma olha para a empresa inteira; a outra, para um episódio.</p>

      ${fig(
        "nps-vs-csat.svg",
        960,
        470,
        "Comparativo entre NPS e CSAT em pergunta, escala, o que mede e quando usar",
        "NPS e CSAT lado a lado: pergunta, escala, o que cada uma mede e quando usar."
      )}

      <div class="table-wrap">
        <table>
          <caption>NPS x CSAT</caption>
          <thead><tr><th>Critério</th><th>NPS</th><th>CSAT</th></tr></thead>
          <tbody>
            <tr><th>Pergunta</th><td>Chance de recomendar a empresa</td><td>Satisfação com um atendimento</td></tr>
            <tr><th>Escala</th><td>0 a 10</td><td>1 a 5 (ou carinhas/estrelas)</td></tr>
            <tr><th>Faixa do resultado</th><td>−100 a +100</td><td>0% a 100%</td></tr>
            <tr><th>O que mede</th><td>Lealdade e intenção de recomendar</td><td>Satisfação com o episódio</td></tr>
            <tr><th>Horizonte</th><td>Relação de longo prazo</td><td>Contato pontual</td></tr>
            <tr><th>Velocidade de reação</th><td>Mais lenta</td><td>Imediata a uma mudança</td></tr>
            <tr><th>Uso típico</th><td>Acompanhamento trimestral, metas</td><td>Melhoria contínua, treinamento</td></tr>
          </tbody>
        </table>
      </div>

      <h2>A pergunta que resolve a dúvida</h2>
      <p>Antes de escolher, complete esta frase: <strong>“o que eu quero saber é…”</strong>.</p>
      <ul>
        <li>“se o cliente continuaria com a gente” → <strong>NPS</strong>.</li>
        <li>“se o atendimento de ontem foi bem” → <strong>CSAT</strong>.</li>
        <li>“se o cliente teve trabalho para resolver o problema” → <strong>CES</strong>, que explico em <a href="{{root}}blog/o-que-e-ces-customer-effort-score.html">o que é CES</a>.</li>
      </ul>
      <p>Se a resposta for “as três coisas”, a solução não é escolher: é usar uma pergunta principal e medir as outras em momentos diferentes.</p>

      <h2>Quando usar NPS e CSAT juntos</h2>
      <p>Combinar as duas métricas dá uma leitura mais completa, porque separa <strong>o que aconteceu</strong> do <strong>que isso significa</strong>:</p>
      <ul>
        <li>CSAT em alta e NPS estável → a operação está boa, mas o cliente não vê motivo para recomendar. Pode faltar diferencial percebido.</li>
        <li>CSAT baixo em uma unidade e NPS bom na média → um ponto específico puxa a experiência para baixo, sem comprometer a marca ainda.</li>
        <li>Os dois caindo → sinal de problema estrutural, não de um dia ruim.</li>
      </ul>
      <p>Uma montagem comum é usar o totem para o CSAT, no caminho de saída, e enviar a pergunta de NPS por WhatsApp em uma periodicidade maior.</p>

      <h2>Erros comuns na comparação</h2>
      <ul>
        <li><strong>Comparar números entre métricas.</strong> NPS 44 e CSAT 44% não significam a mesma coisa. Cada uma tem sua régua.</li>
        <li><strong>Trocar a escala no meio do caminho.</strong> Mudar de 1 a 5 para 1 a 7 invalida o histórico.</li>
        <li><strong>Usar CSAT para prever retenção.</strong> Satisfação pontual não garante lealdade.</li>
        <li><strong>Usar NPS para corrigir a rotina.</strong> A nota de lealdade é lenta demais para orientar o dia a dia.</li>
        <li><strong>Medir as duas na mesma tela, em sequência.</strong> Duas perguntas seguidas reduzem a taxa de conclusão. Prefira um canal para cada uma.</li>
      </ul>

      <div class="note">
        <p><strong>Resumo prático:</strong> use CSAT para melhorar a operação e NPS para acompanhar a relação. Se só puder medir uma coisa, comece pelo NPS — é o indicador que mais se aproxima da decisão de voltar.</p>
      </div>
    </div>
  </div>
</section>

${section({
  alt: true,
  kicker: "Próximo passo",
  title: "Meça as duas no mesmo painel",
  body: `<p>A plataforma beend.tech coleta NPS, CSAT e CES no totem, no QR Code ou no WhatsApp, com os resultados no mesmo painel.</p>
  <p><a class="btn btn--dark" href="{{root}}pesquisa-de-satisfacao.html">Ver o guia de pesquisa de satisfação</a></p>`,
})}
`,
  faqTitle: "Perguntas frequentes sobre NPS e CSAT",
  faq: [
    {
      q: "Qual é mais importante, NPS ou CSAT?",
      a: "<p>Depende do objetivo. O NPS indica a tendência de o cliente permanecer e recomendar; o CSAT ajuda a corrigir o atendimento do dia a dia. Medir os dois dá uma leitura mais completa.</p>",
    },
    {
      q: "Dá para converter NPS em CSAT?",
      a: "<p>Não. São escalas e conceitos diferentes. Cada métrica deve ser comparada com o próprio histórico.</p>",
    },
    {
      q: "Com que frequência devo medir cada uma?",
      a: "<p>O CSAT pode ser contínuo, a cada atendimento. O NPS costuma ser lido por período — mensal ou trimestral — para dar estabilidade ao número.</p>",
    },
    {
      q: "Qual métrica usar em uma pesquisa por totem?",
      a: "<p>O totem funciona melhor com uma pergunta rápida. O CSAT ou a escala de carinhas encaixam bem; o NPS também, desde que seja a pergunta principal.</p>",
    },
  ],
  schema: [
    articleSchema(
      "blog/nps-ou-csat-qual-escolher.html",
      "Diferença entre NPS e CSAT: qual é a melhor para a sua empresa?",
      "Comparativo entre NPS e CSAT: o que cada métrica mede, quando usar cada uma e como combinar as duas."
    ),
  ],
  llms: {
    section: "conteudo",
    summary:
      "NPS ou CSAT: comparativo de pergunta, escala, faixa de resultado, horizonte e uso. O NPS mede a relação e a lealdade; o CSAT mede a satisfação com um atendimento específico.",
  },
  priority: "0.8",
};

/* ============================== POST 4 — CES ============================== */
const postCes = {
  slug: "blog/o-que-e-ces-customer-effort-score.html",
  active: null,
  type: "article",
  kicker: "Métrica",
  title: "O que é CES (Customer Effort Score) e quando usar",
  description:
    "O que é CES, como aplicar a escala de esforço, como calcular e por que essa métrica explica melhor a experiência de quem teve um problema.",
  h1: "O que é CES: a métrica de esforço do cliente",
  lead:
    "O CES mede quanto trabalho o cliente teve para resolver o que precisava. Em jornadas com problema, ele aponta o que o NPS e o CSAT não veem.",
  crumbs: [
    { name: "Home", href: "index.html" },
    { name: "Conteúdo", href: "blog/index.html" },
    { name: "O que é CES" },
  ],
  body: `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>CES (Customer Effort Score) mede o esforço que o cliente precisou fazer para resolver um problema.</strong> A pergunta clássica é “a empresa facilitou a resolução do seu caso?”, com resposta em escala.</p>
      <p>Quanto menor o esforço, melhor. É a métrica mais indicada para jornadas de suporte, troca, devolução e segunda via — situações em que o cliente já chegou incomodado.</p>
    `)}

    <div class="prose">
      <div class="toc">
        <p>Neste artigo</p>
        <ol>
          <li><a href="#o-que-e">O que o CES mede</a></li>
          <li><a href="#escala">A escala de esforço</a></li>
          <li><a href="#como-calcular">Como calcular</a></li>
          <li><a href="#quando-usar">Quando usar o CES</a></li>
          <li><a href="#comparacao">CES, NPS e CSAT juntos</a></li>
        </ol>
      </div>

      <h2 id="o-que-e">O que o CES mede</h2>
      <p>O CES parte de uma constatação prática: <strong>cliente não odeia errar, odeia ter trabalho para resolver.</strong> Um problema bem resolvido, com pouco esforço, costuma gerar mais lealdade do que a ausência de problema.</p>
      <p>Por isso o CES é bom em:</p>
      <ul>
        <li>medir a qualidade do suporte e do pós-venda;</li>
        <li>avaliar políticas de troca, devolução e cancelamento;</li>
        <li>detectar burocracia — quantas etapas, quantos canais, quanto tempo;</li>
        <li>priorizar automações e ajustes de processo.</li>
      </ul>

      <h2 id="escala">A escala de esforço</h2>
      <p>A escala mais usada é de 1 a 7, ancorada em “muito difícil” e “muito fácil”. Também funciona com 5 pontos ou com carinhas.</p>

      ${fig(
        "ces-escala.svg",
        960,
        300,
        "Escala do CES de 1 a 7, de muito difícil a muito fácil",
        "No CES, 7 significa que a empresa facilitou tudo e 1 que o cliente precisou se virar. CES alto é bom."
      )}

      <h2 id="como-calcular">Como calcular o CES</h2>
      <p>Há dois jeitos, e o mais comum é bem simples: <strong>média das respostas</strong>. Some todas as notas e divida pelo número de respostas. Numa escala de 7, um CES 5,9 indica pouco esforço.</p>
      <p>Outro formato, mais parecido com o NPS, é o percentual de notas altas (6 e 7) menos o de notas baixas (1 a 3). Escolha um critério e mantenha — misturar os dois no mesmo histórico invalida a comparação.</p>

      <h2 id="quando-usar">Quando usar o CES</h2>
      <p>Use o CES quando o cliente passou por um processo que exige ação dele: abrir um chamado, pedir segunda via, resolver uma cobrança, trocar um produto.</p>
      <ul>
        <li><strong>Suporte e SAC:</strong> quanto trabalho deu resolver o caso?</li>
        <li><strong>Autoatendimento:</strong> o cliente achou o que precisava sozinho?</li>
        <li><strong>Burocracia interna:</strong> quantas vezes o cliente precisou repetir a mesma informação?</li>
      </ul>
      <p>O CES não substitui o NPS nem o CSAT. Ele responde uma pergunta que os outros dois não fazem: <strong>“foi fácil?”</strong>.</p>

      <h2 id="comparacao">CES, NPS e CSAT juntos</h2>
      <p>As três métricas cobrem dimensões diferentes da experiência:</p>
      <ul>
        <li><strong>NPS</strong> — o cliente recomenda a empresa? (<a href="{{root}}blog/o-que-e-nps.html">o que é NPS</a>)</li>
        <li><strong>CSAT</strong> — o cliente ficou satisfeito com o atendimento? (<a href="{{root}}blog/o-que-e-csat.html">o que é CSAT</a>)</li>
        <li><strong>CES</strong> — foi fácil resolver? </li>
      </ul>
      <p>Uma combinação útil é perguntar o CES logo depois de uma interação de suporte e reservar o NPS para uma leitura periódica da relação. Assim cada pergunta aparece no momento em que faz sentido.</p>
      <div class="note">
        <p><strong>Regra prática:</strong> se o esforço é alto, a satisfação cai e a lealdade some — nessa ordem. Reduzir etapas costuma ser mais barato do que compensar com desconto.</p>
      </div>
    </div>
  </div>
</section>

${section({
  alt: true,
  kicker: "Próximo passo",
  title: "Meça esforço, satisfação e lealdade",
  body: `<p>O mesmo totem pode rodar NPS, CSAT, CES, escala de carinhas e quiz, com relatórios por período.</p>
  <p><a class="btn btn--dark" href="{{root}}pesquisa-de-satisfacao.html">Ver métricas e como aplicar</a></p>`,
})}
`,
  faqTitle: "Perguntas frequentes sobre CES",
  faq: [
    {
      q: "O que significa CES?",
      a: "<p>Customer Effort Score, ou pontuação de esforço do cliente. Mede quanto trabalho o cliente teve para resolver o que precisava.</p>",
    },
    {
      q: "CES alto é bom ou ruim?",
      a: "<p>Alto é bom: significa que o cliente precisou de pouco esforço, porque a escala vai de “muito difícil” a “muito fácil”.</p>",
    },
    {
      q: "Qual a diferença entre CES e CSAT?",
      a: "<p>O CSAT pergunta se o cliente ficou satisfeito; o CES pergunta se foi fácil. Um cliente pode estar satisfeito com o fim e ter passado por um processo cansativo.</p>",
    },
    {
      q: "Preciso do CES se já uso NPS e CSAT?",
      a: "<p>Se a empresa tem jornadas de suporte, troca ou cobrança, o CES acrescenta uma leitura que as outras duas não capturam. Em operações sem esse tipo de processo, ele pode ser dispensável.</p>",
    },
  ],
  schema: [
    articleSchema(
      "blog/o-que-e-ces-customer-effort-score.html",
      "O que é CES: a métrica de esforço do cliente",
      "O que é CES (Customer Effort Score): escala de esforço, como calcular, quando usar e a diferença para NPS e CSAT."
    ),
  ],
  llms: {
    section: "conteudo",
    summary:
      "O que é CES: métrica de esforço do cliente em escala de 1 a 7, como calcular, quando usar em suporte e pós-venda e como se combina com NPS e CSAT.",
  },
  priority: "0.7",
};

/* ==================== POST 5 — taxa de resposta =========================== */
const postTaxa = {
  slug: "blog/como-aumentar-taxa-de-resposta.html",
  active: null,
  type: "article",
  kicker: "Operação",
  title: "Como aumentar a taxa de resposta da pesquisa de satisfação",
  description:
    "Como aumentar a taxa de resposta da pesquisa de satisfação: posicionamento, convite, tempo de tela, treinamento da equipe e o que medir em cada etapa.",
  h1: "Como aumentar a taxa de resposta da pesquisa de satisfação",
  lead:
    "De nada adianta um bom questionário se ninguém responde. A taxa de resposta é o primeiro indicador a cuidar — e quase sempre dá para melhorá-la sem trocar equipamento.",
  crumbs: [
    { name: "Home", href: "index.html" },
    { name: "Conteúdo", href: "blog/index.html" },
    { name: "Taxa de resposta" },
  ],
  body: `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>A taxa de resposta é o número de pesquisas concluídas dividido pelo número de clientes que passaram pelo ponto de coleta.</strong> Para aumentá-la, trabalhe na ordem do funil: visibilidade, clareza do convite, facilidade de responder e treinamento da equipe.</p>
    `)}

    <div class="prose">
      <h2>Onde as respostas se perdem</h2>
      <p>A taxa cai em etapas. Se você mede só o resultado final, não sabe o que corrigir. Pense no caminho do cliente como um funil:</p>

      ${fig(
        "funil-taxa-de-resposta.svg",
        960,
        400,
        "Funil da taxa de resposta: clientes atendidos, notam o totem, começam e concluem a pesquisa",
        "A taxa de resposta é o resultado de quatro etapas. Cada uma pode ser melhorada separadamente."
      )}

      <ol>
        <li><strong>Notam o totem.</strong> Se está fora do caminho, nem chega a existir.</li>
        <li><strong>Entendem o convite.</strong> Se a tela não explica em dois segundos, o cliente passa direto.</li>
        <li><strong>Começam a responder.</strong> Se o primeiro toque tem atrito, ele desiste.</li>
        <li><strong>Concluem.</strong> Se a pesquisa é longa, ele abandona no meio.</li>
      </ol>

      <h2>Nove ajustes que mais movem o ponteiro</h2>
      <ol>
        <li><strong>Coloque o totem no caminho de saída.</strong> Depois do atendimento e do pagamento, onde o cliente naturalmente passa.</li>
        <li><strong>Uma pergunta principal.</strong> Nota ou carinha. Deixe o comentário como opcional.</li>
        <li><strong>Convite direto.</strong> “Como foi seu atendimento hoje? Toque em uma carinha.” Nada de frase institucional longa.</li>
        <li><strong>Tela legível.</strong> Contraste alto, fonte grande e brilho suficiente. Teste à distância e em horários diferentes.</li>
        <li><strong>Toques grandes.</strong> Botões fáceis de acertar, com espaço entre eles.</li>
        <li><strong>Sem login, sem dados obrigatórios.</strong> Nome e telefone só se houver contrapartida clara.</li>
        <li><strong>Personalize com a marca.</strong> O totem genérico parece um objeto estranho no balcão.</li>
        <li><strong>Treine a equipe para um convite neutro.</strong> Indicar o totem sim; sugerir a nota, não.</li>
        <li><strong>Dê um motivo.</strong> Uma frase do tipo “sua resposta muda o nosso atendimento” aumenta a disposição de participar.</li>
      </ol>

      <h2>Quanto tempo a pesquisa deve levar</h2>
      <p>O cliente está em pé e de saída. A regra é: <strong>menos de 15 segundos</strong> entre o primeiro toque e o agradecimento. Acima disso, a conclusão cai de forma acentuada.</p>
      <p>Se você precisa de mais dados, não alongue o totem: use o WhatsApp depois, com o cliente já em casa e disposto a conversar.</p>

      <h2>O que medir</h2>
      <div class="table-wrap">
        <table>
          <caption>Indicadores por etapa do funil</caption>
          <thead><tr><th>Etapa</th><th>Indicador</th><th>Como melhorar</th></tr></thead>
          <tbody>
            <tr><th>Visibilidade</th><td>Quantos notam o totem</td><td>Posição, sinalização, iluminação</td></tr>
            <tr><th>Convite</th><td>Quantos começam</td><td>Texto curto, tela clara</td></tr>
            <tr><th>Conclusão</th><td>Quantos terminam</td><td>Pesquisa mais curta, toques grandes</td></tr>
            <tr><th>Qualidade</th><td>Distribuição das notas</td><td>Convite neutro, sem indução</td></tr>
          </tbody>
        </table>
      </div>

      <div class="note">
        <p><strong>Alerta:</strong> notas sempre máximas com volume alto podem indicar que a equipe está pedindo 10. Taxa de resposta e distribuição devem ser lidas juntas.</p>
      </div>

      <h2>Erros que derrubam a resposta</h2>
      <ul>
        <li>Pedir nome, e-mail e telefone antes de começar.</li>
        <li>Pesquisa com mais de três telas.</li>
        <li>Totem atrás do caixa, virado para a parede ou fora do fluxo.</li>
        <li>Tela com reflexo, brilho baixo ou fonte pequena.</li>
        <li>Equipe que não sabe explicar para que serve a pesquisa.</li>
      </ul>
      <p>Vários desses pontos aparecem também em <a href="{{root}}blog/erros-ao-instalar-totem-de-pesquisa.html">7 erros que reduzem a taxa de resposta</a>.</p>
    </div>
  </div>
</section>

${section({
  alt: true,
  kicker: "Próximo passo",
  title: "Veja o plano certo para o seu volume",
  body: `<p>Os planos acompanham o número de terminais e o volume de avaliações. Comece com um ponto e expanda depois de confirmar a resposta.</p>
  <p><a class="btn btn--dark" href="{{root}}planos-e-precos.html">Ver planos e preços</a></p>`,
})}
`,
  faqTitle: "Perguntas frequentes sobre taxa de resposta",
  faq: [
    {
      q: "Qual é uma boa taxa de resposta?",
      a: "<p>Varia por setor e por fluxo. O mais útil é medir a sua própria taxa ao longo do tempo e comparar unidades parecidas. O essencial é que o volume sustente a análise.</p>",
    },
    {
      q: "Quantas perguntas deve ter a pesquisa?",
      a: "<p>Uma pergunta principal e um comentário opcional. No totem, tempo e atenção são curtos; pesquisas longas derrubam a conclusão.</p>",
    },
    {
      q: "Oferecer brinde aumenta a resposta?",
      a: "<p>Pode aumentar o volume, mas tende a distorcer a amostra — quem responde pelo brinde nem sempre representa o cliente. Um convite direto costuma ser mais honesto.</p>",
    },
    {
      q: "E se a taxa continuar baixa?",
      a: "<p>Revise o funil na ordem: visibilidade, convite, facilidade e treinamento. Na maioria dos casos, o gargalo está no começo, não no questionário.</p>",
    },
  ],
  schema: [
    articleSchema(
      "blog/como-aumentar-taxa-de-resposta.html",
      "Como aumentar a taxa de resposta da pesquisa de satisfação",
      "Nove ajustes práticos para aumentar a taxa de resposta da pesquisa de satisfação e o que medir em cada etapa do funil."
    ),
  ],
  llms: {
    section: "conteudo",
    summary:
      "Como aumentar a taxa de resposta: funil (visibilidade, convite, início, conclusão), nove ajustes práticos, tempo ideal de resposta e indicadores por etapa.",
  },
  priority: "0.7",
};

/* ==================== POST 6 — perguntas ================================= */
const postPerguntas = {
  slug: "blog/perguntas-para-pesquisa-de-satisfacao.html",
  active: null,
  type: "article",
  kicker: "Modelos",
  title: "Perguntas para pesquisa de satisfação: modelos prontos",
  description:
    "Modelos de perguntas para pesquisa de satisfação: NPS, CSAT, CES, escala de carinhas, quiz e comentário aberto, com exemplos prontos para usar no totem.",
  h1: "Perguntas para pesquisa de satisfação: modelos prontos",
  lead:
    "A pergunta certa depende do que você quer decidir. Separei modelos por métrica e por objetivo, prontos para copiar.",
  crumbs: [
    { name: "Home", href: "index.html" },
    { name: "Conteúdo", href: "blog/index.html" },
    { name: "Modelos de pergunta" },
  ],
  body: `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>Uma boa pesquisa de satisfação no ponto de atendimento tem uma pergunta principal e um comentário opcional.</strong> A pergunta principal varia conforme a métrica: NPS para lealdade, CSAT para satisfação com o atendimento, CES para esforço.</p>
    `)}

    <div class="prose">
      <h2>Formatos de pergunta</h2>
      <p>Antes dos modelos, vale conhecer os formatos. Cada um tem um tempo de resposta e um tipo de leitura:</p>

      ${fig(
        "tipos-de-pergunta.svg",
        960,
        380,
        "Formatos de pergunta: nota de 0 a 10, carinhas, estrelas e comentário aberto",
        "No totem, o formato mais rápido costuma vencer: nota, carinha ou estrela, com um comentário opcional."
      )}

      <h2>Perguntas de NPS (lealdade)</h2>
      <ul>
        <li>“De 0 a 10, qual a chance de você recomendar a nossa empresa a um amigo?”</li>
        <li>“De 0 a 10, quanto você recomendaria a nossa loja para alguém?”</li>
        <li>“De 0 a 10, você voltaria a comprar aqui?”</li>
      </ul>
      <p>Use sempre a mesma redação. Mudar o texto invalida a comparação com o histórico.</p>

      <h2>Perguntas de CSAT (satisfação)</h2>
      <ul>
        <li>“De 1 a 5, quão satisfeito você ficou com o atendimento hoje?”</li>
        <li>“Como você avalia a qualidade do que levou hoje?”</li>
        <li>“O que você achou do tempo de espera?”</li>
        <li>“Você conseguiu resolver o que precisava?” (sim/não + comentário)</li>
      </ul>

      <h2>Perguntas de CES (esforço)</h2>
      <ul>
        <li>“A nossa equipe facilitou a resolução do seu problema?”</li>
        <li>“Foi fácil resolver o que você precisava hoje?”</li>
        <li>“Quantas tentativas você precisou para resolver o seu caso?”</li>
      </ul>

      <h2>Escala de carinhas (SMILE)</h2>
      <ul>
        <li>“Como foi o seu dia aqui?” com cinco expressões.</li>
        <li>“Como você se sentiu com o atendimento?” com cinco expressões.</li>
      </ul>
      <p>A escala de carinhas funciona bem com público amplo, porque não exige interpretar números.</p>

      <h2>Quiz e perguntas de múltipla escolha</h2>
      <ul>
        <li>“Qual foi o principal motivo da sua visita?” (lista de opções)</li>
        <li>“Você encontrou o que procurava?” (sim / parcialmente / não)</li>
        <li>“Como você conheceu a nossa loja?” (indicação, redes sociais, passou na frente…)</li>
      </ul>

      <h2>Comentário aberto</h2>
      <ul>
        <li>“Quer contar o motivo da sua nota?” (opcional)</li>
        <li>“O que poderíamos melhorar?”</li>
        <li>“Deixe um recado para a nossa equipe.”</li>
      </ul>

      <h2>Perguntas que você deve evitar</h2>
      <ul>
        <li><strong>Perguntas que induzem a nota:</strong> “você ficou muito satisfeito, certo?”.</li>
        <li><strong>Duas perguntas em uma:</strong> “o atendimento foi rápido e educado?” — se a resposta for mista, o dado se perde.</li>
        <li><strong>Jargão interno:</strong> “como você avalia a qualidade percebida?”.</li>
        <li><strong>Pedido de dado pessoal sem contrapartida:</strong> reduz a taxa de resposta.</li>
        <li><strong>Pesquisa longa no totem:</strong> mais de uma pergunta principal derruba a conclusão.</li>
      </ul>

      <div class="note">
        <p><strong>Como escolher:</strong> comece pelo objetivo. Quer lealdade? NPS. Quer corrigir o atendimento? CSAT. Quer medir burocracia? CES. Um quiz ou pergunta de motivo serve depois, para qualificar.</p>
      </div>
      <p>Para saber como cada métrica é calculada, veja <a href="{{root}}blog/o-que-e-nps.html">o que é NPS</a> e <a href="{{root}}blog/o-que-e-csat.html">o que é CSAT</a>.</p>
    </div>
  </div>
</section>

${section({
  alt: true,
  kicker: "Próximo passo",
  title: "Monte a sua pesquisa no totem",
  body: `<p>Perguntas de nota, carinha, estrela e quiz, com comentário opcional e relatórios por período.</p>
  <p><a class="btn btn--dark" href="{{root}}totem-de-pesquisa-de-satisfacao.html">Conhecer o totem</a></p>`,
})}
`,
  faqTitle: "Perguntas frequentes sobre modelos de pergunta",
  faq: [
    {
      q: "Quantas perguntas devo fazer no totem?",
      a: "<p>Uma principal e um comentário opcional. Se precisar de mais informação, use um canal posterior, como o WhatsApp.</p>",
    },
    {
      q: "A pergunta de NPS sempre tem que ser a mesma?",
      a: "<p>Sim, para manter o histórico comparável. Se mudar o texto, comece um novo histórico.</p>",
    },
    {
      q: "Escala de carinhas ou nota de 0 a 10?",
      a: "<p>A carinha é mais rápida e amigável; a nota é mais precisa e permite calcular NPS. Escolha conforme o público e o que você quer comparar.</p>",
    },
    {
      q: "Posso misturar NPS e CSAT na mesma pesquisa?",
      a: "<p>Pode, mas evite duas perguntas seguidas no mesmo totem: a taxa de conclusão cai. Prefira um canal para cada métrica.</p>",
    },
  ],
  schema: [
    articleSchema(
      "blog/perguntas-para-pesquisa-de-satisfacao.html",
      "Perguntas para pesquisa de satisfação: modelos prontos",
      "Modelos de perguntas para pesquisa de satisfação: NPS, CSAT, CES, carinhas, quiz e comentário aberto, com exemplos prontos e o que evitar."
    ),
  ],
  llms: {
    section: "conteudo",
    summary:
      "Modelos de perguntas para pesquisa de satisfação: formatos (nota, carinha, estrela, quiz, comentário), exemplos por métrica (NPS, CSAT, CES) e perguntas a evitar.",
  },
  priority: "0.7",
};

/* ==================== POST 7 — benchmark de NPS ========================== */
const postBenchmark = {
  slug: "blog/benchmark-de-nps.html",
  active: null,
  type: "article",
  kicker: "Dados",
  title: "Benchmark de NPS: como saber se o seu resultado é bom",
  description:
    "Benchmark de NPS: por que a média geral engana, como comparar por setor, por unidade e por período e como criar o seu próprio parâmetro de comparação.",
  h1: "Benchmark de NPS: como saber se o seu resultado é bom",
  lead:
    "“NPS 44 é bom?” — a pergunta certa não tem resposta universal. O que orienta decisão é comparar com o referencial certo.",
  crumbs: [
    { name: "Home", href: "index.html" },
    { name: "Conteúdo", href: "blog/index.html" },
    { name: "Benchmark de NPS" },
  ],
  body: `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>Não existe um NPS “bom” universal.</strong> O patamar muda por setor, por tipo de relação (B2B ou B2C) e pelo momento da empresa. A comparação mais útil é com o seu próprio histórico e entre as suas unidades.</p>
      <p>Benchmarks de setor servem como contexto — nunca como meta isolada.</p>
    `)}

    <div class="prose">
      <h2>Por que a média geral engana</h2>
      <p>Uma média que junta bancos, restaurantes e SaaS não descreve nenhum deles. Além disso, dois fatores distorcem qualquer comparação entre empresas:</p>
      <ul>
        <li><strong>Momento da pergunta:</strong> perguntar logo após a compra tende a gerar notas mais altas do que perguntar meses depois.</li>
        <li><strong>Público:</strong> quem já é cliente costuma dar notas diferentes de quem acabou de conhecer a empresa.</li>
      </ul>
      <p>Sem padronizar pergunta e momento, comparar números entre empresas é comparar coisas diferentes.</p>

      <h2>Faixas por setor, como contexto</h2>
      <p>As faixas abaixo servem apenas para dar noção de ordem de grandeza. Trate como ilustração e use o seu histórico como régua principal.</p>

      ${fig(
        "benchmark-nps.svg",
        960,
        420,
        "Faixas de NPS por setor, valores ilustrativos",
        "Faixas por setor são referência de contexto, não meta. Elas variam com público, momento da pergunta e definição de cliente ativo."
      )}

      <div class="table-wrap">
        <table>
          <caption>Como interpretar faixas (referência de contexto)</caption>
          <thead><tr><th>Contexto</th><th>Leitura</th></tr></thead>
          <tbody>
            <tr><th>Acima da média do setor</th><td>Bom sinal, mas confirme se a base de clientes é comparável</td></tr>
            <tr><th>Na média</th><td>Há espaço: procure onde os detratores se concentram</td></tr>
            <tr><th>Abaixo da média</th><td>Prioridade em entender os comentários antes de criar meta</td></tr>
          </tbody>
        </table>
      </div>

      <h2>O benchmark que realmente importa: o interno</h2>
      <p>Comparar a empresa com ela mesma resolve a maioria das dúvidas. Três recortes são especialmente úteis:</p>
      <ol>
        <li><strong>Período:</strong> este mês contra o mês anterior, na mesma pergunta.</li>
        <li><strong>Unidade:</strong> lojas ou setores entre si — a melhor mostra o caminho.</li>
        <li><strong>Momento da jornada:</strong> antes e depois de uma mudança na operação.</li>
      </ol>
      <p>Um NPS 30 que subiu de 18 em três meses é uma história melhor do que um NPS 50 parado há um ano.</p>

      <h2>Como definir a sua meta</h2>
      <ol>
        <li><strong>Meça o ponto de partida</strong> por pelo menos dois meses, sem mexer na pergunta.</li>
        <li><strong>Identifique os detratores</strong> e agrupe os comentários por causa.</li>
        <li><strong>Escolha uma melhoria por ciclo</strong> — uma só, a mais frequente.</li>
        <li><strong>Defina a meta como variação</strong> (“+8 pontos em um trimestre”), não como número absoluto.</li>
        <li><strong>Comunique o resultado</strong> ao time e aos clientes.</li>
      </ol>

      <div class="note">
        <p><strong>Cuidado com meta artificial:</strong> perseguir um número sem olhar a distribuição leva a equipes pedindo nota alta — o que contamina a amostra e esconde o problema real.</p>
      </div>
      <p>Se você está começando agora, veja antes <a href="{{root}}blog/o-que-e-nps.html">o que é NPS e como calcular</a>.</p>
    </div>
  </div>
</section>

${section({
  alt: true,
  kicker: "Próximo passo",
  title: "Acompanhe o seu NPS com histórico",
  body: `<p>O painel guarda o histórico por período, por campanha e por terminal — o comparativo que realmente importa.</p>
  <p><a class="btn btn--dark" href="{{root}}pesquisa-de-satisfacao.html">Como funciona a plataforma</a></p>`,
})}
`,
  faqTitle: "Perguntas frequentes sobre benchmark de NPS",
  faq: [
    {
      q: "Qual é um bom NPS?",
      a: "<p>Depende do setor e do histórico da empresa. O referencial mais confiável é o seu próprio resultado ao longo do tempo, na mesma pergunta.</p>",
    },
    {
      q: "Onde encontro médias de NPS por setor?",
      a: "<p>Existem estudos de mercado, mas eles variam de método. Use-os como contexto e nunca como meta única — a base de clientes e o momento da pergunta mudam tudo.</p>",
    },
    {
      q: "Devo comparar o meu NPS com o de concorrentes?",
      a: "<p>Só se você souber exatamente como eles medem. Sem isso, a comparação é enganosa. Comparar as suas unidades entre si dá mais informação prática.</p>",
    },
    {
      q: "Como melhorar o NPS de forma consistente?",
      a: "<p>Agrupe os comentários dos detratores, escolha uma causa por ciclo, corrija e meça de novo. Melhoria contínua funciona melhor que campanha pontual.</p>",
    },
  ],
  schema: [
    articleSchema(
      "blog/benchmark-de-nps.html",
      "Benchmark de NPS: como saber se o seu resultado é bom",
      "Benchmark de NPS: por que a média geral engana, como comparar por setor, unidade e período e como definir metas de melhoria."
    ),
  ],
  llms: {
    section: "conteudo",
    summary:
      "Benchmark de NPS: não existe NPS universal; comparação útil é com o próprio histórico e entre unidades. Faixas por setor como contexto e como definir meta de melhoria.",
  },
  priority: "0.7",
};

/* ==================== POST 8 — relatório ================================= */
const postRelatorio = {
  slug: "blog/relatorio-de-pesquisa-de-satisfacao.html",
  active: null,
  type: "article",
  kicker: "Gestão",
  title: "Relatório de Pesquisa de Satisfação: o Que Analisar",
  description:
    "Como montar um relatório de pesquisa de satisfação: quais indicadores olhar, com que frequência ler, como transformar dado em ação e o que comunicar ao cliente.",
  h1: "Relatório de pesquisa de satisfação: o que analisar",
  lead:
    "Coletar resposta é metade do trabalho. A outra metade é ler o dado com regularidade e transformar a leitura em uma decisão.",
  crumbs: [
    { name: "Home", href: "index.html" },
    { name: "Conteúdo", href: "blog/index.html" },
    { name: "Relatório de satisfação" },
  ],
  body: `
<section class="section">
  <div class="wrap">
    ${answer(`
      <p><strong>Um bom relatório de satisfação responde a três perguntas: qual é a nota, o que explica essa nota e o que vamos fazer a respeito.</strong> Quatro indicadores cobrem a maior parte das decisões — e a leitura certa é mais importante que o painel bonito.</p>
    `)}

    <div class="prose">
      <h2>Os quatro indicadores que importam</h2>
      <p>Não é preciso acompanhar dezenas de gráficos. Estes quatro resolvem:</p>

      ${fig(
        "relatorio-satisfacao.svg",
        960,
        420,
        "Painel com NPS do período, distribuição das notas, evolução e comentários abertos",
        "Quatro leituras: a nota, a distribuição, a comparação por período e unidade, e os comentários abertos."
      )}

      <ol>
        <li><strong>A nota e a distribuição.</strong> A média esconde; a distribuição revela. Muitos detratores diluídos em neutros explicam uma nota que parece “ok”.</li>
        <li><strong>A evolução no tempo.</strong> Sempre na mesma pergunta, para o histórico valer.</li>
        <li><strong>A comparação entre unidades ou canais.</strong> Mostra onde a experiência é melhor e o que essa unidade faz de diferente.</li>
        <li><strong>Os comentários abertos.</strong> É o que transforma um número em uma correção concreta.</li>
      </ol>

      <h2>Com que frequência ler</h2>
      <div class="table-wrap">
        <table>
          <caption>Ritmo de leitura sugerido</caption>
          <thead><tr><th>Frequência</th><th>Público</th><th>O que olhar</th></tr></thead>
          <tbody>
            <tr><th>Diária</th><td>Operação / linha de frente</td><td>Alertas de nota baixa e comentários do dia</td></tr>
            <tr><th>Semanal</th><td>Gestores de unidade</td><td>Distribuição, tendência e um ajuste por semana</td></tr>
            <tr><th>Mensal</th><td>Direção</td><td>Indicador consolidado, comparação e prioridade do mês</td></tr>
            <tr><th>Trimestral</th><td>Estratégia</td><td>Tendência de fundo, metas e investimento</td></tr>
          </tbody>
        </table>
      </div>

      <h2>Como transformar o dado em ação</h2>
      <p>O relatório só vale quando termina em decisão. Um ciclo simples, repetido a cada mês:</p>
      <ol>
        <li><strong>Agrupe</strong> os comentários por causa (espera, preço, atendimento, produto, ambiente).</li>
        <li><strong>Escolha uma causa</strong> — a mais frequente, não a mais fácil.</li>
        <li><strong>Defina uma ação</strong> com responsável e prazo.</li>
        <li><strong>Meça de novo</strong> na mesma pergunta e compare.</li>
        <li><strong>Comunique</strong> o que mudou para o time e para o cliente.</li>
      </ol>
      <p>Esse último passo é o mais negligenciado e o que mais aumenta a disposição de responder da próxima vez.</p>

      <h2>O que comunicar ao cliente</h2>
      <ul>
        <li>Uma mudança concreta gerada por comentários: “reduzimos a fila no horário de pico”.</li>
        <li>Um agradecimento simples, no próprio totem, na tela final.</li>
        <li>Um retorno individual quando o cliente deixou contato e pediu ajuda.</li>
      </ul>

      <div class="note">
        <p><strong>Pauta de reunião mensal:</strong> (1) nota e distribuição, (2) comentários agrupados, (3) uma ação escolhida, (4) resultado da ação do mês anterior. Quatro itens, trinta minutos.</p>
      </div>
      <p>Para transformar ação em melhoria, vale revisar também a <a href="{{root}}blog/como-aumentar-taxa-de-resposta.html">taxa de resposta</a> e comparar o resultado com o <a href="{{root}}blog/benchmark-de-nps.html">benchmark interno</a>.</p>
    </div>
  </div>
</section>

${section({
  alt: true,
  kicker: "Próximo passo",
  title: "Relatórios prontos, sem planilha",
  body: `<p>Painel em tempo real, relatório diário por e-mail, exportação em PDF, Excel e CSV e leitura por período e por terminal.</p>
  <p><a class="btn btn--dark" href="{{root}}teste-gratis.html">Começar teste grátis</a>
     <a class="btn btn--wa" href="{{wa}}">Falar no WhatsApp</a></p>`,
})}
`,
  faqTitle: "Perguntas frequentes sobre relatórios",
  faq: [
    {
      q: "Quais indicadores devo acompanhar em um relatório de satisfação?",
      a: "<p>A nota, a distribuição das respostas, a evolução no tempo, a comparação entre unidades e os comentários abertos. Quatro ou cinco itens bastam para decidir.</p>",
    },
    {
      q: "Com que frequência devo ler o resultado?",
      a: "<p>Diariamente para alertas, semanalmente para ajustes na operação e mensalmente para o consolidado. O importante é manter o ritmo.</p>",
    },
    {
      q: "Devo comunicar o resultado aos clientes?",
      a: "<p>Sim, ao menos as mudanças que nasceram dos comentários. Isso mostra que a pesquisa tem efeito e melhora a taxa de resposta.</p>",
    },
    {
      q: "Qual métrica deve abrir o relatório?",
      a: "<p>Depende do objetivo. Para a relação com a empresa, o NPS; para o atendimento do dia a dia, o CSAT; para o esforço de resolver, o CES.</p>",
    },
  ],
  schema: [
    articleSchema(
      "blog/relatorio-de-pesquisa-de-satisfacao.html",
      "Relatório de pesquisa de satisfação: o que analisar",
      "Como montar um relatório de pesquisa de satisfação: indicadores, frequência de leitura, ciclo de melhoria e o que comunicar ao cliente."
    ),
  ],
  llms: {
    section: "conteudo",
    summary:
      "Relatório de pesquisa de satisfação: quatro indicadores (nota, distribuição, evolução, comentários), frequência de leitura, ciclo de melhoria e comunicação ao cliente.",
  },
  priority: "0.7",
};

export const metricPosts = [
  postNps,
  postCsat,
  postNpsCsat,
  postCes,
  postTaxa,
  postPerguntas,
  postBenchmark,
  postRelatorio,
];
