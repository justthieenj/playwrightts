import { expect, test } from "@playwright/test";

test("Test click", async ({ page }) => {
  await page.goto("http://127.0.0.1:3000/index.html");
  /* 
  login button: disabled for 3s
  -> then get obscured by signup button for 3s
  -> then have animation for 3s
  -> click successful
  */
  const loginButton = page.locator("#login");
  await loginButton.click();
  await expect(loginButton).toHaveText("Logged in!");
});
