const sumAll = function (firstNum, lastNum) {
  let sum = 0;
  let largeNum = firstNum;
  let smallNum = lastNum;
  if (
    firstNum < 0 ||
    lastNum < 0 ||
    !Number.isInteger(firstNum) ||
    !Number.isInteger(lastNum)
  ) {
    return "ERROR";
  } else if (lastNum > firstNum) {
    largeNum = lastNum;
    smallNum = firstNum;
  }
  for (let i = smallNum; i <= largeNum; i++) {
    sum += i;
  }
  return sum;
};

sumAll(1, 4);

// Do not edit below this line
module.exports = sumAll;
