import { Locator, Page } from "@playwright/test";
import * as util from "util";

export default class DLocator {
  readonly selector: string;
  readonly page: Page;

  constructor(page: Page, selector: string) {
    this.page = page;
    this.selector = selector;
  }

  async setDynamic(...args: string[] | number[]): Promise<Locator> {
    const updatedLocator = util.format(this.selector, ...args);
    return this.page.locator(updatedLocator);
  }
}
