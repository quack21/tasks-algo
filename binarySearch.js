const arr = [];
for (let i = 0; i < 4000000; i++) {
  arr[i] = i;
}

function binarySearch(arr, item) {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] == item) {
      return middle;
    }
    if (arr[middle] > item) {
      end = middle;
    }
    if (arr[middle] < item) {
      start = middle + 1;
    }
  }
  return 'Not in arr';
}

console.log(binarySearch(arr, 3999999));
