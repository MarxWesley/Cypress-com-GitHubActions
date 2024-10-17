describe ('login', () => {

    beforeEach(() => {
        cy.visit('/');
        cy.generateFakerRegister();

        cy.fixture('registerFaker').then((dados) => {
            cy.registroValidoSaldo(dados);
        })
    });
    
    it('test 1 - tentativa de login com sucesso, dados dinamicos', () => {
        cy.fixture('registerFaker').then((dados) => {
            cy.fazerLoginValido(dados);
        })
    });

    it('test 2 - tentativa de login com senhas distintas, dados dinamicos', () => {
        cy.fixture('registerFaker').then((dados) => {
            cy.fazerLoginInvalido(dados);
        })
    });

})