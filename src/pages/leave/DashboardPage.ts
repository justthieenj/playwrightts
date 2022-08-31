import { Locator, Page, Expect } from "@playwright/test";
import { CustomLocator } from "../../utils/custom-locator";
import { sleep } from "../../utils/utils";


class DashBoardPage {
  readonly page: Page;
  readonly expect: Expect;
  readonly labelLeaveBalanceStatus: Locator;
  readonly cellsLeaveToday: CustomLocator;
  readonly days: Locator;

  constructor(page: Page, expect: Expect) {
    this.page = page;
    this.expect = expect;
    this.labelLeaveBalanceStatus = page.locator("text=My Leave Balance Status");
    this.cellsLeaveToday = new CustomLocator(
      page,
      "//td[@data-date='%s']//ancestor::thead/following-sibling::tbody//td[@class='fc-event-container'][count(//thead//td[@data-date='%s']/preceding-sibling::td)]//span"
    );
    this.days = page.locator("//th[contains(@class,'fc-day-header')]/span");
  }

  async getLeaveTodayList(): Promise<string[]> {
    const today = new Date().toISOString().split("T")[0];
    await this.expect(this.labelLeaveBalanceStatus).toBeVisible();
    const elementLeaveToday = await this.cellsLeaveToday.setDynamic(today, today);
    return elementLeaveToday.allTextContents();
  }
}

export default DashBoardPage;
