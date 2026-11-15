import { test, expect } from "@playwright/test";

test("Bypass authentication by embedding credentials in URL", async ({ page }) => {
    // http://username:password@hostname/path
    await page.goto("https://admin:admin@the-internet-5chk.onrender.com/basic_auth");
    await page.waitForTimeout(3000);

  });


test("Bypass authentication by encoding the credentials base64 format", async ({ page }) => {
  
    let encodedCredentials = Buffer.from("admin:admin").toString("base64");

    await page.setExtraHTTPHeaders({
        "Authorization": `Basic ${encodedCredentials}`
    });
    await page.goto("https://the-internet-5chk.onrender.com/basic_auth");
    await page.waitForTimeout(3000);
});
