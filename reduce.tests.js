var test = require('ava')
var reduceExport = require('./reduce')

const state = {
  Ones: 0,
  Twos: 0,
  ThreeKindOMG: 0
}

let cases3oKind = [
  {expected: {Ones: 0, Twos: 0, ThreeKindOMG: 6}, msg: {category: 'ThreeKindOMG', value: 6}, state: state},
  {expected: {Ones: 0, Twos: 0, ThreeKindOMG: 8}, msg: {category: 'ThreeKindOMG', value: 8}, state: state},
  {expected: {Ones: 0, Twos: 0, ThreeKindOMG: 18}, msg: {category: 'ThreeKindOMG', value: 18}, state: state},
]

test('should apply three of a kind correctly', t => {
  cases3oKind.forEach( (c,i) => {
    const actual = reduceExport.reduce(cases3oKind[i].msg, cases3oKind[i].state)

    t.deepEqual(actual, cases3oKind[i].expected)
  })
})


let casesOnes = [
  {expected: {Ones: 3, Twos: 0, ThreeKindOMG: 0}, msg: {category: 'Ones', value: 3}, state: state},
  {expected: {Ones: 2, Twos: 0, ThreeKindOMG: 0}, msg: {category: 'Ones', value: 2}, state: state},
  {expected: {Ones: 1, Twos: 0, ThreeKindOMG: 0}, msg: {category: 'Ones', value: 1}, state: state},
]

test('should apply Ones correctly', t => {
  casesOnes.forEach( (c,i) => {
    const actual = reduceExport.reduce(casesOnes[i].msg, casesOnes[i].state)

    t.deepEqual(actual, casesOnes[i].expected)
  })
})

let casesTwos = [
  {expected: {Ones:  0, Twos: 6, ThreeKindOMG: 0}, msg: {category: 'Twos', value: 6}, state: state},
  {expected: {Ones:  0, Twos: 2, ThreeKindOMG: 0}, msg: {category: 'Twos', value: 2}, state: state},
  {expected: {Ones:  0, Twos: 0, ThreeKindOMG: 0}, msg: {category: 'Twos', value: 0}, state: state},
]

test('should apply Twos correctly', t => {
  casesTwos.forEach( (c,i) => {
    const actual = reduceExport.reduce(casesTwos[i].msg, casesTwos[i].state)

    t.deepEqual(actual, casesTwos[i].expected)
  })
})
