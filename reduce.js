
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
    case 'ThreeKindOMG':
      return Object.assign({}, state, {ThreeKindOMG: msg.value})
    default:
      return 'error'
  }
}
