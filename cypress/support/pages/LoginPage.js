import { faker } from "@faker-js/faker";

const emailField = '.style__ContainerFormLogin-sc-1wbjw6k-0 > :nth-child(1) > .input__default'
const passwordField = '.style__ContainerFormLogin-sc-1wbjw6k-0 > .login__password > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default'
const btnAcessar = '.otUnI'

const labelTextName = '#textName'
const labelBemVindo = '.home__ContainerText-sc-1auj767-7 > :nth-child(2)'

const btnLogout = '#btnExit'
const msgEmailOuSenhaIncorreta = "#modalText"


    Cypress.Commands.add('fazerLoginInvalido', (dados) => {
        cy.preencherCampo(emailField, dados.email)
        cy.preencherCampo(passwordField, 123456)
        cy.clicar(btnAcessar)
        cy.validarTexto(msgEmailOuSenhaIncorreta, 'Usuário ou senha inválido.\nTente novamente ou verifique suas informações!')
    }) 

    Cypress.Commands.add('fazerLoginValido', (dados) => {
        cy.preencherCampo(emailField, dados.email)
        cy.preencherCampo(passwordField, dados.password)
        cy.clicar(btnAcessar)
        cy.validarTexto(labelTextName, `Olá ${dados.name},`)
        cy.validarTexto(labelBemVindo, 'bem vindo a BugBank :)')
    }) 

    Cypress.Commands.add('generateFakerLogin', () => {
        cy.writeFile('cypress/fixtures/loginFaker.json', {
            'email':faker.internet.email(),
            'password':faker.internet.password()
        })
    }) 

