const isPalindrome = require('./index');
describe('test if number is palindrome number', () => {
  test('121 should return true.', () => {
    let num = 121;
    expect(isPalindrome(num)).toBe(true);
  });

  test('123 should return false.', () => {
    let num = 123;
    expect(isPalindrome(num)).toBe(false);
  });
});
