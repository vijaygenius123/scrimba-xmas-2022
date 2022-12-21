const chai = require('chai');
const {JSDOM} = require('jsdom');
const {expect} = require("chai");

chai.use(require('chai-dom'))
require('jsdom-global')();

describe('Favorite Foods Setup', () => {
    beforeEach((done) => {
        JSDOM.fromFile('src/Day 6/index.html', {resources: "usable", runScripts: 'dangerously',})
            .then((dom) => {
                global.document = dom.window.document
            })
            .then(done, done);
    });

    it("should contain section", () => {
        let element = document.querySelector('section')
        expect(element).to.exist
    })

    it("should contain 1 - 10 tacos", (done) => {

        setTimeout(() => {
            const elements = document.querySelectorAll('.taco')
            console.log(elements.length)
            expect(elements.length).is.gte(1).lte(10)
            done()
        }, 100)
    })


})
