import { test, expect } from "@playwright/test";

test("Web Table Practice", async ({ page }) => {
  await page.goto("https://the-internet-5chk.onrender.com/web-tables");

  let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");

  let rows = await table.locator("//tr").all();

  let columns = await table.locator("//th").all();

  let cells = await table.locator("//td").all();

  expect(rows.length).toBe(9);
  expect(columns.length).toBe(13);
  expect(cells.length).toBe(104);

  for (let cell of cells) {
    console.log(await cell.textContent());
  }
});

test("Web Table Practice2", async ({ page }) => {
  await page.goto("https://the-internet-5chk.onrender.com/web-tables");

  let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");

  let rows = await table.locator("//tr").all();

  // create a loop that can print each cell's data of each row.
  for (let row of rows) {
    let cells = await row.locator("//td").all();
    for (let cell of cells.slice(1, -1)) {
      console.log(await cell.textContent());
    }
    console.log("---------------------------------------");
  }
});

test("Web Table Practice3", async ({ page }) => {
  await page.goto("https://the-internet-5chk.onrender.com/web-tables");

  let table = page.locator("//table[@id='ctl00_MainContent_orderGrid']");

  let checkboxes = await table.locator("//input[@type='checkbox']").all();

  for (let checkbox of checkboxes) {
    await checkbox.check();
    expect(await checkbox.isChecked()).toBe(true);
    console.log("Checkbox checked successfully");
  }
});
