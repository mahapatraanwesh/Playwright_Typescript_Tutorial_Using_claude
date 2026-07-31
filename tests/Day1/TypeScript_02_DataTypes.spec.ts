import { test, expect } from '@playwright/test';

// TypeScript data types: string, number, boolean, array, object, null/undefined, any.

test('TypeScript data types - primitives', async () => {
  const name: string = 'Playwright';
  const version: number = 1;
  const isReady: boolean = true;

  expect(typeof name).toBe('string');
  expect(typeof version).toBe('number');
  expect(typeof isReady).toBe('boolean');
});

test('TypeScript data types - arrays and objects', async () => {
  const fruits: string[] = ['Apple', 'Banana', 'Mango'];
  const user: { name: string; age: number; active: boolean } = {
    name: 'Anwesh',
    age: 25,
    active: true,
  };

  expect(fruits.length).toBe(3);
  expect(fruits[0]).toBe('Apple');
  expect(user.name).toBe('Anwesh');
  expect(user.active).toBe(true);
});

test('TypeScript data types - null, undefined, and any', async () => {
  const missingValue: null = null;
  let notDefined: undefined;
  let dynamicValue: any = 'This can be anything';

  dynamicValue = 123;

  expect(missingValue).toBeNull();
  expect(notDefined).toBeUndefined();
  expect(dynamicValue).toBe(123);
});

// Notes:
// - string, number, boolean are primitive types.
// - arrays and objects are structured types.
// - any is flexible but should be avoided when possible.
// - null and undefined are different and should be handled carefully.
