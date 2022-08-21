const romanToInt = require('./index');
describe('convert roman numbers to int', () => {
  test('single Letter I', () => {
    expect(romanToInt('I')).toBe(1);
  });

  test('single Letter C', () => {
    expect(romanToInt('C')).toBe(100);
  });

  test('2 letters II', () => {
    expect(romanToInt('II')).toBe(2);
  });

  test('letters IV', () => {
    expect(romanToInt('IV')).toBe(4);
  });

  test('letters IX', () => {
    expect(romanToInt('IX')).toBe(9);
  });

  test('letters CM', () => {
    expect(romanToInt('CM')).toBe(900);
  });
});
