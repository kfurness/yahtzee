var test = require('ava')
var reduceExport = require('./reduce')

const state = {
  Ones: 0,
  Twos: 0,
  Threez: 0,
  Fourz: 0,
  Fivez: 0,
  'Sixes': 0,
  ThreeKindOMG: 0,
  Fourokind: 0,
}

let cases3oKind = [
  {expected: {Ones: 0, Twos: 0, Threez: 0, Fourz: 0, Fivez: 0, Sixes: 0, ThreeKindOMG: 6, Fourokind: 0}, msg: {category: 'ThreeKindOMG', value: 6}, state: state},
  {expected: {Ones: 0, Twos: 0, Threez: 0, Fourz: 0, Fivez: 0, Sixes: 0, ThreeKindOMG: 8, Fourokind: 0}, msg: {category: 'ThreeKindOMG', value: 8}, state: state},
  {expected: {Ones: 0, Twos: 0, Threez: 0, Fourz: 0, Fivez: 0, Sixes: 0, ThreeKindOMG: 18, Fourokind: 0}, msg: {category: 'ThreeKindOMG', value: 18}, state: state},
]

test('should apply three of a kind correctly', t => {
  cases3oKind.forEach( (c,i) => {
    const actual = reduceExport.reduce(cases3oKind[i].msg, cases3oKind[i].state)

    t.deepEqual(actual, cases3oKind[i].expected)
  })
})


let casesOnes = [
  {expected: {Ones: 3, Twos: 0,  Threez: 0, Fourz: 0, Fivez: 0, Sixes: 0, ThreeKindOMG: 0, Fourokind: 0}, msg: {category: 'Ones', value: 3}, state: state},
  {expected: {Ones: 2, Twos: 0,  Threez: 0, Fourz: 0, Fivez: 0, Sixes: 0, ThreeKindOMG: 0, Fourokind: 0}, msg: {category: 'Ones', value: 2}, state: state},
  {expected: {Ones: 1, Twos: 0,  Threez: 0, Fourz: 0, Fivez: 0, Sixes: 0, ThreeKindOMG: 0, Fourokind: 0}, msg: {category: 'Ones', value: 1}, state: state},
]

test('should apply Ones correctly', t => {
  casesOnes.forEach( (c,i) => {
    const actual = reduceExport.reduce(casesOnes[i].msg, casesOnes[i].state)

    t.deepEqual(actual, casesOnes[i].expected)
  })
})

let casesTwos = [
  {expected: {Ones:  0, Twos: 6,  Threez: 0, Fourz: 0, Fivez: 0, Sixes: 0, ThreeKindOMG: 0, Fourokind: 0}, msg: {category: 'Twos', value: 6}, state: state},
  {expected: {Ones:  0, Twos: 2,  Threez: 0, Fourz: 0, Fivez: 0, Sixes: 0, ThreeKindOMG: 0, Fourokind: 0}, msg: {category: 'Twos', value: 2}, state: state},
  {expected: {Ones:  0, Twos: 0,  Threez: 0, Fourz: 0, Fivez: 0, Sixes: 0, ThreeKindOMG: 0, Fourokind: 0}, msg: {category: 'Twos', value: 0}, state: state},
]

test('should apply Twos correctly', t => {
  casesTwos.forEach( (c,i) => {
    const actual = reduceExport.reduce(casesTwos[i].msg, casesTwos[i].state)

    t.deepEqual(actual, casesTwos[i].expected)
  })
})

let casesThreez = [
  {expected: {Ones:  0, Twos: 0, Threez: 3, Fourz: 0, Fivez: 0, Sixes: 0, ThreeKindOMG: 0, Fourokind: 0}, msg: {category: 'Threez', value: 3}, state: state},
  {expected: {Ones:  0, Twos: 0, Threez: 6, Fourz: 0, Fivez: 0, Sixes: 0, ThreeKindOMG: 0, Fourokind: 0}, msg: {category: 'Threez', value: 6}, state: state},
  {expected: {Ones:  0, Twos: 0, Threez: 12, Fourz: 0, Fivez: 0, Sixes: 0, ThreeKindOMG: 0, Fourokind: 0}, msg: {category: 'Threez', value: 12}, state: state},
]


test('should apply Threez correctly', t => {
  casesThreez.forEach( (c,i) => {
    const actual = reduceExport.reduce(casesThreez[i].msg, casesThreez[i].state)

    t.deepEqual(actual, casesThreez[i].expected)
  })
})

let casesFourz = [
  {expected: {Ones:  0, Twos: 0, Threez: 0, Fourz: 0, Fivez: 0, Sixes: 0, ThreeKindOMG: 0, Fourokind: 0}, msg: {category: 'Fourz', value: 0}, state: state},
  {expected: {Ones:  0, Twos: 0, Threez: 0, Fourz: 8, Fivez: 0, Sixes: 0, ThreeKindOMG: 0, Fourokind: 0}, msg: {category: 'Fourz', value: 8}, state: state},
  {expected: {Ones:  0, Twos: 0, Threez: 0, Fourz: 12, Fivez: 0, Sixes: 0, ThreeKindOMG: 0, Fourokind: 0}, msg: {category: 'Fourz', value: 12}, state: state},
]

test('should apply Fourz correctly', t => {
  casesFourz.forEach( (c,i) => {
    const actual = reduceExport.reduce(casesFourz[i].msg, casesFourz[i].state)

    t.deepEqual(actual, casesFourz[i].expected)
  })
})


let casesFivez = [
  {expected: {Ones:  0, Twos: 0, Threez: 0, Fourz: 0, Fivez: 5, Sixes: 0, ThreeKindOMG: 0, Fourokind: 0}, msg: {category: 'Fivez', value: 5}, state: state},
]

test('should apply Fivez correctly', t => {
  casesFivez.forEach( (c,i) => {
    const actual = reduceExport.reduce(casesFivez[i].msg, casesFivez[i].state)

    t.deepEqual(actual, casesFivez[i].expected)
  })
})


let casesSixes = [
  {expected: {Ones:  0, Twos: 0, Threez: 0, Fourz: 0, Fivez: 0, Sixes: 12, ThreeKindOMG: 0, Fourokind: 0}, msg: {category: 'Sixes', value: 12}, state: state},
]

test('should apply Sixes correctly', t => {
  casesSixes.forEach( (c,i) => {
    const actual = reduceExport.reduce(casesSixes[i].msg, casesSixes[i].state)

    t.deepEqual(actual, casesSixes[i].expected)
  })
})


let casesFourokind = [
  {expected: {Ones:  0, Twos: 0, Threez: 0, Fourz: 0, Fivez: 0, Sixes: 0, ThreeKindOMG: 0, Fourokind: 13}, msg: {category: 'Fourokind', value: 13}, state: state},
]

test('should apply fourokind correctly', t => {
  casesFourokind.forEach( (c,i) => {
    const actual = reduceExport.reduce(casesFourokind[i].msg, casesFourokind[i].state)

    t.deepEqual(actual, casesFourokind[i].expected)
  })
})
