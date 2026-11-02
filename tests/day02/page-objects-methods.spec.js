import { test } from "@playwright/test";

test("Getting the title of the page", async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/");

    // pause for 3 seconds
    // await page.waitForTimeout(3000);

    let actualTitle = await page.title(); // get the title of the page

    console.log(actualTitle);
});

test("Getting the current URL of the page", async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/");

    let currentURL = page.url(); // get the current URL of the page

    console.log(currentURL);

});

test("Set the window size", async ({ page }) => {

    await page.goto("https://the-internet-5chk.onrender.com/");

    // set the viewport size to 1850x1000
    //await page.setViewportSize({ width: 1850, height: 1000 });

   await page.waitForTimeout(3000);

});






