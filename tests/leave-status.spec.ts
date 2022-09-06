import { expect, test } from "@playwright/test";
import * as fs from "fs";
import IdentityPage from "../src/pages/identity/IdentityPage";
import LoginPage from "../src/pages/identity/LoginPage";
import DashBoardPage from "../src/pages/leave/DashboardPage";
import { identityURL, leaveURL } from "../src/utils/constants";
import { accountData as account } from "../src/utils/data-reader";
import sendMessage from "../src/utils/slack";

test("Get Leave today list", async ({ page, request }) => {
  await test.step(`Navigate to ${identityURL}`, async () => {
    await page.goto(identityURL);
  });

  await test.step("Login", async () => {
    const loginPage = new LoginPage(page);
    await loginPage.login(account.empCode, account.password);
    const identityPage = new IdentityPage(page);
    await expect(identityPage.labelWelcome).toBeVisible();
  });

  await test.step(`Navigate to ${leaveURL}`, async () => {
    await page.goto(leaveURL);
  });

  let empList;
  await test.step("Get today off employees", async () => {
    const leavePage = new DashBoardPage(page);
    empList = await leavePage.getLeaveTodayList();
  });

  // save to file
  fs.writeFileSync("emp_off_today.txt", empList.toString());
  await sendMessage(request, `Employees off today:\n${empList}`);
});
