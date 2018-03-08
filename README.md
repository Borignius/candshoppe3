## Candy Shop

You are working with a candy shop dataset and need to some sales analysis. You'll use the list of items and list of sales to figure out some sales data.

## Data Format

### Items

```js
[{
    id: 1,
    description: "Dark Chocolate Crunchies",
    price: 4.29
},{
    id: 2,
    description: "Mint Wafers",
    price: 1.09
},{
    id: 3,
    description: "Peppermint Poppers",
    price: 2.38
}]
```

### Sales

```js
[{
    itemId: 1,
    quantity: 2
},{
    itemId: 2,
    quantity: 2
},{
    itemId: 3,
    quantity: 3
},{
    itemId: 1,
    quantity: 1
},{
    itemId: 3,
    quantity: 2
}]
```

### Target Analysis

```js
[{
    id: 1,
    description: "Dark Chocolate Crunchies",
    price: 4.29,
    quantity: 3,
    totalValue: 12.87
},{
    id: 2,
    description: "Mint Wafers",
    price: 1.09,
    quantity: 2,
    totalValue: 2.18
},{
    id: 3,
    description: "Peppermint Poppers",
    price: 2.38,
    quantity: 5,
    totalValue: 11.90
}]
```

## Setup

1. Run `npm install`
1. Write your code in `exercise.js` as functions that return the result
1. Run `npm test` on the command line to verify your code.

## Instructions

* Write a function called `getTotalItemSales` that takes a list of sales and an item ID, and returns the total number of sales for that item. For example, if you give it the sales list about and give it the ID of `3`, you should return `5`.

* Write a function called `addTotalSalesToItems` that takes a list of sales and a list of items and returns the list of items with the total number of sales appended. For example, if you give it the list of sales and the list of items, you should return:

```js
[{
    id: 1,
    description: "Dark Chocolate Crunchies",
    price: 4.29,
    quantity: 3
},{
    id: 2,
    description: "Mint Wafers",
    price: 1.09,
    quantity: 2
},{
    id: 3,
    description: "Peppermint Poppers",
    price: 2.38,
    quantity: 5
}]
```

Feel free to reuse your function from the previous example.

* Write a function called `addTotalValueToItems` that takes in a list of sales and a list of items, and returns the list of items with the quantity sold for each, and the total value of the items sold. For example, if you give it the list of sales and items, you should return:

```js
[{
    id: 1,
    description: "Dark Chocolate Crunchies",
    price: 4.29,
    quantity: 3,
    totalValue: 12.87
},{
    id: 2,
    description: "Mint Wafers",
    price: 1.09,
    quantity: 2,
    totalValue: 2.18
},{
    id: 3,
    description: "Peppermint Poppers",
    price: 2.38,
    quantity: 5,
    totalValue: 11.90
}];
```

Feel free to reuse your function from the previous example.
