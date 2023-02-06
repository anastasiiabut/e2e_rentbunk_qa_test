export class Input {
    constructor(selector) {
        this.selector = selector
    }
    get locator() {
        return cy.get(this.selector)
    }
    clearAndType(text) {
        this.locator.clear().type(text)
    }
}