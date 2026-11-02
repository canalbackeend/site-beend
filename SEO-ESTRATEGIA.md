# Estratégia de SEO e busca agêntica — beend.tech

Documento de apoio ao site novo. Registra **de onde veio cada decisão de texto**, como as páginas se conectam e o que falta fazer fora do código.

Data da coleta de dados: **02/11/2026**.

---

## 1. Método

Não usei volume de busca estimado nem palavra-chave “no achismo”. A base foi:

1. **Google Suggest (autocomplete)** em pt-BR/Brasil, com ~50 sementes: termos de produto, modelo, canal, preço, métrica, segmento e dúvidas.
2. **Leitura da SERP** para os termos principais, para entender o que já existe (Comentto, Viavox, INDECX, Solvis, Segmento, M2) e onde há espaço.
3. **Conteúdo real da empresa** (telefones, endereço, horário, números de operação, funcionalidades descritas no site atual).
4. **Auditoria técnica** do site em produção.

O autocomplete mostra **o que as pessoas realmente digitam**, mas não mostra volume. Por isso a estratégia é de *cobertura de intenção*, não de priorização por tráfego estimado.

### Por que não usei “totem de mesa” sozinho

O autocomplete de “totem de mesa” é dominado por outro universo:

```
totem de mesa
totem de mesa personalizado
totem de mesa de papel
totem de mesa acrilico
totem de mesa formatura
```

Quem busca isso quer um display de papel/acrílico para festa, não um terminal digital. Por isso a página usa **“totem de mesa para pesquisa de satisfação”** e abre com uma desambiguação explícita (“não é totem de papel ou acrílico”). É a diferença entre atrair a intenção certa e receber tráfego que nunca converte.

O mesmo cuidado aparece em:

- **“nps o que é”** → ambíguo com INSS/previdência. A página ancora em “pesquisa de satisfação” e “net promoter score”.
- **“ces o que é”** → ambíguo com Consumer Electronics Show e CNE/CES. A página ancora em “customer effort score”.
- **“totem preço”** → a SERP mistura totem de autoatendimento, totem de senha e totem publicitário. A página separa software (preço público) de hardware (sob consulta).

---

## 2. Mapa de palavras-chave → página

### 2.1 Núcleo do produto

| Sugestão real do Google | Página | Intenção | Como o texto responde |
|---|---|---|---|
| totem de pesquisa de satisfação | `/` e `/totem-de-pesquisa-de-satisfacao.html` | informacional + comercial | definição, funcionamento, modelos, preço, FAQ |
| totem de pesquisa de satisfação do cliente | `/` e pilar | informacional | “cliente avalia no ponto de atendimento” |
| totem de pesquisa | `/` | navegacional | home cobre o termo curto |
| totem de satisfação | pilar | informacional | sinônimo tratado no texto |
| totem de avaliação de atendimento | pilar e `/segmentos.html` | informacional | “avaliação de atendimento” no corpo e nos exemplos |
| totem pesquisa nps / totem para nps | `/pesquisa-de-satisfacao.html` | informacional | seção NPS com fórmula e faixas |
| sistema de pesquisa de satisfação | `/` e `/planos-e-precos.html` | comercial | “plataforma/aplicativo/painel” |
| plataforma de pesquisa de satisfação | `/planos-e-precos.html` | comercial | o que está incluso e o que muda o valor |

### 2.2 Preço e modelo comercial

| Sugestão real | Página | Intenção | Resposta |
|---|---|---|---|
| totem pesquisa de satisfação preço | `/planos-e-precos.html` | comercial | dois formatos (aquisição PRO INFINITY e locação); valores sob consulta |
| totem de avaliação de atendimento valor | `/planos-e-precos.html` | comercial | fatores que mudam o valor |
| quanto custa totem (variação) | `/blog/quanto-custa-totem-de-pesquisa-de-satisfacao.html` | comercial-informacional | composição do custo e comparação de propostas |
| locação de totem / aluguel de totem | `/locacao-de-totens.html` | comercial | comodato, o que inclui, para quem serve |
| totem personalizado | `/venda-de-totens.html` | comercial | personalização de estrutura e tela |

> **Decisão de honestidade:** a beend.tech não publica tabela de preços. Equipamento e software são “sob consulta”, porque o valor muda com modelo, tela, quantidade, personalização e prazo. Inventar faixas geraria expectativa falsa e proposta impossível de sustentar.

### 2.3 Modelos e canais

| Sugestão real | Página | Intenção | Resposta |
|---|---|---|---|
| totem de mesa para pesquisa de satisfação do cliente | `/totem-de-mesa.html` | comercial | onde usar, por que escolher, ficha técnica |
| totem de piso para pesquisa | `/totem-de-piso.html` | comercial | alto fluxo, posicionamento, ficha técnica |
| pesquisa de satisfação whatsapp | `/pesquisa-de-satisfacao-whatsapp.html` | informacional | passo a passo, modelo de mensagem, LGPD |
| como fazer pesquisa de satisfação pelo whatsapp | `/pesquisa-de-satisfacao-whatsapp.html` | informacional | resposta direta no topo |
| pesquisa de satisfação qr code | `/pesquisa-de-satisfacao-qrcode.html` | informacional | como criar, onde colocar, limitações |
| totem para eventos | `/locacao-de-totens.html` + `/segmentos.html#eventos` | comercial | locação por período, offline |
| totem touch screen preço | `/planos-e-precos.html` | comercial | explica por que não há tabela fechada |
| totem 43 polegadas | `/venda-de-totens.html` | comercial | especificações sem inventar medidas |

### 2.4 Métricas e educação

| Sugestão real | Página | Intenção | Resposta |
|---|---|---|---|
| pesquisa de satisfação do cliente exemplos | `/pesquisa-de-satisfacao.html#exemplos` | informacional | 12 perguntas prontas |
| pesquisa de satisfação nps | `/pesquisa-de-satisfacao.html#nps` | informacional | fórmula, faixas, o que fazer |
| nps o que é | `/pesquisa-de-satisfacao.html#nps` | informacional | definição + cálculo |
| csat o que é | `/pesquisa-de-satisfacao.html#csat` | informacional | definição + cálculo |
| ces o que é | `/pesquisa-de-satisfacao.html#ces` | informacional | definição + cálculo |
| nps csat o que é | `/pesquisa-de-satisfacao.html#comparativo` | informacional | tabela comparativa |

### 2.5 Segmentos

| Sugestão real | Página | Âncora |
|---|---|---|
| totem para farmácia | `/segmentos.html` | `#farmacias` |
| totem para clínica | `/segmentos.html` | `#clinicas` |
| totem para restaurante | `/segmentos.html` | `#restaurantes` |
| totem para loja | `/segmentos.html` | `#varejo` |
| totem para academia | `/segmentos.html` | `#academias` |
| totem para concessionária | `/segmentos.html` | `#concessionarias` |
| totem para shopping | `/segmentos.html` | `#shoppings` |
| totem para prefeitura / órgãos públicos | `/segmentos.html` | `#orgaos-publicos` |

Cada segmento tem pergunta de exemplo própria. Isso evita a página genérica que serve para todos e não convence ninguém.

### 2.6 Dúvidas de operação (blog)

| Pergunta real | Página | Resposta |
|---|---|---|
| totem de pesquisa funciona sem internet | `/blog/totem-de-pesquisa-funciona-sem-internet.html` | modo offline, sincronização, limitações |
| como aumentar a taxa de resposta | `/blog/erros-ao-instalar-totem-de-pesquisa.html` | 7 erros + correções |
| quanto custa | `/blog/quanto-custa-totem-de-pesquisa-de-satisfacao.html` | composição do custo |

### 2.7 Marca

| Termo | Página |
|---|---|
| backeend | `/` |
| backeend totem | `/` |
| backeend pesquisa de satisfação | `/` |

A home concentra a marca porque é a URL que o Google já associa ao nome. As páginas internas reforçam produto, não marca.

---

## 3. Arquitetura de links

```
Home
├── Pilar (totem de pesquisa)
│   ├── Guia de métricas (NPS/CSAT/CES)
│   ├── Totem de mesa
│   ├── Totem de piso
│   ├── Segmentos
│   └── Planos e preços
├── Locação ──↔── Venda
├── WhatsApp ──↔── QR Code
├── Blog (3 artigos) ──→ Pilar / Planos / Contato
└── Contato
```

Regras aplicadas:

- Toda página de serviço linka para o pilar e para planos.
- Os artigos linkam para a página comercial correspondente (não ficam órfãos).
- O rodapé repete os links principais, garantindo caminho a partir de qualquer página.
- Nenhuma página depende de menu JS: os links estão no HTML.
- Breadcrumb visível + `BreadcrumbList` em todas as páginas internas.

---

## 4. Checklist de busca agêntica

O que foi implementado e por quê:

| Item | Status | Observação |
|---|---|---|
| `llms.txt` com fatos e links | ✅ | empresa, endereço, telefones, preço, canais, métricas |
| `llms-full.txt` com texto integral | ✅ | inclui FAQ, sem HTML e sem placeholders |
| `robots.txt` com crawlers de IA | ✅ | GPTBot, OAI-SearchBot, ChatGPT-User, PerplexityBot, ClaudeBot, Claude-SearchBot, Claude-User, Google-Extended, Applebot-Extended, CCBot, meta-externalagent |
| `<link rel="alternate" type="text/plain">` | ✅ | aponta para `llms.txt` |
| Resposta direta no topo | ✅ | caixa “Resposta rápida” em 14 páginas |
| Fatos em tabela | ✅ | métricas, preços, especificações, comparativos |
| FAQ em HTML nativo | ✅ | `<details>` + `FAQPage` |
| Dados estruturados | ✅ | Organization/LocalBusiness, WebSite, BreadcrumbList, FAQPage, Service, Article, ItemList, Blog |
| Canonical estável | ✅ | uma URL por página, sem parâmetros |
| Conteúdo sem dependência de JS | ✅ | só o formulário usa JS |
| Datas visíveis | ✅ | “atualizado em 02/11/2026” |
| Texto citável e autocontido | ✅ | definições em frases completas, sem “clique aqui” |
| Entidade consistente | ✅ | mesmo nome, endereço e telefone no site, JSON-LD e `llms.txt` |

### O que ainda não dá para garantir

- **Indexação** — depende do Search Console e do tempo de rastreamento.
- **Citação por ChatGPT/Perplexity** — depende de autoridade, menções externas e atualização dos índices. `llms.txt` ajuda, mas não é garantia.
- **Aparição no pack local** — depende do Google Business Profile e de avaliações.
- **Ranking** — depende de concorrência, backlinks e histórico do domínio.

---

## 5. Plano dos próximos 90 dias

### Semana 1 — fundação

- [ ] Publicar o site e remover o catch-all que devolve 200 para qualquer URL.
- [ ] Verificar o domínio no Google Search Console (DNS).
- [ ] Enviar `sitemap.xml` no GSC e no Bing Webmaster Tools.
- [ ] Solicitar indexação da home, pilar, planos, locação e WhatsApp.
- [ ] Criar GA4 e instalar a tag (ou via GTM).
- [ ] Validar JSON-LD no Rich Results Test.

### Semanas 2–4 — confiança

- [ ] Atualizar o Google Business Profile: categoria, endereço, horário, telefone, fotos reais, link do site.
- [ ] Substituir as imagens genéricas por fotos dos totens instalados.
- [ ] Publicar 2 cases com números reais (NPS antes/depois, taxa de resposta, tempo de operação).
- [ ] Coletar 5–10 avaliações no Google de clientes atuais.
- [ ] Adicionar depoimentos nominais (com autorização).

### Meses 2–3 — autoridade

- [ ] Publicar 1–2 artigos por mês, puxados por dúvidas reais de atendimento.
- [ ] Criar páginas de segmento dedicadas apenas se houver demanda e conteúdo suficiente (farmácia e clínica são as primeiras candidatas).
- [ ] Buscar menções em portais de varejo, saúde e atendimento (não só backlinks comerciais).
- [ ] Cadastrar a empresa em diretórios locais e setoriais.
- [ ] Revisar títulos e descrições com base nas consultas reais do GSC após 60 dias.

### Ritual mensal

1. Ler as consultas do GSC (o que apareceu, o que teve clique).
2. Ver quais páginas têm impressão e CTR baixo → reescrever title/description.
3. Ver quais páginas não têm impressão → falta de links internos ou conteúdo raso.
4. Atualizar a data e o conteúdo de 1 página antiga.

---

## 6. Como medir

### Métricas de vaidade (não usar sozinhas)

- Score de SEO do Lighthouse.
- Número de páginas publicadas.
- Posição média sem contexto de consulta.

### Métricas que importam

| Métrica | Onde ver | Meta inicial |
|---|---|---|
| Páginas indexadas | GSC → Páginas | 18/18 em 60 dias |
| Impressões nas consultas do mapa | GSC → Desempenho | crescimento mês a mês |
| CTR das 5 páginas principais | GSC | > 3% |
| Cliques em “WhatsApp” | GA4 (evento `outbound`) | acompanhar tendência |
| Envios do formulário | GA4 (evento)`generate_lead` | acompanhar tendência |
| Conversas iniciadas | WhatsApp Business | acompanhar tendência |

### Teste de visibilidade em IA

Faça a mesma pergunta, em uma janela anônima, uma vez por mês:

1. “Qual empresa vende totem de pesquisa de satisfação em Brasília?”
2. “Quanto custa um totem de pesquisa de satisfação?”
3. “Como fazer pesquisa de satisfação no ponto de atendimento?”
4. “Totem de mesa para pesquisa de satisfação: qual escolher?”
5. “beend.tech é confiável?”

Registre se a marca aparece, se o link é citado e se o dado está correto. Se aparecer errado, corrija a página ou o `llms.txt` — a fonte precisa estar certa antes de o agente citar.

---

## 7. Riscos e cuidados

- **Preço:** o site não publica valores. Mantenha assim até existir uma tabela comercial estável; se publicar, atualize `content/*.mjs` e o `llms.txt`.
- **Números da empresa:** 232 clientes, 421 terminais, 322 campanhas e 145.327 pesquisas vieram do site atual. Precisam ser confirmados e datados (“desde 2019” ou “em outubro de 2026”), senão envelhecem mal.
- **Especificações:** não há medidas, polegadas ou materiais confirmados. O site diz “varia conforme o modelo” em vez de inventar ficha técnica.
- **Depoimentos:** não foram criados. Prova social inventada destrói confiança e pode gerar problema jurídico.
- **Cases:** não foram criados. Sem dados reais, é melhor não ter do que ter número fictício.
- **LGPD:** a política cobre o básico, mas o formulário e a operação de pesquisa precisam de revisão jurídica.
- **Concorrência:** os concorrentes já têm página de preço, blog e cases. O diferencial aqui é transparência (software com preço, hardware explicado) e conteúdo que responde à dúvida antes do formulário.

---

## 8. Resumo executivo

- 19 páginas, 18 indexáveis, uma intenção por página.
- Conteúdo ancorado em sugestões reais do Google, com desambiguação nos termos contaminados.
- Correção dos problemas técnicos da auditoria (404, canonical, lang, alt, peso, sitemap, robots, dados estruturados, formulário).
- Camada explícita para agentes (`llms.txt`, `llms-full.txt`, crawlers, resposta primeiro, tabelas, FAQ em HTML).
- O que falta não é código: é Search Console, analytics, Google Business Profile, fotos, cases e constância editorial.
