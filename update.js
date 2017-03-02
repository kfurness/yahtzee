const ones = document.getElementById('ones')
const twos = document.getElementById('twos')
const threeKind = document.getElementById('threeKind')

export const update = (state) => {
  ones.innerHTML = state.Ones
  twos.innerHTML = state.Twos
  threeKind.innerHTML = state.ThreeKindOMG
}
