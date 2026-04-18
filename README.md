To run jenkins : java -jar jenkins.war --enable-future-java
If node_modules folder is missing run the command : npm install

//Installation
npm init playwright@latest
npm install @cucumber/cucumber
npm install --save-dev ts-node typescript
npm install xlsx
npm install csv-parse
npm install faker@5
npm install dotenv
npm install @axe-core/playwright

Run commands
Command to run with filename: $env:ENV="local";npx playwright test tests/Login.spec.ts
$env:BROWSER="chrome";$env:ENV="rsa"; npx cucumber-js --tags "@smoke"
$env:ENV="local";npm run test:run