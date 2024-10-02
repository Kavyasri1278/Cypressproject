describe('API test',()=>{
    it('mocking api',()=>{
        cy.visit('https://rahulshettyacademy.com/angularAppdemo')       

        cy.intercept({
            method:'GET',
            url:'https://rahulshettyacademy.com/Library/GetBook.php?AuthorName=shetty'
        },
        {
          statusCode:200,
          body:[{
               "book_name": "Learn API Automation",
                "isbn": "RS218",
                "aisle": "211"  }]
        }).as('book')        
        cy.get('button.btn-primary').click()
        //@book resolves the promise and yield 2 properties request and response
        cy.wait('@book').then(({request,response})=>{
            cy.get('tr').should('have.length',response.body.length+1)//+1 is added as it counts header also
        })
        cy.get('p').should('have.text','Oops only 1 Book available')

    })

})