const {assert} = require('chai')
const {toTitleCase, capitalizeWord} = require('./index')

describe('To Title Case', () => {


    describe('capitalizeWord', function () {

        it('should return a string', function () {
            assert.isString(capitalizeWord('hello'))
        });

        it('should return the string with first alphabet as capital', function () {
            assert.equal(capitalizeWord('hello'), 'Hello')
        });
    });

    describe('toTitleCase Word', function () {

        it('should return a string', function () {
            assert.isString(toTitleCase('hello'))
        });

        it('should return the string with first alphabet as capital for each word', function () {
            assert.equal(toTitleCase('hello world'), 'Hello World')

            assert.equal(toTitleCase('pumpkin pranced purposefully across the pond'), 'Pumpkin Pranced Purposefully Across The Pond')
        });


    });

})
