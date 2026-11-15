import { test } from "@playwright/test";

test.describe("Test Group", () => {
  // create beforeEach hook to navigate to https://the-internet-5chk.onrender.com/
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/");
    //await page.waitForTimeout(3000);
  });

  test("Left Click", async ({ page }) => {
    await page.click("text = A/B Testing");
  });

  test("Right Click", async ({ page }) => {
    await page.click("text= A/B Testing", {button: "right"});
  });

  test("Hover", async ({ page }) => {
    await page.click("text = Hovers");
    
   // await page.waitForTimeout(3000);
   // await page.hover("//img[@alt='User Avatar']");

   let elements = await page.locator("//img[@alt='User Avatar']").all();

   for (let element of elements) {
     //await page.waitForTimeout(1000);
     await element.hover();
   }

  });

  test("Mouse wheel scrolling", async ({ page }) => {
    page.mouse.wheel(0, 4000);
    
  });

  test("Scrolling to specific element", async ({ page }) => {

    let inputsLink = page.getByText("Inputs");
    await inputsLink.scrollIntoViewIfNeeded();
    //await page.waitForTimeout(3000);
    await inputsLink.click();

  });

  test("Drag and Drop", async ({ page }) => {
    await page.click("text = Drag and Drop");
    //await page.waitForTimeout(3000);
    await page.dragAndDrop("#column-a", "#column-b");
    // let source = page.locator("#column-a");
    // let target = page.locator("#column-b");
    // await source.dragTo(target);

  });
});
