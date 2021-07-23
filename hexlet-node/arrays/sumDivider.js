export const calculateSum = (n) => (xs) => xs.reduce((acc, val) => (val % n === 0 ? acc + val : acc), 0);
