const {assert} = require('chai')
const validTime = require('./index')
describe('validTime()', () => {
    it('returns true for valid time', () => {
        // arrange
        const str = '13:58';

        // act
        const result = validTime(str);

        // assert
        assert.isTrue(result)
    });

    it('returns false when invalid hours', () => {
        // arrange
        const str = '25:51';

        // act
        const result = validTime(str);

        // assert
        assert.isFalse(result)
    });

    it('returns false when invalid minutes', () => {
        // arrange
        const str = '02:76';

        // act
        const result = validTime(str);

        // assert
        assert.isFalse(result)
    });
});
