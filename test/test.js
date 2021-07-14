const mocha = require("mocha")
const assert = require('chai').assert
const Dropdown = require('../src/dropdown')

describe('Dropdown', function() {
  describe('#show()', function() {
    it('When the user hovers over a link it should show them options', function() {
        const options = [
          "Register",
          "Inquire",
          "Info"
        ]
        const dropdownContent = {
          link: "/showUserOptions",
          id: "userOptions",
          hovered: true,
          options: options
        }

        const dropdown = new Dropdown(dropdownContent)

        const expectedOutput = 
          `<ol>${options.map(option => `<li>${option}</li\n`)}</ol>`
        assert.equal(dropdown.show(), expectedOutput)
      // assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});