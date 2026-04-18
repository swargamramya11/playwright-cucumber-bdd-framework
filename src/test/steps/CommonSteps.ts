import { Given, DataTable } from '@cucumber/cucumber';
import { ReusableMethods } from '../../utils/reusableMethods';
import { CustomWorld } from '../../utils/world';

Given('I click on {string} button', async function (this: CustomWorld, buttonName) {
    console.log("test is running")

    switch (buttonName) {
        case "Register Here":
            await this.registrationPage.clickOnRegisterHere()
            break;
        case "Login":
            await this.loginPage.clickLogin()
            break;
        case "Register":
            await this.registrationPage.clickRegister()
            break;
        case "Login - After Registration":
            await this.registrationPage.clickLogin()
            break;
        default:
            throw new Error('unsupported field')
    }
})

Given('Verify below error messages', async function (this: CustomWorld, dataTable: DataTable) {
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
                    await this.commonMethods.verifyErrorMessage(field, ReusableMethods.getProperty(row[field]))
                    break;
                default:
                    throw new Error('unsupported field')
            }
        }
    }
})