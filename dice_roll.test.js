var test = require('ava')
import { roller } from './dice_roll'

test('should create an array of 5 random numbers', t => {
  const actual = roller()

  t.is(actual.length, 5, 'expected length to be 5')
  t.true(actual.every(die => typeof die === 'number'))
})
