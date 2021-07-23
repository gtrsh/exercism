/*
// Первое число – сколько забила Канада
// Второе число – сколько забила СССР
const scores = [
  [3, 7], // Первая игра
  [4, 1], // Вторая игра
  [4, 4],
  [3, 5],
  [4, 5],
  [3, 2],
  [4, 3],
  [6, 5],
];

getSuperSeriesWinner(scores); // 'canada'
 */

export default (xs) => {
    const matchResult = xs.map(([c, u]) => {
        if (c > u) {
            return 'canada';
        }

        if (c < u) {
            return 'ussr';
        }

        return 'none';
    });

    const canadaWins = matchResult.filter((i) => i === 'canada').length;
    const ussrWins = matchResult.filter((i) => i === 'ussr').length;

    if (canadaWins > ussrWins) {
        return 'canada';
    }

    if (ussrWins > canadaWins) {
        return 'ussr';
    }

    return null;
};
