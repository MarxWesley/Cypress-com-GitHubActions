import * as allure from "allure-js-commons";
describe ('login', () => {

    const setAllureAttributes = (description) => {
        allure.feature("Login");
        allure.owner("Wesley");
        allure.tag("Authentication");
        allure.description(description);
    };
        
    beforeEach(() => {
        cy.visit('/');
        cy.generateFakerRegister();

        cy.fixture('registerFaker').then((dados) => {
            cy.registroValidoSaldo(dados);
        })
    });
    
    it('test 1 - tentativa de login com sucesso, dados dinamicos', () => {
        setAllureAttributes("Esse teste cria um usuário antes e depois loga com os dados válidos dele")

        cy.fixture('registerFaker').then((dados) => {
            cy.fazerLoginValido(dados);
        })
    });

    it('test 2 - tentativa de login com senha incorreta, dados dinamicos', () => {
        setAllureAttributes("Esse teste cria um usuário antes e depois logar email válido e senha incorreta")

        cy.fixture('registerFaker').then((dados) => {
            cy.fazerLoginInvalido(dados);
        })
    });

})