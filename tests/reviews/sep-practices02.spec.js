import { expect, test } from "@playwright/test";

import { CommonUI } from "./CommonUI";

import { faker } from "@faker-js/faker";

test.use({ headless: false });

test.describe("Payment plan test cases @payment-plan-step", () => {
  test.beforeEach(async ({ page }) => {
    await CommonUI.login(page);
    await CommonUI.completeStartApplicationStep(page, faker.person.firstName(), faker.person.lastName(), faker.internet.email(), faker.string.numeric(10));
  });


  test("Verify that Step 2 stepper is blue and Step 1 stepper is green.", async ({page}) => {
    const startApplicationStepper = page
      .locator(".step")
      .filter({ hasText: "Start Application" })
      .locator(".step-circle");
    const paymentPlanStepper = page
      .locator(".step")
      .filter({ hasText: "Payment Plan" })
      .locator(".step-circle");

    await expect(startApplicationStepper).toHaveCSS("background-color", "rgb(172, 245, 138)",
    );
    await expect(paymentPlanStepper).toHaveCSS("background-color", "rgb(1, 201, 255)",
    );
  });


  test("Verify that the Next button is disabled by default.", async ({page}) => {
    const nextButton = page.getByRole("button", { name: "Next", exact: true });
    await expect(nextButton).toBeDisabled();

  });


  test("Verify that the Next button becomes enabled when a payment plan is selected.", async ({ page }) => {
    const upfrontPaymentPlan = page.getByRole("button", { name: "Upfront" });
    const nextButton = page.getByRole("button", { name: "Next", exact: true });

    await upfrontPaymentPlan.click();
    await expect(nextButton).toBeVisible();
    await expect(nextButton).toBeEnabled();
  });


  test("Verify Clicking the active next button will change the stepper 2 color to green", async ({page}) => {
    const installmentPaymentPlan = page.getByRole("button", {name: "5 Installments"});
    const nextButton = page.getByRole("button", { name: "Next", exact: true });

    await installmentPaymentPlan.click();
    await expect(nextButton).toBeVisible();
    await expect(nextButton).toBeEnabled();
    await nextButton.click();

    const paymentPlanStepper = page
      .locator(".step")
      .filter({ hasText: "Payment Plan" })
      .locator(".step-circle");
    await expect(paymentPlanStepper).toHaveCSS("background-color", "rgb(172, 245, 138)");
   
    
  });
}); 