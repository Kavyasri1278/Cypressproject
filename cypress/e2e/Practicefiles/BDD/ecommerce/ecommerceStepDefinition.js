import { When, Then, Given } from "@badeball/cypress-cucumber-preprocessor";
import Homepage from "../../../pageobjects/Homepage.js";
import Shoppage from "../../../pageobjects/Shoppage.js";
import Checkoutpage from "../../../pageobjects/Checkoutpage.js";

const home = new Homepage();
const shop = new Shoppage();
const checkout = new Checkoutpage();
let name
Cypress.on('uncaught:exception',(err,runnable)=>{
  return false
})
beforeEach(function() {
  // Load data from fixtures
  cy.fixture('example').then((data) => {
    this.data = data;
  });
});

Given('I open the ecomm website', () => {
  cy.visit(Cypress.env('url') + "angularpractice/");
});

When('I add the products to cart', function() {
  home.getShopbutton().click();

  // Add products to cart from the fixture
  this.data.productname.forEach((element) => {
    cy.selectproduct(element);
  });
  
  shop.checkout().click();
});

Then('validate the total prices', function() {
  let sum = 0;

  checkout.pricecolumncart().each(($e1, index, $list) => {
    const price = $e1.text();
    const res = price.split(" ")[1].trim();  // Extract price
    sum = Number(sum) + Number(res);
  }).then(() => {
    cy.log(sum);
  });

  checkout.Totalsum().then(function($e1) {
    const total = $e1.text();
    const tot = total.split(" ")[1].trim();
    expect(Number(tot)).to.equal(sum);
  });
});

Then('Verify the success message', function() {
  cy.contains('Checkout').click();
  checkout.countrydropdown().type('ind');
  
  checkout.countryselection().each(($e1, index, $list) => {
    if ($e1.text() === 'India') {
      cy.wrap($e1).click();
    }
  });

  checkout.termsandconditions().check({force: true});
  checkout.purchasebutton().click();

  checkout.successmessage().then(function(ele) {
    const actualtext = ele.text();
    expect(actualtext.includes('Success')).to.be.true;
  });
});

// Scenario: Fill the form to shop
When('I fill the form details', function(dataTable) {
    //bobz|male
    name=dataTable.rawTable[1][0]
  home.getEditnamebox().type(name);  
  home.getGender().select(dataTable.rawTable[1][1]);
});

Then('Validate the form behaviour', function() {
  home.getTwowaydatabinding().should('have.value', name);
  home.getEditnamebox().should('have.attr', 'minlength', '2');
  home.getEnterperneurradiobutton().should('be.disabled');
});

Then('select the shop page', () => {
  home.getShopbutton().click();
});
