import { test, expect } from '@playwright/test';

let baseURL = 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login';

test.beforeEach(async ({ page }) => {
  await page.goto(baseURL);
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.locator('button[type="submit"]').click();
});

test.describe('Login Page Tests', () => {

  test('Valid user credentials', async ({ page }) => {
    await expect(page.locator('.oxd-text--h6.oxd-topbar-header-breadcrumb-module')).toBeVisible();
    await expect(page).toHaveTitle('OrangeHRM');
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
  });

  test('Validate Admin', async ({ page }) => {
    await page.locator('.oxd-main-menu-item').filter({ hasText: 'Admin' }).click();
    await expect(page).toHaveURL('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
  });

  test.skip('Validate forget password', async ({ page }) => {
    await page.goto(baseURL);
    await page.getByText('Forgot your password?').click();

    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let username = '';

    for (let i = 0; i < 8; i++) {
      username += characters.charAt(Math.floor(Math.random() * characters.length));
    }

    username += '@hotmail.com';

    await page.getByPlaceholder('Username').fill(username);
    await page.getByRole('button', { name: 'Reset Password' }).click();

    await expect(page.locator('.orangehrm-forgot-password-title'))
      .toHaveText('Reset Password link sent successfully');
  });

});