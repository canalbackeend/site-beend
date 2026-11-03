/* ==========================================================================
   Landing page de campanha (Google Ads / Meta / e-mail)
   - Sem menu, sem links de saída, um único objetivo: iniciar o teste grátis.
   - noindex: não compete com a página orgânica /teste-gratis.html
   ========================================================================== */

const waMsg = encodeURIComponent(
  "Olá! Quero ativar o teste grátis de 7 dias do sistema de pesquisa de satisfação."
);

export const landingTrial = {
  slug: "lp/teste-gratis.html",
  lp: true,
  noindex: true,
  type: "website",
  priority: "0.1",
  title: "Teste grátis 7 dias — pesquisa de satisfação | beend.tech",
  description:
    "Ative o teste grátis de 7 dias do sistema de pesquisa de satisfação da beend.tech. Sem cartão de crédito, sem contrato. Use o tablet que você já tem.",
  h1: "Descubra em 7 dias se seus clientes estão satisfeitos",
  customHero: `
<section class="lp-hero">
  <div class="wrap lp-hero__in">
    <div class="lp-hero__copy">
      <p class="lp-flag">Teste grátis · 7 dias · sem cartão de crédito</p>
      <h1>Descubra em 7 dias se seus clientes estão satisfeitos</h1>
      <p class="lp-sub">Instale no tablet que você já tem, colete respostas reais no seu ponto de atendimento e veja o painel funcionando — com NPS, CSAT e relatório diário por e-mail.</p>
      <div class="btn-row">
        <a class="btn btn--wa btn--lg" href="https://wa.me/5561995957461?text=${waMsg}" target="_blank" rel="noopener" data-cta="hero">Quero ativar o teste grátis</a>
      </div>
      <p class="lp-micro">Resposta no mesmo dia útil · Seg a sex, 9h às 18h · Atendemos todo o Brasil</p>
    </div>
    <div class="lp-hero__media">
      <img src="{{root}}assets/img/opt/painel-900.webp" width="900" height="601" alt="Painel da beend.tech com notas de satisfação e evolução por período" fetchpriority="high" decoding="async">
    </div>
  </div>
</section>`,
  body: `
<section class="section section--tight">
  <div class="wrap">
    <div class="lp-stats">
      <div><b>200+</b><span>empresas atendidas</span></div>
      <div><b>400+</b><span>totens em operação</span></div>
      <div><b>140 mil+</b><span>respostas coletadas</span></div>
      <div><b>7 dias</b><span>para decidir, sem custo</span></div>
    </div>
  </div>
</section>

<section class="section">
  <div class="wrap">
    <div class="section__head">
      <p class="kicker">O que você recebe no teste</p>
      <h2>O sistema completo, não uma demonstração</h2>
      <p>No teste você usa a mesma plataforma dos clientes que já estão em operação.</p>
    </div>
    <div class="grid grid--3">
      <div class="card">
        <h3>Coleta no totem, QR Code e WhatsApp</h3>
        <p>Pesquisa de NPS, CSAT, CES, carinhas e quiz. O cliente responde em segundos e a resposta aparece no painel.</p>
      </div>
      <div class="card">
        <h3>Painel em tempo real</h3>
        <p>Notas por período, por terminal e por campanha. Relatório diário por e-mail e exportação em PDF, Excel e CSV.</p>
      </div>
      <div class="card">
        <h3>Funciona no tablet que você já tem</h3>
        <p>Android 5.1 ou superior. Sem instalação complexa, sem equipe de TI. A coleta continua mesmo sem internet e sincroniza depois.</p>
      </div>
    </div>
  </div>
</section>

<section class="section section--alt">
  <div class="wrap">
    <div class="section__head">
      <p class="kicker">Como funciona</p>
      <h2>Do primeiro contato à primeira resposta em um dia</h2>
    </div>
    <ol class="lp-steps">
      <li><b>Você chama no WhatsApp</b><span>Informamos o acesso e entendemos o que você quer medir.</span></li>
      <li><b>Montamos a campanha com você</b><span>Sua pergunta, suas cores e o seu logotipo na tela do totem.</span></li>
      <li><b>Você coleta por 7 dias</b><span>Acompanha as respostas no painel e decide se continua.</span></li>
    </ol>
  </div>
</section>

<section class="section">
  <div class="wrap lp-split">
    <div>
      <p class="kicker">Depois do teste</p>
      <h2>Se fizer sentido, você continua a partir de R$ 69,90/mês</h2>
      <p>O software é cobrado por plano, sem fidelidade. O equipamento é opcional: você pode usar o seu tablet ou contratar o totem de mesa ou de piso.</p>
      <ul class="lp-check">
        <li>Básico — R$ 69,90/mês</li>
        <li>Profissional — R$ 129,90/mês</li>
        <li>Premium — R$ 239,90/mês</li>
        <li>Master — R$ 389,90/mês</li>
      </ul>
      <p class="small muted">No plano anual, você paga 10 meses. Valores publicados, sem taxa de adesão.</p>
      <div class="btn-row">
        <a class="btn btn--wa" href="https://wa.me/5561995957461?text=${waMsg}" target="_blank" rel="noopener" data-cta="planos">Começar o teste grátis</a>
      </div>
    </div>
    <div class="lp-form-box">
      <h2 style="font-size:1.25rem">Prefere que a gente chame você?</h2>
      <form class="form" id="lp-form" novalidate>
        <div class="field">
          <label for="lp-nome">Nome*</label>
          <input id="lp-nome" name="nome" type="text" autocomplete="name" required>
        </div>
        <div class="field">
          <label for="lp-empresa">Empresa</label>
          <input id="lp-empresa" name="empresa" type="text" autocomplete="organization">
        </div>
        <div class="field">
          <label for="lp-telefone">WhatsApp*</label>
          <input id="lp-telefone" name="telefone" type="tel" autocomplete="tel" inputmode="tel" data-mask="phone" placeholder="(11) 99999-9999" required>
        </div>
        <button class="btn btn--primary btn--block" type="submit">Quero ser chamado</button>
        <p class="hint">Ao enviar, você é direcionado ao WhatsApp com a mensagem pronta. Nenhum dado fica armazenado neste site.</p>
        <p class="status" id="lp-status" role="status" aria-live="polite"></p>
      </form>
    </div>
  </div>
</section>

<section class="section section--tight">
  <div class="wrap">
    <div class="lp-final">
      <h2>Comece hoje. Em 7 dias você tem dados, não uma opinião.</h2>
      <p>Sem cartão de crédito, sem contrato e sem compromisso de continuidade.</p>
      <div class="btn-row" style="justify-content:center">
        <a class="btn btn--wa btn--lg" href="https://wa.me/5561995957461?text=${waMsg}" target="_blank" rel="noopener" data-cta="final">Ativar teste grátis de 7 dias</a>
      </div>
      <p class="lp-micro">ou ligue para (61) 99595-7461 — atendimento de segunda a sexta, 9h às 18h</p>
    </div>
  </div>
</section>

<script>
(function () {
  var form = document.getElementById('lp-form');
  if (!form) return;
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var nome = form.nome.value.trim();
    var tel = form.telefone.value.trim();
    if (!nome || !tel) {
      document.getElementById('lp-status').textContent = 'Preencha nome e WhatsApp para continuar.';
      return;
    }
    var texto = 'Olá! Quero ativar o teste grátis de 7 dias do sistema de pesquisa de satisfação.'
      + '\\n\\nNome: ' + nome
      + '\\nEmpresa: ' + (form.empresa.value.trim() || 'não informada')
      + '\\nWhatsApp: ' + tel;
    document.getElementById('lp-status').textContent = 'Abrindo o WhatsApp…';
    var url = 'https://wa.me/5561995957461?text=' + encodeURIComponent(texto);
    var w = window.open(url, '_blank', 'noopener');
    if (!w) location.href = url;
  });
})();
</script>
`,
  faqTitle: "Dúvidas de quem está decidindo",
  faq: [
    {
      q: "Preciso de cartão de crédito para testar?",
      a: "<p>Não. O teste de 7 dias é liberado pelo WhatsApp, sem cartão e sem contrato. Se você decidir não continuar, o acesso simplesmente expira.</p>",
    },
    {
      q: "Preciso comprar o totem para testar?",
      a: "<p>Não. O teste é do software. Você usa o seu próprio tablet Android 5.1 ou superior. O equipamento é contratado só depois, se quiser.</p>",
    },
    {
      q: "Quanto tempo leva para começar a coletar respostas?",
      a: "<p>Normalmente no mesmo dia. Montamos a campanha junto com você e enviamos o acesso; a primeira resposta costuma sair nas primeiras horas de operação.</p>",
    },
  ],
};
