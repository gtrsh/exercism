const sum = (term, next , a, b) => {
  const iter = (a, result) => (
    a > b ? result : iter(next(a), result + term(a))
  )

  return iter(a, 0)
}

// tests
const identity = (n) => n
const inc = (n) => n + 1
const cube = (n) => n ** 3

const sum_integer_gen = (a, b) => sum(identity, inc, a, b)
const sum_cubes_gen = (a, b) => sum(cube, inc, a, b)

console.log(sum_integer_gen(1, 10)) // 55
console.log(sum_cubes_gen(1, 10))   // 3025
