import fs from 'fs'
import path from 'path'
import _ from 'lodash'
import async from 'async'

const getDirectorySize = (dir, cb) => {
  fs.readdir(dir, (err, fileNames) => {
    if (err) {
      return cb(err)
    }

    const files = fileNames.map((name) => path.join(dir, name))
    async.map(files, fs.stat, (err, stats) => {
      if (err) {
        return cb(err)
      }

      const filesSizeArray = _.sumBy(stats.filter((stat) => stat.isFile()), 'size')
      cb(null, filesSizeArray)
    })
  })
}

export {
  getDirectorySize
}
