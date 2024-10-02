class Checkoutpage
{
   countrydropdown(){
    return cy.get('#country')
   } 
   countryselection()
   {
    return cy.get('div.suggestions ul li a')
   }
   termsandconditions()
   {
    return cy.get('input#checkbox2')
   }
   purchasebutton()
   {
    return cy.get('input[value="Purchase"]')
   }
   successmessage(){
      return cy.get('.alert')
   }
   pricecolumncart(){
     return cy.get('tr td:nth-child(4) strong')
   }
   Totalsum(){
      return cy.get('h3 strong')
   }
}
export default Checkoutpage