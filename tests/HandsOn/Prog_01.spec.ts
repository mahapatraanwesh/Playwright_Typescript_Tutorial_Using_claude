//run - npx playwright test tests/HandsOn/Prog_01.spec.ts --headed

import { test, expect } from '@playwright/test';

test('Hands-on practice scenario 01', async ({page}) => {

    await page.goto('https://demoqa.com/automation-practice-form');
    const firstName = page.getByPlaceholder('First Name');
    await firstName.fill('Anwesh');
    const lastName = page.getByPlaceholder('Last Name');
    await lastName.fill('M');
    const genderMale = page.locator('#gender-radio-1');
    await genderMale.check();
    const mobileNumber = page.getByPlaceholder('Mobile Number');
    await mobileNumber.fill('1234567890');
    await page.getByLabel('Sports').check();
    await page.getByLabel('Reading').check();
    const uploadImage = page.locator('#uploadPicture');
    await uploadImage.setInputFiles('C:/Users/anwes/Desktop/sample_image.jpg');
    await page.getByRole('button',{name: 'Submit'}).click();

    await expect(page.getByText('Thanks for submitting the form')).toBeVisible();
});