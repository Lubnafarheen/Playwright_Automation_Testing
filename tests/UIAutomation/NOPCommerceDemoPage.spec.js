import { test, expect } from '@playwright/test';

test('Assertion test', async ({page}) => {
    await page.goto('https://demo.nopcommerce.com/register')
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')
    await expect(page).toHaveTitle('nopCommerce demo store. Register')
    await expect(page.locator('[type="text"]')).toHaveCount(4)
    await expect(page.locator('#Newsletter')).toBeChecked(true);
})