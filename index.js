import { reduce } from './reduce'
import { update } from './update'
import * as pizzaExport from './pizza'

const rollDieButton = document.getElementById('rollDie')
const dice = document.getElementById('dice')
let roll = []

const rollTheDie = (e) => {
  roll = []
  for(let i = 0; i < 5; i++) {
    const randomNum = randomNumber(1,6)
    roll.push(randomNum)
  }
  createDie(roll)
  rollDieButton.style.visibility = 'hidden'
  // create category for reduce function  --- map through all categories?
  // Break out into seperate function! Then map through returned object to apply reduce to each item
  const categories = ['Ones', 'Twos', 'Threez', 'Fourz', 'Fivez', 'Sixes', 'ThreeKindOMG', 'Fourokind', 'FullHouse', 'SmStraight', 'FullStraight', 'HellzYeahYahtzee', 'Chance']
  const arrCategories = categories.map( (c,i) => pizzaExport.pizza.yahtzee(c, roll))
  //return roll
  // TODO update msg (first parameter of reduce) to reflect roll and results of pizza.yahtzee
  //TODO: actually call pizza yahtzee here
  window.yahtzee.state = reduce({category: 'Chance', value: 13}, window.yahtzee.state)
  update(window.yahtzee.state)
}

const createDie = (roll) => {
    roll.forEach( (c,i,a) => {
      let divNode = document.createElement('div')
      divNode.id = i
      divNode.className = 'die'
      document.getElementById('dice').appendChild(divNode).innerHTML = c
    })
}

const randomNumber = (min, max) =>  {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

rollDieButton.addEventListener('click', rollTheDie)

update(window.yahtzee.state)
