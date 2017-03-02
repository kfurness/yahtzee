const ones = document.getElementById('ones')
const twos = document.getElementById('twos')
const threez = document.getElementById('threez')
const fourz = document.getElementById('fourz')
const fivez = document.getElementById('fivez')
const threeKind = document.getElementById('threeKind')

export const update = (state) => {
  ones.innerHTML = state.Ones
  twos.innerHTML = state.Twos
  threez.innerHTML = state.Threez
  fourz.innerHTML = state.Fourz
  fivez.innerHTML = state.Fivez
  threeKind.innerHTML = state.ThreeKindOMG
}
