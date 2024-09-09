/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe'
describe('Iframe',()=>{
    it('iframetest',()=>{
cy.visit('https://rahulshettyacademy.com/AutomationPractice/')        
cy.frameLoaded('#courses-iframe')
cy.iframe().find('a[href*="mentor"]').eq(0).click()
//cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
cy.iframe().find("h1[class*='pricing-title']").as('pricingTitles');
cy.iframe().find('@pricingTitles').should('have.length', 2);

    })
})