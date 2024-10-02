// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
Cypress.Commands.add("selectproduct", (productname) => 
    {
    cy.get('h4.card-title').each(($e1,index,$list)=>{
    if($e1.text().includes(productname)){
      cy.get('.btn-info').eq(index).click()
    }}) 
})
Cypress.Commands.add('loginAPI', () => { 
  cy.request({
    method: 'POST',
    url: 'https://rahulshettyacademy.com/api/ecom/auth/login',
    body: {
      userEmail: "Rkavya@gmail.com",
      userPassword: "Password@123"
    }
  }).then(function(res){
    expect(res.status).to.eq(200);
    Cypress.env('token', res.body.token);
  });
});






  

//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })