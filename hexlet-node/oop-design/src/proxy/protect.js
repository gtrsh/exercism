const validateProps = (target, name) => {
  if (!(name in target)) {
    throw new Error(`Property "${name}" doesn't exist`)
  }

  if (name.startsWith('_')) {
    throw new Error(`Property "${name}" is protected`)
  }
}

const handlers = {
  get: (target, name) => {
    validateProps(target, name)
    const property = target[name]

    return (typeof property === 'function')
      ? property.bind(target)
      : property
  },
  set: (target, name, value) => {
    validateProps(target, name)
    target[name] = value

    return true
  }
}

const protect = (obj) => new Proxy(obj, handlers)

export {
  protect
}
