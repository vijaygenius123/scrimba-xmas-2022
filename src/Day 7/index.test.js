const {assert} = require('chai')
const altCaps = require('./index')

describe('Alt Caps', () => {

    it('should return a string', function () {
        assert.isString(altCaps('Input'))
    });

    it('should return first alphabet as capital', function () {
        assert.equal(altCaps('i'), 'I')
    });

    it('should return second alphabet as small', function () {
        assert.equal(altCaps('iI'), 'Ii')
    });

    it('should return alternate in caps and small', function () {
        assert.equal(altCaps('I\'m so happy it\'s Monday'), 'I\'M So hApPy iT\'S MoNdAy')
    });
})
