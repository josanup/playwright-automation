// Test group for handling arrays of elements
import { test, expect } from "@playwright/test";

test.describe("Test Group", () => {

    let elements;
    
  // Hook: Runs before each test case
  test.beforeEach(async ({ page }) => {
    // Navigate to the test website
    await page.goto("https://the-internet-5chk.onrender.com/");
    // Locate all link elements within the unordered list and convert to an array
    elements = await page.locator("//ul[@class='list-group']//a").all();
  });
  
  test("Verify that there are exactly 50 link elements within the <ul> tag", async ({page,}) => {
    // Assert that the total count of elements matches exactly 50
    expect(elements.length).toBe(50);

    // Alternative assertion (commented out): verify there are more than 20 elements
    // expect(elements.length).toBeGreaterThan(20);
    
  });

  test("Verify that each of the 50 link elements within the <ul> tag is visible & clickable", async ({page,}) => {
    // Iterate through each element in the array
    for (let element of elements) {
      // Assert that the element is visible on the page
      await expect(element).toBeVisible();
      // Alternative approach (commented out): verify visibility using isVisible() method
      // expect(await element.isVisible()).toBeTruthy();

      // Assert that the element is enabled (clickable)
      await expect(element).toBeEnabled();
      // Alternative approach (commented out): verify enabled state using isEnabled() method
      // expect(await element.isEnabled()).toBeTruthy();
    }
  });

  test("Verify that each of the 50 link elements within the <ul> tag has a href attribute", async ({page,}) => {
    // Iterate through each element in the array
    for (let element of elements) {
      // Assert that the element has an href attribute
      await expect(element).toHaveAttribute("href");
      // Log the href value of each element to the console for verification
      console.log(await element.getAttribute("href"));
    }
  });
});


/*
 1. Verify that there are exactly 50 link elements within the <ul> tag.
 
 2. Verify that each of the 50 link elements within the <ul> tag is visible & clickable.
 
 3. Verify that each of the 50 link elements within the <ul> tag has a href attribute.
*/ 

