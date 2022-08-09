FROM node:16-alpine AS build
 
WORKDIR /app

# Copiando aplicação react para o container
COPY . /app/

# Preparando o container para buildar 
RUN npm install --force

RUN npm run build

# Preparando servidor nginx
FROM nginx:1.22-alpine
COPY --from=build /app/build /usr/share/nginx/html

# Remover as configurações padrões nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copiando novas configurações
COPY ./docker/nginx/default.conf /etc/nginx/conf.d

# Iniciando servidor de aplicação
EXPOSE 80
 
CMD [ "nginx", "-g", "daemon off;" ]