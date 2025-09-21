describe('Pagina de Home', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app');
  })

  it('Deve clicar em todos os botoes no header da pagina principal', () => {
    cy.get('a[class="header__message"]').click();
    cy.get('a[class="header__home"]').click();
  })
})