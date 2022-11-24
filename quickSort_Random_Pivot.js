function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let min = 1;
  let max = arr.length - 1;
  let rand = Math.floor(min + Math.random() * (max + 1 - min));
  let pivot = arr[rand];
  const less = [];
  const greater = [];
  arr.splice(arr.indexOf(pivot), 1); // убираем pivot из массива
  arr = [pivot].concat(arr); // добавляем pivot в начало списка
  for (let i = 1; i < arr.length; i++) {
    if (pivot > arr[i]) {
      less.push(arr[i]);
    } else {
      greater.push(arr[i]);
    }
  }
  return quickSort(less).concat(pivot, quickSort(greater));
}

const arr = [];

for (let i = 0; i < 5; i++) {
  arr.push(i);
}

console.log(quickSort(arr));
