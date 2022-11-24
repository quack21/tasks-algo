/**
 * @param {number} N - целое число, количество сотрудников готовых к объединению
 * @param {number[]} staff - массив длины N с грейдами доступных сотрудников
 * @param {number} K - целое число, количество доступных клавиатур
 * @returns {number}
 */

function solution(N, staff, K) {
  if (N > 10000) {
    var sum = 0;
    var values = [
      25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0,
    ];
    var indexValue = 0;
    while (true) {
      for (let i = 0; K >= 0, i < N; i++) {
        if (staff[i] == values[indexValue]) {
          sum += staff[i];
          staff[i] = 0;
          K -= 1;
          if (K == 0) {
            return sum;
          }
        }
      }
      indexValue += 1;
    }
  } else {
    return staff
      .sort((a, b) => b - a)
      .slice(0, K)
      .reduce((a, b) => (x += b), (x = 0));
  }
}

console.log(solution(8, [3, 2, 3, 4, 5, 6, 7, 8], 4));
