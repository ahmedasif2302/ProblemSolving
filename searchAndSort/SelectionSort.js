function selectionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    let min = i;
    for (let k = i + 1; k < n; k++) {
      if (arr[min] > arr[k]) {
        min = k;
      }
    }
    if (min !== i) {
      let temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }
  return arr;
}

let arr = [7, 1, 5, 4, 3, 2, 0];

console.log(sort(arr));
