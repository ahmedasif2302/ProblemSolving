var secondLargestNumber = function (nums) {
  let first = -Infinity;
  let second = -Infinity;

  if (nums.length < 2) {
    return -1;
  }
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > first) {
      second = first;
      first = nums[i];
    } else if (arr[i] > second) {
      second = arr[i];
    }
  }

  return second;
};

let arr = [4, 1, 1];

console.log(secondLargestNumber(arr));
