const inp = [[1, 'X'], [1, 'X', 2], ['X', 2], ['X'], [1, 'X', 2], [1, 'X', 2]];

function permute(permutation) {
  var length = permutation.length,
    result = [permutation.slice()],
    c = new Array(length).fill(0),
    i = 1,
    k,
    p;

  while (i < length) {
    if (c[i] < i) {
      k = i % 2 && c[i];
      p = permutation[i];
      permutation[i] = permutation[k];
      permutation[k] = p;
      ++c[i];
      i = 1;
      result.push(permutation.slice());
    } else {
      c[i] = 0;
      ++i;
    }
  }
  return result;
}

const ans = [];

for (i in inp) {
  ans.push(permute(inp[i]));
}

const ans2 = [];
const obj = {};

for (i in ans) {
  let keyValue = ans[i];
  obj[i] = [];
  for (j in keyValue) {
    obj[i].push(keyValue[j][0]);
  }
}

console.log(obj);
