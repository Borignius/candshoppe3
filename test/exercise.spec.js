var assert = require("assert")
var exercise = require("../exercise")

describe("Version 3 Exercises", ()=>{
    describe("#getTotalItemSales", ()=>{
        const sales = [{
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
        }];
        it("returns the total item sales", ()=>{
            assert.equal(exercise.getTotalItemSales(sales, 1), 3);
            assert.equal(exercise.getTotalItemSales(sales, 2), 2);
            assert.equal(exercise.getTotalItemSales(sales, 3), 5);
        });
    });
    describe("#addTotalSalesToItems", ()=>{
        const sales = [{
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
        }];
        const items = [{
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
        }];
        it("returns the total item sales", ()=>{
            assert.deepEqual(exercise.addTotalSalesToItems(sales, items), [{
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
            }]);
        });
    });
    describe("#addTotalValueToItems", ()=>{
        const sales = [{
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
        }];
        const items = [{
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
        }];
        it("adds the total value to each transaction", ()=>{
            assert.deepEqual(exercise.addTotalValueToItems(sales, items), [{
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
            }]);
        });
    });
});
