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
// will happened when we try to call function sqrt
// because when interpreter call cond fn its try to
// compute all its arguments which contain sqrt_iter
// so we occurred in infinite recursion sqrt_iter calls
//
// That's why we use ternary operator instead
// because its lazy and not eval its right part if
// predicate is true
console.log(sqrt(9))
