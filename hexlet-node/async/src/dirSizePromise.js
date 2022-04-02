import * as path from 'node:path'
import * as fs from 'node:fs/promises'

import _ from 'lodash'

const getDirectorySize = (dirname) => {
  const promise = fs.readdir(dirname).then((filenames) => {
    const filepaths = filenames.map((name) => path.join(dirname, name))
    const promises = filepaths.map(fs.stat)

    return Promise.all(promises)
  })

  return promise.then((stats) => _.sumBy(stats.filter((stat) => stat.isFile()), 'size'))
}

export {
  getDirectorySize
}
