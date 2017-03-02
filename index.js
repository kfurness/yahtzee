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
  //return roll
  //TODO: actually call pizza yahtzee here
  window.yahtzee.state = reduce({category: 'ThreeOfKindOMG', value: 8}, window.yahtzee.state)
  console.log(update(window.yahtzee.state));
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
