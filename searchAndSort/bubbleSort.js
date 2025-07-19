function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < arr.length; i++) {
    let isSwapping = false;
    for (let k = 0; k < n - 1 - i; k++) {
      console.log(i, "I value");
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

let arr = [1, 2, 3, 4, 5, 6];

console.log(bubbleSort(arr));
