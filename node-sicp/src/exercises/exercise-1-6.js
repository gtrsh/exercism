const DELTA = 0.000000001

const abs = (x) => Math.abs(x)
const square = (x) => x ** 2
const average = (x, y) => (x + y) / 2
const improve = (guess, x) => average(guess, x / guess)
const cond = (pred, then_clause, else_clause) => pred ? then_clause : else_clause

const is_good_enough = (guess, x) => abs(square(guess) - x) < DELTA

const sqrt_iter = (guess, x) => cond(
  is_good_enough(guess, x),
  guess,
  sqrt_iter(
    improve(guess, x),
    x
  )
)

const sqrt = (x) => sqrt_iter(1, x)

// RangeError: Maximum call stack size exceeded
// will happened when we try to call function
console.log(sqrt(9))
