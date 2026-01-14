import { test } from '@playwright/test';

test('iframe demo test', async ({ page }) => {
await page.goto('https://ui.vision/demo/webtest/frames/');

const allFrames = page.frames();
console.log(`Total number of frames: ${allFrames.length}`);

const frame1 = await page.frame({url: "https://ui.vision/demo/webtest/frames/frame_1.html"});
await frame1.fill('[name="mytext1"]', 'Lubna Farheen');
await page.waitForTimeout(5000);

const frame2 = await page.frameLocator('frame[src="frame_2.html"]').locator('[name="mytext2"]');
await frame2.fill('Hello from frame 2');
await page.waitForTimeout(5000);

const frame3 = await page.frameLocator('frame[src="frame_3.html"]').locator('[name="mytext3"]');
await frame3.fill('Hello from frame 3');
// ✅ Google Form iframe INSIDE frame 3
  const googleForm = frame3.frameLocator('iframe');

  // ✅ Google Forms uses textarea
  await googleForm.getByRole('heading', { name: 'Google Forms' }).waitFor();

  


const frame4 = await page.frameLocator('frame[src="frame_4.html"]').locator('[name="mytext4"]');
await frame4.fill('Hello from frame 4');
await page.waitForTimeout(5000);
});