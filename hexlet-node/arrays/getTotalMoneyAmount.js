/*
const money1 = [
  'eur 10', 'usd 1', 'usd 10', 'rub 50', 'usd 5',
];
getTotalAmount(money1, 'usd') // 16

const money2 = [
  'eur 10', 'usd 1', 'eur 5', 'rub 100', 'eur 20', 'eur 100', 'rub 200',
];
getTotalAmount(money2, 'eur') // 135
 */

export default (xs, currency) => (
    xs
        .map((i) => i.split(' '))
        .reduce((acc, [cr, val]) => (cr === currency ? acc + Number(val) : acc), 0)
);
