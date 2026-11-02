import { test } from '@playwright/test';

test.describe('', () => {
  //create beforeEach to navigate to https://the-internet-5chk.onrender.com/
  test.beforeEach(async ({ page }) => {
  await page.goto("https://the-internet-5chk.onrender.com/");
  });

  test("innerText(): retrieves the visible text", async ({ page }) => {
    let headerElement = page.locator("//span[@class='h1y']");

    let actualText = await headerElement.innerText();
    console.log(actualText);
  });

  test("inputValue(): only works with <input>, <textarea>, <select>, retrieves the input value", async ({ page }) => {
    let inputsLink = page.getByText("Inputs");
    await inputsLink.click();

    let inputBox = page.locator("//input[@type='number']");

    await page.waitForTimeout(3000);

    await inputBox.fill("123");

    await page.waitForTimeout(3000);

    let actualInput = await inputBox.inputValue();

    console.log(actualInput);
  });

  test('getAttribute(): retrieves the value of the specified attribute', async ({ page }) => {
    let abTestingLink = page.locator("text='A/B Testing'");
    let hrefValue = await abTestingLink.getAttribute("href");
    console.log(hrefValue);
  });
});