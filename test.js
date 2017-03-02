const test = require('ava')
// const pizzaExport = require('./pizza')
import * as pizzaExport from './pizza'

var cases = [
  {category: 'Ones', dice: [1,2,3,4,5], expected: 1},
  {category: 'Ones', dice: [1,3,3,4,1], expected: 2},
  {category: 'Ones', dice: [1,1,1,4,5], expected: 3},
  {category: 'Ones', dice: [1,1,1,4,1], expected: 4},
  {category: 'Twos', dice: [1,1,2,1,1], expected: 2},
  {category: 'Twos', dice: [1,1,2,1,2], expected: 4},
  {category: 'Twos', dice: [1,1,2,2,2], expected: 6},
  {category: 'Threez', dice: [1,1,3,2,3], expected: 6},
  {category: 'Fourz', dice: [1,4,3,4,3], expected: 8},
  {category: '3kindomg', dice: [1,4,3,3,3], expected: 18},
  {category: '3kindomg', dice: [1,4,2,5,3], expected: 0},
  {category: '3kindomg', dice: [1,1,1,5,3], expected: 18},
  {category: '4okind', dice: [1,1,1,1,3], expected: 4},
  {category: '4okind', dice: [4,4,4,4,3], expected: 16},
  {category: '4okind', dice: [1,5,5,5,5], expected: 20},
  {category: '4okind', dice: [1,5,2,5,5], expected: 0},
  {category: 'FullHouse', dice: [2,5,2,5,5], expected: 25},
  {category: 'FullHouse', dice: [3,5,2,5,5], expected: 0},
  {category: 'FullHouse', dice: [1,1,1,5,5], expected: 25},
  {category: 'SmStraight', dice: [1,2,3,4,3], expected: 30},
  {category: 'SmStraight', dice: [1,2,3,2,3], expected: 0},
  {category: 'SmStraight', dice: [2,2,3,4,5], expected: 30},
  {category: 'SmStraight', dice: [4,2,3,2,1], expected: 30},
  {category: 'FullStraight', dice: [4,2,3,5,1], expected: 40},
  {category: 'FullStraight', dice: [4,2,3,5,2], expected: 0},
  {category: 'FullStraight', dice: [4,6,3,5,2], expected: 40},
  {category: 'HellzYeahYahtzee!', dice: [2,2,2,2,2], expected: 50},
  {category: 'HellzYeahYahtzee!', dice: [1,2,2,2,2], expected: 0},
  {category: 'HellzYeahYahtzee!', dice: [1,1,1,1,1], expected: 50},
  {category: 'Chance', dice: [1,2,1,3,1], expected: 8},
  {category: 'Chance', dice: [1,2,2,3,1], expected: 9},
  {category: 'Chance', dice: [5,4,2,3,4], expected: 18}
]

test('yields expected result', t => {
  for(var i=0; i< cases.length; i++){
    var actual = pizzaExport.pizza.yahtzee(cases[i].category, cases[i].dice)

    t.is(cases[i].expected, actual)
  }
})


const cases2 = [
  {expected: {1: 1}, dice: [1] },
  {expected: {1: 2}, dice: [1, 1] },
  {expected: {1: 2, 2: 1}, dice: [1, 1, 2]},
  {expected: {1: 2, 2: 2, 3: 1}, dice: [1, 1, 2, 3, 2]},
  {expected: {1: 1, 2: 2, 4: 1, 6: 1 }, dice: [2, 1, 2, 4, 6]},
]

test('yields expected result for objectMaker', t => {
  cases2.forEach( (c, i) => {
    const actual = pizzaExport.objectMaker(cases2[i].dice)

    t.deepEqual(cases2[i].expected, actual)
  })
})




const cases3 = [
  {obj: { 1: 4, 3: 1 }, num: 4, expected: 0},
  {obj: {2: 3, 4: 2}, num: 3, expected: 0},
  {obj: {1: 1, 4: 4}, num: 4, expected: 1},
  {obj: {1: 1, 4: 3, 5: 1}, num: 4, expected: 'no points'},
]

test('yields expected result for findTheIndexOfAMatch ', t => {
  cases3.forEach( (c, i) => {
    const actual = pizzaExport.findTheIndexOfAMatch(cases3[i].obj, cases3[i].num)

    t.is(cases3[i].expected, actual)
  })
})



const cases4 = [
  {a: 3, b: 2, expected: 1},
]

test('yields expected result for compareFunc', t => {
  cases4.forEach( (c, i) => {
    const actual = pizzaExport.compareFunc(cases4[i].a, cases4[i].b)

    t.is(cases4[i].expected, actual)
  })
})

// const compareFunc = (a, b) => {
//   return a - b
// }


const cases5 = [
  {arr: [4,6,6,8,1,4], expected: [4, 6, 8, 1]},
  {arr: [1,1,4,5,7], expected: [1,4,5,7]},
  {arr: [5,5,5,5,5], expected: [5]},
  {arr: [1,2,3,4,5], expected: [1,2,3,4,5]},
]

test('yields expected result for compareFunc', t => {
  cases5.forEach( (c, i) => {
    const actual = pizzaExport.removeDuplicated(cases5[i].arr)

    t.deepEqual(cases5[i].expected, actual)
  })
})




const cases6 = [
  {arr: [1,1,1,1,1], expected: true}
]

test('yields expected result for compareFunc', t => {
  cases6.forEach( (c, i) => {
    const actual = pizzaExport.samezies(cases6[i].arr)

    t.true(cases6[i].expected, actual)
  })
})

// const samezies = (arr) => {
//   return arr.every( (c, i, a) => {
//     return c === arr[0]
//   })
// }
//
// const objectMaker = (dice) => {
//     let diceObj = {}
//     dice.map( (c, i) => {
//       diceObj[c] = diceObj[c] + 1 || 1
//     })
//     return diceObj
// }
//
// const removeDuplicated = (arr) => {
//   return arr.filter((c,i,a) => {
//     return a.indexOf(c) == i
//   })
// }
//
// const findTheIndexOfAMatch = (obj, num) => {
//   const arr = Object.values(obj)
//   let match = 'no points'
//   arr.forEach( (c, i) => {
//     if (c === num) {
//       match = i
//     }
//   })
//   return match
// }
