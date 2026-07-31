import { test, expect } from '@playwright/test';

// TypeScript conditionals: if, else if, else, and switch.

test('TypeScript conditionals - if else', async () => {
  const score: number = 85;

  let result: string;

  if (score >= 90) {
    result = 'A';
  } else if (score >= 80) {
    result = 'B';
  } else {
    result = 'C';
  }

  expect(result).toBe('B');
});

test('TypeScript conditionals - switch', async () => {
  const day: number = 2;
  let dayName: string;

  switch (day) {
    case 1:
      dayName = 'Monday';
      break;
    case 2:
      dayName = 'Tuesday';
      break;
    default:
      dayName = 'Other day';
  }

  expect(dayName).toBe('Tuesday');
});

// Notes:
// - if/else is used for range comparisons and booleans.
// - switch is useful when checking many exact values.
