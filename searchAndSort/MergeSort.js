var sortHelper = function (nums1, nums2) {
  let m = nums1.length;
  let n = nums2.length;
  let nums1Copy = nums1.splice(0, m);

  let p1 = 0,
    p2 = 0;

  for (let i = 0; i < m + n; i++) {
    if ((p1 < m && nums1Copy[p1] < nums2[p2]) || p2 >= n) {
      nums1[i] = nums1Copy[p1];
      p1++;
    } else {
      nums1[i] = nums2[p2];
      p2++;
    }
  }
  return nums1;
};

function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  let len = Math.floor(arr.length / 2);

  let start = mergeSort(arr.slice(0, len));
  let end = mergeSort(arr.slice(len));

  return sortHelper(start, end);
}

console.log(mergeSort([8, 4, 5, 6, 9, 1, 3, 6]));
