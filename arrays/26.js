// Output: [0, 1, 2, 3, 4, 5]
// 26. Remove Duplicates from Sorted Array
// Given an integer array nums sorted in non-decreasing order, remove the duplicates in-place such that each unique element appears only once. The relative order of the elements should be kept the same. Then return the number of unique elements in nums.
let arr = [0, 0, 1, 1, 1, 2, 2, 3, 4, 4, 5];
function removeDuplicates(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[x]) {
      x++;
      arr[x] = arr[i];
    }
  }
}

removeDuplicates(arr);
