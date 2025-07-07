function countDigit(num) {
  count = 0;
  if (num === 0) {
    count = 1;
  }
  while (num > 0) {
    num = Math.floor(num / 10);
    count++;
  }

  console.log(count);
}

countDigit(-100); // Output: 5
