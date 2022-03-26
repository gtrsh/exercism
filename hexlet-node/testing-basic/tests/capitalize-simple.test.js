import { capitalize } from '../src/capitalize.js'

if (capitalize('hello') !== 'Hello') {
  throw new Error('fn works as expected')
}

if (capitalize('cat') !== 'Cat') {
  throw new Error('fn works as expected')
}

console.log('all tests passed')
