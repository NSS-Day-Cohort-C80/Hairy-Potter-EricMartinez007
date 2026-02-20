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

// export const catalog = () => {
//     let potteryCatalogHTML = "<h1>Pottery Catalog</h1>"
//     potteryToBeSold.forEach(potteryObject => {
//         potteryCatalogHTML += `<section class="pottery">
//         <h2>${potteryObject.shape}</h2>
//         <div>Price: $${potteryObject.price}</div>
//         </section>`
//     })
//     return potteryCatalogHTML
// }

