let arrForRecursive = [
  1, 2, 34, 5, 6, 78, 765, 43, 4567, 345677, 26352, 56, 6746, 3521, 56, 6462, 31452, 535, 65,
  652324133, 565463452, 425, 66, 543, 23, 456, 77, 65, 43223, 45677, 65432, 345678, 0, 987, 654,
  123456543, 45, 65432, 25674, 361, 252536345, 3455423, 23453, 65634, 234, 1234, 56, 724, 63524,
  4253647, 656, 4, 3, 3, 2, 2, 456645342, 45625, 11, 56734, 357856456, 346, 345, 45, 72, 35, 234,
  56, 3, 45, 3256, 45, 1524, 5354, 45, 134, 12543, 452345, 2345, 3425, 65, 43, 45, 234, 24,
];

function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let min = 1;
  let max = arr.length - 1;
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  let pivot = arr[rand];
  arr.splice(rand, 1);
  arr = [pivot].concat(arr);
  let less = [];
  let greater = [];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return quickSort(less).concat(pivot, quickSort(greater));
}

arrForRecursive = quickSort(arrForRecursive);

function recursiveBinarySearch(arr, item) {
  if (arr.length == 0) {
    return 'Not in array';
  } else {
    let start = 0;
    let end = arr.length - 1;
    let middle = Math.floor((start + end) / 2);
    let guess = arr[middle];
    if (guess == item) {
      return guess;
    } else if (guess > item) {
      end = middle;
    } else {
      start = middle + 1;
    }
    return '' + recursiveBinarySearch(arr.splice(start, end), item);
  }
}

console.log(recursiveBinarySearch(arrForRecursive, 635242));
