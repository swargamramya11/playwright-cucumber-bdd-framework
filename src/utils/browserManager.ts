import { LaunchOptions, chromium, firefox, webkit } from "@playwright/test";

const options: LaunchOptions = {
    headless: !true
}

export const invokeBrowser = () => {
    const browserType = process.env.BROWSER || "chrome";
    switch (browserType) {
        case "chrome":
            console.log("Launched chrome")
            return chromium.launch(options);
        case "firefox":
            console.log("Launched firefox")
            return firefox.launch(options);
        case "webkit":
            console.log("Launched webkit")
            return webkit.launch(options);
        default:
            throw new Error("Please set the proper browser!")
    }
}