export const roller =  () => {
   let roll = []
    for(let i = 0; i < 5; i++) {
      const randomNum = randomNumber(1,6)
      roll.push(randomNum)
    }
    return roll
}


const randomNumber = (min, max) =>  {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
