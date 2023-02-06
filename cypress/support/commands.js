Cypress.Commands.add('checkItemText', (itemLocator, expectedText) => {
    cy.get(`${itemLocator}`)
        .invoke('text')
        .then(text => {
            expect(text.trim()).to.equal(expectedText)
        });
});


