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
    });

    it('When the user has not hovered over a link it should not show them options', function() {
      const options = [
        "Register",
        "Inquire",
        "Info"
      ]
      const dropdownContent = {
        link: "/showUserOptions",
        id: "userOptions",
        hovered: false,
        options: options
      }

      const dropdown = new Dropdown(dropdownContent)

      const expectedOutput = ""
      assert.equal(dropdown.show(), expectedOutput)
  });
  });
});