import { Locator, Page } from "@playwright/test";
import * as util from "util";

export class CustomLocator {
  readonly selector: string;
  readonly page: Page;

  constructor(page: Page, selector: string) {
    this.page = page;
    this.selector = selector;
  }

  getLocator(): Locator {
    return this.page.locator(this.selector);
  }

  setDynamic(...args: string[] | number[]): Locator {
    const updatedLocator = util.format(this.selector, ...args);
    return this.page.locator(updatedLocator);
  }
}

export class DropdownLocator extends CustomLocator {
  readonly optionLocator: CustomLocator;
  constructor(
    page: Page,
    selector: string,
    optionSelector = "//ul[contains(@class, 'search-result')]/li[normalize-space()='%s']"
  ) {
    super(page, selector);
    this.optionLocator = new CustomLocator(page, optionSelector);
  }

  async select(value: string) {
    await this.getLocator().click();
    await this.optionLocator.setDynamic(value).click();
  }
}
