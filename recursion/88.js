let nums1 = [1];
let m = 1;
let nums2 = [];
let n=0;
function mergeSort(nums1, m, nums2, n){
  let p1=0, p2=0;i=0;
  let temp = nums1.slice(0,m);
  function rsort(p1, p2){
      if(i === m+n) return nums1
      if((temp[p1] < nums2[p2] && p1 < m) || p2 >= n){
        nums1[i] = temp[p1];
        p1++
        i++
      } else {
        nums1[i] = nums2[p2]
        p2++
        i++
      }
      
     return rsort(p1,p2)
  }
 return rsort(p1,p2)
}

console.log(mergeSort(nums1,m,nums2,n))