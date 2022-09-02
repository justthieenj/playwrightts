import { Locator, Page, Expect, expect } from "@playwright/test";
import { CustomLocator, DropdownLocator } from "../../utils/custom-locator";
import { sleep } from "../../utils/utils";

class InsiderPage {
    readonly page: Page;
    readonly btnDayNumber: Locator;
    readonly lblEvent: CustomLocator;
    readonly lblLogTime: Locator;
    readonly btnDate: Locator;
    readonly txtHours: Locator;
    readonly drpHourRate: DropdownLocator;
    readonly lblHourRate1: Locator;
    readonly drpActivity: DropdownLocator;
    readonly lblTestActivity: Locator;
    readonly drpProject: DropdownLocator;
    readonly lblProject: Locator;
    readonly txtComment: Locator;
    readonly btnSaveClose: Locator;
    readonly btnSaveContinue: Locator;
    readonly btnClose: Locator;
    readonly cellCalendar: CustomLocator;


    constructor(page: Page) {
        this.page = page;
        this.lblEvent = new CustomLocator(this.page, "//td[@data-date='%s']//ancestor::thead/following-sibling::tbody//td[@class='fc-event-container'][count(//thead//td[@data-date='%s']/preceding-sibling::td)]");
        this.btnDayNumber = page.locator("//span[normalize-space()='25']");
        this.lblLogTime = page.locator("//div//section[@class='dialog-section header']");
        this.btnDate = page.locator("//div[@class='calendar-icon']");
        this.txtHours = page.locator("//input[@id='hour']");
        this.drpHourRate = new DropdownLocator(this.page, "[for='hour-rate']+insider-form-dropdown span");
        this.lblHourRate1 = page.locator("//li[normalize-space()='1x - Normal working days']")
        this.drpActivity = new DropdownLocator(this.page, "[for='activity']+insider-form-dropdown span");
        this.lblTestActivity = page.locator("//li[normalize-space()='Test']");
        this.drpProject = new DropdownLocator(this.page, "[for='project']+insider-form-dropdown span")
        this.lblProject = page.locator("//li[normalize-space()='Project X']")
        this.txtComment = page.locator("//textarea[@id='comment']");
        this.btnSaveClose = page.locator("//section//button[normalize-space()='Save & Close']");
        this.btnSaveContinue = page.locator("//section//button[normalize-space()='Save & Continue']");
        this.btnClose = page.locator("//section//button[normalize-space()='Close']");
        this.cellCalendar = new CustomLocator(page, "thead>tr>td[data-date='%s'] span");
      }
  

  async  openTodayLogTimeModal(){
    const today = new Date().toISOString().split("T")[0];
    const todayCell = await this.cellCalendar.setDynamic(today);
    await todayCell.click();
   }

  async inputTodayLogtime(hour: string, hour_rate:string,  activity: string, project: string, comment: string){
  const today = new Date().toISOString().split("T")[0];
  await this.drpHourRate.select(hour_rate);
  await this.drpActivity.select(activity);
  await this.drpProject.select(project);
  await this.txtHours.type(hour)
  await this.txtComment.type(comment);
  await this.btnSaveClose.click();
  const todayEvent = await this.lblEvent.setDynamic(today, today);
  await expect(todayEvent).toHaveText(hour + project);
  }
}
  export default InsiderPage;