/// <reference types="cypress" />
import Homepage from "../pageobjects/Homepage";
import Shoppage from "../pageobjects/Shoppage";
import Checkoutpage from "../pageobjects/Checkoutpage";

describe('mocha', function() {  // Use function() here instead of arrow function

  before(function() {
    cy.fixture('example').then(function(data) {
      this.data = data;  // 'this' refers to the Mocha context
    })
  })

  it('hooks', function() {         // Use function() here instead of arrow function for this keyword
      Cypress.config('defaultCommandTimeout',8000) 
       const home= new Homepage()
       const shop=new Shoppage()
       const checkout=new Checkoutpage()
       var sum=0
       cy.log(Cypress.env('url'))
       cy.visit(Cypress.env('url')+"angularpractice/")
    //cy.visit("https://rahulshettyacademy.com/angularpractice/")
    home.getEditnamebox().type(this.data.name)  // Now 'this' will work correctly
    home.getGender().select(this.data.gender)
    
    //to compare we use below but to extract for text we need to resolve promise and grab text and by using prop attr
    home.getTwowaydatabinding().should('have.value',this.data.name)
    home.getEditnamebox().should('have.attr','minlength','2')
    
    home.getEnterperneurradiobutton().should('be.disabled')
    home.getShopbutton().click()
    //cy.selectproduct('Blackberry')
    //cy.selectproduct('Nokia')
    //instead of writing separately each step we can use parameterized concept
    this.data.productname.forEach(element => {
      cy.selectproduct(element)
    });
    shop.checkout().click()
    checkout.pricecolumncart().each(($e1,index,$list)=>{
      const price=$e1.text()
      var res=price.split(" ")
        res=res[1].trim()  //₹. 85000
      sum=Number(sum)+Number(res)
    }).then(function(){
      cy.log(sum)
    })
    checkout.Totalsum().then(function($e1){
      const total=$e1.text()
        var tot=total.split(" ")
         tot=tot[1].trim() 
         expect(Number(tot)).to.equal(sum)     
    })
    cy.contains('Checkout').click()
    checkout.countrydropdown().type('ind')
    //cy.get('.suggestions > :nth-child(1) > li > a').click()
    checkout.countryselection().each(($e1,index,$list)=>{
     const country=$e1.text()
       if($e1.text()==='India')
    {
      cy.wrap($e1).click()
  }
    })
    checkout.termsandconditions().check({force:true})
    checkout.purchasebutton().click()
    checkout.successmessage().then(function(ele){
      const actualtext=ele.text()
      expect(actualtext.includes('Success')).to.be.true
    })


  })
  })


