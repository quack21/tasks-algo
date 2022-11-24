function decode(message, replaces) {
  var changeFrom = [];
  var changeTo = [];
  var answer = '';
  var notZeroString = true;
  for (i in replaces) {
    changeFrom.unshift(Object.values(replaces[i])[0]);
    changeTo.unshift(Object.values(replaces[i])[1]);
  }
  for (var i = 0; i < message.length; i++) {
    var nothingChanged = answer;
    var checkIndex = 0;
    for (j in changeFrom) {
      if (message[i] == changeFrom[j][0]) {
        if (message.substring(i, changeFrom[j].length + i) == changeFrom[j]) {
          answer += changeTo[j];
          if (changeTo[j] == '') {
            notZeroString = false;
          }
          if (changeFrom[j].length != 1) {
            checkIndex += changeFrom[j].length - 1;
          }
          break;
        }
      }
    }
    if (answer == nothingChanged && notZeroString) {
      answer += message[i];
    }
    notZeroString = true;
    i += checkIndex;
  }
  return answer;
}

module.exports = { decode };
