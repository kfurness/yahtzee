var test = require('ava')
var reduce = require('./reduce')

test('should apply three of a kind correctly', t => {
  const expected = {
    ThreeKindOMG: 6
  }

  const msg = {category: 'ThreeOfKindOMG', value: 6}
  const state = {ThreeKindOMG: 0}

  const actual = reduce(msg, state)

  t.deepEqual(actual, expected)
})

test('again...should apply three of a kind correctly', t => {
  const expected = {
    ThreeKindOMG: 8
  }

  const msg = {category: 'ThreeOfKindOMG', value: 8}
  const state = {ThreeKindOMG: 0}

  const actual = reduce(msg, state)

  t.deepEqual(actual, expected)
})
