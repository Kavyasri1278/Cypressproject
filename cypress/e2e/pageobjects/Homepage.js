class Homepage
{
getEditnamebox()
{
  return cy.get('div.form-group input[name="name"]')
}
getTwowaydatabinding()
{
  return cy.get('h4 input[name="name"]')
}
getGender(){
    return cy.get('select')
}
getEnterperneurradiobutton(){
    return cy.get('#inlineRadio3') 
}
getShopbutton(){
    return cy.get('a.nav-link[href*="/angularpractice/shop"]')
}
}
export default Homepage;