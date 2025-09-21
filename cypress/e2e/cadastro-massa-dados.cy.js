import {usuarios} from '../fixtures/usuarios.json';


describe('Registro', () => {

    beforeEach(() =>{
        cy.visit('https://adopet-frontend-cypress.vercel.app');
        cy.get('[data-test="register-button"]').click()
    })

    usuarios.forEach(usuario => {
        it('Deve registrar um novo usuario conforme dados em massa', () => {
            cy.get('[data-test="input-name"]').type(usuario.name);
            cy.get('[data-test="input-email"]').type(usuario.email);
            cy.get('[data-test="input-password"]').type(usuario.password);
            cy.get('[data-test="input-confirm-password"]').type(usuario.password);
            cy.get('[data-test="submit-button"]').click();
        })
    })

})