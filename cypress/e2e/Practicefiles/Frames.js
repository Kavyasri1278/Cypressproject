/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

describe('Iframe Test', () => {
  it('Scroll down in the iframe and validate the text', () => {
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')

    // Ensure the iframe is fully loaded
    cy.frameLoaded("#courses-iframe")

    // Click on the mentor link inside the iframe
    cy.iframe().find('a[href*="mentor"]').eq(0).click();
    
    // Scroll down to the element you want to validate
   cy.iframe().find("h1[class*='pricing-title']").scrollIntoView();

    // Wait for the content to be fully loaded
    cy.iframe().find("h1[class*='pricing-title']").should('be.visible');

    // Validate the text after scrolling
    cy.iframe().find("h1[class*='pricing-title']").should('have.length',2)
    
  });
});