import { reduce } from './reduce'
import { update } from './update'
import { roller } from './dice_roll'
import { state } from './state'
import * as pizzaExport from './pizza'
console.log(pizzaExport)

const rollDieButton = document.getElementById('rollDie')

rollDieButton.addEventListener('click', function() {
  const categories = ['Ones', 'Twos', 'Threez', 'Fourz', 'Fivez', 'Sixes', 'ThreeKindOMG', 'Fourokind', 'FullHouse', 'SmStraight', 'FullStraight', 'HellzYeahYahtzee', 'Chance']
  window.yahtzee.state = reduce({category:'rolled-dice', value: roller()}, window.yahtzee.state)
  rollDieButton.style.visibility = 'hidden'
  categories.forEach((category, index) => {
    window.yahtzee.state = reduce({category: category, value: pizzaExport.pizza.yahtzee(category, window.yahtzee.state.roll)}, window.yahtzee.state)
  })
  update(window.yahtzee.state)
})

update(window.yahtzee.state)


// draw what we built
