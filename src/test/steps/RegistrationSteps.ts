import { Given, When, Then, DataTable } from '@cucumber/cucumber';
import { CustomWorld } from '../../utils/world';
import { RandomDataUtil } from '../../../src/utils/randomDataGenerator';
import { ReusableMethods } from '../../../src/utils/reusableMethods';

Given('I enter below fields in user registration Page', async function (this: CustomWorld, dataTable: DataTable) {
    let password = RandomDataUtil.getPassword()
    this.testdata.password = password
    const data = dataTable.hashes()

    for (const row of data) {
        for (const field in row) {
            switch (field) {
                case "First Name":
                    await this.registrationPage.enterFirstName(RandomDataUtil.getFirstName())
                    break;
                case "Last Name":
                    await this.registrationPage.enterLastName(RandomDataUtil.getLastName())
                    break;
                case "Email":
                    const email = RandomDataUtil.getEmail()
                    await this.registrationPage.enterEmail(email)
                    this.testdata.email = email
                    break;
                case "Phone Number":
                    await this.registrationPage.enterPhoneNumber(RandomDataUtil.getPhoneNumber())
                    break;
                case "Occupation":
                    await this.registrationPage.enterOccupation("Doctor")
                    break;
                case "Gender":
                    await this.registrationPage.checkGender('Female')
                    break;
                case "Password":
                    await this.registrationPage.enterPassword(password)
                    break;
                case "Confirm Password":
                    await this.registrationPage.enterConfirmPassword(password)
                    break;
                case "18 year older":
                    await this.registrationPage.check18YearOld()
                    break;
                default:
                    throw new Error('unsupported field')
            }
        }
    }
})

Given('Verify success message after registration', async function () {
    await this.registrationPage.verifySuccessMessage(ReusableMethods.getProperty("REGISTRATIONSUCCESSMESSAGE"))
})