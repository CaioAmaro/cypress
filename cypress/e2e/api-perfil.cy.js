describe('Exercicio04', () =>{

    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJlMzgxZDkxZC0xOWM3LTQ2NGYtODBkOC01MjM1NzNlYTBlYTgiLCJhZG9wdGVyTmFtZSI6ImNhaW8gYW1hcm8iLCJpYXQiOjE3NTg0ODQ2MTksImV4cCI6MTc1ODc0MzgxOX0.MK1cGd14ucTpmMJyaJ4yiU4gvXQUBnS_YJxsltV5kjo`;
    
    it('Deve verificar Perfil Adopet', () => {

        cy.request({
            method:'GET',
            url:'https://adopet-api-i8qu.onrender.com/adotante/perfil/e381d91d-19c7-464f-80d8-523573ea0ea8',
            headers: {authorization}
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('perfil')
            expect(res.body.perfil.nome).to.be.equal('caio amaro');
        })
    })

})