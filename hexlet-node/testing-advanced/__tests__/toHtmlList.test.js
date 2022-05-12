import { fileURLToPath } from 'url'
import fs from 'fs/promises'
import path from 'path'
import getFunction from '../src/toHtmlList'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const toHtmlList = getFunction()

let expected
const formats = ['csv', 'json', 'yml']

const getFixturePath = (name) => path.join(__dirname, '..', '__fixtures__', 'toHtmlList', name)

beforeAll(async () => {
  expected = await fs.readFile(getFixturePath('result.html'), 'utf-8')
})

test.each(formats)('%s', async (format) => {
  const filePath = getFixturePath(`list.${format}`)
  const actual = await toHtmlList(filePath)
  expect(actual).toEqual(expected.trim())
})
