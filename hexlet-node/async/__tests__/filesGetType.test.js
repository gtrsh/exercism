import { getTypes } from '../src/filesGetType'

test('getTypes 1', () => {
  const actual = getTypes(['undefined'])
  return expect(actual).resolves.toEqual([null])
})

test('getTypes 2', () => {
  const actual = getTypes(['/home'])
  return expect(actual).resolves.toEqual(['directory'])
})

test('getTypes 3', () => {
  const actual = getTypes(['/etc/hosts'])
  return expect(actual).resolves.toEqual(['file'])
})

test('getTypes 4', () => {
  const actual = getTypes(['/etc/hosts', '/undefined', '/etc'])
  return expect(actual).resolves.toEqual(['file', null, 'directory'])
})

test('getTypes 5', () => {
  const actual = getTypes(['/undefined', '/etc/hosts', '/et'])
  return expect(actual).resolves.toEqual([null, 'file', null])
})
