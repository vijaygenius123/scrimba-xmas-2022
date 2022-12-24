const {assert} = require('chai')
const sortByLength = require('./index')
/**
 * Test Suite
 */
describe('sortByLength()', () => {

    it('should return an array', function () {
        assert.isArray(sortByLength([]))
    });

    it('sorts the strings from shortest to longest', () => {
        // arrange
        const strs = ["abc", "", "aaa", "a", "zz"];

        // act
        const result = sortByLength(strs);

        // assert
        assert.sameOrderedMembers(result, ["", "a", "zz", "abc", "aaa"]);
    });

    it('sorts the strings from shortest to longest', () => {
        // arrange
        const strs = ["eeee", "ddd", "cc", "bb", "a"];

        // act
        const result = sortByLength(strs);

        // assert
        assert.sameOrderedMembers(result, ["a", "cc", "bb", "ddd", "eeee"]);
    });
});
