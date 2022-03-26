const makeStack = () => {
  const stack = []
  return {
    isEmpty: () => stack.length === 0,
    push: (item) => stack.push(item),
    pop: () => {
      if (stack.length === 0) throw new Error('Stack is empty!')
      return stack.pop()
    }
  }
}

export {
  makeStack
}
