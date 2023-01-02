/*
tracing body:
const fib_iter = (a, b, count) => {
  console.log(`fib_iter(${a}, ${b}, ${count})`)
  return (
    count === 0 ? b : fib_iter(a + b, a, count - 1)
  )
}

output:
fib_iter(1, 0, 8)
fib_iter(1, 1, 7)
fib_iter(2, 1, 6)
fib_iter(3, 2, 5)
fib_iter(5, 3, 4)
fib_iter(8, 5, 3)
fib_iter(13, 8, 2)
fib_iter(21, 13, 1)
fib_iter(34, 21, 0)
21
 */

const fib = (n) => {
  const fib_iter = (a, b, count) => (
    count === 0 ? b : fib_iter(a + b, a, count - 1)
  )

  return fib_iter(1, 0, n)
}

console.log(fib(8))   // 21
console.log(fib(78))  // 8944394323791464 fn_call: 79
