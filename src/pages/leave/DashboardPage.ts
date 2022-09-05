import { expect, Locator, Page } from "@playwright/test";
import { CustomLocator } from "../../utils/custom-locator";

class DashBoardPage {
  readonly page: Page;
  readonly cellsLeaveToday: CustomLocator;
  readonly days: Locator;

  constructor(page: Page) {
    this.page = page;
    this.cellsLeaveToday = new CustomLocator(
      page,
      "//td[@data-date='%s']//ancestor::thead/following-sibling::tbody//td[@class='fc-event-container'][count(//thead//td[@data-date='%s']/preceding-sibling::td)]//span",
    );
    this.days = page.locator("//th[contains(@class,'fc-day-header')]/span");
  }

  async getLeaveTodayList(): Promise<string[]> {
    const today = new Date().toISOString().split("T")[0];
    const cellLeaveToday = await this.cellsLeaveToday.setDynamic(today, today);
    await expect(cellLeaveToday.first()).toBeVisible();
    return cellLeaveToday.allTextContents();
  }
}

export default DashBoardPage;
