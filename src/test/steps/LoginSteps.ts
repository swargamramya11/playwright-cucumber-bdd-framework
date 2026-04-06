import { Given, When, Then } from '@cucumber/cucumber';
import { DataProvider } from '../../helper/utils/dataproviders'
import LoginPage from '../../pages/LoginPage'
import { pageFixture } from '../../hooks/pageFixtures';
import { ReusableMethods } from '../../helper/utils/reusableMethods'

const jsonPath = 'testdata/logindata.json'
const data = DataProvider.getTestDataFromJson(jsonPath)

Given('Login to rahulsetty website with {string} and {string}', async function (email, password) {
    for (const dataset of data) {
        let loginPage = new LoginPage(pageFixture.page);
        await loginPage.enterEmail(dataset.email)
        await loginPage.enterPassword(dataset.password)
        await loginPage.clickLogin()
    }
})

Given('I enter email as {string}', async function (email) {
    let loginPage = new LoginPage(pageFixture.page);

    if(email.includes("Registered")) {
        email = pageFixture.data.email
    } else {
         email = ReusableMethods.getProperty(email)
    }
    await loginPage.enterEmail(email)
})

Given('I enter password as {string}', async function (password) {
    let loginPage = new LoginPage(pageFixture.page);

    if(password.includes("Registered")) {
        password = pageFixture.data.password
    }else {
         password = ReusableMethods.getProperty(password)
    }
    await loginPage.enterPassword(password)
})