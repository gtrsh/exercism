const inc = (x) => x + 1
const dec = (x) => x - 1

const plus_a = (a, b) => {
  return a === 0 ? b : inc(
    plus_a(dec(a), b)
  )
}

const plus_b = (a, b) => {
  return a === 0 ? b : plus_b(dec(a), inc(b))
}

console.log(plus_a(4, 5));
console.log(plus_b(4, 5));
