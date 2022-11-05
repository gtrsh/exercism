const DELTA = 0.000000001

const abs = (x) => Math.abs(x)
const square = (x) => x ** 2
const average = (x, y) => (x + y) / 2
const improve = (guess, x) => average(guess, x / guess)

const is_good_enough = (guess, x) => abs(square(guess) - x) < DELTA

const sqrt_iter = (guess, x) => (
  is_good_enough(guess, x) ? guess : sqrt_iter(improve(guess, x), x)
)

const sqrt = (x) => sqrt_iter(1, x)

console.log(sqrt(9))
