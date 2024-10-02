Feature: End to End scenario

       application Regression

       Background: Launch the URL
       Given I open the ecomm website

        @Regression
       Scenario: Ecommerce products
       When I add the products to cart
       And validate the total prices
       Then Verify the success message
        @Smoke
       Scenario: Fill the form to shop
       When I fill the form details
       |name|gender|
       |bobz|Male|
       Then Validate the form behaviour
       And select the shop page


