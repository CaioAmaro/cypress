describe('Página de Login', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
    cy.get('[data-test="login-button"]').click();
  })

  it('Deve preencher os campos de formularios de login e autenticar o usuario na página', () => {
    cy.login('caioamaro@mail.com','Caio123');
  })

})


