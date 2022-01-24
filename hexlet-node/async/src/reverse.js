import fs from 'fs/promises'

const processData = (str) => str.split('\n').reverse().join('\n')
const reverse = (file) => fs.readFile(file, 'utf-8').then(
  (data) => fs.writeFile(file, processData(data))
)

export {
  reverse
}
