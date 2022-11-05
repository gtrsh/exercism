const plus = (a, b) => a + b
const minus = (a, b) => a - b

/*

 a_plus_abs(1, 2) =>
 ternary evals to plus =>
 plus(1, 2) =>
 3

 a_plus_abs(2, -3) =>
 ternary evals to minus =>
 minus(2, -3) =>
 5

 */
const a_plus_abs = (a, b) => (b >= 0 ? plus : minus)(a, b)
