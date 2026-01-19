#Reporting

Official page - https://www.npmjs.com/package/allure-playwright

Generate Allure Report after the tests are executed:

npx playwright test

allure generate ./allure-results -o ./allure-report

allure generate ./allure-results -o ./allure-report --clean

Open the generated report:

allure open ./allure-report

========================================================

