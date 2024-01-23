import { test, expect } from "@playwright/test";

test("Demo codegen", async ({ page }) => {
  await page.goto("https://playwright.dev/");
  await expect(page).toHaveTitle("Playwright");
});
