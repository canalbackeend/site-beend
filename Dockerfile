# ==========================================================================
# beend.tech — site estático no Coolify (VPS Hostinger)
#
# Build em dois estágios:
#   1) node:22-alpine roda o gerador e produz a pasta producao/
#   2) nginx serve os arquivos estáticos
#
# O projeto NÃO tem dependências npm — o build não faz "npm install".
# ==========================================================================

# ---------- estágio 1: gerar o site ----------
FROM node:22-alpine AS build
WORKDIR /app

COPY . .

# gera as páginas e depois monta a pasta de produção
RUN node build.mjs && node tools/make-producao.mjs

# ---------- estágio 2: servir ----------
FROM nginx:1.27-alpine

# configuração do nginx (404, cache, segurança, redirecionamentos)
COPY deploy/nginx.conf /etc/nginx/conf.d/default.conf

# somente o que vai para o ar
COPY --from=build /app/producao/ /usr/share/nginx/html/

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
