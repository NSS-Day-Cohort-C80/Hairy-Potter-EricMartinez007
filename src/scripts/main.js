// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'


// Make 5 pieces of pottery at the wheel
let resurrectionStone = makePottery("resurrection stone", 3, 4)
let goblet = makePottery("goblet", 7, 11)
let hedwigStatue = makePottery("hedwig statue", 2, 3)
let houseKey = makePottery("house key", 4, 6)
let wandHolder = makePottery("wand holder", 6, 9)

const kilnStone = firePottery(resurrectionStone, 2200)
const kilnGoblet = firePottery(goblet, 2500)
const kilnHedwigStatue = firePottery(hedwigStatue, 2200)
const kilnHouseKey = firePottery(houseKey, 3000)
const kilnWandHolder = firePottery(wandHolder, 2200)

const potteryToSell = toSellOrNotToSell(kilnStone)
const potteryToSell2 = toSellOrNotToSell(kilnGoblet)
const potteryToSell3 = toSellOrNotToSell(kilnHedwigStatue)
const potteryToSell4 = toSellOrNotToSell(kilnHouseKey)
const potteryToSell5 = toSellOrNotToSell(kilnWandHolder)

console.log(potteryToSell)



// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

