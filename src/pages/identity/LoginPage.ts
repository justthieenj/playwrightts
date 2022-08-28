import { Locator, Page } from "@playwright/test";
import * as OTPAuth from "otpauth";
import * as account from "./../../../account.json";

class LoginPage {
  readonly page: Page;
  readonly txtUsername: Locator;
  readonly txtPassword: Locator;
  readonly btnLogin: Locator;
  readonly txtOTPCode: Locator;
  readonly btnVerify: Locator;

  constructor(page: Page) {
    this.page = page;
    this.txtUsername = page.locator("#Username");
    this.txtPassword = page.locator("#Password");
    this.btnLogin = page.locator(".btn-login");
    this.txtOTPCode = page.locator("#OTP");
    this.btnVerify = page.locator("#verify-opt");
  }

  async enterOTPCode() {
    const token = new OTPAuth.TOTP({
      secret: account.totpSecret,
    });
    const code = token.generate();
    await this.txtOTPCode.type(code);
    await this.btnVerify.click();
  }

  async login(userName: string, password: string) {
    await this.txtUsername.type(userName);
    await this.txtPassword.type(password);
    await this.btnLogin.click();
    await this.enterOTPCode();
  }
}

export default LoginPage;
