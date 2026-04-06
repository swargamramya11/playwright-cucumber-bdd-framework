import { Page, expect, Locator } from '@playwright/test'
import { pageFixture } from '../hooks/pageFixtures';

export class RegistrationPage {
    private readonly page: Page;
    private readonly registerHere: Locator;
    private readonly firstName: Locator;
    private readonly lastName: Locator;
    private readonly email: Locator;
    private readonly phoneNumber: Locator;
    private readonly occupation: Locator;
    private readonly password: Locator;
    private readonly confirmPassword: Locator;
    private readonly i18yearsOldCheckBox: Locator;
    private readonly register: Locator;
    private readonly successMessage: Locator;
    private readonly login: Locator;

    constructor(page: Page,) {
        this.page = page

        this.registerHere = page.getByText('Register here')
        this.firstName = page.getByLabel('First Name')
        this.lastName = page.getByLabel('Last Name')
        this.email = page.getByRole('textbox', { name: 'email@example.com' })
        this.phoneNumber = page.getByRole('textbox', { name: 'enter your number' })
        this.occupation = page.getByRole('combobox')
        this.password = page.locator("[id='userPassword']")
        this.confirmPassword = page.getByLabel('Confirm Password')
        this.i18yearsOldCheckBox = page.getByRole('checkbox')
        this.register = page.locator("[value='Register']")
        this.successMessage = page.locator("[class='login-section-wrapper'] h1")
        this.login = page.locator("button[class='btn btn-primary']")
    }

    async clickOnRegisterHere() {
        await this.registerHere.click()
    }

    async enterFirstName(firstName: string) {
        await this.firstName.fill(firstName)
    }

    async enterLastName(lastName: string) {
        await this.lastName.fill(lastName)
    }

    async enterEmail(email: string) {
        await this.email.fill(email)
        pageFixture.data.email = email
    }

    async enterPhoneNumber(phoneNumber: string) {
        await this.phoneNumber.fill(phoneNumber)
    }

    async enterOccupation(occupation: string) {
        await this.occupation.selectOption(occupation)
    }

    async checkGender(gender: string) {
        await this.page.locator("input[value='" + gender + "']").check()
    }

    async enterPassword(password: string) {
        await this.password.fill(password)
        pageFixture.data.password = password
    }

    async enterConfirmPassword(confirmPassword: string) {
        await this.confirmPassword.fill(confirmPassword)
    }

    async check18YearOld() {
        await this.i18yearsOldCheckBox.check()
    }

    async clickRegister() {
        await this.register.click()
    }

    async verifySuccessMessage(message: string) {
        await this.successMessage.click()
        await expect(this.successMessage).toHaveText(message)
    }

    async clickLogin() {
        await this.login.click()
    }
}