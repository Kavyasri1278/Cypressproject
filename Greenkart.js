/// <reference types="cypress" />
describe('My first program',function()
{
it ('My first testcase',function(){
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
    cy.get('input.search-keyword').type('ca')
    cy.wait(2000)
    cy.get(".product:visible").should('have.length',4)
    //parent child chaining using find
    //alias acts as variable
    cy.get('.products').as('Parentproduct')
    //cy.get('@Parentproduct').find('.product').should('have.length',4).eq(2).contains('ADD TO CART').click()
    cy.get('@Parentproduct').find('.product').each(($e1,index,$list)=>{
        const textveg= $e1.find('h4.product-name').text()
      if(textveg.includes('Cashews'))
     {
        cy.wrap($e1).find('button').click()
     }
         })  
         cy.get('.cart-icon img').click()
         cy.contains('PROCEED TO CHECKOUT').click()
         cy.contains('Place Order').click()

        })
    
    
    })