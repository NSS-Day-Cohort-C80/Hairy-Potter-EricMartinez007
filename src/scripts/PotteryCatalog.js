const potteryToBeSold = []

export const toSellOrNotToSell = (potteryObject) => {
    if (potteryObject.cracked === true) {
        potteryObject.price = 2.5
    }
    else if (potteryObject.weight >= 6) {
        potteryObject.price = 40
    }
    else if (potteryObject.weight < 6) {
        potteryObject.price = 20
    }
    potteryToBeSold.push(potteryObject)
    return potteryToBeSold
}


