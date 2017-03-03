const ones = document.getElementById('ones')
const twos = document.getElementById('twos')
const threez = document.getElementById('threez')
const fourz = document.getElementById('fourz')
const fivez = document.getElementById('fivez')
const sixes = document.getElementById('sixes')
const threeKind = document.getElementById('threeKind')
const fourokind = document.getElementById('fourokind')
const fullhouse = document.getElementById('fullHouse')
const smStraight = document.getElementById('smStraight')
const fullStraight = document.getElementById('fullStraight')
const hellzYeahYahtzee = document.getElementById('hellzYeahYahtzee')
const chance = document.getElementById('chance')

export const update = (state) => {
  ones.innerHTML = state.Ones
  twos.innerHTML = state.Twos
  threez.innerHTML = state.Threez
  fourz.innerHTML = state.Fourz
  fivez.innerHTML = state.Fivez
  sixes.innerHTML = state.Sixes
  threeKind.innerHTML = state.ThreeKindOMG
  fourokind.innerHTML = state.Fourokind
  fullhouse.innerHTML = state.FullHouse
  smStraight.innerHTML = state.SmStraight
  fullStraight.innerHTML = state.FullStraight
  hellzYeahYahtzee.innerHTML = state.HellzYeahYahtzee
  chance.innerHTML = state.Chance
}
