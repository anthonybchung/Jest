const isPalindrome = (x) => {
  str = x.toString();
  strReverse = str.split('').reverse().join('');
  if (str === strReverse) {
    return true;
  } else {
    return false;
  }
};

module.exports = isPalindrome;
