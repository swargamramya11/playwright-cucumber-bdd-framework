import fs from 'fs';
import { execSync } from 'child_process';

export class AllureReport {
    async deleteAllureResults() {
        if (fs.existsSync('reports/allure-results')) {
            fs.rmSync('test-results/allure/allure-results', { recursive: true, force: true });
        }
    }

    async generateAllureReport() {
        console.log("Generating Allure Report...");

        execSync(
            'npx allure generate test-results/allure/allure-results -o test-results/allure/allure-report --clean --single-file',
            { stdio: 'inherit' }
        );

        console.log("Allure Report Generated!");
    }
}