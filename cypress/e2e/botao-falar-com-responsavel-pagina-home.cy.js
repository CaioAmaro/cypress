describe('Pagina Home', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/home');
  })


  it('Deve acessar Pagina /home e clicar no primeiro botao falar com o responsavel', () => {
    cy.get(':nth-child(1) > .card__contact').click();
  })
})