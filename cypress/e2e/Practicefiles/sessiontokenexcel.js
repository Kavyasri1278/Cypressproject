/// <reference types="cypress" />
const neatCSV=require('neat-csv' )

let productexpectedname
describe('JWT session',()=>{
    it('Is logged in through local storage',async()=>{        
        cy.loginAPI().then(function(){            
            cy.visit('https://rahulshettyacademy.com/client',{
                onBeforeLoad :function(window)
                {
                    window.localStorage.setItem('token',Cypress.env('token'))
                }
            })
        })
        cy.get('.card-body h5 b').eq(1).then(($e1)=>{
            productexpectedname=$e1.text()
        })
        cy.get('button.w-10').eq(1).click()
        cy.get("button[routerlink$='/dashboard/cart']").click()
        cy.contains('Checkout').click()
        cy.get("input[placeholder$='Select Country']").type('ind')
        cy.get('button.ta-item span').each(($e1,index,$list)=>{
            if($e1.text()===' India'){
                cy.wrap($e1).click()
            }
        })
        cy.get('.action__submit').click()
        cy.wait(2000)
       // cy.contains('Click To Download Order Details in Excel').click()
        cy.get('.btn.btn-primary').contains('Excel').click()   
        const filepath = Cypress.config("fileServerFolder") + '/cypress/downloads/order-invoice_Rkavya.xlsx';
     cy.task('excelToJsonconverter',filepath).then(function(result){
        cy.log(result)
        cy.log(result.data[1].B)
        expect(productexpectedname).to.equal(result.data[1].B)
         //To just validate the productname or something is present in excel or csv or not irrespective of position then one straightforward approch
            cy.readFile(filepath).then(function(text){
                expect(text).to.include(productexpectedname)
            })
     })
      // fs.readFileSync return a Buffer
});
       
        

          })
        


    
