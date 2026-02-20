// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'


// Make 5 pieces of pottery at the wheel
let resurrectionStone = makePottery("resurrection stone", 3, 4)
let goblet = makePottery("goblet", 5, 8)
let hedwigStatue = makePottery("hedwig statue", 2, 3)
let houseKey = makePottery("house key", 4, 6)
let wandHolder = makePottery("wand holder", 6, 9)

const kilnStone = firePottery(resurrectionStone, 2200)
const kilnGoblet = firePottery(goblet, 2500)
const kilnHedwigStatue = firePottery(hedwigStatue, 2200)
const kilnHouseKey = firePottery(houseKey, 3000)
const kilnWandHolder = firePottery(wandHolder, 2200)


// Fire each piece of pottery in the kiln
console.log(resurrectionStone)
console.log(goblet)
console.log(hedwigStatue)
console.log(houseKey)
console.log(wandHolder)
console.log(kilnStone)
console.log(kilnGoblet)
console.log(kilnHedwigStatue)
console.log(kilnHouseKey)
console.log(kilnWandHolder)

// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

