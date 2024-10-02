describe('API test',()=>{
    it('hitting the URL',()=>{
        cy.request('POST','http://216.10.245.166/Library/Addbook.php', {

            "name":"Learn Appium Automation with Java",
            "isbn":"bcad",
            "aisle":"097",
            "author":"Jon foe"
            }).then(function(response){
                expect(response.body).to.have.property("Msg","Successfully added")
                //expect(response.status).to.eq(200)
        
    })
    })

})