import { RegisterPage } from "../support/pages/RegisterPage";

describe('Registro', () => {

  beforeEach(() => {
    cy.visit("/");
  });
  
  it.only('test 1 - tentativa registro com saldo, dados dinamico', () => {
    cy.generateFakerRegister()
    cy.fixture('registerFaker').then((dados) => {
      cy.registroValidoSaldo(dados);
    })
  });

  it('visitar page', () => {
    cy.visit("/")
  });
})