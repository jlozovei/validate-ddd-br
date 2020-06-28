import { getDDD } from '../src/getDDD';

test('Return the DDD string from a phone number', () => {
  const phone = '(89) 99999-9999';
  const ddd = getDDD(phone);

  expect(ddd).toBe('89');
});
