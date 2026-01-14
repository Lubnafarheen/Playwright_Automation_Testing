import { test, expect } from '@playwright/test';

test('Locating multiple elements', async ({page}) => {
    await page.goto('https://demoblaze.com/');
    const links = await page.locator('a').all();
    const linkTexts =await Promise.all(links.map(async link => await link.textContent()));
    console.log('Total number of links:', linkTexts.length);
    console.log('Link texts:', linkTexts);
    expect(linkTexts.length).toBeGreaterThan(0);    

    console.log('---------------------------');
    for(const link of links){
        const href = await link.getAttribute('href');
        console.log( href);
    }
    console.log('---------------------------');
    //In the locator for XPATH we use '@' for id instead of '#
    await page.waitForSelector('//div[@id="tbodyid"]//h4//a');
     const productNames = await page.$$('//div[@id="tbodyid"]//h4//a');

     for(const product of productNames){
        const name = await product.textContent();
        console.log('Product Name:', name);
     }



});