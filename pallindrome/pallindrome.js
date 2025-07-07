function checkPallindromeNumber(originalNumber) {
  if (originalNumber === 0) {
    return false;
  }
  let number = Math.abs(originalNumber);
  let reverseNumber = 0;
  while (number > 0) {
    let rem = number % 10;
    number = Math.floor(number / 10);
    reverseNumber = reverseNumber * 10 + rem;
  }

  return Number(reverseNumber) === originalNumber;
}

function checkPallindromeString(originalString) {
  let reverseString = "";

  for (let i = originalString?.length - 1; i >= 0; i--) {
    reverseString += originalString[i];
  }

  return reverseString === originalString;
}

console.log(checkPallindromeNumber(121)); // true
console.log(checkPallindromeNumber(-121)); // false (as expected if negatives aren't palindromes)
console.log(checkPallindromeNumber(123)); // false
console.log(checkPallindromeNumber(0));
