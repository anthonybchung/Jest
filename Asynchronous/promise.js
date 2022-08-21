const product = (num, num1) => {
  return new Promise((resolve, reject) => {
    if (typeof num != 'number' || typeof num1 != 'number') {
      reject(new Error('inputs must be numbers.'));
    }
    resolve(num * num1);
  });
};

product('string', 4)
  .then((data) => console.log(data))
  .catch((error) => console.log(error.message));
module.exports = product;
