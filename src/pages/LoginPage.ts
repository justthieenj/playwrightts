import { Locator, Page } from "@playwright/test";

class LoginPage {
  readonly page: Page;
  readonly txtUsername: Locator;
  readonly txtPassword: Locator;
  readonly btnLogin: Locator;

  constructor(page: Page) {
    this.page = page;
    this.txtUsername = page.locator("#Username");
    this.txtPassword = page.locator("#Password");
    this.btnLogin = page.locator(".btn-login");
  }

  async login(userName: string, password: string) {
    await this.txtUsername.type(userName);
    await this.txtPassword.type(password);
    await this.btnLogin.click();
  }
}

export default LoginPage;
