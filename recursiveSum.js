const arr = [];

for (let i = 0; i < 1003; i++) {
  arr.push(i);
}

let arr2 = arr.slice(0);

function sum(arr) {
  if (arr.length == 0) {
    return 0;
  } else if (arr.length == 1) {
    return arr[0];
  } else {
    return arr[0] + sum(arr.splice(1, arr.length - 1));
  }
}

console.log(sum(arr));
console.log(arr2.reduce((a, b) => a + b, 0));
