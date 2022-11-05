const sq_sum = (a, b) => a ** 2 + b ** 2

const threeNumSquare = (a, b, c) => {
  const x = Math.max(a, b)
  const y = Math.max(Math.min(a, b), c)

  return sq_sum(x, y)
}

export {
  threeNumSquare
}
