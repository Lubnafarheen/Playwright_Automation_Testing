import { expect, test } from '@playwright/test';

test('handle alerts test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.on('dialog',async dialog =>{
    expect(dialog.type()).toBe('alert');
    expect(dialog.message()).toBe('I am a JS Alert');
    await dialog.accept();
  })
  await page.click('button[onclick="jsAlert()"]');
    await page.waitForTimeout(5000);
});

test('handle alerts with OK and Cancel test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.on('dialog',async dialog =>{
    expect(dialog.type()).toBe('confirm');
    expect(dialog.message()).toBe('I am a JS Confirm');
    //await dialog.accept(); Accept the confirm alert
    await dialog.dismiss();// Cancel the confirm alert
  })
  await page.click('button[onclick="jsConfirm()"]');
});

test('handle alerts with Prompt test', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/javascript_alerts');

  page.on('dialog',async dialog =>{
    expect(dialog.type()).toBe('prompt');
    expect(dialog.message()).toBe('I am a JS prompt');
    expect(dialog.defaultValue()).toBe('');
    await dialog.accept('demo user'); //Accept the confirm alert
    //await dialog.dismiss();// Cancel the confirm alert
  })
  await page.click('button[onclick="jsPrompt()"]');
  await expect(page.locator('#result')).toHaveText('You entered: demo user');
});
