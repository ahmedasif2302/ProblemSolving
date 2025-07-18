function sumOfArray(arr){
  if(arr.length == 0) return 0
  
  return arr[0] + sumOfArray(arr.slice(1))
}

console.log(sumOfArray([1, 2, 3, 4, 5])); // Output: 15