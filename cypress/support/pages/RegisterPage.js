import { faker } from "@faker-js/faker"

const btnMakeRegister = '.ihdmxA';

const emailField = ':nth-child(2) > .input__default';
const nameField = ':nth-child(3) > .input__default';
const passwordField = ':nth-child(4) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default';
const confirmPasswordField = ':nth-child(5) > .style__ContainerFieldInput-sc-s3e9ea-0 > .input__default';
const createWithValue = '#toggleAddBalance'

const btnDoRegister = '.styles__ContainerFormRegister-sc-7fhc7g-0 > .style__ContainerButton-sc-1wsixal-0';

const btnCloseModal = '#btnCloseModal';

const modalText = '#modalText'

Cypress.Commands.add('registroValidoSaldo', (dados) => {
    cy.clicar(btnMakeRegister)
    cy.preencherCampo(emailField, dados.email);
    cy.preencherCampo(nameField, dados.name);
    cy.preencherCampo(passwordField, dados.password);
    cy.preencherCampo(confirmPasswordField, dados.confirmPassword)
    cy.clicar(createWithValue)
    cy.clicar(btnDoRegister)

    cy.clicar(btnCloseModal)
})

Cypress.Commands.add('generateFakerRegister', (dados) => {
    const passFake = faker.internet.password()
    cy.writeFile('cypress/fixtures/registerFaker.json', {
        'email': faker.internet.email(),
        'name': faker.person.firstName(),
        'password': passFake,
        'confirmPassword': passFake 
    })
})