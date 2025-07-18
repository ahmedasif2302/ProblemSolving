function sumOfN(n){
  if(n === 0) return 0;
  return n + sumOfN(n-1);
}





function sumOfOddN(n){
  if(n === 0) return 0
  if(n % 2 !== 0){
    return n + sumOfOddN(n-1)
  } else {
   return sumOfOddN(n-1)
  }
}


console.log(sumOfOddN(7))
// console.log(sumOfN(5)); // Output: 15
