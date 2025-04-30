const removeFromArray = function (array, ...moreElements) {
  const argArray = moreElements;
  const newArray = array.filter((element) => !argArray.includes(element));
  return newArray;
};
// Do not edit below this line
module.exports = removeFromArray;
