import * as st from '../src/stack'

test('main stack flow', () => {
  const stack = st.makeStack()

  stack.push('one')
  stack.push('two')
  expect(stack.pop()).toEqual('two')
  expect(stack.pop()).toEqual('one')
})

test('stack isEmpry', () => {
  const stack = st.makeStack()

  expect(stack.isEmpty()).toBe(true)
  stack.push('item')
  expect(stack.isEmpty()).toBe(false)
  stack.pop()
  expect(stack.isEmpty()).toBe(true)
})

test('pop in empty stack', () => {
  const stack = st.makeStack()

  expect(() => stack.pop()).toThrow()
})
