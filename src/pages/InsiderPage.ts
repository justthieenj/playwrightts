import { Locator, Page } from "@playwright/test";

class InsiderPage {
    readonly page: Page;
    readonly btnDayNumber: Locator;
    readonly lblEvent: Locator;
    readonly lblLogTime: Locator;
    readonly btnDate: Locator;
    readonly txtHours: Locator;
    readonly drpHourRate: Locator;
    readonly drpActivity: Locator;
    readonly drpProject: Locator;
    readonly txtComment: Locator;
    readonly btnSaveClose: Locator;
    readonly btnSaveContinue: Locator;
    readonly btnClose: Locator;

    constructor(page: Page) {
        this.page = page;
        this.btnDayNumber = page.locator("#Username");
        this.lblEvent = page.locator("#Password");
        this.lblLogTime = page.locator(".btn-login");
        this.btnDate = page.locator("#OTP");
        this.txtHours = page.locator("#verify-opt");
        this.drpHourRate = page.locator("#verify-opt");
        this.drpActivity = page.locator("#verify-opt");
        this.drpProject = page.locator("#verify-opt");
        this.txtComment = page.locator("#verify-opt");
        this.btnSaveClose = page.locator("#verify-opt");
        this.btnSaveContinue = page.locator("#verify-opt");
        this.btnClose = page.locator("#verify-opt");
      }
}