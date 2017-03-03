
export const reduce = (msg, state) => {
  switch (msg.category) {
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
    default:
      return 'error'
  }
}
