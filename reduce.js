
export const reduce = (msg, state) => {
  switch (msg.category) {
    case 'Ones':
      return Object.assign({}, state, {Ones: msg.value})
    case 'Twos':
      return Object.assign({}, state, {Twos: msg.value})
    case 'ThreeKindOMG':
      return Object.assign({}, state, {ThreeKindOMG: msg.value})
    default:
      return 'error'
  }
  // return msg.category === 'Ones'
  //       ? Object.assign({}, state, {Ones: msg.value})
  //       : Object.assign({}, state, {ThreeKindOMG: msg.value})
}
