# Plano de crescimento — beend.tech

Objetivo: sair da 2ª página do Google e disputar as primeiras posições com o Viavox nos termos de pesquisa de satisfação com totem.

Criado em: 02/11/2026

---

## 1. Diagnóstico (por que estamos atrás)

| Fator | Viavox | beend.tech | Impacto |
|---|---|---|---|
| Preços publicados | tabela completa (R$ 79,90–399,90/mês) | sob consulta | 🔴 alto |
| Estrelas no Google | `AggregateRating` | 1 avaliação | 🔴 alto |
| Ferramenta gratuita | calculadora de margem de erro | — | 🔴 alto (backlinks) |
| Páginas no sitemap | 23 | 18 | 🟡 médio |
| Artigos longos | 7+ (até 2.587 palavras) | 3 (até ~1.500) | 🟡 médio |
| Tempo de casa / backlinks | anos de SEO, Search Console | domínio novo em SEO | 🔴 alto |
| **Técnica (Lighthouse)** | carrega fontes externas | **100/100/100** | 🟢 vantagem nossa |
| **Otimização para IA** | não medida | **Navegação agêntica 3/3** | 🟢 vantagem nossa |
| Palavras no guia do totem | 777 | **1.682** | 🟢 vantagem nossa |

**Conclusão:** não perdemos por técnica. Perdemos por **conteúdo comercial, prova social e autoridade (backlinks)**.

Decisões tomadas:
- ✅ Publicar preços
- ✅ Criar teste grátis
- ❌ Não investir no nicho eleitoral

---

## 2. Fase 1 — Conversão e confiança (Semana 1)

O que destrava o ranking comercial e a conversão.

### 2.1 Página de preços com tabela (`/planos-e-precos.html`)

Substituir "sob consulta" por uma tabela real. Estrutura:

Publicado em `/planos-e-precos.html` (10% abaixo do concorrente):

| Plano | Mensal | Anual | Terminais | Campanhas | Avaliações/mês |
|---|---|---|---|---|---|
| Básico | R$ 69,90 | R$ 699 | 2 | 5 ativas | 4.000 |
| Profissional ⭐ | R$ 129,90 | R$ 1.299 | 5 | 15 ativas | 10.000 |
| Premium | R$ 239,90 | R$ 2.399 | 15 | ilimitadas | 50.000 |
| Master | R$ 389,90 | R$ 3.899 | ilimitados | ilimitadas | ilimitadas |

Equipamento continua sob consulta (aquisição ou locação). Anual equivale a dez mensalidades.
**Teste grátis: 7 dias, só software, sem cartão.**

Regras para publicar bem:
- Mostrar **"a partir de"** no menor valor — nunca o menor preço sem contexto
- Explicar o que está incluso em cada linha
- Deixar claro o que muda o valor (quantidade, tela, personalização)
- JSON-LD `Offer` para cada plano

### 2.2 Teste grátis

Criar `/teste-gratis.html` + CTA no cabeçalho e nos CTAs principais.

Conteúdo da página:
- o que o teste inclui (aplicativo + painel, sem cartão)
- o que o cliente precisa (um tablet Android 5.1+ ou o totem em locação)
- 7 dias, só software, sem cartão (publicado)
- como começar (WhatsApp ou formulário)
- perguntas frequentes (o que acontece no fim, precisa de internet, etc.)

### 2.3 Prova social

- **Coletar avaliações no Google**: pedir aos 232 clientes, um a um, com link direto
- **Depoimentos no site**: 3 a 5 nominais, com autorização, empresa, cargo e cidade
- **`AggregateRating`** no JSON-LD só depois de ter avaliações reais
- **2 a 3 cases** com números (antes/depois de NPS, taxa de resposta)

### 2.4 Página "Quanto custa"

Nova página `/quanto-custa-totem-de-pesquisa.html` mirando os termos de preço:
- faixa de investimento
- o que compõe o custo
- locação vs aquisição com conta feita
- por que não existe preço único
- CTA para o teste grátis

---

## 3. Fase 2 — Cobertura de intenção (Semanas 2 a 4)

### 3.1 Páginas dedicadas por segmento

Hoje temos uma página `/segmentos.html` com âncoras. Trocar por **páginas próprias** (cada uma ranqueia sozinha):

1. `/totem-de-pesquisa-para-restaurantes.html`
2. `/totem-de-pesquisa-para-farmacias.html`
3. `/totem-de-pesquisa-para-clinicas.html`
4. `/totem-de-pesquisa-para-academias.html`
5. `/totem-de-pesquisa-para-varejo.html`
6. `/totem-de-pesquisa-para-supermercados.html`

Cada página com: problema do segmento, onde instalar, perguntas prontas, exemplo de resultado, CTA.

### 3.2 Páginas de canal e comparação

- `/pesquisa-de-satisfacao-por-email.html` (canal que não cobrimos)
- `/totem-ou-tablet.html` (comparativo, intenção alta)
- `/pesquisa-de-satisfacao-para-eventos.html`

### 3.3 Glossário e tutoriais

- `/glossario-pesquisa-de-satisfacao.html` (NPS, CSAT, CES, SMILE, taxa de resposta, amostra…)
- `/como-divulgar-a-pesquisa.html`
- `/tutoriais/` (vídeos curtos do sistema)

---

## 4. Fase 3 — Autoridade e backlinks (Mês 2 em diante)

É o fator que mais pesa e o mais lento. Sem atalho honesto: link comprado não sustenta.

### 4.1 Rápidos (fazer nesta semana)

| Ação | Onde | Esforço |
|---|---|---|
| Perfil no Bing Places | bing.com/forbusiness | 30 min |
| Apple Business Connect | businessconnect.apple.com | 30 min |
| LinkedIn **página de empresa** | linkedin.com | 1 h |
| Instagram ativo (recuperar ou recriar) | instagram.com | 1 h |
| Citações NAP consistentes | todos os perfis com mesmo nome, endereço, telefone | 2 h |
| YouTube (canal + 3 vídeos do sistema) | youtube.com | 1 dia |

### 4.2 Diretórios de software (autoridade alta, entrada fácil)

| Diretório | Observação |
|---|---|
| **Capterra Brasil** | maior diretório B2B, ranqueia muito bem |
| **GetApp** / **Software Advice** | mesmo grupo do Capterra |
| **B2B Stack** | brasileiro, foco B2B |
| Product Hunt | lançamento gera links |
| AlternativeTo | listagem simples |
| G2 / TrustRadius | internacional, vale pela autoridade |

> Cadastro é gratuito e o custo é tempo. Cada perfil costuma render 1 link de alta autoridade.

### 4.3 Associações e entidades

- **ABRASEL** (bares e restaurantes), **ABF** (franquias), **SEBRAE**, **CDL Brasília**, associação comercial local
- Parcerias com **agências de marketing**, **consultores de CX** e **contadores** — eles indicam e linkam

### 4.4 Digital PR com dados próprios ⭐

**A ideia de maior retorno:** vocês têm **145 mil pesquisas** acumuladas. Transformar isso em dado público.

Proposta: **"Índice Brasileiro de Satisfação no Atendimento"** — relatório anual com:
- NPS/CSAT médio por setor (farmácia, restaurante, varejo…)
- melhores e piores horários de atendimento
- tempo de espera vs satisfação
- dados **agregados e anonimizados**

Como isso vira links:
1. Publicar o estudo no site (página própria, com gráficos)
2. Enviar para imprensa: StartSe, PEGN, Exame, Consumidor Moderno, Mundo do Marketing, Mercado&Consumo, Novo Varejo
3. Divulgar nas redes com os números principais
4. Oferecer dados exclusivos por setor para jornalistas

Um estudo original é o jeito mais confiável de ganhar links de portais grandes — muito mais que qualquer troca de link.

### 4.5 Ferramenta gratuita (ímã de links)

Como a calculadora deles, mas melhor:

1. **Calculadora de NPS** (com interpretação da faixa)
2. **Calculadora de tamanho de amostra** (quantas respostas preciso?)
3. **Gerador de QR Code de pesquisa** (grátis, gera link)
4. **Modelo de pesquisa pronto** (download em PDF/troca de e-mail)

Cada ferramenta rende menções espontâneas em blogs de CX, varejo e marketing.

### 4.6 Conteúdo que atrai link

- Guia definitivo de NPS no Brasil (dados + exemplos)
- Pesquisa de satisfação: modelo pronto para copiar
- LGPD em pesquisa de satisfação (tema jurídico, muito citado)

### 4.7 Parcerias de conteúdo

- Guest post em blogs de varejo, CX e atendimento
- Participar de podcasts de empreendedorismo
- Responder dúvidas em comunidades (Reddit Brasil, grupos de CX, LinkedIn)

---

## 5. Fase 4 — Medição (contínuo)

| Métrica | Onde | Meta |
|---|---|---|
| Posição média nas consultas-alvo | Search Console | subir da 2ª página para o top 10 |
| Páginas indexadas | Search Console | 18 → 35+ |
| Cliques orgânicos | Search Console | crescimento mês a mês |
| CTR | Search Console | > 3% |
| Avaliações Google | Perfil da Empresa | 1 → 10 |
| Backlinks (domínios) | Search Console → Links | +1 a cada 2 semanas no início |
| Conversas iniciadas | WhatsApp / CRM | acompanhar tendência |
| Visitas e origem | Cloudflare Web Analytics | acompanhar tendência |

Ritual mensal:
1. Ler as consultas do GSC
2. Reescrever títulos com impressão e CTR baixo
3. Publicar 1–2 conteúdos novos
4. Fazer 2–3 ações de link

---

## 6. Expectativa realista

Sendo honesto sobre prazo:

| Período | O que esperar |
|---|---|
| 2 semanas | preços e teste grátis indexados; primeiras conversas a mais |
| 1 mês | segmentos e "quanto custa" ranqueando; avaliações aparecendo com estrelas |
| 2–3 meses | disputa real pelo top 10 nos termos de cauda média |
| 4–6 meses | com backlinks consistentes, disputa pelas primeiras posições |
| 6–12 meses | autoridade acumulada; o domínio passa a ranquear sozinho |

**O que não acelera:** link comprado, texto gerado em massa, palavra-chave repetida. Isso pode até derrubar.

**O que acelera de verdade:** preço publicado, avaliações, ferramenta gratuita e o estudo com dados próprios.

---

## 7. Divisão de trabalho

**Eu implemento (no código):**
- Página de preços reformulada + JSON-LD `Offer`
- Página de teste grátis + CTA no cabeçalho
- Página "quanto custa"
- 6 páginas de segmento
- 4 a 6 artigos novos
- Ferramenta gratuita (calculadora de NPS / gerador de QR Code)
- Glossário
- `AggregateRating` quando houver avaliações
- Estrutura do estudo anual (página + gráficos)

**Você faz (fora do código):**
- Confirmar a tabela de preços
- Definir as regras do teste grátis
- Coletar avaliações e depoimentos (com autorização)
- Criar os perfis (Bing, Apple, LinkedIn, YouTube)
- Cadastros nos diretórios
- Enviar o estudo para a imprensa
- Ações de parceria e imprensa

---

## 8. Ordem de execução (próximos 30 dias)

**Semana 1**
- [x] Preços e teste grátis confirmados (planos R$ 10 abaixo do concorrente; teste de 7 dias, só software)
- [x] Reformular `/planos-e-precos.html` com tabela publicada + JSON-LD Offer
- [x] Criar `/teste-gratis.html` + CTA "Teste grátis" no topo
- [x] Home com "a partir de R$ 69,90/mês" e CTA de teste grátis
- [ ] Criar `/quanto-custa-totem-de-pesquisa.html`
- [ ] Pedir avaliações aos clientes atuais

**Semana 2**
- [ ] 6 páginas de segmento
- [ ] Perfis: Bing Places, Apple, LinkedIn empresa, YouTube
- [ ] Cadastro no Capterra, GetApp, B2B Stack

**Semana 3**
- [ ] 4 artigos novos
- [ ] Ferramenta gratuita nº 1 (calculadora de NPS)
- [ ] Glossário

**Semana 4**
- [ ] Estrutura do Índice Brasileiro de Satisfação
- [ ] Primeiros contatos de imprensa
- [ ] Revisão de títulos e descrições com dados do GSC
