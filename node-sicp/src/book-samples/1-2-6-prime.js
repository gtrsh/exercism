const square = (n) => n ** 2
const divides = (a, b) => b % a === 0

const find_divisor = (n, test_divisor) => {
  return square(test_divisor) > n ? n :
    divides(test_divisor, n) ? test_divisor :
      find_divisor(n, test_divisor + 1)
}

const smallest_divisor = (n) => find_divisor(n, 2)
const is_prime = (n) => n === smallest_divisor(n)

console.log(is_prime(4)) // false
console.log(is_prime(13)) // true

// exercise 1.21
console.log(smallest_divisor(199))    // 199
console.log(smallest_divisor(1999))   // 1999
console.log(smallest_divisor(19999))  // 7
