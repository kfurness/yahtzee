const test = require('ava')
import { rollTheDie } from './index.js'

test('should create an array of 5 numbers', t => {
  const expected = 5

  const actual = rollTheDie(min, max).length

  t.is(expceted, actual)
})
