const bind = (context, fn) => (...args) => fn.apply(context, args)

export {
  bind
}
