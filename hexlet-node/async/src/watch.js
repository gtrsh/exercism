import fs from 'fs'

const watch = (filepath, delay, cb) => {
  const timerId = setInterval(() => {
    fs.stat(filepath, (err, stat) => {
      if (err) {
        clearInterval(timerId)
        return cb(err)
      }
      if (Date.now() <= stat.mtimeMs + delay) {
        cb(null)
      }
    })
  }, delay)

  return timerId
}

export {
  watch
}
