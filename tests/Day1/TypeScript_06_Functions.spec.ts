import { test, expect } from '@playwright/test';

// TypeScript functions: declaration, parameters, return types, and arrow functions.

function addNumbers(a: number, b: number): number {
  return a + b;
}

const multiplyNumbers = (a: number, b: number): number => a * b;

test('TypeScript functions - regular and arrow functions', async () => {
  const sum: number = addNumbers(10, 5);
  const product: number = multiplyNumbers(4, 6);

  expect(sum).toBe(15);
  expect(product).toBe(24);
});

test('TypeScript functions - optional and default parameters', async () => {
  function greet(name: string, greeting: string = 'Hello'): string {
    return `${greeting}, ${name}!`;
  }

  expect(greet('Anwesh')).toBe('Hello, Anwesh!');
  expect(greet('Anwesh', 'Hi')).toBe('Hi, Anwesh!');
});

// Notes:
// - Functions are reusable blocks of logic.
// - Return type annotations make code more explicit.
// - Default parameters help reduce repetition.
