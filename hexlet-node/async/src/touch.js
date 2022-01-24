import fs from 'fs/promises'

const touch = (file) => fs.access(file).catch(() => fs.writeFile(file, ''))

export {
  touch
}
