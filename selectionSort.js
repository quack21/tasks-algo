function findSmallest(arr) {
  let smallestIndex = 0;
  let smallest = arr[smallestIndex];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

function selectionSort(arr) {
  let newArr = [];
  let len = arr.length;
  for (let i = 0; i < len; i++) {
    let smallest = findSmallest(arr);
    newArr.push(arr[smallest]);
    arr.splice(smallest, 1);
  }
  return newArr;
}

console.log(selectionSort([3, 4, 51, 34, 5, 43, 13, 45, 55, 26, 765, 411, 56]));
