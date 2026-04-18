import { Page, Locator } from '@playwright/test'

export default class LoginPage {
  private readonly page: Page;
  private readonly email: Locator;
  private readonly password: Locator;
  private readonly login: Locator;

  constructor(page: Page) {
    this.page = page;
    this.password = page.locator("#userPassword");
    this.email = page.locator("#userEmail");
    this.login = page.locator('input[value="Login"]')
  }

  async enterEmail(enterEmail: string) {
    await this.email.fill(enterEmail)
  }

  async enterPassword(enterPassword: string) {
    await this.password.fill(enterPassword)
  }

  async clickLogin() {
    await this.login.click()
  }
}