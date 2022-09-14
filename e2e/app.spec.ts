import { expect, test } from '@playwright/test';

test('Browser tab should have a matching title', async ({ page }) => {
  await page.goto('http://localhost:3690');
  await expect(page).toHaveTitle(/React Template/);
});
