import { expect, test } from "@playwright/test";
import IdentityPage from "../src/pages/identity/IdentityPage";
import LoginPage from "../src/pages/identity/LoginPage";
import { accountData } from "../src/utils/data-reader";
import { sendResultNoti } from "../src/utils/slack";

test("Verify user can login with valid credentials", async ({ page, request }, testResult) => {
  await page.goto("https://identity.saigontechnology.vn/");

  const loginPage = new LoginPage(page);
  await loginPage.login(accountData);
  const identityPage = new IdentityPage(page);
  await expect(identityPage.labelWelcome).toBeVisible();
  await sendResultNoti(request, testResult);
});
