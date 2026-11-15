import { test, expect } from "@playwright/test";

// Test group for checkbox interactions and assertions
test.describe("Checkbox and Assertion Tests", () => {
  // Setup: Navigate to the practice website before each test
  test.beforeEach(async ({ page }) => {
    await page.goto("https://the-internet-5chk.onrender.com/");

    // Verify the page has loaded with the correct title
    await expect(page).toHaveTitle("Practice");

    // Also verify using JavaScript page.title() method
    expect(await page.title()).toBe("Practice");
  });

  // Test: Check both checkboxes and verify they are checked using assertions
  test("Verify checkboxs are checked", async ({ page }) => {
    // Click on "Checkboxes" link to navigate to the checkboxes section
    await page.getByText("Checkboxes").click();
    
    // Locate the first checkbox by its ID
    let firstCheckbox = page.locator("#box1");
    // Locate the second checkbox by its ID
    let secondCheckbox = page.locator("#box2");

    // Check both checkboxes
    await firstCheckbox.check();
    await secondCheckbox.check();

    // Verify both checkboxes are checked using Playwright expect assertions
    await expect(firstCheckbox).toBeChecked();
    await expect(secondCheckbox).toBeChecked();

    // Also verify using JavaScript isChecked() method (alternative approach)
    expect(await firstCheckbox.isChecked()).toBeTruthy();
    expect(await secondCheckbox.isChecked()).toBeTruthy();
  });

  // Test: Uncheck both checkboxes and verify they are unchecked using assertions
  test("Verify checkboxs are unchecked", async ({ page }) => {
    // Click on "Checkboxes" link to navigate to the checkboxes section
    await page.getByText("Checkboxes").click();
    
    // Locate the first checkbox by its ID
    let firstCheckbox = page.locator("#box1");
    // Locate the second checkbox by its ID
    let secondCheckbox = page.locator("#box2");

    // Uncheck both checkboxes
    await firstCheckbox.uncheck();
    await secondCheckbox.uncheck();

    // Verify both checkboxes are unchecked using Playwright expect assertions
    await expect(firstCheckbox).not.toBeChecked();
    await expect(secondCheckbox).not.toBeChecked();

    // Also verify using JavaScript isChecked() method (alternative approach)
    expect(await firstCheckbox.isChecked()).toBeFalsy();
    expect(await secondCheckbox.isChecked()).toBeFalsy();
  });

  // Test: Verify text content using both Playwright and JavaScript methods
  test("Verify text of the element", async ({ page }) => {
    // Locate the header element with class 'h1y'
    let headerElement = page.locator(".h1y");

    // Verify the text using Playwright's toHaveText assertion
    await expect(headerElement).toHaveText("Test Automation Practice");

    // Extract the text using JavaScript innerText() method
    let actualText = await headerElement.innerText();

    // Verify the extracted text matches expected value
    expect(actualText).toEqual("Test Automation Practice");
  });
});
