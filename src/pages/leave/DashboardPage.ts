import { Locator, Page, Expect } from "@playwright/test";
import { empName } from "../../utils/constants";
import DLocator from "../../utils/dynamic-locator";


class DashBoardPage {
  readonly page: Page;
  readonly expect: Expect;
  readonly labelLeaveBalanceStatus: Locator;
  readonly cellsLeaveToday: DLocator;
  readonly days: Locator;

  constructor(page: Page, expect: Expect) {
    this.page = page;
    this.expect = expect;
    this.labelLeaveBalanceStatus = page.locator("text=My Leave Balance Status");
    this.cellsLeaveToday = new DLocator(
      page,
      "//td[@data-date='%s']//ancestor::thead/following-sibling::tbody//td[@class='fc-event-container'][count(//thead//td[@data-date='%s']/preceding-sibling::td)]//span"
    );
    this.days = page.locator("//th[contains(@class,'fc-day-header')]/span");
  }

  async getLeaveTodayList(): Promise<string[]> {
    // const today = new Date().toISOString().split("T")[0];
    const today = "2022-08-26"; // friday
    const elementLeaveToday = await this.cellsLeaveToday.setDynamic(today, today);
    await this.expect(elementLeaveToday).toContainText(empName);
    return await elementLeaveToday.allTextContents();
  }
}

export default DashBoardPage;
