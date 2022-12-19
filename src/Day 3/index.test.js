const {expect} = require('chai');
const chai = require('chai');
const {JSDOM} = require('jsdom');

chai.use(require('chai-dom'))
require('jsdom-global')();
describe('Favorite Foods Setup', () => {
    beforeEach((done) => {
        JSDOM.fromFile('src/Day 3/index.html', {resources: "usable", runScripts: 'dangerously',})
            .then((dom) => {
                global.document = dom.window.document
            })
            .then(done, done);
    });

    it("should contain section", () => {
        let element = document.querySelector('section')
        expect(element).to.exist
    })

    it("should contain section", (done) => {
        let element = document.querySelector('section')
        setTimeout(() => {
            expect(element).to.have.text(`For breakfast, I only like croissants 🥐. For lunch, I love pasta 🍝,\nand for supper I want usually want pizza 🍕.`)
            done()
        }, 100)
    })

})
