const add = (a, b) => a + b;

const subtract = (a, b) => a - b;

const sum = function (array) {
  return array.reduce((total, current) => {
    return total + current;
  }, 0);
};

const multiply = function (array) {
  return array.reduce((total, current) => {
    return total * current;
  }, 1);
};

const power = (a, b) => Math.pow(a, b);

const factorial = function (number) {
  if (number === 0 || number === 1) {
    return 1;
  } else {
    for (let i = number - 1; i > 0; i--) {
      number = number * i;
    }
    return number;
  }
};

// or
// const factorial = function (a) {
//   let factorial = 1;
//   for (let i = 1; i <= a; i++) {
//     factorial = factorial * i;
//   }
//   return factorial;
// };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
