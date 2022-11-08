const A = (x, y) => (
  y === 0
    ? 0
    : x === 0
    ? 2 * y
    : y === 1
    ? 2
    : A(x - 1, A(x, y - 1))
)

const a = A(1, 10)
const b = A(2, 4)
const c = A(3, 3)
