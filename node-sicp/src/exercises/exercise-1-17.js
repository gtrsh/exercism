const is_even = (n) => n % 2 === 0
const double = (n) => n + n
const halve = (n) => n / 2
const dec = (n) => n - 1

const times = (a, n) => {
  return n === 0 ? 0 :
    is_even(n) ? double(times(a, halve(n))) :
      a + times(a, dec(n))
}

console.log(times(3, 9)) // 27

// console.log(times(8, 1000)) | 8000
// console.log(fn_call)        | 16
