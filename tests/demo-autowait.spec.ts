import { expect, Locator, test } from "@playwright/test";

test("Test click", async ({ page }) => {
  /* 
  login button:
  -> disabled for 3s
  -> then get obscured by signup button for 3s
  -> then have animation for 3s
  -> element stable to perform click
  */

  // navigate to url
  await page.goto("http://127.0.0.1:3000/index.html");

  // click button with id = "login"
  const loginButton: Locator = page.locator("#login");
  await loginButton.click();

  // verify button has text "Logged in!"
  await expect(loginButton).toHaveText("Logged in!");
});
