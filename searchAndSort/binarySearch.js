function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (arr[mid] === target) {
            return mid; // Target found
        } else if (arr[mid] < target) {
            left = mid + 1; // Search in the right half
        } else {
            right = mid - 1; // Search in the left half
        }
    }

    return -1; // Target not found
}
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target = 5;
let result = binarySearch(arr, target);
console.log(result); // Output: 4 (index of the target)