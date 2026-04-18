import { Given, When, Then } from '@cucumber/cucumber';
import { DataProvider } from '../../../src/utils/dataproviders'
import { ReusableMethods } from '../../../src/utils/reusableMethods';
import { CustomWorld } from '../../utils/world';

const jsonPath = 'src/resources/testdata/uitestdata/logindata.json'
const data = DataProvider.getTestDataFromJson(jsonPath)

Given('Login to rahulsetty website with {string} and {string}', async function (this: CustomWorld, email, password) {
    for (const dataset of data) {
        await this.loginPage.enterEmail(dataset.email)
        await this.loginPage.enterPassword(dataset.password)
        await this.loginPage.clickLogin()
    }
})

Given('I enter email as {string}', async function (this: CustomWorld, email) {
    if (email.includes("Registered")) {
        email = this.testdata.email
    } else {
        email = ReusableMethods.getProperty(email)
    }
    await this.loginPage.enterEmail(email)
})

Given('I enter password as {string}', async function (this: CustomWorld, password) {
    if (password.includes("Registered")) {
        password = this.testdata.password
    } else {
        password = ReusableMethods.getProperty(password)
    }
    await this.loginPage.enterPassword(password)
})