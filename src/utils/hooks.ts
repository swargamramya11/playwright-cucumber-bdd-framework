import { Before, After, BeforeAll, AfterAll, setDefaultTimeout, Status, AfterStep, BeforeStep } from '@cucumber/cucumber';
import { envLoader } from './envLoader';
import { CustomWorld } from '../utils/world';

setDefaultTimeout(10000)

BeforeAll(async () => {
  console.log("********* Before All **********")
  // allureReport.deleteAllureResults()
})

BeforeStep(async function () {
  console.log("********* Before Step **********")
})

Before(async function(this:CustomWorld) {
  console.log("********* Before **********")
  await this.init()
  await this.page.goto(envLoader.URL)
})

AfterStep(async function (this:CustomWorld,{ pickle, result }) {
  console.log("********* After Step **********")
  let img = await this.page.screenshot({ path: "./test-results/screenshots/" + pickle.name, type: "png" })
  await this.attach(img, "image/png")
})

After(async function (this:CustomWorld,{ pickle, result }) {
  console.log("********* After **********")
  if (result?.status == Status.FAILED) {
    let img = await this.page.screenshot({ path: "./test-results/screenshots/" + pickle.name, type: "png" })
    await this.attach(img, "image/png")
  }

  await this.page.close()
  await this.browser.close()
})

AfterAll(async () => {
  console.log("********* After All **********")
  // allureReport.generateAllureReport()
})