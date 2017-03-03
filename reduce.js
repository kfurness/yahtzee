
export const reduce = (msg, state) => {
  switch (msg.category) {
    case 'rolled-dice':
      return Object.assign({}, state, {roll: msg.value})
    case 'Ones':
      return Object.assign({}, state, {Ones: msg.value})
    case 'Twos':
      return Object.assign({}, state, {Twos: msg.value})
    case 'Threez':
      return Object.assign({}, state, {Threez: msg.value})
    case 'Fourz':
      return Object.assign({}, state, {Fourz: msg.value})
    case 'Fivez':
      return Object.assign({}, state, {Fivez: msg.value})
    case 'Sixes':
      return Object.assign({}, state, {Sixes: msg.value})
    case 'ThreeKindOMG':
      return Object.assign({}, state, {ThreeKindOMG: msg.value})
    case 'Fourokind':
      return Object.assign({}, state, {Fourokind: msg.value})
    case 'FullHouse':
      return Object.assign({}, state, {FullHouse: msg.value})
    case 'SmStraight':
      return Object.assign({}, state, {SmStraight: msg.value})
    case 'FullStraight':
      return Object.assign({}, state, {FullStraight: msg.value})
    case 'HellzYeahYahtzee':
      return Object.assign({}, state, {HellzYeahYahtzee: msg.value})
    case 'Chance':
      return Object.assign({}, state, {Chance: msg.value})
    default:
      return 'error'
  }
}
