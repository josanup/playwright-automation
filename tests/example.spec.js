// @ts-check
import { test, expect } from '@playwright/test';

// Test: Verify the Playwright documentation page has the correct title
test('has title', async ({ page }) => {
  // Navigate to the Playwright documentation website
  await page.goto('https://playwright.dev/');

  // Assert that the page title contains "Playwright"
  await expect(page).toHaveTitle(/Playwright/);
});

// Test: Verify the "Get started" link is clickable and navigates to Installation page
test('get started link', async ({ page }) => {
  // Navigate to the Playwright documentation website
  await page.goto('https://playwright.dev/');

  // Click the "Get started" link
  await page.getByRole('link', { name: 'Get started' }).click();

  // Assert that the Installation heading is visible on the new page
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
