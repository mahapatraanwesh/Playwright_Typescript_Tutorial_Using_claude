import { test, expect } from '@playwright/test';

// TypeScript objects and arrays: structure, access, and common operations.

test('TypeScript objects - nested object example', async () => {
  const user = {
    name: 'Anwesh',
    age: 25,
    address: {
      city: 'Kolkata',
      country: 'India',
    },
  };

  expect(user.name).toBe('Anwesh');
  expect(user.address.city).toBe('Kolkata');
});

test('TypeScript arrays - map and filter', async () => {
  const numbers: number[] = [1, 2, 3, 4, 5];

  const doubled = numbers.map((n) => n * 2);
  const evenNumbers = numbers.filter((n) => n % 2 === 0);

  expect(doubled).toEqual([2, 4, 6, 8, 10]);
  expect(evenNumbers).toEqual([2, 4]);
});

// Notes:
// - Objects organize related data.
// - Arrays store a list of values.
// - map() transforms data, while filter() narrows it.
