const is_even = (n) => n % 2 === 0
const square = (n) => n ** 2

const exp_rec = (b, n) => n === 0 ? 1 : b * exp_rec(b, n - 1)

const exp = (b, n) => {
  const exp_iter = (cnt, product) => {
    return cnt === 0 ?
      product :
      exp_iter(cnt - 1, product * b)
  }

  return exp_iter(n, 1)
}

const exp_fast = (b, n) => {
  return n === 0 ? 1 :
    is_even(n) ? square(exp_fast(b, n / 2)) :
      b * exp_fast(b, n - 1)
}

console.log(exp_rec(2, 8))
console.log(exp(2, 8))
console.log(exp_fast(2, 8))
