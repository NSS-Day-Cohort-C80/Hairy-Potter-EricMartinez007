const potteryToBeSold = []

export const toSellOrNotToSell = (potteryObject) => {
    if (potteryObject.cracked === true) {
    }
    if (potteryObject.weight >= 6) {
        potteryObject.price = 40
    }
    else if (potteryObject.weight < 6) {
        potteryObject.price = 20
    }
    if (potteryObject.cracked === false) {
        potteryToBeSold.push(potteryObject)
    }
    return potteryToBeSold
}


