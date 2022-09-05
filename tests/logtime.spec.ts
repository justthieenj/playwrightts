import { expect, test } from "@playwright/test";
import * as account from "../account.json";
import IdentityPage from "../src/pages/identity/IdentityPage";
import LoginPage from "../src/pages/identity/LoginPage";
import InsiderPage from "../src/pages/insider/InsiderPage";
import { identityURL, insiderURL } from "../src/utils/constants";

test("Test log time insider with dropdown custom locator", async ({ page }) => {
  await test.step(`Navigate to ${identityURL}`, async () => {
    await page.goto(identityURL);
  });

  await test.step("Login", async () => {
    const loginPage = new LoginPage(page);
    await loginPage.login(account.empCode, account.password);
    const identityPage = new IdentityPage(page);
    await expect(identityPage.labelWelcome).toBeVisible();
  });

  await test.step(`Navigate to ${insiderURL}`, async () => {
    await page.goto(insiderURL);
  });

  await test.step("Log time today", async () => {
    const insiderPage = new InsiderPage(page);
    await insiderPage.openTodayLogTimeModal();
    await insiderPage.logTime("8", "1x - Normal working days", "Code", "Project X", "Check input comment with 20 characters");
  });
});
