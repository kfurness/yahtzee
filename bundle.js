/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var reduce = exports.reduce = function reduce(msg, state) {
  switch (msg.category) {
    case 'Ones':
      return Object.assign({}, state, { Ones: msg.value });
    case 'Twos':
      return Object.assign({}, state, { Twos: msg.value });
    case 'Threez':
      return Object.assign({}, state, { Threez: msg.value });
    case 'Fourz':
      return Object.assign({}, state, { Fourz: msg.value });
    case 'Fivez':
      return Object.assign({}, state, { Fivez: msg.value });
    case 'Sixes':
      return Object.assign({}, state, { Sixes: msg.value });
    case 'ThreeKindOMG':
      return Object.assign({}, state, { ThreeKindOMG: msg.value });
    case 'Fourokind':
      return Object.assign({}, state, { Fourokind: msg.value });
    case 'FullHouse':
      return Object.assign({}, state, { FullHouse: msg.value });
    case 'SmStraight':
      return Object.assign({}, state, { SmStraight: msg.value });
    case 'FullStraight':
      return Object.assign({}, state, { FullStraight: msg.value });
    case 'HellzYeahYahtzee':
      return Object.assign({}, state, { HellzYeahYahtzee: msg.value });
    default:
      return 'error';
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var ones = document.getElementById('ones');
var twos = document.getElementById('twos');
var threez = document.getElementById('threez');
var fourz = document.getElementById('fourz');
var fivez = document.getElementById('fivez');
var sixes = document.getElementById('sixes');
var threeKind = document.getElementById('threeKind');
var fourokind = document.getElementById('fourokind');
var fullhouse = document.getElementById('fullHouse');
var smStraight = document.getElementById('smStraight');
var fullStraight = document.getElementById('fullStraight');
var hellzYeahYahtzee = document.getElementById('hellzYeahYahtzee');
var chance = document.getElementById('chance');

var update = exports.update = function update(state) {
  ones.innerHTML = state.Ones;
  twos.innerHTML = state.Twos;
  threez.innerHTML = state.Threez;
  fourz.innerHTML = state.Fourz;
  fivez.innerHTML = state.Fivez;
  sixes.innerHTML = state.Sixes;
  threeKind.innerHTML = state.ThreeKindOMG;
  fourokind.innerHTML = state.Fourokind;
  fullhouse.innerHTML = state.FullHouse;
  smStraight.innerHTML = state.SmStraight;
  fullStraight.innerHTML = state.FullStraight;
  hellzYeahYahtzee.innerHTML = state.HellzYeahYahtzee;
  chance.innerHTML = state.Chance;
};

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _reduce = __webpack_require__(0);

var _update = __webpack_require__(1);

var rollDieButton = document.getElementById('rollDie');
var dice = document.getElementById('dice');
var roll = [];

var rollTheDie = function rollTheDie(e) {
  roll = [];
  for (var i = 0; i < 5; i++) {
    var randomNum = randomNumber(1, 6);
    roll.push(randomNum);
  }
  createDie(roll);
  rollDieButton.style.visibility = 'hidden';
  //return roll
  // TODO update msg (first parameter of reduce) to reflect roll and results of pizza.yahtzee
  //TODO: actually call pizza yahtzee here
  window.yahtzee.state = (0, _reduce.reduce)({ category: 'SmStraight', value: 30 }, window.yahtzee.state);
  (0, _update.update)(window.yahtzee.state);
};

var createDie = function createDie(roll) {
  roll.forEach(function (c, i, a) {
    var divNode = document.createElement('div');
    divNode.id = i;
    divNode.className = 'die';
    document.getElementById('dice').appendChild(divNode).innerHTML = c;
  });
};

var randomNumber = function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

rollDieButton.addEventListener('click', rollTheDie);

(0, _update.update)(window.yahtzee.state);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var pizza = exports.pizza = {
  yahtzee: function yahtzee(category, dice) {
    var filter = 1;
    var obj = module.exports.objectMaker(dice);
    var keys = Object.keys(obj);
    var valArr = keys.map(function (key) {
      return obj[key];
    });
    var ordered = dice.sort(module.exports.compareFunc());
    switch (category) {
      case 'Twos':
        filter = 2;
        break;
      case 'Threez':
        filter = 3;
        break;
      case 'Fourz':
        filter = 4;
        break;
      case 'Fivez':
        filter = 5;
        break;
      case 'Sixes':
        filter = 6;
        break;
      case 'ThreeKindOMG':
        return valArr.includes(3) ? 18 : 0;
      case '4okind':
        var properties = Object.keys(obj);
        var match = module.exports.findTheIndexOfAMatch(obj, 4);
        return typeof match === 'number' ? properties[match] * 4 : 0;
      case 'FullHouse':
        return valArr.includes(2) && valArr.includes(3) ? 25 : 0;
      case 'SmStraight':
        var noDups = module.exports.removeDuplicated(ordered).join('');
        return noDups === '1234' || noDups === '2345' || noDups === '3456' ? 30 : 0;
      case 'FullStraight':
        var orderedString = ordered.join('');
        return orderedString === '12345' || orderedString === '23456' ? 40 : 0;
      case 'HellzYeahYahtzee!':
        return module.exports.samezies(dice) ? 50 : 0;
      case 'Chance':
        return dice.reduce(function (total, c) {
          return total + c;
        }, 0);
    }
    return dice.filter(function (die) {
      return die === filter;
    }).length * filter;
  }
};

var compareFunc = exports.compareFunc = function compareFunc(a, b) {
  return a - b;
};

var findTheIndexOfAMatch = exports.findTheIndexOfAMatch = function findTheIndexOfAMatch(obj, num) {
  var arr = Object.keys(obj).map(function (key) {
    return obj[key];
  });
  var match = 'no points';
  arr.forEach(function (c, i) {
    if (c === num) {
      match = i;
    }
  });
  return match;
};

var removeDuplicated = exports.removeDuplicated = function removeDuplicated(arr) {
  return arr.filter(function (c, i, a) {
    return a.indexOf(c) == i;
  });
};

var objectMaker = exports.objectMaker = function objectMaker(dice) {
  var diceObj = {};
  dice.map(function (c, i) {
    diceObj[c] = diceObj[c] + 1 || 1;
  });
  return diceObj;
};

var samezies = exports.samezies = function samezies(arr) {
  return arr.every(function (c, i, a) {
    return c === arr[0];
  });
};

//
// module.exports = {
//   pizza: {
//     yahtzee : (category, dice) => {
//       let filter = 1
//       let obj = module.exports.objectMaker(dice)
//        let keys = Object.keys(obj)
//        let valArr = keys.map( key =>  obj[key])
//       let ordered = dice.sort(module.exports.compareFunc())
//       switch(category){
//         case 'Twos':
//           filter = 2;
//           break;
//         case 'Threez':
//           filter = 3;
//           break;
//         case 'Fourz':
//           filter = 4
//           break
//         case '3kindomg':
//           return valArr.includes(3) ? 18 : 0
//         case '4okind':
//           let properties = Object.keys(obj)
//           let match = module.exports.findTheIndexOfAMatch(obj, 4)
//           return typeof match === 'number' ? properties[match] * 4 : 0
//         case 'FullHouse':
//           return valArr.includes(2) && valArr.includes(3) ? 25 : 0
//         case 'SmStraight':
//           let noDups = module.exports.removeDuplicated(ordered).join('')
//           return (noDups === '1234' || noDups === '2345' || noDups === '3456') ? 30 : 0
//         case 'FullStraight':
//           let orderedString = ordered.join('')
//           return (orderedString=== '12345' || orderedString === '23456') ? 40 : 0
//         case 'HellzYeahYahtzee!':
//           return module.exports.samezies(dice) ? 50 : 0
//         case 'Chance':
//           return dice.reduce((total, c) => total + c, 0)
//       }
//       return dice.filter(die => die === filter).length * filter
//     }
//   },
//
//   compareFunc: function(a, b) {
//     return a - b
//   },
//
//   findTheIndexOfAMatch: function(obj, num) {
//     const arr = Object.keys(obj).map( key => obj[key])
//     let match = 'no points'
//     arr.forEach( (c, i) => {
//       if (c === num) {
//         match = i
//       }
//     })
//     return match
//   },
//
//   removeDuplicated: function(arr) {
//     return arr.filter((c,i,a) => {
//       return a.indexOf(c) == i
//     })
//   },
//
//   objectMaker: function(dice) {
//       let diceObj = {}
//       dice.map( (c, i) => {
//         diceObj[c] = diceObj[c] + 1 || 1
//       })
//       return diceObj
//   },
//
//    samezies: function(arr) {
//     return arr.every( (c, i, a) => {
//       return c === arr[0]
//     })
//   }
//
// }

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var state = {
  Ones: 0,
  Twos: 0,
  Threez: 0,
  Fourz: 0,
  Fivez: 0,
  Sixes: 0,
  ThreeKindOMG: 0,
  Fourokind: 0,
  FullHouse: 0,
  SmStraight: 0,
  FullStraight: 0,
  HellzYeahYahtzee: 0,
  Chance: 0
};

window.yahtzee = Object.assign({}, { state: state });

// module.exports = {
//   state : {
//     ThreeKindOMG: 0
//   }
// }

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(0);
__webpack_require__(1);
__webpack_require__(3);
__webpack_require__(4);
__webpack_require__(2);

/***/ })
/******/ ]);