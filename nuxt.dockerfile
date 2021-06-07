FROM node:latest
RUN npm i -g nuxt
COPY ./package.json ./package-lock.json /cff/
WORKDIR /cff
RUN npm i