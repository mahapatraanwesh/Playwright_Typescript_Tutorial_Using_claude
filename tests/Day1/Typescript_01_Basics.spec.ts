import { test, expect } from '@playwright/test';

// TypeScript basics: variables, constants, type annotations, and comments.
// These are the building blocks of almost every TypeScript file.

test('TypeScript basics - variables and constants', async () => {
  // let is used for variables that may change.
  let userName: string = 'Anwesh';

  // const is used for values that should not be reassigned.
  const projectName: string = 'Playwright TypeScript Tutorial';

  // Type annotations help make the code clearer and safer.
  let age: number = 25;
  let isActive: boolean = true;

  expect(userName).toBe('Anwesh');
  expect(projectName).toBe('Playwright TypeScript Tutorial');
  expect(age).toBe(25);
  expect(isActive).toBe(true);
});

test('TypeScript basics - template strings and basic operations', async () => {
  const firstName: string = 'Anwesh';
  const lastName: string = 'Chatterjee';

  // Template strings allow string interpolation.
  const fullName: string = `${firstName} ${lastName}`;
  const message: string = `Hello, ${fullName}!`;

  // Basic arithmetic operations.
  const total: number = 10 + 5;
  const double: number = total * 2;

  expect(fullName).toBe('Anwesh Chatterjee');
  expect(message).toBe('Hello, Anwesh Chatterjee!');
  expect(total).toBe(15);
  expect(double).toBe(30);
});

// Notes:
// - Use let for values that change.
// - Use const for values that do not change.
// - Type annotations make code more predictable and easier to debug.
// - Template strings are useful for readable output and dynamic values.
