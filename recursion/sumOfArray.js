function sumOfArray(arr) {
  if (arr.length == 0) return 0;

  return arr[0] + sumOfArray(arr.slice(1));
}

// console.log(sumOfArray([1, 2, 3, 4, 5])); // Output: 15

function sumOfEvenNumberInArray(arr) {
  if (arr.length === 0) return 0;
  if (arr[0] % 2 == 0) {
    return arr[0] + sumOfEvenNumberInArray(arr.slice(1));
  }

  return sumOfEvenNumberInArray(arr.slice(1));
}

// console.log(sumOfEvenNumberInArray([1,3,4,5,6,7,8]))

function sumOfArray2(n) {
  if (n === 0) return arr[n];
  return arr[n] + sumOfArray2(n - 1);
}

let arr = [1, 2, 3, 4, 5, 6];

console.log(sumOfArray2(arr.length - 1));
