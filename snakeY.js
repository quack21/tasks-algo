/**
 * @param {string[]} field - описание поля в виде массива строк
 * @param {string} moves - строка со всеми движениями змейки
 * @returns {[number[], number]}
 */
module.exports = function (field, moves) {
  const eats = ['Y', 'A', 'N', 'D', 'E', 'X'];
  var x = 0;
  var y = 2;
  var N = 3;
  const movesArray = moves.split(' ');
  for (i in field) {
    field[i] = field[i].split('');
  }
  for (var i = 0; i < movesArray.length; i += 2) {
    var amount = Number(movesArray[i + 1]);
    switch (movesArray[i]) {
      case 'U':
        amount = x - amount;
        while (x != amount) {
          x--;
          if (eats.indexOf(field[x][y]) != -1) {
            N += 1;
          }
        }
        break;
      case 'R':
        amount += y;
        while (y != amount) {
          y++;
          if (eats.indexOf(field[x][y]) != -1) {
            N += 1;
          }
        }
        break;
      case 'D':
        amount += x;
        while (x != amount) {
          x++;
          if (eats.indexOf(field[x][y]) != -1) {
            N += 1;
          }
        }
        break;
      case 'L':
        amount = y - amount;
        while (y != amount) {
          y--;
          if (eats.indexOf(field[x][y]) != -1) {
            N += 1;
          }
        }
        break;
    }
  }
  return [[x, y], N];
};
