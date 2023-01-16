const identity = (n) => n
const inc = (n) => n + 1

const accumulate = (combiner, null_value, term, next, a, b) => (
  a > b ? null_value : combiner(
    term(a),
    accumulate(combiner, null_value, term, next, next(a), b)
  )
)
const accumulate_iter = (combiner, null_value, term, next, a, b) => {
  const iter = (a, res) => (
    a > b ? res : iter(
      next(a),
      combiner(res, term(a))
    )
  )

  return iter(a, null_value)
}

const sum = (term, next, a, b) => accumulate(
  (x, y) => x + y,
  0,
  term,
  next,
  a,
  b
)
const sum_iter = (term, next, a, b) => accumulate_iter(
  (x, y) => x + y,
  0,
  term,
  next,
  a,
  b
)

const sum_int = (a, b) => sum(identity, inc, a, b)
const sum_int_iter = (a, b) => sum(identity, inc, a, b)

console.log(sum_int(1, 10)) // 55
console.log(sum_int_iter(1, 10)) // 55
