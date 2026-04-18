import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import LoginPage from '../../pages/LoginPage'
import { pageFixture } from '../../../src/utils/pageFixtures';
import { RegistrationPage } from '../../pages/RegistrationPage';
import { ReusableMethods } from '../../../src/utils/reusableMethods';
import { CommonMethods } from '../../pages/CommonMethods';

let registrationPage: RegistrationPage
let loginPage: LoginPage
let commonMethods: CommonMethods

Given('I click on {string} button', async function (buttonName) {
    console.log("test is running")
    registrationPage = new RegistrationPage(pageFixture.page)
    loginPage = new LoginPage(pageFixture.page);

    switch (buttonName) {
        case "Register Here":
            await registrationPage.clickOnRegisterHere()
            break;
        case "Login":
            await loginPage.clickLogin()
            break;
        case "Register":
            await registrationPage.clickRegister()
            break;
        case "Login - After Registration":
            await registrationPage.clickLogin()
            break;
        default:
            throw new Error('unsupported field')
    }
})

Given('Verify below error messages', async function (dataTable: DataTable) {
    registrationPage = new RegistrationPage(pageFixture.page)
    loginPage = new LoginPage(pageFixture.page)
    commonMethods = new CommonMethods(pageFixture.page)

    const data = dataTable.hashes()

    for (const row of data) {
        for (const field in row) {
            switch (field) {
                case "First Name":
                case "Last Name":
                case "Email":
                case "Phone Number":
                case "Gender":
                case "Password":
                case "Confirm Password":
                case "18 year older":
                case "Occupation":
                    await commonMethods.verifyErrorMessage(field, ReusableMethods.getProperty(row[field]))
                    break;
                default:
                    throw new Error('unsupported field')
            }
        }
    }
})