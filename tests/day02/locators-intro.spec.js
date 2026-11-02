import {test} from "@playwright/test";

test("Simple google test", async ({page}) => {
    // test codes
    await page.goto("https://www.google.com");

    await page.waitForTimeout(3000);

    // locate the search box
    let searchBox = page.locator("textarea[name='q']");

    await searchBox.fill("CYDEO");

    await page.waitForTimeout(3000);

    await searchBox.press("Enter");

    await page.waitForTimeout(3000);

});

/*
<textarea jsname="yZiJbe" class="gLFyf" aria-controls="Alh6id" aria-owns="Alh6id"
 autofocus="" maxlength="2048" aria-label="Search" placeholder=""
 aria-autocomplete="both" aria-expanded="true" aria-haspopup="false"
 autocapitalize="off" autocomplete="off" autocorrect="off" id="ti6dpd" name="q"
 role="combobox" rows="1" spellcheck="false" 
 data-ved="2ahUKEwiH8NiKteKXAxWckyYFHaDCMSgQ39UDegQIABAR" aria-activedescendant="" 
 style=""></textarea>
*/

//textarea[@class = 'gLFyf']