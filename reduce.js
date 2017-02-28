var reduce = (msg, state) => {
  return {ThreeKindOMG: msg.value}
}

if(typeof(module) !== 'undefined'){
  module.exports = reduce
}
