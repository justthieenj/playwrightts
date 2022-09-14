import { Locator, Page } from "@playwright/test";
import * as OTPAuth from "otpauth";

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

  async enterOTPCode(totpSecret: string) {
    const token = new OTPAuth.TOTP({ secret: totpSecret });
    const code = token.generate();
    await this.txtOTPCode.type(code);
    await this.btnVerify.click();
  }

  async login(account: { empCode: string; password: string; totpSecret: string }) {
    await this.txtUsername.type(account.empCode);
    await this.txtPassword.type(account.password);
    await this.btnLogin.click();
    await this.enterOTPCode(account.totpSecret);
  }
}

export default LoginPage;
