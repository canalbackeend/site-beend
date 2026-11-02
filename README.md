# beend.tech — site novo (2026)

Reconstrução completa do site da **beend.tech** (marca da Backeend Soluções Inteligentes): 19 páginas estáticas, sem dependências externas, com conteúdo baseado em dados reais de busca do Google e otimização para buscadores e agentes de IA.

O objetivo foi corrigir os problemas encontrados na auditoria do site atual e criar uma base editorial que possa crescer sem retrabalho.

---

## 1. Rodar localmente

Requisitos: Node.js 18+ (o build usa apenas módulos nativos) e Python 3 para o servidor de teste.

```bash
cd backeend-seo

npm run build     # gera as 19 páginas + sitemap, robots, llms.txt e llms-full.txt
npm run check     # valida títulos, descrições, H1, headings, alt, links, JSON-LD
npm run producao  # gera producao/ — a única pasta que vai para o servidor
npm run serve     # http://127.0.0.1:8099
```

Não há `npm install`: nenhuma dependência de terceiros.

O `check` precisa terminar com:

```
19/19 páginas sem problemas.
```

---

## 2. Estrutura

```
backeend-seo/
├── producao/                  # ← SUBIR SÓ ISSO (gerado com npm run producao)
├── build.mjs                  # gerador: layout, JSON-LD, sitemap, robots, llms
├── content/
│   ├── index.mjs              # ordem das páginas
│   ├── _ui.mjs                # helpers de seção, caixa de resposta e card
│   ├── home.mjs               # home (hero próprio)
│   ├── pillar.mjs             # guia central: totem de pesquisa
│   ├── guide.mjs              # guia NPS / CSAT / CES + 12 exemplos
│   ├── services.mjs           # locação, venda, mesa, piso, WhatsApp, QR Code
│   ├── institutional.mjs      # planos, segmentos, sobre, contato, 404, privacidade
│   └── blog.mjs               # índice do blog + 3 artigos
├── assets/
│   ├── css/styles.css         # design system completo (1 arquivo)
│   └── img/                   # favicon, ícones, OG image e versões WebP
├── tools/check.mjs            # validador pós-build
├── index.html …               # páginas geradas (não editar à mão)
├── sitemap.xml                # 18 URLs indexáveis
├── robots.txt                 # inclui permissões explícitas para crawlers de IA
├── llms.txt                   # resumo estruturado para agentes
├── llms-full.txt              # texto integral das páginas
├── .htaccess                  # Apache: 301, 404, cache, compressão, segurança
├── _redirects                 # equivalente para Netlify / Cloudflare Pages
├── package.json
└── SEO-ESTRATEGIA.md          # mapa de palavras-chave e plano de evolução
```

**Regra:** edite `content/*.mjs` ou `assets/css/styles.css` e rode `npm run build`. Os `.html` da raiz são saída do gerador.

### Placeholders resolvidos no build

| Placeholder | Vira |
|---|---|
| `{{root}}` | `""` na raiz, `"../"` em `/blog/` |
| `{{wa}}` | link `wa.me` com mensagem padrão |
| `{{phone}}` / `{{phone2}}` | telefones formatados |
| `{{email}}` | `sac@backeend.com.br` |

Eles funcionam em `body`, `faq`, `customHero` e `heroExtra`. O `llms-full.txt` também passa pelo resolvedor — não deve sobrar nenhum `{{` no arquivo final.

---

## 3. Páginas e papéis

| URL | Papel | Intenção principal |
|---|---|---|
| `/` | Home | marca + termo cabeça |
| `/totem-de-pesquisa-de-satisfacao.html` | Pilar | “o que é / como funciona” |
| `/pesquisa-de-satisfacao.html` | Guia | NPS, CSAT, CES, exemplos |
| `/locacao-de-totens.html` | Serviço | locação / comodato |
| `/venda-de-totens.html` | Serviço | compra / personalização |
| `/totem-de-mesa.html` | Modelo | balcão, clínica, farmácia |
| `/totem-de-piso.html` | Modelo | alto fluxo, shopping, evento |
| `/pesquisa-de-satisfacao-whatsapp.html` | Canal | como fazer no WhatsApp |
| `/pesquisa-de-satisfacao-qrcode.html` | Canal | como criar QR Code |
| `/planos-e-precos.html` | Comercial | preço e comparação |
| `/segmentos.html` | Aplicação | 9 segmentos com âncoras |
| `/contato.html` | Conversão | WhatsApp + formulário |
| `/blog/` | Conteúdo | índice editorial |
| `/blog/quanto-custa-totem-de-pesquisa-de-satisfacao.html` | Artigo | preço (cauda longa) |
| `/blog/totem-de-pesquisa-funciona-sem-internet.html` | Artigo | offline (dúvida real) |
| `/blog/erros-ao-instalar-totem-de-pesquisa.html` | Artigo | taxa de resposta |
| `/politica-de-privacidade.html` | Institucional | LGPD |
| `/sobre.html` | Institucional | entidade (CNPJ, fundação, empresa) |
| `/404.html` | Erro | recuperação de navegação |

Todas as páginas têm breadcrumb visível + `BreadcrumbList`, uma única H1, hierarquia de headings sem saltos, caixa “Resposta rápida” e data de atualização visível.

---

## 4. O que foi corrigido em relação ao site atual

| Problema na auditoria | Correção aplicada |
|---|---|
| Qualquer URL retornava a home com HTTP 200 (*soft 404*) | `404.html` real + `ErrorDocument 404` no `.htaccess` |
| Nenhuma tag `canonical` | `canonical` + `hreflang` `pt-BR` / `x-default` em todas as páginas |
| `<html lang="en">` | `lang="pt-BR"` |
| H1 era o nome da marca | H1 com a intenção de busca de cada página |
| 15 de 18 imagens sem `alt` | Todos os `alt` descritivos; `width`/`height` em todas as imagens |
| 4,46 MB, hero de 2,1 MB | Site inteiro com 1,4 MB; hero em WebP de ~100 KB; home transfere ~110 KB |
| Sem `sitemap.xml` | `sitemap.xml` com 18 URLs, `lastmod`, prioridade |
| `robots.txt` bloqueava `/css/` e `/js/` | Tudo liberado; crawlers de IA permitidos explicitamente |
| Nenhum dado estruturado | Grafo JSON-LD: Organization/LocalBusiness, WebSite, BreadcrumbList, FAQPage, Service, Article, ItemList, Blog |
| `assets/img/logo.png` era uma página HTML de erro | Ícones novos: `favicon.svg`, `logo-512.png`, `apple-touch-icon.png`, `og-default.jpg` |
| Endpoint do formulário de contato vazio | Formulário monta a mensagem e abre o WhatsApp; testado e validado |
| Links antigos do template (`services-details.html` etc.) | Redirecionamentos 301 no `.htaccess` e no `_redirects` |
| Sem headers de segurança / cache / compressão | Configurados no `.htaccess` |
| Contraste e foco fracos | Skip link, `:focus-visible`, contraste corrigido, links em texto sublinhados |
| `aria-label` do logo divergia do texto visível | Removido; o texto “Back&end.” é o nome acessível |
| Títulos e descrições genéricos | Títulos ≤ 65 e descrições ≤ 165 caracteres, únicos por página |

### Resultado no Lighthouse (local)

| Página | Acessibilidade | Boas práticas | SEO |
|---|---|---|---|
| Home | 95 | 100 | 100 |
| Artigo do blog | 100 | 100 | 100 |

> O 100 de SEO mede apenas o básico (title, meta, indexabilidade, links). Ele **não** prova indexação, autoridade ou ranking. O que resolve isso está na seção 7.

---

## 5. Otimização para busca agêntica

Agentes (ChatGPT, Perplexity, Gemini, Claude, Copilot) não “cliqueiam”: eles extraem trechos, comparam fatos e citam a fonte. O site foi montado para esse consumo:

- **`llms.txt`** — resumo com fatos verificáveis: empresa, endereço, telefones, modelo comercial, preço público, canais, métricas e links.
- **`llms-full.txt`** — texto integral de todas as páginas + FAQ, sem HTML e sem placeholders.
- **`robots.txt`** — permite GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Claude-SearchBot, Claude-User, Google-Extended, Applebot-Extended, CCBot e meta-externalagent.
- **`<link rel="alternate" type="text/plain" href=".../llms.txt">`** em todas as páginas.
- **Resposta primeiro** — cada página abre com a definição em 1–2 frases, antes de qualquer contexto.
- **Fatos em tabela** — métricas, comparativos, especificações e preço em `<table>` com `<caption>`.
- **FAQ nativa** (`<details>`) — o conteúdo está no HTML, não depende de JS, e também vai no JSON-LD `FAQPage`.
- **Datas visíveis** — “Conteúdo atualizado em 02/11/2026” em todas as páginas.
- **URLs estáveis e canônicas** — sem parâmetros, sem duplicação `http/https` ou `www/não-www`.
- **Sem JS obrigatório** — a página inteira funciona sem JavaScript; só o formulário usa JS para abrir o WhatsApp.

---

## 6. Deploy

### Apache (hospedagem atual)

1. Faça backup do site atual.
2. Envie o conteúdo desta pasta para o diretório público (`public_html` ou equivalente), **sem apagar** as pastas da aplicação: `/cliente`, `/app/`, `/totem/`, `/totempro/`.
3. Confirme que `mod_rewrite`, `mod_headers`, `mod_deflate` e `mod_expires` estão ativos.
4. Confirme que o `.htaccess` foi enviado (arquivo oculto).
5. Teste:
   - `https://beend.tech/qualquer-coisa-inexistente` → deve retornar **404**, não a home;
   - `http://backeend.com.br/` → deve redirecionar para `https://beend.tech/`;
   - `/services-details.html` → deve ir para o guia do totem.

### Netlify / Cloudflare Pages

Use `_redirects` na raiz. O build não é necessário no host: suba os arquivos já gerados. Para publicação automática, configure o comando `npm run build` e o diretório de saída `.`.

### Checklist pós-deploy

- [ ] Remover o catch-all do servidor que devolve a home com 200.
- [ ] Conferir `https://beend.tech/sitemap.xml` e `/robots.txt`.
- [ ] Enviar o sitemap no Google Search Console e no Bing Webmaster Tools.
- [ ] Solicitar indexação das 5 páginas principais.
- [ ] Validar o JSON-LD no Rich Results Test.
- [ ] Testar o formulário de contato no celular (deve abrir o WhatsApp com a mensagem).
- [ ] Confirmar que `/cliente` continua funcionando.

---

## 7. O que ainda depende do proprietário

Estes itens não podem ser resolvidos só com código e ficam registrados para não se perderem:

1. **Google Search Console** — verificar o domínio (DNS ou arquivo HTML) e enviar o sitemap. Sem isso não há como saber o que está indexado.
2. **GA4 / GTM** — o site atual não tem nenhuma tag de analytics. Criar a propriedade e inserir o snippet no `<head>` (ou via GTM). Sem ID, não é possível medir conversão.
3. **Google Business Profile** — cadastrar/atualizar o perfil em Brasília com endereço, horário, telefone, fotos e link do site. É o que alimenta o pack local e as respostas de IA sobre “onde comprar totem em Brasília”. As categorias do perfil foram corrigidas para *Fornecedor de equipamento* (principal), *Empresa de Software*, *Empresa de Automação Empresarial* e *Serviço de soluções de tecnologia para eventos*.
4. **`sameAs`** — ✅ Perfil da Empresa no Google já ligado no JSON-LD (`https://maps.google.com/?cid=12703534258198116818`). Falta o **LinkedIn** da empresa: quando criar, descomente a linha em `SITE.sameAs` no `build.mjs`.
5. **Fotos e cases reais** — as imagens atuais vêm do site antigo. Substituir por fotos dos totens instalados, com autorização dos clientes, e publicar 2–3 cases com números reais (antes/depois de NPS, taxa de resposta).
6. **Prova social** — depoimentos nominais, logos de clientes e avaliações Google. Hoje não há nenhum depoimento no site.
7. **Preços** — o site não publica nenhum valor: equipamento e software são “sob consulta”, conforme decisão do proprietário. Se um dia houver tabela pública, atualize `content/*.mjs` e o `llms.txt`.
8. **Backend do formulário (opcional)** — hoje o envio abre o WhatsApp. Se quiser registrar leads, será necessário um endpoint (ou serviço de formulário) com aviso de privacidade e retenção definida.
9. **Revisão jurídica da política de privacidade** — o texto cobre LGPD de forma geral, mas não substitui parecer jurídico.
10. **Conteúdo recorrente** — o blog tem 3 artigos. Para autoridade, o ideal é 1–2 publicações por mês, puxadas pelas perguntas reais de atendimento.

---

## 8. Manutenção

- Alterou texto? `content/*.mjs` → `npm run build` → `npm run check`.
- Nova página? Crie o objeto em `content/` (com `slug`, `title`, `description`, `h1`, `body`, `llms`), importe em `content/index.mjs` e rode o build.
- Nova imagem? Gere WebP, informe `width`/`height`, `alt` e `loading="lazy"`.
- Atualizou conteúdo? Ajuste `SITE.updated` em `build.mjs` — a data aparece nas páginas, no sitemap e no rodapé.
- Mudou o link do sistema? Ajuste `SITE.login` em `build.mjs` (botão "Acessar plataforma" do cabeçalho e rodapé). Hoje aponta para `https://www.backeend.com.br/cliente/index.php`.
- Vai publicar no domínio antigo? Troque `SITE.url` em `build.mjs` para `https://www.backeend.com.br` antes do build.
- Preço mudou? Atualize em `home.mjs`, no objeto `pricing` de `institutional.mjs`, em `pillar.mjs`, `blog.mjs` e no `llms.txt` gerado pelo `build.mjs`. Busque por `69` antes de publicar.

---

## 9. Migração para beend.tech

A marca comercial é **beend.tech** (marca da Backeend Soluções Inteligentes). A estratégia:

| Domínio | Papel |
|---|---|
| `beend.tech` | site de captação (estático, semântico, para SEO) |
| `backeend.com.br/cliente` | área de acesso do cliente |
| `backeend.com.br` | redireciona 301 para `beend.tech` |

O site foi gerado com `SITE.url = "https://beend.tech"`. Para publicar:

1. Suba os arquivos no host do `beend.tech` com o `.htaccess` da raiz.
2. No host do `backeend.com.br`, use `legacy-backeend.htaccess` (redireciona preservando o caminho, exceto `/cliente`, `/app`, `/totem`).
3. Atualize o campo **Site** no Perfil da Empresa no Google para `https://beend.tech`.
4. Envie o novo sitemap no Search Console (propriedade `beend.tech`) e marque o `backeend.com.br` como mudança de endereço.

**Se ainda não for migrar**, troque `SITE.url` para `https://www.backeend.com.br`, rode `npm run build` e use o `.htaccess` original. O site funciona igual nos dois domínios.
