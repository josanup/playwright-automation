import { test, expect } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";

test("File downloads", async ({ page }) => {
  // create event listener for download
  let promisedDownloadEvent = page.waitForEvent("download");

  await page.goto("https://the-internet-5chk.onrender.com/download");

  await page.click("text=20261102_214316.jpg"); // triggers the download event

  let download = await promisedDownloadEvent; // wait for the download to complete

  let downloadPath = path.join(
    __dirname,
    "./downloads",
    download.suggestedFilename(),
  );
  await download.saveAs(downloadPath);

  expect(fs.existsSync(downloadPath)).toBeTruthy();
});

test("File uploads", async ({ page }) => {
  await page.goto("https://the-internet-5chk.onrender.com/upload");

  let filePath = path.join(__dirname,"./uploads", "TestUpload.txt");

  await page.waitForTimeout(3000);

  await page.setInputFiles('//input[@id="file-upload"]', filePath);

  await page.waitForTimeout(3000);

  await page.click('//input[@id="file-submit"]'); // submit the upload form

  await page.waitForTimeout(3000);

  expect(page.getByText("File Uploaded!")).toBeVisible();

});
