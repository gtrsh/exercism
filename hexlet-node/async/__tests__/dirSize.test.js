import path from 'path'
import fs from 'fs'
import { getDirectorySize } from '../src/dirSize.js'

const getPath = (dirpath) => path.join('__fixtures__', dirpath)

test('getDirectorySize', () => (
  // eslint-disable-next-line
  new Promise((done) => {
    const dirpath = getPath('/undefined')
    getDirectorySize(dirpath, (err) => {
      expect(err).not.toBeNull()
      done()
    })
  })
))

test('getDirectorySize2', () => (
  // eslint-disable-next-line
  new Promise((done) => {
    const dirpath = getPath('/opt')
    if (!fs.existsSync(dirpath)) {
      fs.mkdirSync(dirpath)
    }
    getDirectorySize(dirpath, (err, size) => {
      expect(err).toBeNull()
      expect(size).toBe(0)
      done()
    })
  })
))

test('getDirectorySize3', () => (
  // eslint-disable-next-line
  new Promise((done) => {
    const dirpath = getPath('/usr/local/bin')
    getDirectorySize(dirpath, (err, size) => {
      expect(err).toBeNull()
      expect(size).toBe(1240)
      done()
    })
  })
))

test('getDirectorySize4', () => (
  // eslint-disable-next-line
  new Promise((done) => {
    const dirpath = getPath('/usr/local/lib')
    getDirectorySize(dirpath, (err, size) => {
      expect(err).toBeNull()
      expect(size).toBe(0)
      done()
    })
  })
))
