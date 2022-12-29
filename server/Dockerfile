FROM node:latest as develop-stage
WORKDIR /app
COPY package*.json ./
RUN npm i
COPY . .