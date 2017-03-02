const ones = document.getElementById('ones')
const twos = document.getElementById('twos')
const threes = document.getElementById('threes')
const threeKind = document.getElementById('threeKind')

export const update = (state) => {
  ones.innerHTML = state.Ones
  twos.innerHTML = state.Twos
  threes.innerHTML = state.Threes
  threeKind.innerHTML = state.ThreeKindOMG
}
