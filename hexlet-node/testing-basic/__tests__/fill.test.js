import fill from '../src/fill'

let xs

beforeEach(() => {
  xs = [1, 2, 3, 4]
})

// BEGIN (write your solution here)
test('shoud works main flow', () => {
  expect(fill(xs, '_', 1, 2)).toEqual([1, '_', 3, 4])
})

test('should use default start and end', () => {
  expect(fill(xs, '*')).toEqual(['*', '*', '*', '*'])
})

test('should works with start >= length', () => {
  expect(fill(xs, '*', 10, 12)).toEqual([1, 2, 3, 4])
})

test('should works with end > length', () => {
  expect(fill(xs, '*', 0, 12)).toEqual(['*', '*', '*', '*'])
})

test('should works with start >= end', () => {
  expect(fill(xs, '*', 1, 1)).toEqual([1, 2, 3, 4])
})
