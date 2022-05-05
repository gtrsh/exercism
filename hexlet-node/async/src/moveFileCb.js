import fs from 'fs'

const move = (fileSource, fileDest, cb) => {
  fs.readFile(fileSource, (err, data) => {
    if (err) {
      return cb(err)
    }

    fs.writeFile(fileDest, data, (err) => {
      if (err) {
        return cb(err)
      }

      fs.unlink(fileSource, cb)
    })
  })
}

export {
  move
}
