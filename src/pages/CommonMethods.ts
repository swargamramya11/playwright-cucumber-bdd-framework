import { Page, expect } from '@playwright/test'

export class CommonMethods {
  private readonly page: Page;

  constructor(page: Page) {
    this.page = page
  }

  async verifyErrorMessage(fieldName: string, expectedErrorMessage: string) {
    expect(this.page.locator("//label[text()='" + fieldName + "']//parent::div//div//div")).toHaveText(expectedErrorMessage)
  }
}