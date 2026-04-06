Feature: Products List

  @productsList @smoke
  Scenario: Get products list and store it in excel
    Then I enter email as 'EMAIL'
    Then I enter password as 'PASSWORD'
    Then I click on 'Login' button
    Then Get products list and print in excel sheet