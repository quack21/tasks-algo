const arr = [];

for (let i = 0; i < 1003; i++) {
  arr.push(i);
}

console.log(arr.length);

function elemCount(arr) {
  if (arr.length == 0) {
    return 0;
  } else if (arr.length == 1) {
    return 1;
  } else {
    return 1 + elemCount(arr.splice(1, arr.length - 1));
  }
}

console.log(elemCount(arr));
