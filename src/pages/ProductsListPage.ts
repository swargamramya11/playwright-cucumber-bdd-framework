import { Page, expect, Locator } from '@playwright/test'

export class ProductsListPage {
  private readonly page: Page;
  private readonly products: Locator;

  constructor(page: Page) {
    this.page = page
    this.products = page.locator('.card-body b')
  }

  async getProductsList() {
    await this.page.waitForLoadState('networkidle')
    const productsList: any[] = await this.products.allInnerTexts()
    let data = productsList.map(p=>({ProductName:p}))
    return data
  }
}