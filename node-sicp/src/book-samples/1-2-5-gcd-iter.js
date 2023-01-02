const gcd = (n, m) => (
  m === 0 ? n : gcd(m, n % m)
)

console.log(gcd(28, 16)) // 4
