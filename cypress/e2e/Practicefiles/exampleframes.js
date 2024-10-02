/// <reference types="cypress" />
/// <reference types="cypress-iframe" />
import 'cypress-iframe';

describe('Google Maps Iframe Interaction', () => {
  it('Interact with Google Maps iframe', () => {
    cy.visit('https://the-internet.herokuapp.com/iframe')
    cy.get('#mce_0_ifr').its('0.contentDocument.body')

 });
});
