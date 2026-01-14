import { test, expect } from '@playwright/test';

test('Dropdown handling with different locators', async ({page}) => {
    await page.goto('https://testautomationpractice.blogspot.com/');
    await page.locator('#country').selectOption('France');
    await page.locator('#country').selectOption({label:'China'});
    await page.locator('#country').selectOption({index: 3});
    await page.locator('#country').selectOption({value:'india'})
//To check number of options- Approach 1
    const dropDownLocator = await page.locator('#country option');
    await expect(dropDownLocator).toHaveCount(10);
//To check number of options- Approach 2
    const demoOption = await page.$$('#country option');
    console.log("Number of option in dropdown", demoOption.length);
    await expect(demoOption.length).toBe(10);

//To validate specific country in the dropdown
let status;
for(const demo of demoOption){
    console.log('Country-', await demo.textContent());
    let value = await demo.textContent();
    if(value.includes('Germany')){
        status = true;
        break;
    }
}
expect(status).toBeTruthy();

     
})