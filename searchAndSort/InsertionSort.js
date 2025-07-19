function sort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let curr = arr[i];
    let p = i - 1;

    while (p >= 0 && arr[p] > curr) {
      arr[p + 1] = arr[p];
      arr[p] = curr;
      p--;
    }
  }
  return arr;
}

let arr = [3, 4, 5, 7, 1, 2];

console.log(sort(arr));
