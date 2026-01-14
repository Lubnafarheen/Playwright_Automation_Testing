import { test, expect } from '@playwright/test';

test('Testing Radio Buttons', async ({ page }) => {
    await page.goto('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
    const radioButtonLocators = ["#product_549", "#product_550", "#product_551", "#product_3186", "#product_7441"];
    for(const radioButton of radioButtonLocators){
        //Validate visibility
        if(await page.locator(radioButton).isVisible()){
            console.log(`Radio button is visible.`);
        }else{
            console.log(`Radio button is not visible.`);
        }
        //Validate enable state
        if(await page.locator(radioButton).isEnabled()){
            console.log(`Radio button is enabled.`);
        }else{
            console.log(`Radio button is not enabled.`);
        }
        //check if its selected, if not, select it
        if(await page.locator(radioButton).isChecked()){
            console.log(`Radio button is already selected.`);
        }
        else{
            console.log(`Radio button is not selected. Selecting now`);
            await page.locator(radioButton).check();
            
            //Validate if its checked now
            if(await page.locator(radioButton).isChecked()){
                console.log(`Radio button is selected successfully.`);
            }else{
                console.log(`Failed to select the radio button.`);
            }
        }
    }

    const checkSingleRadioButton = page.locator('#product_550');
    await checkSingleRadioButton.check();
    await page.waitForTimeout(5000);

    const validateTextLocator = page.locator('.woocommerce-message');
    await expect(validateTextLocator).toHaveText('"Dummy return ticket" added to your order. Complete your order below.');
})

test.only('Dropdown Test', async({page})=>{
    await page.goto('https://www.dummyticket.com/dummy-ticket-for-visa-application/');
    await page.locator('[id="select2-reasondummy-container"]').click();
    await page.locator('[class="select2-search__field"]').fill('Visa extension');
    await page.locator('[class="select2-search__field"]').press('Enter');
    await page.waitForTimeout(5000);

    //validate selected option
    const selectedOptionLocator = await page.locator('[id="select2-reasondummy-container"]').textContent();
    console.log('Selected option:', selectedOptionLocator);
    expect(selectedOptionLocator).toContain('Visa extension');

})