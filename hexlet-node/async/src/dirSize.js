import fs from 'fs'
import path from 'path'
import _ from 'lodash'
import async from 'async'

const getDirectorySize = (dir, cb) => {
  fs.readdir(dir, (err, fileNames) => {
    if (err) {
      cb(err)
      return
    }

    const files = fileNames.map((name) => path.join(dir, name))
    async.map(files, fs.stat, (err, results) => {
      if (err) {
        cb(err)
        return
      }

      const filesSizeArray = (
        results
          .filter(file => file.isFile())
          .map(({ size }) => size)
      )
      cb(null, _.sum(filesSizeArray))
    })
  })
}

export {
  getDirectorySize
}
