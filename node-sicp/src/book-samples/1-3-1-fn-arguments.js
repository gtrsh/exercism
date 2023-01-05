const identity = (n) => n
const inc = (n) => n + 1
const cube = (n) => n ** 3

const sum_integer = (a, b) => (
  a > b ? 0 : a + sum_integer(a + 1, b)
)

const sum_cubes = (a, b) => (
  a > b ? 0 : cube(a) + sum_cubes(a + 1, b)
)

const sum_pi = (a, b) => (
  a > b ? 0 : 1 / (a * (a + 2)) + sum_pi(a + 4, b)
)

console.log(sum_pi(1, 1000) * 8)  // 3.139592655589783
console.log(sum_integer(1, 10))   // 55
console.log(sum_cubes(1, 10))     // 3025

const sum = (term, next, a, b) => (
  a > b ? 0 : term(a) + sum(term, next, next(a), b)
)

const sum_integer_gen = (a, b) => sum(identity, inc, a, b)
const sum_cubes_gen = (a, b) => sum(cube, inc, a, b)
const sum_pi_gen = (a, b) => {
  const pi_term = (x) => 1 / (x * (x + 2))
  const pi_next = (x) => x + 4

  return sum(pi_term, pi_next, a, b)
}

console.log(sum_pi_gen(1, 1000) * 8)  // 3.139592655589783
console.log(sum_integer_gen(1, 10))   // 55
console.log(sum_cubes_gen(1, 10))     // 3025
