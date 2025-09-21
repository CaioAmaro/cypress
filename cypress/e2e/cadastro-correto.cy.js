describe('Página de Cadastro', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app'); 
  })

  it('Deve preencher os campos do formulario corretamente para cadastrar usuario', () => {
    cy.cadastrar('Brunna Ewelly','brunnaewelly@mail.com','Caio123');
  })
})