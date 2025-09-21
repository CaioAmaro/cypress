describe('Pagina Principal', () => {
    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app');
    })
    
    it('Deve veriricar o title head', () => {
        cy.title().should('eq','AdoPet');
    })

    it('Deve verificar se Quem ama adota! está presente no html', () => {
        cy.contains('Quem ama adota!').should('be.visible');
    })

    it('Deve verificar se Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente! está presente no html', () =>{
        cy.contains('Adotar pode mudar uma vida. Que tal buscar seu novo melhor amigo hoje? Vem com a gente!').should('be.visible');
    })

    it('Deve fazer login com fluxo diferente: cliclando no icone de mensagem no header', ()=>{
        cy.get('.header__message').click();
        cy.get('[data-test="input-loginEmail"]').type('caioamaro@mail.com');
        cy.get('[data-test="input-loginPassword"]').type('Caio123');
        cy.get('[data-test="submit-button"]').click();
        cy.contains('Veja os amigos disponíveis para adoção!').should('be.visible');
    })
})