const {assert} = require('chai')
const transformData = require('./index')

describe('Totally Private Data Farm', function () {

    const input = [{
        "name": {
            "title": "Mr",
            "first": "Levent",
            "last": "Busser"
        },
        "dob": {
            "date": "1971-08-21T01:08:00.099Z",
            "age": 51
        }
    }]

    it('should return an object', function () {
        assert.isArray(transformData(input))
    });

    it('should return fullName and birthDay as key ', function () {
        assert.hasAllKeys(transformData(input)[0], ['fullName', 'birthday'])
    });

    it('should return fullName as concatenation of first and last name', function () {
        const fullName = 'Levent Busser'
        assert.equal(transformData(input)[0].fullName, fullName)
    });

    it('should return fullName as concatenation of first and last name', function () {
        const date = 'Sat Aug 21 1971'
        assert.equal(transformData(input)[0].birthday, date)
    });

});
