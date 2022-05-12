import fs from 'fs/promises'
import path from 'path'
import yaml from 'js-yaml'
import papa from 'papaparse'

const parsers1 = {
  csv: (content) => papa.parse(content).data[0],
  json: JSON.parse,
  yml: yaml.load
}

const genSolution = (parsers) => async (filepath) => {
  const content = await fs.readFile(filepath, 'utf-8')
  const type = path.extname(filepath).slice(1)
  const items = parsers[type](content)
  const lis = items.map((item) => `  <li>${item}</li>`)
  return `<ul>\n${lis.join('\n')}\n</ul>`
}

const functions = {
  right1: genSolution(parsers1)
}

export default () => {
  const name = 'right1'
  return functions[name]
}
