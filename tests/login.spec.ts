import { test, expect } from "@playwright/test";
import LoginPage from "../src/pages/LoginPage";

test("Test login sts insider", async ({ page }) => {
  await page.goto("https://identity.saigontechnology.vn/");

  const loginPage = new LoginPage(page);
  await loginPage.login("empcode", "password");
});
