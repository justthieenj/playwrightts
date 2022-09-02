import { test, expect } from "@playwright/test";
import LoginPage from "../src/pages/identity/LoginPage";
import IdentityPage from "../src/pages/identity/IdentityPage";
import * as account from "./../account.json";
import { CustomLocator, DropdownLocator } from "../src/utils/custom-locator";
import { identityURL, insiderURL } from "../src/utils/constants";
import InsiderPage from "../src/pages/leave/InsiderPage";

test("Test log time insider with dropdown custom locator", async ({ page }) => {
  await page.goto(identityURL);
  const loginPage = new LoginPage(page);
  await loginPage.login(account.empCode, account.password);
  const identityPage = new IdentityPage(page);
  await expect(identityPage.labelWelcome).toBeVisible();

  //redirect to Insider Page
  await page.goto(insiderURL);

  // log time popup
  const insiderPage = new InsiderPage(page)
  await insiderPage.openTodayLogTimeModal();
  await insiderPage.inputTodayLogtime("8","1x - Normal working days", "Code", "Project X", "Check input comment with 20 characters");
})