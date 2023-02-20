const factorial = (num) => {
  let result = 1;

  // eslint-disable-next-line eqeqeq
  if (num == 0 || num == 1) {
    return result;
  }
  // eslint-disable-next-line no-plusplus
  for (let i = num; i >= 1; i--) {
    result *= i;
  }
  return result;
};

module.exports = factorial;
