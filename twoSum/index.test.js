const twoSum = require('./index');

describe('Leetcode add 2 numbers to hit the target', () => {
  test('twoSum intake array, and integer', () => {
    expect(twoSum([1, 2, 3, 4], 6)).toEqual(expect.arrayContaining([1, 3]));
  });
});
