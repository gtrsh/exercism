const is_even = (n) => n % 2 === 0
const double = (n) => n + n
const halve = (n) => n / 2
const dec = (n) => n - 1

const times = (b, n) => {
  const times_iter = (a, b, n) => {
    if (n === 0) {
      return a
    } else {
      return is_even(n) ?
        times_iter(a, double(b), halve(n)) :
        times_iter(a + b, b, dec(n))
    }
  }

  return times_iter(0, b, n)
}

console.log(times(3, 9)) // 27

// console.log(times(8, 1000)) | 8000
// console.log(fn_call)        | 16
