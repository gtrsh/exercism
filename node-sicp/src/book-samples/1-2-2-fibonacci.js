/*
tracing body:
console.log(`current arg is: ${n}`)
return (
  n === 0
    ? 0
    : n === 1
      ? 1
      : fib(n - 1) + fib(n - 2)
)
 */

const fib = (n) => (
  n === 0
    ? 0
    : n === 1
      ? 1
      : fib(n - 1) + fib(n - 2)
)

console.log(fib(8))   // 21
