import { expect, Locator, Page } from "@playwright/test";
import { CustomLocator, DropdownLocator } from "../../utils/custom-locator";

class InsiderPage {
  readonly page: Page;
  readonly lblEvent: CustomLocator;
  readonly lblLogTime: Locator;
  readonly btnDate: Locator;
  readonly txtHours: Locator;
  readonly drpHourRate: DropdownLocator;
  readonly drpActivity: DropdownLocator;
  readonly drpProject: DropdownLocator;
  readonly txtComment: Locator;
  readonly btnSaveClose: Locator;
  readonly btnSaveContinue: Locator;
  readonly btnClose: Locator;
  readonly cellCalendar: CustomLocator;

  constructor(page: Page) {
    this.page = page;
    this.lblEvent = new CustomLocator(
      this.page,
      "//td[@data-date='%s']//ancestor::thead/following-sibling::tbody//td[@class='fc-event-container'][count(//thead//td[@data-date='%s']/preceding-sibling::td)]",
    );
    this.lblLogTime = page.locator("//div//section[@class='dialog-section header']");
    this.btnDate = page.locator("//div[@class='calendar-icon']");
    this.txtHours = page.locator("//input[@id='hour']");
    this.drpHourRate = new DropdownLocator(this.page, "[for='hour-rate']+insider-form-dropdown span");
    this.drpActivity = new DropdownLocator(this.page, "[for='activity']+insider-form-dropdown span");
    this.drpProject = new DropdownLocator(this.page, "[for='project']+insider-form-dropdown span");
    this.txtComment = page.locator("//textarea[@id='comment']");
    this.btnSaveClose = page.locator("//section//button[normalize-space()='Save & Close']");
    this.btnSaveContinue = page.locator("//section//button[normalize-space()='Save & Continue']");
    this.btnClose = page.locator("//section//button[normalize-space()='Close']");
    this.cellCalendar = new CustomLocator(page, "thead>tr>td[data-date='%s'] span");
  }

  async openTodayLogTimeModal() {
    const today = new Date().toISOString().split("T")[0];
    const cellToday = this.cellCalendar.setDynamic(today);
    await cellToday.click();
  }

  async logTime(hour: string, hourRate: string, activity: string, project: string, comment = "") {
    const today = new Date().toISOString().split("T")[0];
    await this.drpHourRate.select(hourRate);
    await this.drpActivity.select(activity);
    await this.drpProject.select(project);
    await this.txtHours.type(hour);
    await this.txtComment.type(comment);
    await this.btnSaveClose.click();
    const todayEvent = this.lblEvent.setDynamic(today, today);
    await expect(todayEvent).toHaveText(`${hour} ${project}`);
  }
}
export default InsiderPage;
