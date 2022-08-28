import { Locator, Page } from "@playwright/test";

class LoginPage {
  readonly page: Page;
  readonly labelWelcome: Locator;

  constructor(page: Page) {
    this.page = page;
    this.labelWelcome = page.locator("text=Welcome to Identity");
  }
}

export default LoginPage;
