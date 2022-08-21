const product = require('./promise');

describe('to test promises in jest', () => {
  test('for the product of 4 * 2', () => {
    return product(4, 2).then((data) => {
      expect(data).toBe(8);
    });
  });

  test('for reject of "must be a number"', () => {
    return product('hello', 2)
      .then((data) => console.log(data))
      .catch((error) => {
        expect(error.message).toBe('inputs must be numbers.');
      });
  });
});
