# Checklist final — beend.tech

Atualizado em 04/11/2026

## ✅ Concluído

- [x] **29 páginas publicadas** em `https://beend.tech` (canonical, sitemap com 27 URLs, robots, llms.txt)
- [x] Landing page de campanha em `/lp/teste-gratis` (noindex, fora do sitemap)
- [x] Rastreamento de conversão pronto (`assets/js/track.js`) — desligado até configurar `GADS_ID` / `GA4_ID` no Coolify
- [x] Máscara de telefone nos formulários (`assets/js/ui.js`)
- [x] Endereço removido do site inteiro (rodapé, JSON-LD, llms, /sobre)
- [x] E-mail comercial trocado para `beendtech@gmail.com` na página de contato
- [x] Certificado Let's Encrypt válido no apex (até 31/jan/2027)
- [x] `www.beend.tech` → 301 → `beend.tech` (sem canônico duplicado)
- [x] Deploy no Coolify (build Docker → nginx) — **disparado pelo painel ou pela API**
      ⚠️ corrigido em 04/11/2026: **não há webhook no GitHub**, então `git push` **não** publica sozinho
      (o checklist afirmava deploy automático; era falso e o site ficou 2 commits atrás sem aviso)
- [x] Projeto "Site" excluído do Coolify
- [x] `backeend.com.br`: site redireciona 301 para o beend.tech
- [x] `backeend.com.br`: aplicações preservadas (`/cliente`, `/loja`, `/webmail`, `/cpanel`, `/beta`, `/totem/`, `/totempro/`)
- [x] Property `beend.tech` verificada no Search Console (arquivo HTML + DNS TXT)
- [x] Sitemap processado no Search Console
- [x] Perfil da Empresa no Google: site alterado para `https://beend.tech`
- [x] Categoria do Perfil corrigida (saiu de "agência de marketing digital")
- [x] Google: home **indexada** ("O URL está no Google", HTTPS válido) — 03/11/2026
- [x] **Limpar snippet** solicitado para `https://beend.tech/` (descrição antiga removida)
- [x] **Indexação solicitada** novamente para a home
- [x] **Mudança de endereço** `www.backeend.com.br` → `beend.tech` **aprovada e ativa** — 03/11/2026 (válida por 180 dias)
- [x] **Blog ampliado para 11 artigos** — NPS, CSAT, NPS x CSAT, CES, taxa de resposta, modelos de pergunta, benchmark de NPS e relatório, com 9 diagramas vetoriais próprios e FAQ com schema
- [x] **Design v2** — elevação, gradientes, camadas de superfície (Lighthouse 100/100/100)
- [x] **Tokens revogados** (GitHub fine-grained, GitHub classic, Coolify API) — 03/11/2026

### Deploy de 04/11/2026 (commit `8fe0cf6`)

- [x] **URLs amigáveis em produção** — `/planos-e-precos` em vez de `.html`; 301 das antigas em **1 salto**
- [x] **`absolute_redirect off`** — os 301 saem como caminho relativo; sem isto o nginx montava
      `http://` (o TLS termina no Traefik) e todo link antigo custava um salto extra
- [x] **Arquivos ocultos bloqueados** (`/.htaccess` respondia **200** e expunha a config Apache do domínio antigo)
- [x] **`.htaccess` deixou de ser publicado** — era config do domínio antigo, inútil no nginx
- [x] **`SITE_URL` com padrão correto** — no `Dockerfile` e no `build.mjs` o padrão passou a ser
      `https://beend.tech`. O Coolify tem a variável como **runtime**, não build-time: um build sem
      build-arg geraria canonical/sitemap no domínio antigo
- [x] **Testes automatizados** — `npm test`: 28 verificações (build sem `SITE_URL`, conteúdo gerado e
      rotas em **nginx real**) + prova por mutação. `npm run testes:prova`: 9/9 bugs conhecidos detectados

> ✅ **Correção (04/11/2026):** este checklist chegou a registrar um "laço infinito em `/blog`". Ele
> **nunca existiu**. O `try_files` resolve `/blog` pelo `$uri/index.html` antes de o nginx tratar o
> caminho como diretório; testado com nginx real, a configuração anterior também servia `/blog` com 200.
> A conclusão veio de uma **emulação errada** de `try_files` (que simulava um 301 de diretório que o
> nginx não faz ali). As regras exatas de `/blog` ficaram como explicitação, e o emulador
> (`tools/preview-urls.mjs`) foi corrigido para refletir o comportamento real.

> ⚠️ A Mudança de endereço **só funciona** se a ferramenta for aberta na propriedade
> **antiga** (`https://www.backeend.com.br/`). Aberta na propriedade nova, ela esconde
> o destino da lista e propõe a migração ao contrário. Não é necessário ter propriedade
> de Domínio — prefixo no nível do host é aceito.

> ⚠️ `return 301 /caminho` no nginx **não** é relativo por padrão: ele monta `$scheme://$host`
> e, atrás de proxy TLS, `$scheme` é `http`. Sempre use `absolute_redirect off`.

> ⚠️ Nenhum laço de redirecionamento passa por teste de rota: por isso a suíte segue **todo**
> redirecionamento com limite de saltos e falha ao detectar ciclo.

## Como rodar os testes

```bash
npm test                  # suíte completa (build + site gerado + rotas em nginx real)
npm run test:sem-nginx    # só as verificações estáticas (máquinas sem nginx)
npm run testes:prova      # reintroduz cada bug conhecido e confirma que a suíte falha
```

Os testes sempre fazem um **build limpo em pasta temporária, sem `SITE_URL`** — é esse o
cenário que quebrou o canonical uma vez. A suíte de rotas sobe o `deploy/nginx.conf` **real**
numa porta livre e verifica cada URL do sitemap, cada link interno e cada redirecionamento.

## ⏳ Pendente

### Você — rápido
- [ ] **Configurar o webhook do GitHub** (ou publicar sempre pelo painel do Coolify): hoje o `git push`
      **não** dispara deploy. No Coolify, em **Webhooks**, copie a URL de webhook manual do GitHub e
      cadastre em GitHub → repo → Settings → Webhooks (secret: o `manual_webhook_secret_github` do app)
- [ ] **Renovar `beend.tech` por 5 anos** (expira 18/03/2027) e ativar renovação automática
- [ ] Cloudflare: **Purge** de `https://www.backeend.com.br/robots.txt` (está em cache com conteúdo antigo)
- [ ] Search Console: **reenviar o sitemap** (agora com 27 URLs)
- [ ] Search Console: verificar `https://backeend.com.br/` (sem www) e repetir a Mudança de endereço nessa variante
- [ ] Search Console: remover a propriedade `beend.tech` (Domínio) que ficou "Não verificado"
- [ ] Google Ads: informar `GADS_ID`, `GADS_LABEL` e `GA4_ID` para ativar a medição

### Você — depois
- [ ] Perfil da Empresa: adicionar os 7 serviços, fotos reais e **pedir avaliações** aos clientes
- [ ] Criar a página de empresa no LinkedIn (`/company/`) e mandar a URL
- [ ] Voltar em 24–48h no Search Console → Indexação → Páginas

### Eu — quando você quiser
- [ ] Pacote de palavras-chave e textos do Google Ads
- [ ] Adicionar Instagram (`canalbackeend`) no `sameAs` do site
- [ ] 6 páginas dedicadas por segmento (restaurante, farmácia, clínica, academia, varejo, supermercado)
- [ ] Ferramenta gratuita (calculadora de NPS / gerador de QR Code) — ímã de backlinks
- [ ] Estrutura do "Índice Brasileiro de Satisfação" (dados dos 145 mil registros)
- [ ] Fotos reais nos blocos escuros e logotipo em SVG
- [ ] Posts mensais no Perfil da Empresa

## Observação sobre credenciais

O deploy roda pelo webhook do GitHub (segredo próprio). As chaves de API usadas em 04/11/2026
foram **rotacionadas logo após a operação** — o site não depende delas em runtime.

## Verificação em 1 comando

```bash
curl -sSI https://beend.tech/ | head -1                          # 200
curl -sSI https://beend.tech/planos-e-precos.html | grep -i loc  # 301 → /planos-e-precos (relativo)
curl -sSI https://www.beend.tech/ | grep -i location             # 301 → beend.tech
curl -sSI https://www.backeend.com.br/ | grep -i location        # 301 → beend.tech
curl -sS -o /dev/null -w '%{http_code}\n' https://beend.tech/.htaccess   # 403
curl -sS -o /dev/null -w '%{http_code}\n' https://beend.tech/blog        # 200 (1 salto, sem laço)
```
