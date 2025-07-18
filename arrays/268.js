/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let n = nums.length;
  let total = (n * (n + 1)) / 2;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    sum = sum + nums[i];
  }

  return total - sum;
};

console.log(missingNumber([3, 0, 1]));
