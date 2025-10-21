import { test, expect } from '@playwright/test';

let baseURL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

test('Valid user credentials', async ({page}) => {
    await page.goto(baseURL);
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.locator('button[type="submit"]').click();

  await expect(page.locator('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]')).toBeVisible();
  await expect(page).toHaveTitle('OrangeHRM');
  await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
})

test('InValid user credentials', async ({page}) => {
    await page.goto(baseURL);
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin12');
  await page.locator('button[type="submit"]').click();

  await expect(page.locator('[class="oxd-text oxd-text--p oxd-alert-content-text"]')).toContainText('Invalid credentials');
  
})

test.only('Validate forget password', async ({page}) => {
   await page.goto(baseURL);
    await page.getByText('Forgot your password?').click();

    let characters= 'abcdefghijklmnopqrstuvwxyz0123456789';
    let username ='';

    for(let i=0; i<8; i++){
        username = username+ characters.charAt(Math.random()*characters.length);
        }
        username = username+"@hotmail.com"
    await page.getByPlaceholder('Username').fill(username);
    await page.getByRole('button', {name :' Reset Password '}).click();
    await expect(page.locator('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]')).toHaveText('Reset Password link sent successfully');
    
})