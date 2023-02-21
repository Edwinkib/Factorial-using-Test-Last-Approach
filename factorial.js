// const factorial = (num) => {
//   let result = 1;

//   // eslint-disable-next-line eqeqeq
//   if (num == 0 || num == 1) {
//     return result;
//   }
//   // eslint-disable-next-line no-plusplus
//   for (let i = num; i >= 1; i--) {
//     result *= i;
//   }
//   return result;
// };

// Factorial of n is the product of all positive descending integers.
// Factorial of n is denoted by n!. For example:
// 4! = 4*3*2*1 = 24
// 5! = 5*4*3*2*1 = 120

// eslint-disable-next-line no-unused-vars
function Factorial(n) {
  let ans = 1;

  // eslint-disable-next-line no-plusplus
  for (let i = 2; i <= n; i++) { ans *= i; }
  // eslint-disable-next-line no-console
  console.log(ans);
  return ans;
}

Factorial(5);
module.exports = Factorial;
