const sum = (term, next, a, b) => (
  a > b ? 0 : term(a) + sum(term, next, next(a), b)
)

const simpson = (f, a, b, n) => {}
