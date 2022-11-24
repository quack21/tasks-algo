const arr = [
  1, 43546, 454, 4, 142, 52, 12435, 4, 5524, 4, 41, 52, 46786, 67, 34, 556, 75, 64523, 25, 657,
  65324, 546434, 356, 456, 312, 5364, 557464, 5, 124566, 5125, 4, 1234, 21, 4, 1251, 234, 5, 62,
  324, 57, 34232, 14, 56, 42312, 456, 76, 2, 3454, 534, 345, 2, 546, 234, 5235, 6,
];

function biggestElem(arr) {
  if (arr.length == 1) {
    return arr[0];
  } else {
    if (arr[0] > arr[1]) {
      arr[1] = arr[0];
      return biggestElem(arr.splice(1, arr.length - 1));
    } else {
      return biggestElem(arr.splice(1, arr.length - 1));
    }
  }
}

console.log(biggestElem(arr));
