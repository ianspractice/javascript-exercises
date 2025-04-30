const leapYears = function (year) {
  if (Number.isInteger(year / 100) && Number.isInteger(year / 400)) return true;
  if (Number.isInteger(year / 100) && !Number.isInteger(year / 400))
    return false;
  if (Number.isInteger(year / 4)) return true;
  return false;
};

// Do not edit below this line
module.exports = leapYears;
