function reverseInteger(num) {
  if (num === 0) return num;
  let originalNumber = num;
  num = Math.abs(num);
  let reverseNumber = 0;
  while (num > 0) {
    let rem = num % 10;
    num = Math.floor(num / 10);
    reverseNumber = reverseNumber * 10 + rem;
  }

  return originalNumber < 0 ? -reverseNumber : reverseNumber;
}

console.log(reverseInteger(-121)); // 54321
