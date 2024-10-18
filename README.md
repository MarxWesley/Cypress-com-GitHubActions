# 🚀 Projeto Automação E2E com Cypress no site BugBank 
O Projeto a seguir tem como objetivo principal desenvolver testes web para o site [BugBank](https://bugbank.netlify.app), um site voltado para testes. Utilizando a ferramenta Cypress
## 👤 Integrantes
- Wesley Bertin Marques ([Linkedin](https://www.linkedin.com/in/wesley-bertin-marques-a7b2b4230/))

## 📄 Descrição
O projeto propõe o desenvolvimento de teste automatizados com cypress utilizando a geração de relatórios com o AllureReport e integrando ele a uma pipeline com o GitHub-Actions, a pipeline roda sempre que é feito um novo PUSH, ou PR

## 🖇️ Especificações
- VSCode: É um editor de código-fonte leve e multiplataforma, com suporte para várias linguagens, extensões e ferramentas de desenvolvimento integradas.

## ⚙️ Configurações necessárias para rodar o projeto
### 1. Inicializar o Projeto Node.js
```
npm init -y
```
Este comando inicializa um projeto Node.js com um arquivo package.json padrão, usando as configurações padrão para o seu projeto. É necessário para instalar dependências como o Cypress e gerenciar as bibliotecas do projeto.
```
npm install cypress
```
Este comando instala o Cypress como uma dependência do seu projeto. O Cypress é uma ferramenta de automação de testes end-to-end para testar aplicações web.
```
npx cypress open
```
Este comando abre a interface gráfica do Cypress (Test Runner), onde você pode ver, executar e depurar seus testes. Ele também cria uma estrutura de diretórios padrão com exemplos de testes, se for a primeira execução.
### 2. Instalar dependência do Data Faker
````
npm install @faker-js/faker --save-dev
````
### 3. Instalar dependências do Allure Report
```
npm install --save-dev allure-cypress
```
- Para gerar os relatórios rode o Cypress normalmente
```
npx cypress run
```
### 4. Visualizar o relatório do Allure na web 
```
allure serve
````




## 💻 Tecnologias utilizadas
- [Git](https://git-scm.com)
- GitHub
- [VSCode](https://code.visualstudio.com)
- [AllureReport](https://allurereport.org/docs/cypress/)
- [Cypress](https://www.cypress.io)

## 💻 Biblíotecas utilizadas
- [DataFaker](https://medium.com/@ayhanmet/login-test-with-cypress-and-faker-js-541b9d950fff)
