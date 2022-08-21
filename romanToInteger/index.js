const romanToInt = (str) => {
  const romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let strArray = str.split('');
  let ans = 0;
  strArray.forEach((element, index, array) => {
    let nextElement = array[index + 1];
    if (romanNumbers[element] < romanNumbers[nextElement]) {
      ans -= romanNumbers[element];
    } else {
      ans += romanNumbers[element];
    }
  });
  return ans;
};

module.exports = romanToInt;
