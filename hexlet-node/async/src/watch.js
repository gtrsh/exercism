import fs from 'fs'

const watch = (filepath, delay, cb) => {
  let lastCheckTime = Date.now()

  const check = (timerId) => {
    fs.stat(filepath, (err, stats) => {
      if (err) {
        clearInterval(timerId)
        return cb(err)
      }
      const { mtimeMs } = stats
      if (mtimeMs > lastCheckTime) {
        cb(null)
        lastCheckTime = mtimeMs
      }
    })
  }

  const timerId = setInterval(() => check(timerId), delay)
  return timerId
}

export {
  watch
}
