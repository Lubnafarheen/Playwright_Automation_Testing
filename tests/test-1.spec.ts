import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).click(); 
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('listitem').filter({ hasText: 'Job' }).click();
  await page.getByRole('menuitem', { name: 'Job Titles' }).click();
  await page.getByRole('button', { name: ' Add' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('demo test');
  await page.getByRole('textbox', { name: 'Type description here' }).click();
  await page.getByRole('textbox', { name: 'Type description here' }).fill('testing to upload files');
  await page.getByRole('textbox', { name: 'Add note' }).click();
  await page.getByRole('textbox', { name: 'Add note' }).fill('done');
  await page.getByRole('button', { name: 'Save' }).click();
});