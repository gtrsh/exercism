import { removeFirstLevel } from '../src/removeFirstLevel.js'

test('removeFirstLevel', () => {
  const tree1 = []
  const result1 = []
  expect(removeFirstLevel(tree1)).toEqual(result1)

  const tree2 = [1, 100, 3]
  const result2 = []
  expect(removeFirstLevel(tree2)).toEqual(result2)

  const tree3 = [[1, [3, 2]], 2, { a: 1 }, [3, 5], 2]
  const result3 = [1, [3, 2], 3, 5]
  expect(removeFirstLevel(tree3)).toEqual(result3)
})
