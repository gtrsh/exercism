import fs from 'fs'
import waterfall from 'async/waterfall'

const unionFiles = (inputPath1, inputPath2, outputPath, cb) => {
  waterfall([
    (fn) => fs.readFile(inputPath1, fn),
    (data1, fn) => fs.readFile(inputPath2, (err, data2) => fn(err, data1, data2)),
    (data1, data2, fn) => fs.writeFile(outputPath, `${data1}${data2}`, fn)
  ], cb)
}

export {
  unionFiles
}
