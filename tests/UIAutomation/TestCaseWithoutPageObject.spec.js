const {test, chromium} = require('@playwright/test');

test('Without using page', async()=>{
    const browser = await chromium.launch({headless: false});
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto('https://www.dummyticket.com/dummy-ticket-for-visa-applications/');

})