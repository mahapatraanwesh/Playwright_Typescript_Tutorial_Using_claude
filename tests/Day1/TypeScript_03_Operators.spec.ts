import { test, expect } from '@playwright/test';

// TypeScript operators: arithmetic, comparison, logical, assignment, and ternary.

test('TypeScript operators - arithmetic and comparison', async () => {
  const a: number = 10;
  const b: number = 5;

  const sum: number = a + b;
  const diff: number = a - b;
  const product: number = a * b;
  const quotient: number = a / b;

  expect(sum).toBe(15);
  expect(diff).toBe(5);
  expect(product).toBe(50);
  expect(quotient).toBe(2);
  expect(a > b).toBe(true);
  expect(a === b).toBe(false);
});

test('TypeScript operators - logical and ternary', async () => {
  const isLoggedIn: boolean = true;
  const hasPermission: boolean = false;

  const canAccess: boolean = isLoggedIn && hasPermission;
  const message: string = isLoggedIn ? 'Welcome back!' : 'Please log in';

  expect(canAccess).toBe(false);
  expect(message).toBe('Welcome back!');
});

// Notes:
// - && means logical AND.
// - || means logical OR.
// - ? : is the ternary operator.
// - Comparison operators are very useful in conditions and assertions.
