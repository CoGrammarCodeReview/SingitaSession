class Dropdown {
    show() {
        const options = [
            "Register",
            "Inquire",
            "Info"
            ]
        const expectedOutput = 
        `<ol>${options.map(option => `<li>${option}</li\n`)}</ol>`
        return expectedOutput
    }
}

module.exports = Dropdown
