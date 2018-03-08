function getTotalItemSales(sales, id) {
  var allSameSales = sales.filter(function(sale){
    return sale.itemId === id
  })
  return allSameSales.reduce(function(totalNumSale, thisNumSale){
    return totalNumSale += thisNumSale.quantity
  }, 0)
}

function addTotalSalesToItems(sales, items){
     return items.map(function(item){
        item.quantity = getTotalItemSales(sales, item.id)
        return item
    })

}

function addTotalValueToItems(sales, items){
  var unAdded = addTotalSalesToItems(sales, items)
  var totalForEach = unAdded.map(function(oneSec, i){
    oneSec.totalValue = Math.ceil((unAdded[i].price * 10) * (unAdded[i].quantity * 10)) / 100
    return oneSec
  })
  return totalForEach
}



module.exports = {
    // Uncomment these functions as you write them
    getTotalItemSales,
    addTotalSalesToItems,
    addTotalValueToItems
}
