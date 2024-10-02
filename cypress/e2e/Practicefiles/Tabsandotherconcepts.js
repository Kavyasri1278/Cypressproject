/// <reference types="cypress" />
describe('Advancedconcepts',()=>{
    it.only('tabs and cross domain',()=>{
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('removeAttr','target').click()  
        cy.origin('https://www.qaclickacademy.com', () => {
            cy.get(".navbar-nav a[href*='about.html']").should('have.text','About us') 
            cy.get('.mt-50 h2').should('contain','QAClick')
          })
          cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("table[name='courses'] tr td:nth-child(2)").each(($e1,index,$list)=>{
           const course=$e1.text() 
           if(course.includes('Python')){
            cy.get("table[name='courses'] tr td:nth-child(2)").eq(index).next().then((price)=>{
                const P=price.text()
                expect(P).to.equal('25')
            })
           }
        })
        //tabs or windows in other way is to grab the attribute href
        cy.get('#opentab').then(($e1)=>{
            const url1=$e1.prop('href')
            cy.visit(url1)
            cy.origin(url1,()=>{
                cy.get('div.sub-menu-bar a[href*="about"]').click()
            })
        })
    })
    it('mouseover and hidden elements',()=>{
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    //we need to invoke show method to show the elements under mouseover but the selection of locator should be immediate parent
   // cy.get('.mouse-hover-content').invoke('show')
    cy.contains('Top').click({force:true})
    cy.url().should('include','top')
    //we can also acheive this by using force:true
    
    })
})