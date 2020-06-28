import { isFrom } from '../index';

test('Return the location of a valid DDD', () => {
  const ddd = 41;
  const whereIsIt = isFrom(ddd);

  const { region, state } = whereIsIt;

  expect(region).toBe('Curitiba');
  expect(state).toBe('PR');
});

test('Return the location of a valid DDD w/ phone', () => {
  const phone = '(89) 99999-9999';
  const whereIsIt = isFrom(phone);

  const { region, state } = whereIsIt;

  expect(region).toBe('Picos');
  expect(state).toBe('PI');
});

test('Return error w/ invalid DDD', () => {
  const ddd = '10';

  expect(() => isFrom(ddd)).toThrow(Error);
});

test('Return error w/ invalid DDD w/ phone', () => {
  const phone = '(90) 99999-9999';

  expect(() => isFrom(phone)).toThrow(Error);
});
