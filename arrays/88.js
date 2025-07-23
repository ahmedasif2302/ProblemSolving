var mergeBruteForce = function (nums1, m, nums2, n) {
  let nums1Copy = nums1.splice(0, m);

  return nums1Copy.concat(nums2).sort((a, b) => a - b);
};

var mergeTwoPointer = function (nums1, m, nums2, n) {
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
