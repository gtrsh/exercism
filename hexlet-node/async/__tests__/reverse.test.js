import fs from 'fs/promises'
import { reverse } from '../src/reverse'

const reverseLines = (data) => data.split('\n').reverse().join('\n')

test('reverse 1', async () => {
  const content = 'one\ntwo'
  const filepath = '/tmp/example'
  await fs.writeFile(filepath, content)

  await expect(reverse(filepath)).resolves.not.toThrow()
  await expect(fs.readFile(filepath, 'utf-8')).resolves.toEqual(reverseLines(content))
})
