// TODO exercise
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
          // compute p
          // compute q
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
