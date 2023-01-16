// NOTE: run with node --stack-size=65500 for better pi calc

const identity = (n) => n
const inc = (n) => n + 1
const wallis = (n) => 4 * n ** 2 / (4 * n ** 2 - 1)

// TODO: create recursive variant of product

const product = (term, next , a, b) => {
  const iter = (a, result) => (
    a > b ? result : iter(next(a), result * term(a))
  )

  return iter(a, 1)
}

const factorial = (n) => product(identity, inc, 1, n)
const pi_prod = (n) => product(wallis, inc, 1, n) * 2

console.log(factorial(6)) // 720
console.log(pi_prod(1000)) // 3.140807746030402
