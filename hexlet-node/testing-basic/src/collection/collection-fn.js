import _ from 'lodash'

const functions = {
  right1: _.get,
  fail1: (obj = {}, key = null) => obj[key],
  fail2: (obj = {}, key = null, defaultValue = null) => defaultValue || obj[key],
  fail3: (obj = {}, key = null, defaultValue = null) => ((obj[key] && !defaultValue)
    ? null
    : _.get(obj, key, defaultValue)
  )
}

export default () => {
  const name = process.env.FUNCTION_VERSION || 'right1'
  return functions[name]
}
