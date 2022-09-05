import { Locator, Page } from "@playwright/test";

class IdentityPage {
  readonly page: Page;
  readonly labelWelcome: Locator;

  constructor(page: Page) {
    this.page = page;
    this.labelWelcome = page.locator("text=Welcome to Identity");
  }
}
export default IdentityPage;
