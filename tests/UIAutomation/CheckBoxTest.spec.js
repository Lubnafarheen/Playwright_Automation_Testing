import { test, expect } from '@playwright/test';

test('Dropdown handling with different locators', async ({ page }) => {
  await page.goto('https://testautomationpractice.blogspot.com/');

  // Checkbox
  const checkBox = page.locator('input[id="sunday"]');
  await checkBox.check();
  await expect(checkBox).toBeChecked();

  await checkBox.uncheck();
  await expect(checkBox).not.toBeChecked();

  // Multiple checkboxes
  const daysOfWeek = ['#monday', '#tuesday', '#wednesday', '#thursday', '#friday', '#saturday'];
  for (const day of daysOfWeek) {
    const cb = page.locator(day);
    await cb.check();
    await expect(cb).toBeChecked();
  }

  for (const day of daysOfWeek) {
    const cb = page.locator(day);
    await cb.uncheck();
    await expect(cb).not.toBeChecked();
  }

  // Radio buttons
  const radioButtonMale = page.locator('input[id="male"]');
  const radioButtonFemale = page.locator('input[id="female"]');

  await radioButtonMale.check();
  await expect(radioButtonMale).toBeChecked();
  await expect(radioButtonFemale).not.toBeChecked();

  await radioButtonFemale.check();
  await expect(radioButtonFemale).toBeChecked();
  await expect(radioButtonMale).not.toBeChecked();
});