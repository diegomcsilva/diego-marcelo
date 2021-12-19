import { between, selectColorRanging } from '../utils/methods';
import { COLORS } from '../utils/contants';

describe('Check return value between two values', () => {
  
  it('Check value is less or equal to max', () => {
    expect(between(1, 5))
      .toBeLessThanOrEqual(5);
  });
  it('Check value is greater or equal to min', () => {
    expect(between(1, 5))
      .toBeGreaterThanOrEqual(1);
  });
});

test('Check return string color that array of the COLORS', () => {
  expect(COLORS).toEqual(expect.arrayContaining([selectColorRanging()]))
});