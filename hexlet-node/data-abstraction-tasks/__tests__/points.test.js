import {
  calculateDistance,
  getMidpoint
} from '../src/points.js'

test('point1', () => {
  const point1 = [0, 0]
  const point2 = [3, 4]
  expect(calculateDistance(point1, point2)).toBe(5)
})

test('point2', () => {
  const point1 = [-1, -4]
  const point2 = [-1, -10]
  expect(calculateDistance(point1, point2)).toBe(6)
})

test('point3', () => {
  const point1 = [1, 10]
  const point2 = [1, 3]
  expect(calculateDistance(point1, point2)).toBe(7)
})

test('mid point1', () => {
  const point1 = { x: 0, y: 0 }
  const point2 = { x: 4, y: 4 }

  const point = getMidpoint(point1, point2)
  expect(point).toEqual({ x: 2, y: 2 })
})

test('mid point2', () => {
  const point1 = { x: 2, y: 2 }
  const point2 = { x: 4, y: 4 }

  const point = getMidpoint(point1, point2)
  expect(point).toEqual({ x: 3, y: 3 })
})
