const inc = (x) => x + 1
const dec = (x) => x - 1

/*
========================================
plus(4, 5)
  1 + plus(3, 5)
    1 + (1 + plus(2, 5))
      1 + (1 + (1 + plus(1, 5)))
        1 + (1 + (1 + (1 + plus(0, 5))))
        1 + (1 + (1 + (1 + 5)))
      1 + (1 + (1 + 6))
    1 + (1 + 7)
  1 + 8
9
========================================
 */
const plus_a = (a, b) => {
  return a === 0 ? b : inc(
    plus_a(dec(a), b)
  )
}

/*
==========
plus(4, 5)
plus(3, 6)
plus(2, 7)
plus(1, 8)
plus(0, 0)
9
==========
 */
const plus_b = (a, b) => {
  return a === 0 ? b : plus_b(dec(a), inc(b))
}

console.log(plus_a(4, 5));
console.log(plus_b(4, 5));
