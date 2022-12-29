FROM node:latest as develop-stage
WORKDIR /app
COPY package*.json ./
RUN npm i -g @quasar/cli
RUN npm i
COPY . .
