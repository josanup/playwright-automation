import { test, expect } from "@playwright/test";

test('Window pop-up practice', async ({ page }) => {

    // creating event listener for monitoring window pop-ups
    let promisedNewPageEvent= page.waitForEvent("popup");

    await page.goto("https://the-internet-5chk.onrender.com/windows");

    await page.click("text=Click Here"); // triggers the pop-up event


    let newPage = await promisedNewPageEvent; // wait for the new page to be available
    
    await expect(newPage).toHaveTitle("New Window");
    await expect(page).toHaveTitle("Windows");


    await page.bringToFront();
    let firstWindowElement = page.getByText("Opening a new window");
    expect(firstWindowElement).toBeVisible();


    await newPage.bringToFront();
    let secondWindowElement = newPage.getByText("New Window");
    expect(secondWindowElement).toBeVisible();



});