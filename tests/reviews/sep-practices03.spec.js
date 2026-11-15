import { expect, test } from "@playwright/test";

import { CommonUI } from "./CommonUI";

import { faker } from "@faker-js/faker";

test.use({ headless: false });

test.describe("Review step test cases @review-step", () => {

  test.beforeEach(async ({ page }) => {
    await CommonUI.login(page);
    await CommonUI.completeStartApplicationStep(page, faker.person.firstName(), faker.person.lastName(), faker.internet.email(), faker.string.numeric(10));
    await CommonUI.completePaymentPlanStep(page, "5 Installments");
  });

  test("Verify that Step 1 & Step 2 steppers are green and Step 3 stepper is blue.", async ({page}) => {
    const startApplicationStepper = page
      .locator(".step")
      .filter({ hasText: "Start Application" })
      .locator(".step-circle");
    const paymentPlanStepper = page
      .locator(".step")
      .filter({ hasText: "Payment Plan" })
      .locator(".step-circle");
    const reviewStepper = page
      .locator(".step")
      .filter({ hasText: "Review" })
      .locator(".step-circle");

    await expect(startApplicationStepper).toHaveCSS("background-color","rgb(172, 245, 138)");
    await expect(paymentPlanStepper).toHaveCSS("background-color","rgb(172, 245, 138)");
    await expect(reviewStepper).toHaveCSS("background-color","rgb(1, 201, 255)");
  });

  test("Verify that the payment input fields are enabled and accept card details.", async ({page}) => {
    const paymentFrame = page.frameLocator(
      'iframe[title="Secure payment input frame"]',
    );
    const cardNumberInput = paymentFrame.getByLabel("Card number");
    const expiryDateInput = paymentFrame.getByLabel(/Expiration/);
    const cvcInput = paymentFrame.getByLabel("Security code");
    const countryDropdown = paymentFrame.getByLabel("Country");

    await expect(cardNumberInput).toBeEnabled();
    await expect(expiryDateInput).toBeEnabled();
    await expect(cvcInput).toBeEnabled();
    await expect(countryDropdown).toBeEnabled();

    await cardNumberInput.fill("4242424242424242");
    await expiryDateInput.fill("12/30");
    await cvcInput.fill("123");
    await countryDropdown.selectOption("US");
    const zipCodeInput = page
      .frameLocator('iframe[title="Secure payment input frame"]')
      .getByLabel("ZIP code");
    await expect(zipCodeInput).toBeEnabled();
    await zipCodeInput.fill("12345");
    await page.getByLabel("I have read and agree to the Terms and Conditions.").check();
    await expect(page.getByLabel("I have read and agree to the Terms and Conditions.")).toBeChecked();
    await page.getByRole("button", { name: "Pay", exact: true }).click();

    await page.waitForTimeout(5000);

  });

});
