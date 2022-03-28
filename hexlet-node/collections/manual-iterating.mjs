import * as assert from 'node:assert/strict'

// Iterable Array
const xs = ['a', 'b', 42]

// Get Iterator from it
const iterator = xs[Symbol.iterator]()

// Result
assert.deepEqual(iterator.next(), { value: 'a', done: false })
assert.deepEqual(iterator.next(), { value: 'b', done: false })
assert.deepEqual(iterator.next(), { value: 42, done: false })
assert.deepEqual(iterator.next(), { value: undefined, done: true })
