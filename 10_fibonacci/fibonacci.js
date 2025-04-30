const fibonacci = function (num) {
  let number = Number(num);
  let firstNum = 0;
  let secondNum = 1;
  let combinedNum = firstNum + secondNum;
  if (number === 0) {
    return 0;
  } else if (number < 0) {
    return "OOPS";
  }
  for (let i = 2; i < number; i++) {
    firstNum = secondNum;
    secondNum = combinedNum;
    combinedNum = firstNum + secondNum;
  }
  return combinedNum;
};

// Do not edit below this line
module.exports = fibonacci;
