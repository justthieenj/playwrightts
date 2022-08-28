import { test, expect } from "@playwright/test";
import LoginPage from "../src/pages/identity/LoginPage";
import IdentityPage from "../src/pages/identity/IdentityPage";
import * as account from "./../account.json";
import { CustomLocator, DropdownLocator } from "../src/utils/custom-locator";
import { identityURL, insiderURL } from "../src/utils/constants";

test("Test log time insider with dropdown custom locator", async ({ page }) => {
  await page.goto(identityURL);
  const loginPage = new LoginPage(page);
  await loginPage.login(account.empCode, account.password);
  const identityPage = new IdentityPage(page);
  await expect(identityPage.labelWelcome).toBeVisible();

  await page.goto(insiderURL);
  const today = new Date().toISOString().split("T")[0];
  const cellCalendar = new CustomLocator(page, "thead>tr>td[data-date='%s'] span");
  const todayCell = await cellCalendar.setDynamic(today);
  await todayCell.click();

  // log time popup
  const drpHourRate = new DropdownLocator(page, "[for='hour-rate']+insider-form-dropdown span");
  await drpHourRate.select("1x - Normal working days");
  const drpActivity = new DropdownLocator(page, "[for='activity']+insider-form-dropdown span");
  await drpActivity.select("Code");
  await expect(page.locator(".header__title")).toHaveText("Log Time123213");
});
