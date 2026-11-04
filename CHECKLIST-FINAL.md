# Checklist final — beend.tech

Atualizado em 03/11/2026

## ✅ Concluído

- [x] 21 páginas publicadas em `https://beend.tech` (canonical, sitemap, robots, llms.txt)
- [x] Landing page de campanha em `/lp/teste-gratis.html` (noindex, fora do sitemap)
- [x] Rastreamento de conversão pronto (`assets/js/track.js`) — desligado até configurar `GADS_ID` / `GA4_ID` no Coolify
- [x] Máscara de telefone nos formulários (`assets/js/ui.js`)
- [x] Endereço removido do site inteiro (rodapé, JSON-LD, llms, /sobre)
- [x] E-mail comercial trocado para `beendtech@gmail.com` na página de contato
- [x] Certificado Let's Encrypt válido no apex (até 31/jan/2027)
- [x] `www.beend.tech` → 308 → `beend.tech` (sem canônico duplicado)
- [x] Deploy automático no Coolify (git push → build → nginx)
- [x] Projeto "Site" excluído do Coolify
- [x] `backeend.com.br`: site redireciona 301 para o beend.tech
- [x] `backeend.com.br`: aplicações preservadas (`/cliente`, `/loja`, `/webmail`, `/cpanel`, `/beta`, `/totem/`, `/totempro/`)
- [x] Property `beend.tech` verificada no Search Console (arquivo HTML + DNS TXT)
- [x] Sitemap processado no Search Console — 19 páginas
- [x] Perfil da Empresa no Google: site alterado para `https://beend.tech`
- [x] Categoria do Perfil corrigida (saiu de "agência de marketing digital")
- [x] Google: home **indexada** ("O URL está no Google", HTTPS válido) — 03/11/2026
- [x] **Limpar snippet** solicitado para `https://beend.tech/` (descrição antiga removida)
- [x] **Indexação solicitada** novamente para a home
- [x] **Mudança de endereço** `www.backeend.com.br` → `beend.tech` **aprovada e ativa** — 03/11/2026 (válida por 180 dias)
- [x] **URLs amigáveis** (`/planos-e-precos` em vez de `/planos-e-precos.html`) — nginx `try_files` + 301 das URLs `.html` antigas
- [x] **Dados estruturados corrigidos** — removido `Offer` de `Service`/`Product` que disparava "Listagens do comerciante" (WNC-756200); `image` adicionado ao `Product`
- [x] **Blog ampliado para 11 artigos** — NPS, CSAT, NPS x CSAT, CES, taxa de resposta, modelos de pergunta, benchmark de NPS e relatório, com 9 diagramas vetoriais próprios e FAQ com schema
- [x] **Tokens revogados** (GitHub fine-grained, GitHub classic, Coolify API) — 03/11/2026

> ⚠️ A Mudança de endereço **só funciona** se a ferramenta for aberta na propriedade
> **antiga** (`https://www.backeend.com.br/`). Aberta na propriedade nova, ela esconde
> o destino da lista e propõe a migração ao contrário. Não é necessário ter propriedade
> de Domínio — prefixo no nível do host é aceito.

## ⏳ Pendente

### Você — rápido
- [ ] **Renovar `beend.tech` por 5 anos** (expira 18/03/2027) e ativar renovação automática
- [ ] Cloudflare: **Purge** de `https://www.backeend.com.br/robots.txt` (está em cache com conteúdo antigo)
- [ ] Search Console: verificar `https://backeend.com.br/` (sem www) e repetir a Mudança de endereço nessa variante
- [ ] Google Ads: informar `GADS_ID`, `GADS_LABEL` e `GA4_ID` para ativar a medição
- [ ] Search Console: remover a propriedade `beend.tech` (Domínio) que ficou "Não verificado" — a Mudança de endereço por prefixo tornou-a desnecessária

### Você — depois
- [ ] Perfil da Empresa: adicionar os 7 serviços, fotos reais e **pedir avaliações** aos clientes
- [ ] Criar a página de empresa no LinkedIn (`/company/`) e mandar a URL
- [ ] Voltar em 24–48h no Search Console → Indexação → Páginas

### Eu — quando você quiser
- [ ] Pacote de palavras-chave e textos do Google Ads
- [ ] Adicionar Instagram (`canalbackeend`) no `sameAs` do site
- [ ] Página "Quanto custa um totem" (intenção de preço)
- [ ] 6 páginas dedicadas por segmento (restaurante, farmácia, clínica, academia, varejo, supermercado)
- [ ] 4–6 artigos novos (NPS, métricas, exemplos, perguntas)
- [ ] Ferramenta gratuita (calculadora de NPS / gerador de QR Code) — ímã de backlinks
- [ ] Estrutura do "Índice Brasileiro de Satisfação" (dados dos 145 mil registros)
- [ ] Posts mensais no Perfil da Empresa

## Observação sobre credenciais

As chaves de API foram revogadas. O site **não depende delas em runtime**. O deploy
automático continua funcionando pelo webhook do GitHub (segredo próprio, não é o token de API).
Para eu operar o Coolify por API de novo (restart de proxy, variáveis, deploys forçados),
será necessário gerar uma nova chave.

## Verificação em 1 comando

```bash
curl -sSI https://beend.tech/ | head -1                 # 200
curl -sSI https://www.beend.tech/ | grep -i location    # 308 → beend.tech
curl -sSI https://www.backeend.com.br/ | grep -i location  # 301 → beend.tech
curl -sS -o /dev/null -w '%{http_code}\n' https://www.backeend.com.br/cliente  # 200
```
