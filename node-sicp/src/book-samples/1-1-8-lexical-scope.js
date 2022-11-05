const DELTA = 0.000000001

const sqrt = (x) => {
  const abs = (x) => Math.abs(x)
  const square = (x) => x ** 2
  const average = (x, y) => (x + y) / 2
  const improve = (guess) => average(guess, x / guess)

  const is_good_enough = (guess) => abs(square(guess) - x) < DELTA

  const sqrt_iter = (guess) => (
    is_good_enough(guess) ? guess : sqrt_iter(improve(guess))
  )

  return sqrt_iter(1)
}

console.log(sqrt(9))
