export const firePottery = (potteryObject, temperature) => {
    
    if (temperature > 2200) {
        potteryObject.fired = true
        potteryObject.cracked = true
    }
    else if (temperature <= 2200) {
        potteryObject.fired = true
        potteryObject.cracked = false
    }
    return potteryObject
}