# Formulário do teste grátis → e-mail pelo Gmail

O site é estático: **não existe servidor** para enviar e-mail. Credencial de Gmail
nunca pode ir para o navegador (qualquer pessoa leria a senha). A solução é um
**Google Apps Script** publicado como Web App — ele roda na sua conta Google, sem
servidor e sem custo, e envia o e-mail pelo seu próprio Gmail.

```
Site (formulário)  ──POST──►  Apps Script (sua conta)  ──►  Gmail: beendtech@gmail.com
                                                       └──►  Planilha (opcional)
```

## 1. Criar o script (5 minutos)

1. Abra **https://script.google.com** logado em **beendtech@gmail.com**
2. **Novo projeto**
3. Apague o conteúdo e cole o código abaixo:

```javascript
/**
 * beend.tech — recebe o formulário de teste grátis e envia por e-mail.
 * Publicar em: Implantar → Nova implantação → Aplicativo da Web
 *   Executar como: Eu
 *   Quem tem acesso: Qualquer pessoa
 */
const DESTINO = 'beendtech@gmail.com';

// Opcional: id da planilha para guardar os leads (veja o passo 4)
const PLANILHA_ID = '';

function doPost(e) {
  try {
    const d = JSON.parse((e.postData && e.postData.contents) || '{}');

    const assunto = 'Teste grátis — ' + (d.empresa || d.nome || 'novo lead');
    const corpo = [
      'Nome: ' + (d.nome || ''),
      'Empresa: ' + (d.empresa || ''),
      'Segmento: ' + (d.segmento || ''),
      'CNPJ: ' + (d.cnpj || ''),
      'Telefone: ' + (d.telefone || ''),
      'E-mail: ' + (d.email || ''),
      'CEP: ' + (d.cep || ''),
      'Terminais: ' + (d.terminais || ''),
      'Como conheceu: ' + (d.origem || ''),
      'Mensagem: ' + (d.mensagem || ''),
      '',
      'Recebido em: ' + new Date().toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
    ].join('\n');

    MailApp.sendEmail({
      to: DESTINO,
      subject: assunto,
      body: corpo,
      replyTo: d.email || DESTINO,
      name: 'Site beend.tech'
    });

    if (PLANILHA_ID) {
      SpreadsheetApp.openById(PLANILHA_ID)
        .getSheets()[0]
        .appendRow([new Date(), d.nome, d.empresa, d.segmento, d.cnpj,
                    d.telefone, d.email, d.cep, d.terminais, d.origem, d.mensagem]);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, erro: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

## 2. Publicar

1. **Implantar** → **Nova implantação**
2. Tipo: **Aplicativo da Web**
3. **Executar como:** *Eu (beendtech@gmail.com)*
4. **Quem tem acesso:** **Qualquer pessoa**
5. **Implantar** → autorize o acesso (é o seu próprio script pedindo permissão de envio de e-mail)
6. Copie a **URL do aplicativo da Web** — termina em **`/exec`**

> Se alterar o código depois, use **Implantar → Gerenciar implantações → Editar → Nova versão**.
> Editar o código sem criar versão nova mantém a URL antiga no ar.

## 3. Ligar no site

No Coolify, no app do site, adicione uma variável:

```
FORM_ENDPOINT = https://script.google.com/macros/s/SEU_ID/exec
```

Depois faça um novo deploy. Enquanto a variável não existir, o formulário
**continua funcionando** — ele abre o WhatsApp com todos os dados preenchidos
(mesmo padrão dos outros formulários do site).

## 4. Guardar os leads numa planilha (recomendado)

1. Crie uma planilha no Google Sheets
2. Copie o **ID** da URL: `docs.google.com/spreadsheets/d/`**`ID_AQUI`**`/edit`
3. Cole em `PLANILHA_ID` no script e publique uma nova versão

Cada envio vira uma linha. É o seu banco de leads, sem depender de serviço externo.

## Limitações que valem saber

| Item | Detalhe |
|---|---|
| **Sem confirmação real do envio** | O navegador não pode ler a resposta do Apps Script (CORS). O formulário mostra "recebemos seus dados" quando a requisição **sai**. Se quiser confirmação de verdade, use um serviço como Web3Forms. |
| **Cota de e-mail** | Conta Gmail comum: ~100 e-mails/dia pelo `MailApp`. Suficiente para o volume atual; se passar, use `GmailApp` com conta Workspace. |
| **Spam** | Sem captcha, um robô pode preencher. Se acontecer, adicione um campo oculto (honeypot) — o script descarta se vier preenchido. |
| **Privacidade** | Os dados passam pelo Google (sua conta). Já existe aviso de LGPD com link para a Política de Privacidade no formulário. |

## Alternativa: Web3Forms (sem Apps Script)

Se preferir não manter script: **web3forms.com** — crie a chave com o e-mail de
destino, e use `FORM_ENDPOINT = https://api.web3forms.com/submit?access_key=SUA_CHAVE`.
Tem resposta real (confirmação de envio), mas os dados passam por um terceiro.
---

## Opção B (padrão no código): FormSubmit

O formulário de teste grátis já envia para **beendtech@gmail.com** sem servidor, usando o
[FormSubmit](https://formsubmit.co) — nenhuma conta é necessária.

1. Publique o site e envie o formulário **uma vez** (pode ser um teste seu).
2. Chega um e-mail do FormSubmit em beendtech@gmail.com pedindo confirmação.
3. Clique no link de confirmação. A partir daí, todo envio cai na caixa de entrada.

Enquanto não confirmar, o formulário mostra um aviso e abre o WhatsApp com os dados —
nenhum lead é perdido.

**Para usar o Apps Script no lugar do FormSubmit** (mantém tudo na sua conta Google),
basta definir `FORM_ENDPOINT` no deploy com a URL do Web App: o código dá prioridade a ele.

---

## Status atual (05/11/2026)

O endpoint do Apps Script **já está embutido** em `build.mjs` e é usado por padrão:

```
https://script.google.com/macros/s/AKfycbyceKKxxHd-RKBWyc_SnduL7u-N0GwXjxH4jT4PMRGTJSZOpEpgdhTSOIKk7gTh5uw1hw/exec
```

Testado de ponta a ponta: `POST` retornou `{"ok":true}` e o envio pelo navegador
mostrou a mensagem de sucesso.

Se você publicar uma **nova versão** do Apps Script (o Google gera outra URL),
basta definir `FORM_ENDPOINT` no deploy com a URL nova — não precisa mexer no código.

---

## Versão 2 do script — com antiabuso (recomendado)

Substitua todo o conteúdo do Apps Script por este código e publique uma **nova versão**
(Implantar → Gerenciar implantações → editar → Nova versão). A URL `/exec` continua a mesma.

```javascript
const DESTINO = 'beendtech@gmail.com';
const LIMITE_HORA = 20;   // máximo de e-mails por hora
const LIMITE_DIA = 120;   // máximo de e-mails por dia (protege a cota do Gmail)

function doPost(e) {
  const bruto = (e && e.postData && e.postData.contents) || '{}';
  let d;
  try { d = JSON.parse(bruto); } catch (err) { return json({ ok: false, erro: 'json' }); }

  // 1) honeypot — robô preenche, humano não
  if (String(d.website || '').trim()) return json({ ok: true });

  // 2) tempo mínimo entre carregar a página e enviar
  const ts = Number(d._ts || 0);
  if (!ts || Date.now() - ts < 2500) return json({ ok: true });

  // 3) validação mínima
  const email = String(d.email || '').trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email)) return json({ ok: false });
  if (!String(d.nome || '').trim() || !String(d.telefone || '').trim()) return json({ ok: false });
  if (bruto.length > 8000) return json({ ok: false });

  // 4) mesmo e-mail em menos de 10 minutos = duplicado
  const cache = CacheService.getScriptCache();
  const chaveEmail = 'lead:' + email.toLowerCase();
  if (cache.get(chaveEmail)) return json({ ok: true });
  cache.put(chaveEmail, '1', 600);

  // 5) limite global por hora e por dia
  const props = PropertiesService.getScriptProperties();
  const agora = new Date();
  const chaveHora = 'h:' + agora.toISOString().slice(0, 13);
  const chaveDia = 'd:' + agora.toISOString().slice(0, 10);
  const naHora = Number(props.getProperty(chaveHora) || 0);
  const noDia = Number(props.getProperty(chaveDia) || 0);
  if (naHora >= LIMITE_HORA || noDia >= LIMITE_DIA) return json({ ok: false, erro: 'limite' });
  props.setProperty(chaveHora, String(naHora + 1));
  props.setProperty(chaveDia, String(noDia + 1));

  // 6) envia o e-mail
  const assunto = 'Teste grátis — ' + (d.empresa || d.nome || 'novo lead');
  const corpo = [
    'Nome: ' + (d.nome || ''),
    'Empresa: ' + (d.empresa || ''),
    'Segmento: ' + (d.segmento || ''),
    'CNPJ: ' + (d.cnpj || ''),
    'Telefone: ' + (d.telefone || ''),
    'E-mail: ' + (d.email || ''),
    'CEP: ' + (d.cep || ''),
    'Terminais: ' + (d.terminais || ''),
    'Como conheceu: ' + (d.origem || ''),
    'Mensagem: ' + (d.mensagem || ''),
    '',
    'Recebido em: ' + agora.toLocaleString('pt-BR', { timeZone: 'America/Sao_Paulo' })
  ].join('\n');

  MailApp.sendEmail({
    to: DESTINO,
    subject: assunto,
    body: corpo,
    replyTo: email || DESTINO,
    name: 'Site beend.tech'
  });

  return json({ ok: true });
}

function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
```

**Por que isso importa:** o `doPost` é público. Sem essas checagens, qualquer script
pode chamar a URL em loop, encher a caixa de entrada e **estourar a cota diária do
Gmail** (≈100 e-mails/dia em conta gratuita) — aí os leads legítimos param de chegar.
