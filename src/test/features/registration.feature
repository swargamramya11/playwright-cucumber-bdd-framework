Feature: User Registration Feature

  @registration @smoke
  Scenario: Valid Registration flow
    Given I click on 'Register Here' button
    When I enter below fields in user registration Page
      | First Name | Last Name | Email  | Phone Number | Occupation | Gender | Password | Confirm Password | 18 year older |
      | random     | random    | random | random       | Doctor     | Female | random   | random           | check         |
    When I click on 'Register' button
    Then Verify success message after registration
    Then I click on 'Login - After Registration' button
    Then I enter email as 'RegisteredEmail'
    Then I enter password as 'RegisteredPassword'
    Then I click on 'Login' button

  @smoke @registrationerrors
  Scenario: Verify Register page error messages if field is empty as it is mandatory field
    Given I click on 'Register Here' button
    Then I click on 'Register' button
    Then Verify below error messages
      | First Name              | Email               | Phone Number               | Password               | Confirm Password               |
      | FIRSTNAME_ERROR_MESSAGE | EMAIL_ERROR_MESSAGE | PHONE_NUMBER_ERROR_MESSAGE | PASSWORD_ERROR_MESSAGE | CONFIRM_PASSWORD_ERROR_MESSAGE |