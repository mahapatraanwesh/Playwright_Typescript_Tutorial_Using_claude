import { test, expect } from '@playwright/test';

test('my first test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = await page.title();
  console.log(title);
});