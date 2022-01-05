import { bind } from '../src/bind.js'

test('bind sum', () => {
  const obj = { number: 5 }
  const fn1 = function fn (number) {
    return number + this.number
  }
  const fnWithContext = bind(obj, fn1)

  expect(fnWithContext(3)).toBe(8)
  expect(fnWithContext(0)).toBe(5)
  expect(fnWithContext.call({ number: 11 }, 3)).toBe(8)
})

test('bind sum, sub', () => {
  const obj = { number: 7 }
  const fn2 = function fn (number1, number2) {
    return number1 + this.number - number2
  }
  const fn2WithContext = bind(obj, fn2)

  expect(fn2WithContext(3, 1)).toBe(9)
  expect(fn2WithContext(0, -3)).toBe(10)
  expect(fn2WithContext.call({ number: 12 }, 5, 8)).toBe(4)
})

test('bind multi', () => {
  const obj = { number: 2 }
  const fn1 = function fn (number) {
    return number * this.number
  }
  const fnWithContext = bind(obj, fn1)

  expect(fnWithContext(3)).toBe(6)
  expect(fnWithContext(0)).toBe(0)
  expect(fnWithContext.call({ number: 6 }, 3)).toBe(6)
})
