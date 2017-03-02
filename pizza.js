// var pizza = {
//   yahtzee : (category, dice) =>{
//     let filter = 1
//     let obj = objectMaker(dice)
//     let valArr = Object.values(obj)
//     let ordered = dice.sort(compareFunc())
//     switch(category){
//       case 'Twos':
//         filter = 2;
//         break;
//       case 'Threez':
//         filter = 3;
//         break;
//       case 'Fourz':
//         filter = 4
//         break
//       case '3kindomg':
//         return valArr.includes(3) ? 18 : 0
//       case '4okind':
//         let properties = Object.keys(obj)
//         let match = findTheIndexOfAMatch(obj, 4)
//         return typeof match === 'number' ? properties[match] * 4 : 0
//       case 'FullHouse':
//         return valArr.includes(2) && valArr.includes(3) ? 25 : 0
//       case 'SmStraight':
//         let noDups = removeDuplicated(ordered).join('')
//         return (noDups === '1234' || noDups === '2345' || noDups === '3456') ? 30 : 0
//       case 'FullStraight':
//         let orderedString = ordered.join('')
//         return (orderedString=== '12345' || orderedString === '23456') ? 40 : 0
//       case 'HellzYeahYahtzee!':
//         return samezies(dice) ? 50 : 0
//       case 'Chance':
//         return dice.reduce((total, c) => total + c, 0)
//     }
//     return dice.filter(die => die === filter).length * filter
//   }
// }
//
// if(typeof(module) !== 'undefined'){
//   module.exports = pizza;
// }
//
//
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
//
// const removeDuplicated = (arr) => {
//   return arr.filter((c,i,a) => {
//     return a.indexOf(c) == i
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


module.exports = {
  pizza: {
    yahtzee : (category, dice) => {
      let filter = 1
      let obj = module.exports.objectMaker(dice)
       let keys = Object.keys(obj)
       let valArr = keys.map( key =>  obj[key])
      let ordered = dice.sort(module.exports.compareFunc())
      switch(category){
        case 'Twos':
          filter = 2;
          break;
        case 'Threez':
          filter = 3;
          break;
        case 'Fourz':
          filter = 4
          break
        case '3kindomg':
          return valArr.includes(3) ? 18 : 0
        case '4okind':
          let properties = Object.keys(obj)
          let match = module.exports.findTheIndexOfAMatch(obj, 4)
          return typeof match === 'number' ? properties[match] * 4 : 0
        case 'FullHouse':
          return valArr.includes(2) && valArr.includes(3) ? 25 : 0
        case 'SmStraight':
          let noDups = module.exports.removeDuplicated(ordered).join('')
          return (noDups === '1234' || noDups === '2345' || noDups === '3456') ? 30 : 0
        case 'FullStraight':
          let orderedString = ordered.join('')
          return (orderedString=== '12345' || orderedString === '23456') ? 40 : 0
        case 'HellzYeahYahtzee!':
          return module.exports.samezies(dice) ? 50 : 0
        case 'Chance':
          return dice.reduce((total, c) => total + c, 0)
      }
      return dice.filter(die => die === filter).length * filter
    }
  },

  compareFunc: function(a, b) {
    return a - b
  },

  findTheIndexOfAMatch: function(obj, num) {
    const arr = Object.keys(obj).map( key => obj[key])
    let match = 'no points'
    arr.forEach( (c, i) => {
      if (c === num) {
        match = i
      }
    })
    return match
  },

  removeDuplicated: function(arr) {
    return arr.filter((c,i,a) => {
      return a.indexOf(c) == i
    })
  },

  objectMaker: function(dice) {
      let diceObj = {}
      dice.map( (c, i) => {
        diceObj[c] = diceObj[c] + 1 || 1
      })
      return diceObj
  },

   samezies: function(arr) {
    return arr.every( (c, i, a) => {
      return c === arr[0]
    })
  }

}
