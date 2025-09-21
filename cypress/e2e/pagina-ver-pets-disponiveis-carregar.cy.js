describe('Pagina de Ver pets Disponiveis', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
  })

  it('Deve carregar página Ver pets disponiveis para adoção', () => {
    cy.contains('Ver pets disponíveis para adoção').click();
  })
})
