export const potteryList = (potteryToBeSold) => {
    let potteryListHTML = ``
        for (const potteryObject of potteryToBeSold) {
            potteryListHTML += `
            <section class="pottery" id="pottery--${potteryObject.id}">
                <h2 class="pottery__shape">${potteryObject.shape}</h2>
                <div class="pottery__properties">
                ${potteryObject.shape} weighs ${potteryObject.weight} grams and is ${potteryObject.height} cm in height
                </div>
                <div class="pottery__price">Price is $${potteryObject.price}</div>
            </section>
        `}
    return potteryListHTML
}

export const renderedPotteryList = (potteryListHTML) => {
    const potteryListArticle = document.getElementById("potteryCatalog")
    
    if (potteryListArticle) {
        potteryListArticle.innerHTML = potteryListHTML
    }
    else {
        console.error("Could not find pottery list article element")
    }   
}
