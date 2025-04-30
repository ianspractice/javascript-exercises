const palindromes = function (string) {
  const cleanStr = string
    .split("")
    .filter((char) => /[^\W_]/.test(char))
    .join("")
    .toLowerCase();
  const reverse = cleanStr.split("").reverse().join("");
  return cleanStr === reverse;
};

// Do not edit below this line
module.exports = palindromes;
