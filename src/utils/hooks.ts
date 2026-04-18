import { Before, After, BeforeAll, AfterAll, setDefaultTimeout, Status, AfterStep, BeforeStep } from '@cucumber/cucumber';
import { Browser, BrowserContext } from "@playwright/test"
import { pageFixture } from '../../src/utils/pageFixtures';
import { config } from './envLoader';
import { invokeBrowser } from "./browserManager";
import { AllureReport } from "./allureReport";

let browser: Browser
let context: BrowserContext
let allureReport = new AllureReport()

BeforeAll(async () => {
  console.log("********* Before All **********")
  // allureReport.deleteAllureResults()
})

BeforeStep(async function () {
  console.log("********* Before Step **********")
})

Before(async () => {
  console.log("********* Before **********")
  browser = await invokeBrowser();
  context = await browser.newContext();
  const page = await context.newPage();
  pageFixture.page = page
  await pageFixture.page.goto(config.URL)
})

AfterStep(async function ({ pickle, result }) {
  console.log("********* After Step **********")
  let img = await pageFixture.page.screenshot({ path: "./test-results/screenshots/" + pickle.name, type: "png" })
  await this.attach(img, "image/png")
})

After(async function ({ pickle, result }) {
  console.log("********* After **********")
  if (result?.status == Status.FAILED) {
    let img = await pageFixture.page.screenshot({ path: "./test-results/screenshots/" + pickle.name, type: "png" })
    await this.attach(img, "image/png")
  }

  await pageFixture.page.close()
  await context.close()
})

AfterAll(async () => {
  console.log("********* After All **********")
  await browser.close()
  // allureReport.generateAllureReport()
})