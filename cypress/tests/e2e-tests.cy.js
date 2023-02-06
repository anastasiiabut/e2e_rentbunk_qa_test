import {LoginPage} from "../page-objects/login-page";
import {tenant} from "../data/users";
import {SearchPage} from "../page-objects/search-page";
import {testProperty, testPropertyAddress} from "../data/properties";
import {SavedPage} from "../page-objects/saved-page";
import {noApplicationsText, noSavedPropertiesText, noViewingsText} from "../data/emptyStates.constant";
import {ViewingsPage} from "../page-objects/viewings-page";
import {ApplicationsPage} from "../page-objects/applications-page";
import {bookingSuccessText} from "../data/message.constant";


describe ('Saved page', () => {

    const loginPage = new LoginPage()
    const searchPage = new SearchPage()
    const savedPage = new SavedPage()
    const viewingsPage = new ViewingsPage()
    const applicationsPage = new ApplicationsPage()

    context.only ('No data page state', ()=>{

        beforeEach(() => {
            loginPage.open()
            loginPage.login(tenant)
        })

        afterEach(() => {
            loginPage.logout()
        })

        it('should display no date state for Saved and Search button', () => {
            searchPage.switchBar('Saved')
            savedPage.pageHasTextDisplayed(noSavedPropertiesText)
            savedPage.searchButton.should('be.visible')
        })

        it('should display no date state for Applications and Search button', () => {
            searchPage.switchBar('Applications')
            applicationsPage.pageHasTextDisplayed(noApplicationsText)
            savedPage.searchButton.should('be.visible')
        })

    })

    context ('User can add and remove property', () => {

        beforeEach(() => {
            loginPage.open()
            loginPage.login(tenant)
        })

        afterEach(() => {
            loginPage.logout()
        })

        it('should add property to saved', () => {
            searchPage.saveProperty(testProperty)
            searchPage.totalCount('Saved', '(1)')
            searchPage.switchBar('Saved')
            savedPage.savedPropertyIs(testProperty)
        })

        it('should remove property from saved', () => {
            searchPage.switchBar('Saved')
            savedPage.savedPropertyIs(testProperty)
            savedPage.unsaveProperty(testProperty)
            savedPage.pageHasTextDisplayed(noSavedPropertiesText)
        })
    })

    context ('User can book a viewing', () => {

        before(() => {
            loginPage.open()
            loginPage.login(tenant)
        })

        after(() => {
            loginPage.logout()
        })

        it('should book a viewing', () => {
            searchPage.chooseProperty(testProperty)
            searchPage.pickCurrentDate()
            searchPage.selectTime(20,55)
            searchPage.requestViewingButton.click()
            searchPage.bookingSuccessTextDisplayed(bookingSuccessText)
            searchPage.switchBar('Viewings')
            viewingsPage.bookedPropertyHas(testPropertyAddress)
        })
    })
})