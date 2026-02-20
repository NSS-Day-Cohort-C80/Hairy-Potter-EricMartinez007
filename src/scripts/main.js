// Imports go first
import { makePottery } from './PotteryWheel.js'
import { firePottery } from './Kiln.js'
import { toSellOrNotToSell } from './PotteryCatalog.js'
import { potteryList } from './PotteryList.js'
import { renderedPotteryList } from './PotteryList.js'


// Make 5 pieces of pottery at the wheel
let resurrectionStone = makePottery("Resurrection Stone", 3, 4)
let goblet = makePottery("Goblet of Fire", 7, 11)
let hedwigStatue = makePottery("Hedwig Statue", 2, 3)
let houseKey = makePottery("House Key", 4, 6)
let wandHolder = makePottery("Wand Holder", 6, 9)

const kilnStone = firePottery(resurrectionStone, 2200)
const kilnGoblet = firePottery(goblet, 2100)
const kilnHedwigStatue = firePottery(hedwigStatue, 2200)
const kilnHouseKey = firePottery(houseKey, 3000)
const kilnWandHolder = firePottery(wandHolder, 2200)

const potteryToSell = toSellOrNotToSell(kilnStone)
const potteryToSell2 = toSellOrNotToSell(kilnGoblet)
const potteryToSell3 = toSellOrNotToSell(kilnHedwigStatue)
const potteryToSell4 = toSellOrNotToSell(kilnHouseKey)
const potteryToSell5 = toSellOrNotToSell(kilnWandHolder)

const potteryListHTML = potteryList(potteryToSell5)



renderedPotteryList(potteryListHTML)




// Fire each piece of pottery in the kiln


// Determine which ones should be sold, and their price


// Invoke the component function that renders the HTML list

