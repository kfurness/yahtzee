
export const reduce = (msg, state) => {
  return msg.category === "Ones" ? {Ones: msg.value} : {ThreeKindOMG: msg.value}
}
