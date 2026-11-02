# Checklist final — beend.tech

Atualizado em 02/11/2026

## ✅ Concluído

- [x] 20 páginas publicadas em `https://beend.tech` (canonical, sitemap, robots, llms.txt)
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

## ⏳ Pendente

### Você — rápido
- [ ] Cloudflare: **Purge** de `https://www.backeend.com.br/robots.txt` (está em cache com conteúdo antigo)
- [ ] Search Console → Inspeção de URL → **Solicitar indexação** em:
      `https://beend.tech/`, `/planos-e-precos.html`, `/teste-gratis.html`
- [ ] Aguardar revisão do Perfil da Empresa (~10 min)
- [ ] **Revogar os 3 tokens** (GitHub fine-grained, GitHub classic, Coolify API)

### Você — depois
- [ ] Perfil da Empresa: adicionar os 7 serviços, fotos reais e **pedir avaliações** aos clientes
- [ ] Criar a página de empresa no LinkedIn (`/company/`) e mandar a URL
- [ ] Voltar em 24–48h no Search Console → Indexação → Páginas

### Eu — quando você quiser
- [ ] Adicionar Instagram (`canalbackeend`) no `sameAs` do site
- [ ] Página "Quanto custa um totem" (intenção de preço)
- [ ] 6 páginas dedicadas por segmento (restaurante, farmácia, clínica, academia, varejo, supermercado)
- [ ] 4–6 artigos novos (NPS, métricas, exemplos, perguntas)
- [ ] Ferramenta gratuita (calculadora de NPS / gerador de QR Code) — ímã de backlinks
- [ ] Estrutura do "Índice Brasileiro de Satisfação" (dados dos 145 mil registros)
- [ ] Posts mensais no Perfil da Empresa

## Verificação em 1 comando

```bash
curl -sSI https://beend.tech/ | head -1                 # 200
curl -sSI https://www.beend.tech/ | grep -i location    # 308 → beend.tech
curl -sSI https://www.backeend.com.br/ | grep -i location  # 301 → beend.tech
curl -sS -o /dev/null -w '%{http_code}\n' https://www.backeend.com.br/cliente  # 200
```
