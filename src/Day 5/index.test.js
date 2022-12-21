const {assert} = require('chai')
const getSaleItems = require('./index')
const data = require("./data");

describe('Candy', function () {

    it('should return an array', function () {
        assert.isArray(getSaleItems(data))
    });

    it('should return an array of object with item and price', function () {
        assert.containsAllKeys(getSaleItems(data)[0], ['item', 'price'])
    });

    it('should only sweets with item and price', function () {
        assert.deepEqual(getSaleItems(data),
            [
                {
                    item: "🍭",
                    price: 2.99,
                },
                {
                    item: "🍫",
                    price: 1.99,
                },
                {
                    item: "🍬",
                    price: .89,
                }
            ]
        )
    });
});
