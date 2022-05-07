/* eslint-disable jest/no-done-callback */
/* eslint-disable jest/no-conditional-expect */

import path from 'path'
import os from 'os'
import fs from 'fs'
import { watch } from '../src/watch'

const buildFilePath = (n) => path.join(os.tmpdir(), `example-2-${n}`)
const prepareFileSync = (n) => {
  const filepath = buildFilePath(n)
  fs.writeFileSync(filepath, '')
  return filepath
}

const ensureDone = (done, timeout = 3000) => {
  const wastedTimeoutId = setTimeout(() => done('WASTED'), timeout)
  return () => {
    clearTimeout(wastedTimeoutId)
    done()
  }
}

test('watch', (done) => {
  const finish = ensureDone(done)
  const id = watch('/undefined', 4, (err) => {
    clearInterval(id)
    expect(err).not.toBeNull()
    finish()
  })
})

test('watch 2', (done) => {
  const finish = ensureDone(done)
  const filepath = prepareFileSync(2)
  const id = watch(filepath, 500, (err) => {
    clearInterval(id)
    expect(err).toBeNull()
    finish()
  })
  setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 700)
})

test('watch 3', (done) => {
  const finish = ensureDone(done)
  const id = watch('/etc/hosts', 100, () => {
    expect(true).toBe(false)
  })
  setTimeout(() => {
    clearInterval(id)
    finish()
  }, 200)
})

test('watch 4', (done) => {
  const finish = ensureDone(done)
  const filepath = prepareFileSync(4)
  let count = 0
  const id = watch(filepath, 500, (err) => {
    count += 1
    if (count === 2) {
      clearInterval(id)
      expect(err).toBeNull()
      finish()
    }
  })
  setTimeout(() => fs.appendFileSync(filepath, 'ehu'), 700)
  setTimeout(() => fs.appendFileSync(filepath, 'uhe'), 1100)
})
