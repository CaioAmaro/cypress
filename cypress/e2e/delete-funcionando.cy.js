describe('Exemplo Cypress', () => {

    beforeEach(() => {
        cy.visit('https://example.cypress.io/todo#');
    })

    it('Deve filtrar item na lista', () => {
        cy.get('[data-test="new-todo"').type('')
    })

    it('Deve excluir itens da lista', () => {
        cy.get('.todo-list li').each($el => {
            cy.wrap($el)
            .first()
            .trigger('mouseover')
            .find('.destroy')
            .click({ force: true })
        })
    })
})