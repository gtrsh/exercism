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
