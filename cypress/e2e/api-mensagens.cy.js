describe('Api Adopet', () => {

    it('Mensagens da API ', () => {

        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/mensagem/e381d91d-19c7-464f-80d8-523573ea0ea8',
            headers: Cypress.env()
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('msg')
        })

    })
})