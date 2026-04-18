import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import LoginPage from '../../pages/LoginPage'
import { pageFixture } from '../../../src/utils/pageFixtures';
import { RandomDataUtil } from '../../../src/utils/randomDataGenerator';
import { RegistrationPage } from '../../pages/RegistrationPage';
import { ReusableMethods } from '../../../src/utils/reusableMethods';

let registrationPage: RegistrationPage
let loginPage: LoginPage

Given('I enter below fields in user registration Page', async function (dataTable: DataTable) {
    registrationPage = new RegistrationPage(pageFixture.page)
    loginPage = new LoginPage(pageFixture.page)

    let password = RandomDataUtil.getPassword()
    const data = dataTable.hashes()

    for (const row of data) {
        for (const field in row) {
            switch (field) {
                case "First Name":
                    await registrationPage.enterFirstName(RandomDataUtil.getFirstName())
                    break;
                case "Last Name":
                    await registrationPage.enterLastName(RandomDataUtil.getLastName())
                    break;
                case "Email":
                    await registrationPage.enterEmail(RandomDataUtil.getEmail())
                    break;
                case "Phone Number":
                    await registrationPage.enterPhoneNumber(RandomDataUtil.getPhoneNumber())
                    break;
                case "Occupation":
                    await registrationPage.enterOccupation("Doctor")
                    break;
                case "Gender":
                    await registrationPage.checkGender('Female')
                    break;
                case "Password":
                    await registrationPage.enterPassword(password)
                    break;
                case "Confirm Password":
                    await registrationPage.enterConfirmPassword(password)
                    break;
                case "18 year older":
                    await registrationPage.check18YearOld()
                    break;
                default:
                    throw new Error('unsupported field')
            }
        }
    }
})

Given('Verify success message after registration', async function () {
    registrationPage = new RegistrationPage(pageFixture.page)
    loginPage = new LoginPage(pageFixture.page);
    await registrationPage.verifySuccessMessage(ReusableMethods.getProperty("REGISTRATIONSUCCESSMESSAGE"))
})