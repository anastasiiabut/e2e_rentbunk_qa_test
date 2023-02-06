export const elementTextIs = (elementLocator, expectedText) => {
    cy.get(`${elementLocator}`)
        .invoke('text')
        .then(text => {
            expect(text.trim()).to.equal(expectedText)
        });
};