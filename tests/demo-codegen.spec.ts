import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {

  // Go to https://saigontechnology.com/
  await page.goto('https://saigontechnology.com/');

  // Click #sts-header a:has-text("TECHNOLOGY")
  await page.locator('#sts-header a:has-text("TECHNOLOGY")').click();
  await expect(page).toHaveURL('https://saigontechnology.com/technology');

  // Click text=HOME COMPANY ABOUT US METHODOLOGIES CAREERS SERVICES Offshore Software Developme >> i
  await page.locator('text=HOME COMPANY ABOUT US METHODOLOGIES CAREERS SERVICES Offshore Software Developme >> i').click();

  // Fill input[name="q"]
  await page.locator('input[name="q"]').fill('developer');

  // Press Enter
  await page.locator('input[name="q"]').press('Enter');
  await expect(page).toHaveURL('https://saigontechnology.com/search?q=developer');

});