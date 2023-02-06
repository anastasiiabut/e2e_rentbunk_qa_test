import {elementTextIs} from "./component/helper";

export class BasicPage{

    properties = '.props-search property-card'
    navigationSideBar = '.nav-sidebar__nav-item'
    emptySavedStateTextLocator = 'app-tenant-manage-liked-properties .empty__state'
    searchButtonLocator = 'button.btn__seethrough'

    get searchButton() {
        return cy.get(this.searchButtonLocator)
    }

    saveProperty(text){
        cy.contains(this.properties, text).find('button .favourite__btn').click()
    }

    unsaveProperty(text){
        this.saveProperty(text)
    }

    chooseProperty(text) {
        cy.contains(this.properties, text).click()
    }

    totalCount(entityName, count) {
        cy.contains(this.navigationSideBar, entityName)
            .within(() => {
                cy.checkItemText('.nav-sidebar__nav-item-brackets', count);
            });
    }

    switchBar(bar){
        cy.contains(this.navigationSideBar, bar).click()
    }

    pageHasTextDisplayed(text) {
        elementTextIs(this.emptySavedStateTextLocator, text);
    }

    pageHasElementWithText(locator, text){
        cy.get(`${locator}`).should('contain', text)
    }

    selectDate(locator, time){
        cy.get(`mat-select[${locator}]`).click()
        cy.contains('mat-option.mat-option', time).click();
    }
}