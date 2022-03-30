import { compareFileSizes } from '../src/compareSize'

test('compareFileSizes 1', () => {
  const filepath = '__fixtures__/f1'
  return new Promise((resolve) => {
    compareFileSizes(filepath, filepath, (_error1, result) => {
      expect(result).toBe(0)
      resolve(0)
    })
  })
})

test('compareFileSizes 2', () => {
  const filepath1 = '__fixtures__/f1'
  const filepath2 = '__fixtures__/f2'
  return new Promise((resolve) => {
    compareFileSizes(filepath1, filepath2, (_error1, result) => {
      expect(result).toBe(1)
      resolve()
    })
  })
})

test('compareFileSizes 3', () => {
  const filepath1 = '__fixtures__/f2'
  const filepath2 = '__fixtures__/f1'
  return new Promise((resolve) => {
    compareFileSizes(filepath1, filepath2, (_error1, result) => {
      expect(result).toBe(-1)
      resolve()
    })
  })
})
