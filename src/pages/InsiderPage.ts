import { Locator, Page } from "@playwright/test";

class InsiderPage {
    readonly page: Page;
    readonly btnDayNumber: Locator;
    readonly lblEvent: Locator;
    readonly lblLogTime: Locator;
    readonly btnDate: Locator;
    readonly txtHours: Locator;
    readonly drpHourRate: Locator;
    readonly lblHourRate1: Locator;
    readonly drpActivity: Locator;
    readonly lblTestActivity: Locator;
    readonly drpProject: Locator;
    readonly lblProject: Locator;
    readonly txtComment: Locator;
    readonly btnSaveClose: Locator;
    readonly btnSaveContinue: Locator;
    readonly btnClose: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btnDayNumber = page.locator("//span[normalize-space()='25']");
        this.lblEvent = page.locator("//td[@data-date='2022-08-25']//ancestor::thead/following-sibling::tbody//td[@class='fc-event-container'][count(//thead//td[@data-date='2022-08-25']/preceding-sibling::td)]");
        this.lblLogTime = page.locator("//div//section[@class='dialog-section header']");
        this.btnDate = page.locator("//div[@class='calendar-icon']");
        this.txtHours = page.locator("//input[@id='hour']");
        this.drpHourRate = page.locator("//label[@for='hour-rate']//following::insider-form-dropdown[1]//span");
        this.lblHourRate1 = page.locator("//li[normalize-space()='1x - Normal working days']")
        this.drpActivity = page.locator("//label[@for='activity']//following::insider-form-dropdown[1]//span");
        this.lblTestActivity = page.locator("//li[normalize-space()='Test']");
        this.drpProject = page.locator("//label[@for='project']//following::insider-form-dropdown[1]//span");
        this.lblProject = page.locator("//li[normalize-space()='Project X']")
        this.txtComment = page.locator("//textarea[@id='comment']");
        this.btnSaveClose = page.locator("//section//button[normalize-space()='Save & Close']");
        this.btnSaveContinue = page.locator("//section//button[normalize-space()='Save & Continue']");
        this.btnClose = page.locator("//section//button[normalize-space()='Close']");
      }
   
    async openTodayLogTimeModal(){
        await this.btnDayNumber.click();
      }
   
    async inputLogTime(hour: string, comment: string){
        await this.txtHours.type(hour);
        await this.drpHourRate.click();
        await this.lblHourRate1.click();
        await this.drpActivity.click();
        await this.lblTestActivity.click();
        await this.drpProject.click();
        await this.lblProject.click();
        await this.txtComment.type(comment);
        await this.btnSaveClose.click();
    }
   }

  export default InsiderPage;