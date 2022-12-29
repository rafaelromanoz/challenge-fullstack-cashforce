# Challenge CashForce

Tela de informações de notas fiscais, com relacionamentos entre tabelas do banco de dados, se baseando no figma para criar o frontend.

## 🚀 Começando

- `git clone https://github.com/rafaelromanoz/challenge-fullstack-cashforce.git`

### 📋 Executando o projeto com Docker

O projeto todo foi dockerizado (server, banco de dados e o client), para rodar o projeto com docker somente utilizar o comando a baixo e aguardar o build do projeto.

```
docker-compose up -d
```

Após a build o projeto estará funcionando na seguinte URL:

```
http://localhost:8080/#/

```

### 🔧 Instalando dependencias executando o  o projeto SEM o Docker
Para executar o projeto sem o Docker, é necessário seguir os passos abaixo:

## Instalando dependencias do backend.
```
cd server
npm install
```

### Executar script SQL para popular o banco:

Na pasta ./server/src/databases/mysql-dump tem a query SQL para ser executado a fim de popular o banco

### Executando aplicação

```
npm start
```

## Atenção!

O frontend do projeto foi construido com o framework Quasar do Vue, favor instalar as dependencias:

```
npm i -g @quasar/cli
```

## Instalando dependencias do frontend.
```
cd client
npm install
```
## Executando o client

```
quasar dev
```
## 📦 Desenvolvimento

No desenvolvimento da API (server) foi utilizada da arquitetura MSC, Models, Services, Controller, no service estão as regras de negócio, controller estão as requisições e Models estão conexões, dumps, models.

No enunciado do projeto foi solicitado o ORM Sequelize, porém como o projeto foi desenvolvido usando o superset Typescript e a própria doc do Sequelize é recomendado o uso do sequelize-typescript, o mesmo foi utilizado no projeto. 

A aplicação foi criado utilizando(Sequelize-typescript (ORM), MySql, Express, Node, Vue, Quasar)

Para confecção da API foi utilizado do framework Express e Node.js.

No frontend do projeto utilizado do framework Vue na interação com o usuário, e para facilitar no desenvolvimento, foi utilizado da biblioteca Quasar no qual possuo experiência.

Para padronização e qualidade de código foi utilizado o ESLint e o editorconfig tanto no frontend como backend.

No fluxo de Git/Github nos commits foi utilizado da biblioteca git-commit-msg-linter onde a mesma ajuda a seguir o pattern de conventional commits.

### Observações

Tentei meu máximo e consegui resolver a maioria, foi um teste bem divertido!

## 🛠️ Construído com

* [TypeScript](https://www.typescriptlang.org/) - Linguagem
* [MySQL](https://www.mysql.com/) - Banco de Dados
* [Express](https://expressjs.com/pt-br/) - Criação API
* [Node.js](https://nodejs.org/en/) - Criação API
* [Docker](https://nodejs.org/en/) - Container MySQL
* [ESLint](https://eslint.org/) - Padronização e qualidade de código
* [Sequelize](https://sequelize.org/) - Mapeamento objeto relacional
* [Quasar](https://quasar.dev/) - Criação de interfaces
