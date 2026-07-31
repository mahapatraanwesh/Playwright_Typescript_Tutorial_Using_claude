import { test, expect } from '@playwright/test';

// Basic page navigation example
test('locate the Get Started link', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const getStartedLink = page.getByRole('link', { name: 'Get started' });
    await getStartedLink.click();
});

// Locator exercise using role-based locator and page title assertion
test('locator exercise scenario', async ({ page }) => {
    await page.goto('https://playwright.dev/');
    const docsLink = page.getByRole('link', { name: 'Docs' });
    await docsLink.click();
    await page.waitForURL('**/docs/intro');
    const pageTitle = await page.title();
    console.log(pageTitle);
    await expect(page).toHaveTitle('Installation | Playwright');
});

// Other locators for common UI elements
test('other locators', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    // getByPlaceholder() - find input by placeholder text
    const searchBox = page.getByPlaceholder('Search');
    await searchBox.fill('waits');

    // getByLabel() - find form control using visible label text
    const emailInput = page.getByLabel('Email');
    await emailInput.fill('user@example.com');

    // getByText() - match visible text on the page
    const welcomeText = page.getByText('Welcome');
    await expect(welcomeText).toBeVisible();
});

// =====================================================
// Playwright locator reference notes
// =====================================================
// 1. CSS selectors
// These are useful for selecting elements using CSS rules.
// const cssExample = page => page.locator('button.primary');
// const cssExample2 = page => page.locator('input[type="email"]');

// 2. XPath selectors
// Use XPath when CSS selectors are not enough or when selecting by text/attributes.
// const xpathExample = page => page.locator('//button[text()="Submit"]');
// const xpathExample2 = page => page.locator('//div[contains(@class, "card")]');

// 3. Role-based locators (preferred)
// Best practice: use semantic locators that match user-visible roles.
// const roleExample = page => page.getByRole('button', { name: 'Submit' });
// const roleExample2 = page => page.getByRole('link', { name: 'Docs' });

// 4. Text locators
// const textExample = page => page.getByText('Get started');
// const textExample2 = page => page.getByText(/welcome/i);

// 5. Label locators
// const labelExample = page => page.getByLabel('Username');

// 6. Placeholder locators
// const placeholderExample = page => page.getByPlaceholder('Search');

// 7. Test ID locators
// Usually added to the HTML to make automation more stable.
// const testIdExample = page => page.getByTestId('user-card');

// 8. Chaining locators
// A locator can be scoped within another locator.
// const parentLocator = page.locator('.product-card');
// const childButton = parentLocator.locator('button');

// 9. Filtering locators
// Narrow down matches using conditions like text or nested elements.
// const filteredButton = page.locator('button').filter({ hasText: 'Delete' });
// const containingLocator = page.locator('li').filter({ has: page.locator('.badge') });

// 10. Locator methods
// Examples: first(), last(), nth(), and .count()
// const firstItem = page.locator('.item').first();
// const lastItem = page.locator('.item').last();
// const secondItem = page.locator('.item').nth(1);

// 11. Waiting strategies
// Playwright auto-waits before actions when possible.
// const submitButton = page.getByRole('button', { name: 'Submit' });
// await submitButton.click();
// await expect(submitButton).toBeVisible();
// await expect(submitButton).toBeEnabled();

// 12. Related locator concepts
// - page.locator(...) creates a locator
// - locator.locator(...) scopes a locator inside another one
// - locator.filter(...) narrows matches
// - locator.first(), nth(), last() choose a specific match
// - locator.getByRole(), getByText(), getByLabel() are user-friendly queries

// 13. Full example combining locator types
test('combined locator examples', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    const docsLink = page.getByRole('link', { name: 'Docs' });
    await expect(docsLink).toBeVisible();
    await docsLink.click();

    const introHeading = page.getByRole('heading', { name: /introduction/i });
    await expect(introHeading).toBeVisible();

    const searchInput = page.getByPlaceholder('Search');
    await searchInput.fill('API');

    const card = page.locator('.doc-card').filter({ hasText: 'API' });
    await expect(card).toBeVisible();
});

// Notes:
// - Prefer role, label, and text locators over CSS/XPath when possible.
// - Use CSS selectors for quick attribute-based matching.
// - Use XPath when dealing with complex DOM structures.
// - Keep locators readable and stable for long-term maintenance.
// - Avoid brittle selectors that depend on deep DOM nesting or index-only choices.
