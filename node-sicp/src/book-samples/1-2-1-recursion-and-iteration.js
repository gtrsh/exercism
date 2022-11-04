const factorial_recursion = (n) => (
  n === 1 ?
    1 :
    n * factorial_recursion(n - 1)
)

const fact_iter = (product, counter, max_count) => (
  counter > max_count ?
    product :
    fact_iter(
      counter * product,
      counter + 1,
      max_count
    )
)
const factorial = (n) => fact_iter(1, 1, n)

const factorial_closure = (n) => {
  const iter = (product, counter) => (
    counter > n ?
      product :
      iter(
        counter * product,
        counter + 1
      )
  )
  return iter(1, 1)
}

console.log(factorial_recursion(6))
console.log(factorial(6))
console.log(factorial_closure(6))
