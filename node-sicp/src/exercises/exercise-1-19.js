const is_even = (n) => n % 2 === 0
const halve = (n) => n / 2
const dec = (n) => n - 1

const fib_iter = (a, b, p, q, count) => {
  return count === 0 ?
    b :
      is_even(count) ?
        fib_iter(
          a,
          b,
          p ** 2 + q ** 2,
          2 * p * q + q ** 2,
          halve(count)
        ) :
        fib_iter(
          b * q + a * q + a * p,  // a -> bq + aq + ap
          b * p + a * q,          // b -> bp + aq
          p,
          q,
          dec(count)
        )
}

const fib = (n) => fib_iter(1, 0, 0, 1, n)

console.log(fib(8)) // 21
console.log(fib(78)) // 8944394323791464 fn_call: 11
