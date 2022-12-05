const fn_rec = (n) => (
  n >= 3 ?
    fn_rec(n - 1) + (2 * fn_rec(n - 2)) + (3 * fn_rec(n - 3)) : n
)

console.log(fn_rec(6)) // 59
console.log(fn_rec(7)) // 142
console.log(fn_rec(8)) // 335

const fn = (n) => {
  const fn_iter = (a, b, c, cnt) => {
    return cnt < 3 ?
      a :
      fn_iter(a + (2 * b) + (3 * c), a, b, cnt - 1)
  }

  return n < 3 ? n : fn_iter(2, 1, 0, n);
}

console.log(fn(6))
console.log(fn(7))
console.log(fn(8))
