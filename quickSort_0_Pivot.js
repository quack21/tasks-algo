const arr = [];

for (let i = 0; i < 999; i++) {
  arr.push(i);
}

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  } else {
    let pivot = arr[0];
    let less = [];
    let greater = [];
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] <= pivot) {
        less.push(arr[i]);
      } else {
        greater.push(arr[i]);
      }
    }
    return quickSort(less).concat(pivot, quickSort(greater));
  }
}

console.log(quickSort(arr));
