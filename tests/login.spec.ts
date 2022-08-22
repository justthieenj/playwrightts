import { test, expect } from "@playwright/test";
import LoginPage from "../src/pages/LoginPage";
import IdentityPage from "../src/pages/IdentityPage";
import * as account from "./../account.json";

test("Test login sts insider", async ({ page }) => {
  await page.goto("https://identity.saigontechnology.vn/");

  const loginPage = new LoginPage(page);
  await loginPage.login(account.empCode, account.password);
  const identityPage = new IdentityPage(page);
  await expect(identityPage.labelWelcome).toBeVisible();
});
