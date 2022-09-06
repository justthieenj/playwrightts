import { expect, test } from "@playwright/test";
import IdentityPage from "../src/pages/identity/IdentityPage";
import LoginPage from "../src/pages/identity/LoginPage";
import { accountData as account } from "../src/utils/data-reader";

test("Test login sts insider", async ({ page }) => {
  await page.goto("https://identity.saigontechnology.vn/");

  const loginPage = new LoginPage(page);
  await loginPage.login(account.empCode, account.password);
  const identityPage = new IdentityPage(page);
  await expect(identityPage.labelWelcome).toBeVisible();
});
