/*
// Общие повторяющиеся элементы: 1, 3, 2
getSameCount([1, 3, 2, 2], [3, 1, 1, 2, 5]); // 3

// Общие повторяющиеся элементы: 4
getSameCount([1, 4, 4], [4, 8, 4]); // 1

// Общие повторяющиеся элементы: 1, 10
getSameCount([1, 10, 3], [10, 100, 35, 1]); // 2

// Нет элементов
getSameCount([], []); // 0
 */

import uniq from 'lodash/uniq';

const getSameCount = (xs, zs) => xs.reduce((acc, val) => (zs.includes(val) ? acc + 1 : acc), 0);

export default (a, b) => getSameCount(uniq(a), uniq(b));
