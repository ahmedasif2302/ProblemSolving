function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    let isSwapping = false;
    for (let k = 0; k < n - 1 - i; k++) {
      let temp = arr[k];
      if (arr[k] > arr[k + 1]) {
        isSwapping = true;
        arr[k] = arr[k + 1];
        arr[k + 1] = temp;
      }
    }

    if (!isSwapping) {
      break;
    }
  }
  return arr;
}

let arr = [5, 1, 1, 2, 0, 0];

console.log(bubbleSort(arr));
