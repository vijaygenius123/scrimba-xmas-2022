const {assert} = require('chai')
const whisper = require('./index')

describe('Whisper', () => {

    it('should return a string', function () {
        assert.isString(whisper('string'))
    });

    it('should return the message in lowercase string', function () {
        assert.equal(whisper('The KITTENS are SLEEPING!'),'shh... the kittens are sleeping')

        assert.equal(whisper('PLEASE STOP SHOUTING.'),'shh... please stop shouting.')

        assert.equal(whisper('MA\'AM, this is a Wendy\'s!'),'shh... ma\'am, this is a wendy\'s')
    });

})
