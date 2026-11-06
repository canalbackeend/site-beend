import { answer, card } from "./_ui.mjs";

/* ---------------------------------------------------------------------------
   Páginas de segmento.

   Cada vertical de /segmentos ganha uma URL própria, porque "pesquisa de
   satisfação para farmácias" e "para academias" são buscas diferentes, com
   fluxo, ponto de coleta e métrica diferentes. O hub /segmentos linka todas,
   e cada página linka de volta para o hub, para os planos e para o teste.
--------------------------------------------------------------------------- */

const SEG_IMG = {
  farmacias:      { src: "totem-mesa.webp", w: 800, h: 1066, alt: "Totem de mesa branco com pesquisa de satisfação ao lado do caixa de uma farmácia", cap: "Totem de mesa ao lado do caixa: o cliente responde antes de sair." },
  clinicas:       { src: "totem-mesa.webp", w: 800, h: 1066, alt: "Totem de mesa com pesquisa de satisfação na recepção de uma clínica", cap: "Na recepção de saída, o paciente avalia antes de ir embora." },
  restaurantes:   { src: "totem-mesa.webp", w: 800, h: 1066, alt: "Totem de mesa com pesquisa de satisfação na saída de um restaurante", cap: "Na saída do salão, a experiência da refeição ainda está fresca." },
  varejo:         { src: "totem-mesa.webp", w: 800, h: 1066, alt: "Totem de mesa com pesquisa de satisfação no caixa de uma loja", cap: "No caixa, o cliente avalia o atendimento antes de deixar a loja." },
  academias:      { src: "totens.webp",    w: 1600, h: 1073, alt: "Totens de piso com pesquisa de satisfação em área de circulação de academia", cap: "Totem de piso na saída do treino, quando a percepção está formada." },
  concessionarias:{ src: "totens.webp",    w: 1600, h: 1073, alt: "Totens de piso com pesquisa de satisfação em showroom de concessionária", cap: "No showroom e na entrega, o totem de piso alcança quem circula." },
  shoppings:      { src: "totens.webp",    w: 1600, h: 1073, alt: "Totens de piso com pesquisa de satisfação em corredor de shopping", cap: "Distribuídos por área, os totens comparam a experiência do shopping." },
  eventos:        { src: "totens.webp",    w: 1600, h: 1073, alt: "Totens de piso com pesquisa de satisfação na saída de um evento", cap: "Na saída do evento, a coleta acontece com o público presente." },
  "orgaos-publicos": { src: "totens.webp", w: 1600, h: 1073, alt: "Totens de piso com pesquisa de satisfação no saguão de um órgão público", cap: "No saguão, o cidadão avalia o atendimento de forma anônima." },
};

const STEPS = [
  "Escolhemos a pergunta e a escala com você (NPS, CSAT, CES, carinhas ou quiz).",
  "O totem ou tablet é configurado com a sua identidade visual.",
  "O cliente responde no ponto de atendimento, em poucos toques.",
  "As respostas aparecem no painel e podem ser exportadas em PDF, Excel ou CSV.",
];

const buildBody = (d) => `
<section class="section">
  <div class="wrap">
    ${answer(`<p><strong>${d.answerBold}</strong> ${d.answerRest}</p>`)}

    <div class="prose">
      <h2>Por que medir a satisfação em ${d.nome}</h2>
      ${d.contexto}

      <h2>O que medir: NPS, CSAT ou CES</h2>
      <div class="table-wrap">
        <table>
          <caption>Métrica indicada para cada decisão em ${d.nome}</caption>
          <thead><tr><th>Métrica</th><th>Responde a</th><th>Quando usar</th></tr></thead>
          <tbody>
            <tr><th>CSAT</th><td>Como foi a experiência de hoje</td><td>${d.csat}</td></tr>
            <tr><th>NPS</th><td>O cliente recomendaria a empresa</td><td>${d.nps}</td></tr>
            <tr><th>CES</th><td>Quanto esforço o cliente teve</td><td>${d.ces}</td></tr>
          </tbody>
        </table>
      </div>
      <p>${d.metricaNota}</p>

      <h2>Onde instalar o totem</h2>
      <ul>${d.onde.map((o) => `<li>${o}</li>`).join("")}</ul>
      <p>${d.ondeNota}</p>

      <figure class="figure${SEG_IMG[d.id].w < SEG_IMG[d.id].h ? " figure--portrait" : ""}" style="margin:26px auto 34px">
        <img src="{{root}}assets/img/opt/${SEG_IMG[d.id].src}" width="${SEG_IMG[d.id].w}" height="${SEG_IMG[d.id].h}" loading="lazy" decoding="async"
             alt="${SEG_IMG[d.id].alt}">
        <figcaption>${SEG_IMG[d.id].cap}</figcaption>
      </figure>

      <h2>Perguntas prontas para ${d.nome}</h2>
      <ul>${d.perguntas.map((p) => `<li>${p}</li>`).join("")}</ul>

      <h2>Como funciona na prática</h2>
      <ol>${STEPS.map((s) => `<li>${s}</li>`).join("")}</ol>

      <h2>Quanto custa</h2>
      <p>O sistema começa em <strong>R$ 69,90 por mês</strong>, com NPS, CSAT e CES no mesmo painel, e o teste grátis dura 7 dias, sem cartão de crédito. O totem é contratado à parte, por <a href="{{root}}locacao-de-totens.html">locação</a> ou <a href="{{root}}venda-de-totens.html">venda</a> — os quatro planos estão publicados em <a href="{{root}}planos-e-precos.html">planos e preços</a>.</p>

      <h2>Comece com o tablet que você já tem</h2>
      <p>${d.tablet}</p>
    </div>

    <div class="grid grid--3" style="margin-top:34px">
      ${card({ title: "Teste grátis de 7 dias", text: "Use um tablet Android 5.1 ou superior, monte a campanha e veja as respostas no painel. Sem cartão de crédito.", href: "{{root}}teste-gratis.html", more: "Começar o teste" })}
      ${card({ title: "Guia do totem de pesquisa", text: "O que é, como funciona, o que mede e quanto custa um totem de pesquisa de satisfação.", href: "{{root}}totem-de-pesquisa-de-satisfacao.html", more: "Ler o guia" })}
      ${card({ title: "Outros segmentos", text: "Veja como o totem se aplica a farmácias, clínicas, restaurantes, varejo, academias, shoppings, eventos e órgãos públicos.", href: "{{root}}segmentos.html", more: "Ver segmentos" })}
    </div>
  </div>
</section>
`;

export const segmentPages = [
  {
    id: "farmacias",
    nome: "farmácias e drogarias",
    title: "Pesquisa de Satisfação para Farmácias | beend.tech",
    description:
      "Totem de pesquisa de satisfação para farmácias: avalie orientação do farmacêutico, tempo de espera e atendimento no caixa. NPS, CSAT e CES a partir de R$ 69,90/mês.",
    h1: "Pesquisa de satisfação para farmácias e drogarias",
    lead:
      "O cliente passa pelo caixa, recebe o medicamento e sai. Se ninguém pergunta nada, a única avaliação que chega é a reclamação — e ela chega tarde.",
    answerBold: "Na farmácia, a pesquisa de satisfação precisa acontecer no caixa, logo depois do atendimento.",
    answerRest:
      "É ali que o cliente ainda lembra se o farmacêutico explicou a posologia, se esperou na fila e se encontrou o produto. Um totem com duas carinhas ou uma nota de 0 a 10 coleta isso em segundos, sem formulário e sem cadastro.",
    contexto: `<p>Farmácia é um negócio de fluxo: fila curta, atendimento rápido e decisão de compra tomada no balcão. A experiência que fica na memória do cliente raramente é o preço — é a orientação que ele recebeu (ou não) sobre o medicamento.</p>
      <p>Pesquisa por e-mail não funciona nesse contexto: o cliente não abriu o e-mail, não lembra o nome da farmácia e não vai responder dois dias depois. Já o totem, ao lado do caixa, captura a percepção com a experiência ainda fresca — e com taxa de resposta muito maior do que qualquer convite posterior.</p>`,
    csat: "Avaliar o atendimento do dia: tempo de fila, clareza do atendente e orientação do farmacêutico.",
    nps: "Acompanhar se o cliente voltaria e indicaria a farmácia para família e vizinhos.",
    ces: "Medir o esforço para resolver algo que exigiu pedido, troca ou segunda visita.",
    metricaNota:
      "Na prática, a maioria das farmácias começa com CSAT de duas carinhas — resposta alta e leitura imediata — e adiciona NPS quando já tem base para acompanhar a evolução mês a mês.",
    onde: [
      "<strong>Ao lado do caixa, após o pagamento:</strong> o cliente já está com o produto na mão e responde antes de sair.",
      "<strong>Balcão de medicamentos controlados:</strong> ponto de contato mais longo, ideal para perguntas sobre orientação farmacêutica.",
      "<strong>Área de dermocosméticos e conveniência:</strong> captura a avaliação de quem entrou só para consultar preço.",
    ],
    ondeNota:
      "Evite instalar o totem dentro do balcão ou virado para o atendente: o cliente precisa enxergar a pergunta de longe para responder sem constrangimento.",
    perguntas: [
      "“O farmacêutico esclareceu suas dúvidas sobre o medicamento?”",
      "“Como você avalia o tempo de espera no atendimento de hoje?”",
      "“Você encontrou tudo o que procurava nesta farmácia?”",
      "“De 0 a 10, qual a chance de você recomendar esta farmácia a um amigo?”",
    ],
    tablet:
      "Você não precisa comprar equipamento para começar. O aplicativo roda em tablet Android 5.1 ou superior, com modo offline — se a internet cair, as respostas ficam no aparelho e sincronizam quando a conexão voltar. Quando fizer sentido, dá para evoluir para um totem de mesa ou de piso personalizado com a marca da farmácia.",
    faq: [
      {
        q: "A pesquisa atrapalha a fila do caixa?",
        a: "<p>Não, porque a resposta leva poucos segundos. Com duas carinhas, o tempo médio de interação é menor do que o de um pagamento por cartão. O totem fica ao lado do caixa, e o cliente decide se responde.</p>",
      },
      {
        q: "A pesquisa coleta dados pessoais do cliente?",
        a: "<p>Por padrão, não: a resposta é anônima e não pede nome, CPF ou telefone. Se a farmácia quiser identificar o respondente, o cadastro é opcional e configurável — e a política de privacidade do site explica como os dados são tratados.</p>",
      },
      {
        q: "Serve para rede com várias lojas?",
        a: "<p>Sim. Cada terminal é cadastrado separadamente, com acesso individual, e o painel consolida os resultados por loja, período e campanha. É o que permite comparar unidades com a mesma pergunta e a mesma escala.</p>",
      },
    ],
    llms:
      "Pesquisa de satisfação para farmácias e drogarias com totem no caixa: avaliação da orientação farmacêutica, tempo de espera e atendimento, com NPS, CSAT e CES a partir de R$ 69,90/mês.",
  },
  {
    id: "clinicas",
    nome: "clínicas e consultórios",
    title: "Pesquisa de Satisfação para Clínicas | beend.tech",
    description:
      "Totem de pesquisa de satisfação para clínicas e consultórios: avalie recepção, tempo de espera e clareza das orientações. NPS, CSAT e CES a partir de R$ 69,90/mês.",
    h1: "Pesquisa de satisfação para clínicas e consultórios",
    lead:
      "O paciente avalia a clínica pela espera, pela recepção e pela clareza do que ouviu do profissional — não pela qualidade técnica que ele não sabe julgar.",
    answerBold: "Em clínicas, a pesquisa deve ser feita na saída, antes de o paciente deixar o consultório.",
    answerRest:
      "É o momento em que a experiência inteira ainda está presente: tempo de espera, acolhimento da recepção, clareza das orientações e confiança no profissional. Um totem ou tablet na recepção de saída coleta isso em segundos e evita depender de formulário enviado depois.",
    contexto: `<p>A jornada do paciente tem quatro momentos distintos: agendamento, espera, consulta e saída. O que costuma doer não é o atendimento clínico — é a espera além do horário, a dificuldade de remarcar e a falta de clareza sobre o que fazer depois.</p>
      <p>Pesquisa por telefone e por e-mail erra o alvo: o paciente já foi embora, a memória esfriou e a taxa de resposta é baixa. Já a pesquisa presencial, feita na saída, captura o momento exato e permite que a clínica identifique padrões — por exemplo, se a insatisfação se concentra em determinada recepcionista, turno ou dia da semana.</p>`,
    csat: "Avaliar a experiência de hoje: acolhimento, tempo de espera e clareza das orientações.",
    nps: "Medir a chance de o paciente indicar a clínica para familiares e amigos.",
    ces: "Entender o esforço para agendar, remarcar ou resolver uma dúvida administrativa.",
    metricaNota:
      "Clínicas com foco em retorno e indicação costumam usar NPS; quem quer monitorar a operação do dia a dia usa CSAT. As duas podem rodar na mesma campanha, com perguntas em sequência.",
    onde: [
      "<strong>Recepção de saída:</strong> o paciente responde antes de ir embora, com a experiência intacta.",
      "<strong>Antes do pagamento ou da entrega de exames:</strong> ponto de passagem obrigatória.",
      "<strong>Sala de espera:</strong> útil para medir a percepção sobre conforto e tempo, mas nunca com o paciente ainda aguardando atendimento.",
    ],
    ondeNota:
      "A pergunta precisa deixar claro que a avaliação é sobre a experiência de atendimento, não sobre o resultado do tratamento — isso reduz ruído e melhora a leitura do dado.",
    perguntas: [
      "“Como você avalia o tempo de espera e a atenção da recepção?”",
      "“O profissional explicou o seu caso de forma clara?”",
      "“Você recomendaria esta clínica a um familiar ou amigo?”",
      "“Como foi a facilidade para agendar ou remarcar a sua consulta?”",
    ],
    tablet:
      "O mesmo aplicativo roda no tablet da recepção, sem equipamento dedicado. Como a clínica já tem tablet ou computador na recepção, o início é imediato — e o modo offline garante a coleta mesmo em dias de internet instável.",
    faq: [
      {
        q: "O paciente precisa se identificar para responder?",
        a: "<p>Não. A resposta é anônima por padrão, o que aumenta a sinceridade e reduz o constrangimento de avaliar a recepção na frente dela. A identificação é opcional e configurável.</p>",
      },
      {
        q: "A pesquisa coleta dados de saúde do paciente?",
        a: "<p>Não é o objetivo. As perguntas padrão tratam da experiência de atendimento — espera, recepção, clareza das orientações. Evite campos que coletem diagnóstico ou dado sensível sem base legal específica.</p>",
      },
      {
        q: "Dá para comparar unidades ou profissionais?",
        a: "<p>Dá. Você pode criar campanhas separadas por unidade ou por profissional e comparar no painel, mantendo a mesma pergunta e a mesma escala para que a comparação seja válida.</p>",
      },
    ],
    llms:
      "Pesquisa de satisfação para clínicas e consultórios na saída do paciente: avaliação de recepção, tempo de espera e clareza das orientações, com NPS, CSAT e CES a partir de R$ 69,90/mês.",
  },
  {
    id: "restaurantes",
    nome: "restaurantes e cafeterias",
    title: "Pesquisa de Satisfação para Restaurantes | beend.tech",
    description:
      "Totem de pesquisa de satisfação para restaurantes e cafeterias: avalie atendimento, tempo de preparo e ambiente na saída. NPS, CSAT e CES a partir de R$ 69,90/mês.",
    h1: "Pesquisa de satisfação para restaurantes e cafeterias",
    lead:
      "Quem saiu satisfeito volta e indica. Quem saiu insatisfeito não reclama no balcão — simplesmente não volta, e você nunca fica sabendo por quê.",
    answerBold: "Em restaurantes, a coleta funciona melhor na saída, depois do pagamento.",
    answerRest:
      "O cliente já viveu a experiência inteira — espera, atendimento, comida e ambiente — e ainda está no salão. Duas carinhas ou uma nota de 0 a 10 custam segundos e transformam a percepção em dado antes que ela se perca.",
    contexto: `<p>Restaurante tem pico de fluxo, rotatividade alta de mesas e equipe trocando a cada turno. Nesse cenário, a avaliação precisa ser rápida e não pode depender de o cliente abrir um link depois.</p>
      <p>O ponto crítico é o tempo: quanto mais distante do momento da refeição, menos confiável é a lembrança. Além disso, a insatisfação do cliente de restaurante raramente chega ao gerente — ela aparece nas avaliações públicas semanas depois, quando já não há o que corrigir naquele turno.</p>`,
    csat: "Avaliar a experiência de hoje: atendimento, tempo de preparo e ambiente.",
    nps: "Medir a chance de o cliente voltar e indicar o restaurante.",
    ces: "Entender o esforço em situações como esperar por mesa, pedir a conta ou resolver um pedido trocado.",
    metricaNota:
      "Para operação de salão, CSAT é o indicador mais direto, porque muda rápido e aponta problemas do turno. NPS entra quando o objetivo é acompanhar a relação com o cliente ao longo do tempo.",
    onde: [
      "<strong>Na saída, perto do caixa:</strong> o cliente passa por ali obrigatoriamente antes de ir embora.",
      "<strong>Entrada do salão:</strong> funciona bem em casas com fluxo alto e sem caixa centralizado.",
      "<strong>Totem de mesa:</strong> discreto, permite a resposta durante a refeição e complementa a coleta na saída.",
    ],
    ondeNota:
      "Evite instalar o totem dentro da fila do caixa: ele atrasa o pagamento e reduz a taxa de resposta. O ponto ideal é a lateral do caixa, fora do fluxo de pagamento.",
    perguntas: [
      "“Como avalia o atendimento, o tempo de preparo e o ambiente?”",
      "“De 0 a 10, qual a chance de você voltar a este restaurante?”",
      "“Você encontrou o que esperava do prato que pediu?”",
      "“Como foi a experiência para pedir e pagar a conta?”",
    ],
    tablet:
      "Um tablet na saída já resolve o começo. Se a casa tem salão grande, o totem de piso capta mais respostas; para mesas e balcões, o modelo de mesa é o mais indicado.",
    faq: [
      {
        q: "Funciona no horário de pico, com fila?",
        a: "<p>Sim, justamente porque a interação é curta. O ponto de instalação fora da fila de pagamento é o que garante que o totem não vire gargalo no salão.</p>",
      },
      {
        q: "Dá para avaliar prato, atendimento e ambiente separadamente?",
        a: "<p>Dá. É possível montar uma campanha com perguntas em sequência — ou usar o recurso de rotas em node, em que cada resposta leva à próxima pergunta — e depois filtrar os resultados no painel.</p>",
      },
      {
        q: "O cliente pode responder pelo QR Code na mesa?",
        a: "<p>Pode. A mesma campanha roda no totem, no QR Code e no WhatsApp, então o restaurante pode combinar os canais sem duplicar o trabalho de configuração.</p>",
      },
    ],
    llms:
      "Pesquisa de satisfação para restaurantes e cafeterias na saída: avaliação de atendimento, tempo de preparo e ambiente, com NPS, CSAT e CES a partir de R$ 69,90/mês.",
  },
  {
    id: "varejo",
    nome: "varejo e lojas",
    title: "Pesquisa de Satisfação para Varejo | beend.tech",
    description:
      "Totem de pesquisa de satisfação para varejo: avalie atendimento do vendedor, tempo de caixa e se o cliente achou o que procurava. A partir de R$ 69,90/mês.",
    h1: "Pesquisa de satisfação para varejo e lojas",
    lead:
      "A venda depende do vendedor. E a única forma de saber se o atendimento ajudou ou atrapalhou é perguntar ao cliente antes que ele saia da loja.",
    answerBold: "No varejo, a pesquisa deve ser feita no caixa ou na entrega do produto.",
    answerRest:
      "São os dois momentos em que o cliente está com a experiência completa na cabeça: foi atendido, encontrou o que procurava, esperou na fila e vai levar o produto. O totem coleta essa percepção em segundos, com taxa de resposta muito maior do que qualquer pesquisa posterior.",
    contexto: `<p>Varejo vive de conversão e recompra. E os dois dependem de fatores que só o cliente sabe avaliar: se o vendedor entendeu o que ele queria, se o produto estava disponível, quanto tempo ele esperou no caixa.</p>
      <p>O problema é que o cliente insatisfeito raramente reclamou no balcão — ele saiu e não voltou. Sem pesquisa no ponto de venda, a loja só descobre isso pela queda no faturamento, tarde demais. Com coleta no caixa, o gestor enxerga o mesmo problema no mesmo dia.</p>`,
    csat: "Avaliar a experiência de compra de hoje, incluindo atendimento e tempo de caixa.",
    nps: "Medir a chance de o cliente voltar e indicar a loja, o que antecipa recompra e boca a boca.",
    ces: "Medir o esforço para encontrar produto, trocar item ou resolver uma dúvida.",
    metricaNota:
      "Lojas com foco em recompra usam NPS; operações que querem corrigir o atendimento do dia usam CSAT. Uma campanha pode combinar as duas perguntas em sequência.",
    onde: [
      "<strong>Caixa, após o pagamento:</strong> ponto de passagem obrigatório para quase todo cliente.",
      "<strong>Entrega do produto:</strong> especialmente útil em móveis, eletrônicos e materiais de construção.",
      "<strong>Saída da loja:</strong> alternativa em operações sem caixa centralizado, como shoppings de rua.",
    ],
    ondeNota:
      "Em lojas pequenas, o totem de mesa no balcão resolve. Em lojas de grande circulação, o totem de piso amplia o alcance e capta quem entrou sem comprar.",
    perguntas: [
      "“O vendedor ajudou você a encontrar o que precisava?”",
      "“Como você avalia o tempo de espera no caixa?”",
      "“De 0 a 10, qual a chance de você comprar aqui novamente?”",
      "“Você encontrou o produto que veio procurar?”",
    ],
    tablet:
      "A loja não precisa comprar equipamento para começar: o aplicativo roda no tablet Android que já existe no caixa. O totem dedicado entra depois, quando a operação já validou a pesquisa.",
    faq: [
      {
        q: "Funciona em loja pequena, com um só caixa?",
        a: "<p>Funciona. Nesse caso, o totem de mesa ao lado do caixa é o formato mais simples, e o começo pode ser feito com um tablet comum, sem investimento em equipamento.</p>",
      },
      {
        q: "Dá para comparar vendedores?",
        a: "<p>Dá, mas com cuidado: o ideal é comparar período, turno ou loja, porque a avaliação do cliente pode ser influenciada por fatores que não dependem do vendedor. O painel permite filtrar por terminal e por campanha.</p>",
      },
      {
        q: "Preciso integrar com o PDV?",
        a: "<p>Não é necessário. A pesquisa roda de forma independente do sistema de caixa, o que permite começar sem projeto de integração. A coleta por QR Code também está disponível na mesma plataforma.</p>",
      },
    ],
    llms:
      "Pesquisa de satisfação para varejo e lojas no caixa: avaliação de atendimento do vendedor, tempo de caixa e disponibilidade de produto, com NPS, CSAT e CES a partir de R$ 69,90/mês.",
  },
  {
    id: "academias",
    nome: "academias",
    title: "Pesquisa de Satisfação para Academias | beend.tech",
    description:
      "Totem de pesquisa de satisfação para academias: avalie recepção, limpeza, equipamentos e suporte dos professores. NPS, CSAT e CES a partir de R$ 69,90/mês.",
    h1: "Pesquisa de satisfação para academias",
    lead:
      "O aluno não cancela por causa do preço. Ele cancela porque a academia parou de perceber o que ele sentia — e ninguém perguntou.",
    answerBold: "Em academias, a pesquisa funciona melhor na saída do treino.",
    answerRest:
      "O aluno acabou de usar a estrutura, os equipamentos e o suporte dos professores. É o momento em que a percepção está formada e a resposta custa segundos — e é também a janela mais curta para agir antes que ele decida cancelar.",
    contexto: `<p>Academia é um negócio de retenção. O custo de conquistar um aluno novo é alto, e o cancelamento quase nunca é comunicado: o aluno simplesmente para de aparecer.</p>
      <p>Os sinais costumam estar na operação — equipamento quebrado, vestiário sujo, horário de pico lotado, professor que não atende. Nenhum desses problemas aparece no relatório financeiro antes de virar cancelamento. A pesquisa no ponto de treino antecipa esse diagnóstico.</p>`,
    csat: "Avaliar a experiência de hoje: recepção, limpeza, equipamentos e suporte.",
    nps: "Medir a chance de o aluno indicar a academia — o indicador que melhor antecipa retenção.",
    ces: "Entender o esforço em situações como remarcar aula, cancelar plano ou resolver cobrança.",
    metricaNota:
      "Para retenção, NPS é o indicador mais útil, porque acompanha a relação do aluno com a academia ao longo do tempo. CSAT complementa, mostrando a percepção do dia.",
    onde: [
      "<strong>Saída do vestiário:</strong> ponto de passagem natural depois do treino.",
      "<strong>Recepção:</strong> funciona, mas compete com a catraca e o check-in — evite instalar no fluxo de entrada.",
      "<strong>Área de musculação ou corredor:</strong> o totem de piso capta a avaliação de quem treina em horário de pico.",
    ],
    ondeNota:
      "Horário de pico e horário vazio produzem avaliações diferentes. Vale comparar os dois períodos no painel antes de concluir que existe um problema estrutural.",
    perguntas: [
      "“Como você avalia a estrutura e o atendimento da academia hoje?”",
      "“De 0 a 10, qual a chance de você continuar treinando aqui nos próximos meses?”",
      "“Como você avalia a limpeza e a conservação dos equipamentos?”",
      "“Os professores ajudaram você quando precisou?”",
    ],
    tablet:
      "A academia pode usar um tablet na recepção ou no vestiário para começar, sem comprar equipamento. O totem de piso entra quando a coleta já faz parte da rotina.",
    faq: [
      {
        q: "A pesquisa ajuda a reduzir cancelamento?",
        a: "<p>Ajuda a enxergar o risco antes do cancelamento. Quando o aluno avalia mal a estrutura ou o suporte, a academia tem tempo de agir — o que não acontece quando o único sinal é a queda na frequência.</p>",
      },
      {
        q: "Dá para medir cada unidade separadamente?",
        a: "<p>Sim. Cada terminal é cadastrado individualmente, com acesso próprio, e o painel consolida os resultados por unidade, período e campanha.</p>",
      },
      {
        q: "O aluno responde no celular?",
        a: "<p>Pode responder pelo QR Code, se a academia preferir esse canal. O totem tem a vantagem de não depender do celular do aluno e de captar quem não abriria um link depois.</p>",
      },
    ],
    llms:
      "Pesquisa de satisfação para academias na saída do treino: avaliação de recepção, limpeza, equipamentos e suporte dos professores, com NPS, CSAT e CES a partir de R$ 69,90/mês.",
  },
  {
    id: "concessionarias",
    nome: "concessionárias",
    title: "Pesquisa de Satisfação para Concessionárias | beend.tech",
    description:
      "Totem de pesquisa de satisfação para concessionárias: avalie showroom, test drive, entrega do veículo e pós-venda. NPS, CSAT e CES a partir de R$ 69,90/mês.",
    h1: "Pesquisa de satisfação para concessionárias",
    lead:
      "A venda do carro é o começo da relação. A avaliação que decide a próxima compra e a indicação acontece no showroom, na entrega e na oficina.",
    answerBold: "Em concessionárias, a pesquisa precisa acompanhar cada etapa da jornada, não só o fechamento.",
    answerRest:
      "Showroom, test drive, negociação, entrega e pós-venda são experiências diferentes, com expectativas diferentes. Medir só no fim mistura tudo. Coletar em cada ponto mostra exatamente onde a jornada perde o cliente.",
    contexto: `<p>Concessionária tem ciclo de compra longo e ticket alto. O cliente decide com base em confiança, e a experiência pesa tanto quanto o produto — às vezes mais.</p>
      <p>O erro comum é medir apenas a satisfação com a compra, semanas depois, por telefone ou e-mail. Nesse formato, a memória já está contaminada e a taxa de resposta é baixa. A coleta presencial, na saída do showroom ou na entrega do veículo, captura a percepção real de cada etapa.</p>`,
    csat: "Avaliar a experiência de cada etapa: showroom, test drive, negociação, entrega e oficina.",
    nps: "Medir a chance de o cliente recomendar a concessionária e voltar na próxima troca.",
    ces: "Entender o esforço em etapas burocráticas: financiamento, documentação e agendamento de revisão.",
    metricaNota:
      "O ideal é manter a mesma pergunta de CSAT em todas as etapas e comparar os resultados entre elas. Assim fica claro se o problema está no atendimento comercial ou no pós-venda.",
    onde: [
      "<strong>Showroom:</strong> após o test drive ou a negociação, antes de o cliente sair.",
      "<strong>Entrega do veículo:</strong> momento de maior expectativa e de maior impacto na percepção.",
      "<strong>Recepção da oficina:</strong> mede a experiência de quem já é cliente e decide a recompra.",
    ],
    ondeNota:
      "O totem de piso funciona bem em áreas de circulação amplas, como showroom e hall de entrega. Para a recepção da oficina, o modelo de mesa ocupa menos espaço.",
    perguntas: [
      "“Como foi sua experiência na concessionária hoje?”",
      "“O consultor respondeu às suas dúvidas durante a negociação?”",
      "“De 0 a 10, qual a chance de você recomendar esta concessionária?”",
      "“Como você avalia o tempo de espera no agendamento da revisão?”",
    ],
    tablet:
      "A concessionária pode começar com um tablet no showroom ou na entrega, sem equipamento dedicado. Quando a coleta se torna rotina, o totem de piso é o formato que mais aparece para o cliente.",
    faq: [
      {
        q: "Serve para medir a oficina, além da venda?",
        a: "<p>Serve. A oficina é onde o cliente decide se volta — e onde a insatisfação com prazo e orçamento aparece primeiro. Criar uma campanha específica para a recepção da oficina separa esse resultado do resultado comercial.</p>",
      },
      {
        q: "Dá para medir cada consultor ou cada etapa?",
        a: "<p>Dá, com campanhas e terminais separados. O painel permite filtrar por período, terminal e campanha, mantendo a mesma pergunta para que a comparação seja válida.</p>",
      },
      {
        q: "Preciso de internet no showroom?",
        a: "<p>Não. O aplicativo funciona offline e sincroniza as respostas quando a conexão volta — útil em eventos, feiras e áreas com Wi-Fi instável.</p>",
      },
    ],
    llms:
      "Pesquisa de satisfação para concessionárias em showroom, entrega e oficina: avaliação por etapa da jornada, com NPS, CSAT e CES a partir de R$ 69,90/mês.",
  },
  {
    id: "shoppings",
    nome: "shoppings e centros comerciais",
    title: "Pesquisa de Satisfação para Shoppings | beend.tech",
    description:
      "Totem de pesquisa de satisfação para shoppings: avalie limpeza, segurança, sinalização e experiência geral. NPS, CSAT e CES a partir de R$ 69,90/mês.",
    h1: "Pesquisa de satisfação para shoppings e centros comerciais",
    lead:
      "O shopping não vende produto: vende experiência. Limpeza, segurança, sinalização e fluxo são o produto — e só o frequentador sabe dizer como estão.",
    answerBold: "Em shoppings, a coleta precisa ser distribuída: um único totem não representa a experiência de todo o empreendimento.",
    answerRest:
      "Áreas diferentes têm problemas diferentes. Praça de alimentação, corredores, banheiros e estacionamento produzem percepções distintas. Totens de piso em pontos de circulação capturam essa diversidade e permitem comparar as áreas no painel.",
    contexto: `<p>Centro comercial tem fluxo alto e público heterogêneo: quem vai comprar, quem vai comer, quem só passa. A avaliação agregada esconde a diferença entre essas experiências.</p>
      <p>Além disso, a insatisfação de shopping costuma ser difusa — um banheiro sujo, uma placa confusa, uma área mal iluminada. Nada disso vira reclamação formal, mas tudo influencia a decisão de voltar. A pesquisa no local transforma percepção difusa em indicador acompanhável.</p>`,
    csat: "Avaliar a experiência de hoje por área: limpeza, segurança, sinalização e conforto.",
    nps: "Medir a chance de o frequentador recomendar o shopping e voltar.",
    ces: "Entender o esforço para localizar uma loja, estacionar ou usar um serviço.",
    metricaNota:
      "Como o shopping não controla o atendimento de cada loja, o indicador mais útil é o CSAT por área, que aponta onde agir. O NPS complementa com a visão geral do empreendimento.",
    onde: [
      "<strong>Praças de alimentação:</strong> fluxo alto e permanência longa, o que favorece a resposta.",
      "<strong>Corredores e entradas:</strong> totens de piso captam o frequentador em movimento.",
      "<strong>Próximo ao estacionamento e aos banheiros:</strong> pontos em que a insatisfação costuma aparecer.",
    ],
    ondeNota:
      "Distribuir os totens por área — em vez de concentrar tudo na entrada — é o que permite comparar a experiência entre regiões do shopping.",
    perguntas: [
      "“Como você avalia sua experiência no shopping hoje?”",
      "“Como estão a limpeza e a conservação das áreas comuns?”",
      "“Você conseguiu se localizar com facilidade dentro do shopping?”",
      "“De 0 a 10, qual a chance de você recomendar este shopping?”",
    ],
    tablet:
      "O shopping pode começar com poucos tablets em pontos estratégicos e evoluir para totens de piso quando a operação se consolidar. A gestão de vários terminais já está prevista na plataforma.",
    faq: [
      {
        q: "Um totem só representa o shopping inteiro?",
        a: "<p>Dificilmente. O recomendado é distribuir os terminais por área — alimentação, corredores, estacionamento — e comparar os resultados no painel, em vez de tirar uma média única.</p>",
      },
      {
        q: "Dá para comparar áreas ou turnos?",
        a: "<p>Sim. Cada terminal é cadastrado separadamente, e o painel permite filtrar por período, terminal e campanha para comparar áreas e horários.</p>",
      },
      {
        q: "Como funciona para eventos e ações no shopping?",
        a: "<p>A locação por período atende ações temporárias: o totem é usado nos dias do evento e devolvido depois, sem compra de equipamento.</p>",
      },
    ],
    llms:
      "Pesquisa de satisfação para shoppings e centros comerciais por área: limpeza, segurança, sinalização e experiência geral, com NPS, CSAT e CES a partir de R$ 69,90/mês.",
  },
  {
    id: "eventos",
    nome: "eventos e feiras",
    title: "Pesquisa de Satisfação para Eventos | beend.tech",
    description:
      "Totem de pesquisa de satisfação para eventos e feiras: avalie conteúdo, organização e atendimento durante o evento. Locação por período a partir de R$ 69,90/mês.",
    h1: "Pesquisa de satisfação para eventos e feiras",
    lead:
      "Evento tem uma janela curta para ser avaliado. Depois que o público vai embora, a lembrança já não é a mesma — e a próxima edição repete os mesmos erros.",
    answerBold: "Em eventos, a coleta tem que acontecer durante o evento, não depois.",
    answerRest:
      "O participante avalia na hora: qualidade do conteúdo, organização, credenciamento, estandes e atendimento. Um totem na saída ou nos corredores captura isso enquanto a experiência está viva — e a locação por período evita comprar equipamento para usar três dias.",
    contexto: `<p>Eventos e feiras têm prazo curto, público concentrado e alto investimento. A avaliação costuma ser feita por formulário enviado depois — com taxa de resposta baixa e viés de quem se lembra de responder.</p>
      <p>Coletar durante o evento muda a natureza do dado: a resposta é imediata e a organização ainda pode agir na edição seguinte com informação confiável, inclusive por palestra, estande ou dia.</p>`,
    csat: "Avaliar a experiência do dia: conteúdo, organização, credenciamento e estrutura.",
    nps: "Medir a chance de o participante voltar na próxima edição e indicar o evento.",
    ces: "Entender o esforço em credenciamento, localização de estandes e acesso às palestras.",
    metricaNota:
      "Para eventos, o CSAT por palestra ou por dia costuma ser mais acionável do que uma média geral. O NPS entra como indicador de satisfação com o evento como um todo.",
    onde: [
      "<strong>Saída do evento:</strong> ponto de passagem obrigatório e momento de maior disponibilidade.",
      "<strong>Corredores e áreas de convivência:</strong> totens de piso captam a avaliação entre uma atividade e outra.",
      "<strong>Estandes e ativações:</strong> úteis para medir a percepção sobre patrocinadores e expositores.",
    ],
    ondeNota:
      "Em feiras com vários dias, compare os resultados por dia: o primeiro dia costuma revelar problemas de credenciamento e o último, problemas de conteúdo.",
    perguntas: [
      "“Como você avalia o evento até agora?”",
      "“O conteúdo atendeu às suas expectativas?”",
      "“Como foi a experiência no credenciamento?”",
      "“De 0 a 10, qual a chance de você participar da próxima edição?”",
    ],
    tablet:
      "Para eventos, a locação é o formato mais comum: o totem é usado durante o período do evento e devolvido depois. Se o local não tiver internet estável, o modo offline garante a coleta e a sincronização posterior.",
    faq: [
      {
        q: "Dá para alugar o totem só pelos dias do evento?",
        a: "<p>Sim. A locação em comodato permite usar o equipamento por um período determinado e devolver depois, sem imobilizar capital em uma compra.</p>",
      },
      {
        q: "Funciona sem internet no pavilhão?",
        a: "<p>Funciona. O aplicativo armazena as respostas no dispositivo e sincroniza quando a conexão volta — o que é comum em pavilhões e centros de convenções.</p>",
      },
      {
        q: "Consigo separar a avaliação por palestra ou estande?",
        a: "<p>Sim. Basta criar campanhas ou terminais separados por atividade e comparar no painel, mantendo a mesma pergunta para que a comparação seja válida.</p>",
      },
    ],
    llms:
      "Pesquisa de satisfação para eventos e feiras durante o evento: avaliação de conteúdo, organização e credenciamento, com locação por período e planos a partir de R$ 69,90/mês.",
  },
  {
    id: "orgaos-publicos",
    nome: "órgãos públicos",
    title: "Pesquisa de Satisfação para Órgãos Públicos | beend.tech",
    description:
      "Totem de pesquisa de satisfação para órgãos públicos: avalie atendimento, espera e clareza das informações. Apoio à Lei 13.460/2017. Desde R$ 69,90/mês.",
    h1: "Pesquisa de satisfação para órgãos públicos",
    lead:
      "A Lei 13.460/2017 prevê a avaliação da satisfação do usuário de serviço público. O totem transforma essa exigência em dado coletado no local do atendimento.",
    answerBold: "Órgãos públicos podem usar o totem para avaliar o atendimento presencial de forma contínua e anônima.",
    answerRest:
      "Tempo de espera, clareza das informações, cordialidade e resolutividade são medidos no momento em que o cidadão sai do atendimento — o que gera indicador para gestão e para prestação de contas, sem depender de pesquisa anual.",
    contexto: `<p>A avaliação de serviços públicos costuma ser feita por pesquisa anual ou por ouvidoria. As duas têm valor, mas nenhuma captura a experiência do dia a dia com volume e frequência suficientes para orientar a gestão.</p>
      <p>Com coleta presencial, o órgão passa a ter série histórica por unidade, por tipo de serviço e por período. Isso ajuda a justificar investimento, acompanhar metas e identificar gargalos — como fila em determinado horário ou baixa clareza de um formulário.</p>`,
    csat: "Avaliar o atendimento recebido hoje: espera, clareza e cordialidade.",
    nps: "Medir a percepção do cidadão sobre o serviço e a chance de recomendá-lo.",
    ces: "Entender o esforço para resolver a demanda: quantas idas, quantos formulários, quantas exigências.",
    metricaNota:
      "Órgãos costumam usar CSAT por serviço e CES para processos com muitas etapas. O NPS complementa com a percepção geral, sem substituir os indicadores de gestão.",
    onde: [
      "<strong>Saída do atendimento:</strong> o cidadão responde logo após ser atendido, com o processo ainda claro na memória.",
      "<strong>Saguão de espera:</strong> útil para medir a percepção sobre tempo e informação, mas nunca com a pessoa ainda aguardando.",
      "<strong>Recepção de cada serviço:</strong> permite comparar secretarias, unidades e tipos de atendimento.",
    ],
    ondeNota:
      "A comunicação do totem deve deixar explícito que a resposta é anônima e que não interfere no atendimento — isso aumenta a sinceridade e reduz a hesitação.",
    perguntas: [
      "“Como você avalia o atendimento que recebeu hoje?”",
      "“As informações sobre o seu processo ficaram claras?”",
      "“Como você avalia o tempo de espera?”",
      "“De 0 a 10, qual a chance de você recomendar este serviço a outra pessoa?”",
    ],
    tablet:
      "O órgão pode iniciar com tablets já disponíveis nas recepções e evoluir para totens de piso nos saguões de maior circulação. A coleta funciona offline, o que evita dependência da rede local.",
    faq: [
      {
        q: "O totem atende à exigência de avaliação da Lei 13.460/2017?",
        a: "<p>Ele fornece o instrumento de coleta contínua da satisfação do usuário, que é a base da avaliação prevista na lei. A forma de uso, a periodicidade e a publicação dos resultados devem ser definidas pelo órgão, conforme sua regulamentação.</p>",
      },
      {
        q: "A pesquisa é anônima?",
        a: "<p>Sim, por padrão. Não há coleta de nome, CPF ou qualquer dado de identificação do cidadão. Se o órgão precisar de algum campo adicional, ele é configurável e deve observar a LGPD.</p>",
      },
      {
        q: "É possível contratar por licitação?",
        a: "<p>Sim. A contratação segue o processo de compras do órgão, com nota fiscal e documentação. A locação costuma ser mais simples para testes e projetos-piloto, e a compra, para uso permanente.</p>",
      },
    ],
    llms:
      "Pesquisa de satisfação para órgãos públicos no atendimento presencial: avaliação anônima de espera, clareza e cordialidade, em apoio à avaliação prevista na Lei 13.460/2017, a partir de R$ 69,90/mês.",
  },
];

export const segmentPageObjects = segmentPages.map((d) => ({
  slug: `pesquisa-de-satisfacao-para-${d.id}.html`,
  active: "segmentos.html",
  type: "article",
  kicker: "Segmento",
  title: d.title,
  description: d.description,
  h1: d.h1,
  lead: d.lead,
  crumbs: [
    { name: "Home", href: "index.html" },
    { name: "Segmentos", href: "segmentos.html" },
    { name: d.nome.charAt(0).toUpperCase() + d.nome.slice(1) },
  ],
  body: buildBody(d),
  faqTitle: `Perguntas frequentes sobre ${d.nome}`,
  faq: d.faq,
  schema: [
    {
      "@type": "Service",
      "@id": `https://beend.tech/pesquisa-de-satisfacao-para-${d.id}#servico`,
      name: `Pesquisa de satisfação para ${d.nome}`,
      serviceType: `Totem e plataforma de pesquisa de satisfação para ${d.nome}`,
      provider: { "@id": "https://beend.tech/#organization" },
      areaServed: { "@type": "Country", name: "Brasil" },
    },
  ],
  llms: {
    section: "servicos",
    summary: d.llms,
  },
  priority: "0.8",
}));
