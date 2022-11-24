const fs = require('fs');
var content = fs.readFileSync('five/component.js', 'utf-8');

function solve(content) {
  var arrayComponent = content.split('\n');
  var startLineIndex = [];
  var endLineIndex = [];
  var names = ['imports'];

  for (lineIndex in arrayComponent) {
    if (arrayComponent[lineIndex].indexOf("  it('") !== -1) {
      startLineIndex.push(Number(lineIndex));
      var line = arrayComponent[lineIndex];
      var startIndex = line.indexOf("  it('") + 4;
      var endIndex = line.indexOf("', function", startIndex);
      names.push(line.substring(startIndex, endIndex));
    }
    if (arrayComponent[lineIndex].indexOf("  it.skip('") !== -1) {
      startLineIndex.push(Number(lineIndex));
      var line = arrayComponent[lineIndex];
      var startIndex = line.indexOf("  it.skip('") + 9;
      var endIndex = line.indexOf("', function", startIndex);
      names.push(line.substring(startIndex, endIndex));
    }
    if (arrayComponent[lineIndex].indexOf("describe('") !== -1) {
      endLineIndex.unshift(Number(lineIndex));
    }
  }

  for (i in startLineIndex) {
    if (i == 0) continue;
    endLineIndex.push(startLineIndex[i] - 1);
  }

  startLineIndex.unshift(0);
  endLineIndex.push(arrayComponent.length - 3);

  var importsAndComments = '';
  for (var k = 0; k <= endLineIndex[0]; k++) {
    importsAndComments = importsAndComments.concat(arrayComponent[k], '\n');
  }

  var ans = [];
  for (i in names) {
    var answerString = '';
    if (i == 0) continue;
    answerString += importsAndComments;
    for (var j = startLineIndex[i]; j <= endLineIndex[i]; j++) {
      answerString += arrayComponent[j] + '\n';
    }
    answerString += '});\n';
    ans.push(answerString);
  }

  return ans;
}

console.log(solve(content));
