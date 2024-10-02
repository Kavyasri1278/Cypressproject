/// <reference types="cypress" />
describe('SQL Demo', () => {
    it('sql DB test', () => {
        cy.task('sqlServer:execute', "SELECT * FROM Person")
            .then((result) => {
              //  console.log(result); // Print the full result of the query
              console.log(result[0][1])


               
                
            })
           
    });
});
