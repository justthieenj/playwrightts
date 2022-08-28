import { test, expect } from "@playwright/test";
import LoginPage from "../src/pages/identity/LoginPage";
import IdentityPage from "../src/pages/identity/IdentityPage";
import * as account from "../account.json";
import { identityURL, leaveURL } from "../src/utils/constants";
import DashBoardPage from "../src/pages/leave/DashboardPage";
import * as fs from "fs";

test("Get Leave today list", async ({ page, request }) => {
  await page.goto(identityURL);

  const loginPage = new LoginPage(page);
  await loginPage.login(account.empCode, account.password);
  const identityPage = new IdentityPage(page);
  await expect(identityPage.labelWelcome).toBeVisible();
  await page.goto(leaveURL);
  const leavePage = new DashBoardPage(page, expect);
  const a = await leavePage.getLeaveTodayList();
  // save to file
  fs.writeFileSync("emp_off_today.txt", a.toString());
  // send notification to slack
  // await request.post(
  //   "slackWebHookURL",
  //   {
  //     data: {
  //       text: `Employees request off today (${a.length}):\n${a.toString()}`,
  //     },
  //   }
  // );
});
