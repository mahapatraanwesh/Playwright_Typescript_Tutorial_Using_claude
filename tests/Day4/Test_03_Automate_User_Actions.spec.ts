// npx playwright test tests/Day4/Test_03_Automate_User_Actions.spec.ts --headed --ui
import { test, expect } from '@playwright/test';

// ------------------------------------------------------------
// User actions automation reference examples
// ------------------------------------------------------------

// 1. Fill text into input fields
// This is for typing values into text boxes, email fields, search boxes, etc.
test('Automate User Actions Practice', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');

    const firstName = page.getByPlaceholder('First Name');
    await firstName.fill('Anwesh');

    // Alternative text entry methods:
    // await firstName.type('Anwesh');
    // await firstName.pressSequentially('Anwesh');

    const lastName = page.getByPlaceholder('Last Name');
    await lastName.fill('Chatterjee');

    // Select radio buttons / checkboxes
    const genderMale = page.locator('#gender-radio-1');
    await genderMale.check();

    // Alternative radio selection using label or role
    // await page.getByLabel('Male').check();
    // await page.getByRole('radio', { name: 'Male' }).check();

    // Click buttons / links
    const submitButton = page.getByRole('button', { name: 'Submit' });
    // await submitButton.click();

    // Select dropdown value
    const stateDropdown = page.locator('#state');
    // await stateDropdown.click();
    // await page.getByText('NCR').click();

    // Checkboxes
    const sportsCheck = page.getByLabel('Sports');
    // await sportsCheck.check();

    // Date input
    // await page.getByPlaceholder('Date Of Birth').fill('04/05/1995');
});

// 2. Handle alert / dialog boxes
// Dialogs are common in browser automation. Playwright listens to page dialogs.
test('Handling Alert Exercise', async ({ page }) => {
    await page.goto('https://demoqa.com/alerts');

    page.on('dialog', async (dialog) => {
        console.log(dialog.message());
        await dialog.accept();
    });

    const alertButton = page.getByRole('button', { name: 'Click me' }).nth(0);
    await alertButton.click();

    // Other dialog handling examples:
    // page.on('dialog', async (dialog) => {
    //     console.log(dialog.type(), dialog.message());
    //     await dialog.dismiss();
    // });
});

// 3. Mouse and keyboard interactions
// These are important for realistic user interaction tests.
test('Mouse and Keyboard Actions Example', async ({ page }) => {
    await page.goto('https://example.com');

    // Hover over an element
    // const element = page.locator('body');
    // await element.hover();

    // Press keys on keyboard
    // await page.keyboard.press('Tab');
    // await page.keyboard.press('Enter');

    // Use .click() and .dblclick()
    // await page.getByRole('link').click();
    // await page.getByRole('button').dblclick();
});

// 4. Drag and drop
// Useful for file upload and drag interactions.
test('Drag and Drop Example', async ({ page }) => {
    await page.goto('https://demoqa.com/droppable');

    const source = page.locator('#draggable');
    const target = page.locator('#droppable');

    // await source.dragTo(target);
    // await expect(target).toContainText('Dropped!');
});

// 5. File upload
// Use setInputFiles() to upload a file into a file input element.
test('File Upload Example', async ({ page }) => {
    await page.goto('https://demoqa.com/upload-download');

    const fileInput = page.locator('#uploadFile');
    // await fileInput.setInputFiles('test-data/sample.txt');
});

// 6. Checkbox and radio handling
// Radio buttons and checkboxes are common form controls.
test('Checkbox and Radio Example', async ({ page }) => {
    await page.goto('https://demoqa.com/checkbox');

    const checkbox = page.locator('input[type="checkbox"]').first();
    // await checkbox.check();
    // await expect(checkbox).toBeChecked();

    const radio = page.locator('input[type="radio"]').first();
    // await radio.check();
    // await expect(radio).toBeChecked();
});

// 7. Dropdown / select options
// Use locator methods like click(), selectOption(), and getByText().
test('Dropdown Selection Example', async ({ page }) => {
    await page.goto('https://demoqa.com/select-menu');

    const select = page.locator('select');
    // await select.selectOption('Option 1');

    const customDropdown = page.getByText('Select Value');
    // await customDropdown.click();
    // await page.getByText('Group 1, option 1').click();
});

// 8. Multi-step workflow example
// A realistic user journey often combines multiple actions.
test('Registration Form Workflow Example', async ({ page }) => {
    await page.goto('https://demoqa.com/automation-practice-form');

    await page.getByPlaceholder('First Name').fill('Anwesh');
    await page.getByPlaceholder('Last Name').fill('QA');
    await page.getByLabel('Male').check();
    await page.getByPlaceholder('name@example.com').fill('anwesh@example.com');
    // await page.getByRole('button', { name: 'Submit' }).click();
});

// Notes:
// - use getByRole(), getByPlaceholder(), getByLabel(), and getByText() for readable element selection
// - prefer user-facing locators over CSS selectors when possible
// - combine actions like fill(), click(), check(), selectOption(), hover(), and press() to model real user behavior
// - use page.on('dialog') to handle browser alerts, confirms, and prompts
