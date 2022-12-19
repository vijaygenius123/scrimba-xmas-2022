const {assert} = require('chai')
const {panic} = require('./index')
describe("Panic Function", () => {

    it('should return a string', function () {
        const input = "Hello"
        assert.isString(panic(input))
    });

    it('should return the single word with !', function () {
        const input = "Hello"
        const expected = "HELLO!"
        assert.equal(panic(input), expected)
    });

    it('should return words with 😱 in between words with ! at end when sentence #1', function () {
        const input = "I'm almost out of coffee"
        const expected = "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
        assert.equal(panic(input), expected)
    });

    it('should return words with 😱 if multiple in between words with ! at end when sentence #2', function () {
        const input = "winter is coming"
        const expected = "WINTER 😱 IS 😱 COMING!"
        assert.equal(panic(input), expected)
    });
})
