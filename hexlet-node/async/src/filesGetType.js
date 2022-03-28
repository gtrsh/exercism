import * as fs from 'node:fs/promises'

const getTypes = (fileslist) => fileslist.reduce((acc, file) => (
  acc.then((resultData) => {
    // eslint-disable-next-line
    return fs.stat(file)
      .then((data) => data.isDirectory() ? resultData.concat('directory') : resultData.concat('file'))
      .catch(() => resultData.concat(null))
  })
), Promise.resolve([]))

export {
  getTypes
}
