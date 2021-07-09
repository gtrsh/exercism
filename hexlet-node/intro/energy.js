'use strict'

const weight    = 105
const c         = 300000000
const energy    = weight * c ** 2
const message   = `
Your body energy is ${energy} joules. 
This is 1 / ${Math.round(389000000000000000000 / energy)} of the yearly world energy consumption. 
Woah!
`

module.exports = energy
console.info(message);
