import { test, expect } from "@playwright/test";
import LoginPage from "../src/pages/identity/LoginPage";
import IdentityPage from "../src/pages/identity/IdentityPage";
import InsiderPage from "../src/pages/leave/InsiderPage";
import * as account from "./../account.json";

test("Test log time today successfully", async ({ page }) => {
  await page.goto("https://identity.saigontechnology.vn/");

  const loginPage = new LoginPage(page);
  await loginPage.login(account.empCode, account.password);
  const identityPage = new IdentityPage(page);
  await expect(identityPage.labelWelcome).toBeVisible();
  await page.goto("https://insider.saigontechnology.vn/dashboard")
  const insiderPage = new InsiderPage(page)
  await insiderPage.openTodayLogTimeModal();
  await insiderPage.inputLogTime("8", "test comment log time on August 25th");
  await expect(insiderPage.lblEvent).toHaveText("8 Project X");
});
