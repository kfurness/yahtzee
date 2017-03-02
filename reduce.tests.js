var test = require('ava')
var reduceExport = require('./reduce')

let cases3oKind = [
  {expected: {ThreeKindOMG: 6}, msg: {category: 'ThreeOfKindOMG', value: 6}, state: {ThreeKindOMG: 0}},
  {expected: {ThreeKindOMG: 8}, msg: {category: 'ThreeOfKindOMG', value: 8}, state: {ThreeKindOMG: 0}},
  {expected: {ThreeKindOMG: 18}, msg: {category: 'ThreeOfKindOMG', value: 18}, state: {ThreeKindOMG: 0}},
]

test('should apply three of a kind correctly', t => {
  cases3oKind.forEach( (c,i) => {
    const actual = reduceExport.reduce(cases3oKind[i].msg, cases3oKind[i].state)

    t.deepEqual(actual, cases3oKind[i].expected)
  })
})


let casesOnes = [
  {expected: {Ones: 3}, msg: {category: 'Ones', value: 3}, state: {Ones: 0}},
  {expected: {Ones: 2}, msg: {category: 'Ones', value: 2}, state: {ThreeKindOMG: 0}},
  {expected: {Ones: 1}, msg: {category: 'Ones', value: 1}, state: {ThreeKindOMG: 0}},
]

test('should apply Ones correctly', t => {
  casesOnes.forEach( (c,i) => {
    const actual = reduceExport.reduce(casesOnes[i].msg, casesOnes[i].state)

    t.deepEqual(actual, casesOnes[i].expected)
  })
})
