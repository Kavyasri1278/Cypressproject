/// <reference types="cypress" />
describe('My first program',function()
{
it ('My first testcase',function(){
    cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
    cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
    cy.get('#checkBoxOption1').uncheck().should('not.be.checked').and('have.value','option1')
   //to check multiple checkboxes,check accepts value property
   cy.get("input[type='checkbox']").check(['option1','option3'])
   //dropdowns-static(select tag)
   cy.get('select').select('option1').should('have.value','option1')
   //autocomplete
   cy.get('#autocomplete').type('ind')
   cy.get('.ui-menu-item div').each(($e1,index,$list)=>{
    if($e1.text()==='India')
    {
        cy.wrap($e1).click()
    }
   })
//hide and show textbox
cy.get('#displayed-text').should('be.visible')
cy.get('#hide-textbox').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('#show-textbox').click()
cy.get('#displayed-text').should('be.visible')
//radio buttons
cy.get("input[name='radioButton']").check('radio1').should('have.value','radio1')
//cypress automatically accepts alert
cy.get('#alertbtn').click()
cy.get('#confirmbtn').click()
//alert-cypress has capability of browser events,windows:alert is the event which gets fired on alert open,so we are firing through cypress
//to get access so to capture text
cy.on('window:alert',(str)=>{
    expect(str).to.equal('Hello , share this practice page and share your knowledge')
})
cy.on('window:confirm',(str)=>{
    expect(str).to.equal('Hello , Are you sure you want to confirm?')
})

    })
})