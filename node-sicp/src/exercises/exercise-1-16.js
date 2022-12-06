const is_even = (n) => n % 2 === 0
const square = (n) => n ** 2

const exp = (b, n) => {
  const exp_iter = (a, b, n) => {
    if (n === 0) {
      return a
    } else {
      return is_even(n) ?
        exp_iter(a, square(b), n / 2) :
        exp_iter(a * b, b, n - 1)
    }
  }

  return exp_iter(1, b, n)
}

console.log(exp(2, 10))
