import { setWorldConstructor, World } from '@cucumber/cucumber';
import { Browser, Page } from '@playwright/test';
import { invokeBrowser } from '../utils/browserManager';
import LoginPage from '../pages/LoginPage';
import { RegistrationPage } from '../pages/RegistrationPage';
import { ProductsListPage } from '../pages/ProductsListPage';
import { CommonMethods } from '../pages/CommonMethods';
import { TestData } from '../utils/testData';

export class CustomWorld extends World {
    browser!: Browser;
    page!: Page;
    //Pages
    loginPage!: LoginPage;
    registrationPage!: RegistrationPage;
    productsListPage!: ProductsListPage
    commonMethods!: CommonMethods
    testdata: TestData = {}

    async init() {
        this.browser = await invokeBrowser();
        const context = await this.browser.newContext();
        this.page = await context.newPage();
        this.loginPage = new LoginPage(this.page);
        this.registrationPage = new RegistrationPage(this.page);
        this.productsListPage = new ProductsListPage(this.page);
        this.commonMethods = new CommonMethods(this.page);
    }
}

setWorldConstructor(CustomWorld);