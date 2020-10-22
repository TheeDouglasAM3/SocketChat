# SocketChat

<p align="center">
   <img src="./.github/logo.png" alt="SocketChat" width="280"/>
</p>

<p align="center">	
   <a href="https://www.linkedin.com/in/douglas-alves-marcelino-704250180/">
      <img alt="Douglas Alves Marcelino" src="https://img.shields.io/badge/-Douglas%20Alves%20Marcelino-CCCCCC?style=flat&logo=Linkedin&logoColor=white" />
   </a>
  <img alt="Repository size" src="https://img.shields.io/github/repo-size/TheeDouglasAM3/SocketChat?color=CCCCCC">

  <a href="https://github.com/TheeDouglasAM3/SocketChat/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/TheeDouglasAM3/SocketChat?color=CCCCCC">
  </a> 
  <img alt="License" src="https://img.shields.io/badge/license-MIT-CCCCCC">
  <a href="https://github.com/TheeDouglasAM3/SocketChat/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/TheeDouglasAM3/SocketChat?color=CCCCCC&logo=github">
  </a>
</p>

Projeto criado seguindo o tutorial de [@webdevjourneyWDJ](https://github.com/webdevjourneyWDJ), com o intuito de adquirir mais conhecimentos sobre a biblioteca Socket.io de NodeJS


# :star: Sumário

* [Descrição](#descrição)
* [Demonstração da aplicação](#demonstração-da-aplicação) 
* [Tecnologias](#tecnologias)
* [Como rodar o projeto](#como-rodar-o-projeto)
* [Achou algum bug?](#problemas)
* [Licença](#licença)

# Descrição
Proffy é uma plataforma de estudos online, onde qualquer professor poderá criar um cadastro indicando a matéria que deseja lecionar, o valor que irá cobrar e os horários de disponibilidade. Por outro lado, os alunos poderão filtrar os professores por matéria e disponibilidade, e os mesmos serão listados, e com isso o aluno poderá contatar o professor via whatsapp.

# Demonstração da aplicação
O projeto desenvolvido neste repositório está disponível em: 
[https://proffy-theedouglasam.vercel.app/](https://proffy-theedouglasam.vercel.app/)

# Tecnologias
Neste projeto foram utilizadas as seguintes tecnologias:
* [NodeJS](https://nodejs.org/en/)
* [React](https://pt-br.reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)

# Como rodar o projeto
```bash
# Copie o repositório
$ git clone https://github.com/TheeDouglasAM3/proffy.git
```
### Rode o servidor (back-end)

```bash
# Vá para a pasta do servidor
$ cd proffy/server

# Instale as depedencias
$ npm install
ou
$ yarn install

# Rode as migrações do banco de dados
$ npm run knex:migrate
ou
$ yarn knex:migrate

# Rode a aplicação
$ npm run dev
ou
$ yarn dev
```
Acesse o servidor em: http://localhost:3333/

### Rode o website (front-end)

```bash
# Vá para a pasta web
$ cd proffy/web

# Instale as depedencias
$ npm install
ou
$ yarn install

# Rode a aplicação
$ npm start
ou
$ yarn start
```
Acesse o website em: http://localhost:3000/

# Problemas
Se você encontrou algum bug, se sinta livre **para criar uma nova issue**  [clicando aqui!](https://github.com/TheeDouglasAM3/proffy/issues). Se você já encontrou a solução para o problema, **faça um pull request**!

# Licença

Criado em 2020 

Feito com carinho por [Douglas Alves Marcelino](https://github.com/TheeDouglasAM3) :duck:

Esse projeto esta sobre [MIT license](./LICENSE).