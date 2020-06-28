import { validateDDD } from '../index';

test('Return a valid DDD as integer', () => {
  const ddd = 41;
  const isValid = validateDDD(ddd);

  expect(isValid).toBeTruthy();
});

test('Return a valid DDD as string', () => {
  const ddd = '12';
  const isValid = validateDDD(ddd);

  expect(isValid).toBeTruthy();
});

test('Return a valid DDD w/ entire phone number', () => {
  const ddd = '(43) 99999-9999';
  const isValid = validateDDD(ddd);

  expect(isValid).toBeTruthy();
});

test('Return an invalid DDD as integer', () => {
  const ddd = 40;
  const isValid = validateDDD(ddd);

  expect(isValid).toBeFalsy();
});

test('Return an invalid DDD as string', () => {
  const ddd = '10';
  const isValid = validateDDD(ddd);

  expect(isValid).toBeFalsy();
});

test('Return an invalid DDD w/ entire phone number', () => {
  const ddd = '(20) 99999-9999';
  const isValid = validateDDD(ddd);

  expect(isValid).toBeFalsy();
});
