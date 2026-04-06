Feature: Login Feature

  @smoke
  Scenario: Valid Login
    Given Login to rahulsetty website with 'email From JSON' and 'Password from JSON'

  @smoke @loginerrors
  Scenario: Verify login page error messages if field is empty as it is mandatory field
    Given I click on 'Login' button
    Then Verify below error messages
      | Email               | Password               |
      | EMAIL_ERROR_MESSAGE | PASSWORD_ERROR_MESSAGE |