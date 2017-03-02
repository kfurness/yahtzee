const ones = document.getElementById('ones')
const twos = document.getElementById('twos')
const threez = document.getElementById('threez')
const fours = document.getElementById('fourz')
const threeKind = document.getElementById('threeKind')

export const update = (state) => {
  ones.innerHTML = state.Ones
  twos.innerHTML = state.Twos
  threez.innerHTML = state.Threez
  fourz.innerHTML = state.Fourz
  threeKind.innerHTML = state.ThreeKindOMG
}
