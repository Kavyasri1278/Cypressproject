import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";

Cypress.on('uncaught:exception',(err,runnable)=>{
    return false
})
Given('User navigates to the URL',()=>{
   cy.visit() 
})