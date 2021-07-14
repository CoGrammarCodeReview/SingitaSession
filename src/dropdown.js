class Dropdown {
    #dropdownContent

    constructor(dropdownContent) {
        this.#dropdownContent = dropdownContent
    }

    show() {
        if (this.#dropdownContent.hovered === true)
        {   const options = [
            "Register",
            "Inquire",
            "Info"
            ]
            const expectedOutput = 
                `<ol>${options.map(option => `<li>${option}</li\n`)}</ol>`
            return expectedOutput
        }
        else return ""
    }
}

module.exports = Dropdown
