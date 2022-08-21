const twoSum = (nums, target) => {
  let ansArr = [];
  nums.forEach((element, ind, arr) => {
    let lookForNum = target - element;
    let startAt = ind + 1;
    let foundIndex;
    foundIndex = arr.indexOf(lookForNum, startAt);
    if (foundIndex != -1) {
      ansArr.push(ind);
      ansArr.push(foundIndex);
    }
  });
  return ansArr;
};

module.exports = twoSum;
