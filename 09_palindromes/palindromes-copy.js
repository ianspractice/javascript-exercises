const palindromes = function (string) {
  function filterArray(string) {
    return /[a-z]|\d|\w/.test(string);
  }
  const cleanString = string
    .toLowerCase()
    .split("")
    .filter(filterArray)
    .join("");
  const reverseString = cleanString.split("").reverse().join("");
  console.log(`
    clean: ${cleanString}
    reverse: ${reverseString}`);
  if (reverseString === cleanString) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
// module.exports = palindromes;
