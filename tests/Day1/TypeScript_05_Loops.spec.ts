import { test, expect } from '@playwright/test';

// TypeScript loops: for, while, for...of, and for...in.

test('TypeScript loops - for loop', async () => {
  let total: number = 0;

  for (let i = 1; i <= 5; i++) {
    total += i;
  }

  expect(total).toBe(15);
});

test('TypeScript loops - for of and while', async () => {
  const numbers: number[] = [2, 4, 6, 8];
  let sum: number = 0;

  for (const num of numbers) {
    sum += num;
  }

  let index: number = 0;
  while (index < numbers.length) {
    sum += numbers[index];
    index++;
  }

  expect(sum).toBe(20);
});

// Notes:
// - for is useful when you know the number of iterations.
// - for...of is easier for arrays.
// - while repeats until a condition becomes false.
