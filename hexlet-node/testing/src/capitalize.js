const capitalize = (str) => {
  const [head, ...tail] = str
  return head.toUpperCase().concat(...tail)
}

export {
  capitalize
}
