const removeFirstLevel = (xs) => xs.filter(Array.isArray).flat()

export {
  removeFirstLevel
}
