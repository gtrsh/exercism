import _ from 'lodash'

const functions = {
  right1: (items, n = 1) => _.take(items, n),
  wrong1: (items, n = 1) => (n > 1 ? items.slice() : items.slice(0, n)),
  wrong2: (items, n = 1) => (n <= items.length ? items.slice(0, n) : []),
  wrong3: (items, n = 5) => items.slice(0, n),
  wrong4: (items, n = 1) => (items.length === 0 ? [0] : items.slice(0, n)),
  wrong5: (items, n = 1) => items.slice(0, n)
}

export default () => {
  const name = process.env.FUNCTION_VERSION || 'right1'
  return functions[name]
}
