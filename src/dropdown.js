class Dropdown {
    #dropdownContent

    constructor(dropdownContent) {
        this.#dropdownContent = dropdownContent
    }

    show() {
        if (this.#dropdownContent.hovered === true)
        {   
            const expectedOutput = 
                `<ol>${this.#dropdownContent.options.map(option => `<li>${option}</li\n`)}</ol>`
            return expectedOutput
        }
        else return ""
    }
}

module.exports = Dropdown
