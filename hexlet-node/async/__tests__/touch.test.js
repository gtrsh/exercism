import os from 'os'
import fsp from 'fs/promises'
import _ from 'lodash'
import { touch } from '../src/touch'

test('touch 1', () => {
  const filepath = `${os.tmpdir()}/example`
  return fsp.unlink(filepath)
    .catch(_.noop)
    .then(() => touch(filepath))
    .then(() => fsp.access(filepath))
    // eslint-disable-next-line
    .then((data) => {
      expect(data).toBe()
    })
})

test('touch 2', () => {
  const filepath = `${os.tmpdir()}/example`
  return fsp.unlink(filepath)
    .catch(_.noop)
    .then(() => fsp.writeFile(filepath, 'content'))
    .then(() => touch(filepath)) // eslint-disable-next-line
    .then(() => fsp.readFile(filepath, 'utf-8')) // eslint-disable-next-line
    .then((data) => { // eslint-disable-next-line
      expect(data).toBe('content')
    })
})

test('touch 3', () => {
  const filepath = `${os.tmpdir()}/example`
  return fsp.unlink(filepath)
    .catch(_.noop)
    .then(() => fsp.writeFile(filepath, 'text'))
    .then(() => touch(filepath)) // eslint-disable-next-line
    .then(() => fsp.readFile(filepath, 'utf-8')) // eslint-disable-next-line
    .then((data) => { // eslint-disable-next-line
      expect(data).toBe('text')
    })
})
