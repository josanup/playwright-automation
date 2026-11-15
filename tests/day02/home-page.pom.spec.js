import { expect, test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage.js';

test('Home page POM locators are unique', async ({ page }) => {
  const homePage = new HomePage(page);

  await homePage.goto();

  const locators = Object.entries(homePage).filter(([, value]) => typeof value?.count === 'function');

  expect(locators).toHaveLength(55);

  const nonUniqueLocators = [];

  for (const [name, locator] of locators) {
    if (await locator.count() !== 1) nonUniqueLocators.push(name);
  }

  expect(nonUniqueLocators).toEqual([]);
});
