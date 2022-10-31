const x0 = 10
const x1 = 5 + 3 + 4
const x2 = 9 - 1
const x3 = 6 / 2
const x4 = 2 * 4 + (4 - 6)

const a = 3
const b = a + 1 // 4

const tmp_e1 = (a + b + a * b) // 19
const tmp_e2 = (a === b) // false
const tmp_e3 = (
  b > a && b < a * b ? b : a
)
const tmp_e4 = (
  a === 4
  ? 6
  : b === 4
  ? 6 + 7 + a
  : 25
)
const tmp_e5 = (
  2 + (b > a ? b : a)
)
const tmp_e6 = (
  (
    a > b
    ? a
    : a < b
    ? b
    : -1
  ) *
  (a + 1)
)

export {
  x0, x1, x2, x3, x4, a, b,
  tmp_e1, tmp_e2, tmp_e3, tmp_e4, tmp_e5, tmp_e6
}
