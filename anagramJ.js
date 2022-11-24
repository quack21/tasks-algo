function makeObject(str) {
  let strObj = {};
  for (i in str) {
    let keyValue = str[i];
    strObj.hasOwnProperty(keyValue) ? (strObj[keyValue] += 1) : (strObj[keyValue] = 1);
  }
  return strObj;
}

function anagram(a, b) {
  aCharObj = makeObject(a);
  bCharObj = makeObject(b);

  if (Object.keys(aCharObj).length !== Object.keys(bCharObj).length) {
    return false;
  }

  for (let char in aCharObj) {
    if (aCharObj[char] !== bCharObj[char]) {
      return false;
    }
  }
  return true;
}

console.log(anagram('kekyS', 'Skeky'));
