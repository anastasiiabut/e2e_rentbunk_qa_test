import {BasicPage} from "./basic-page";
import {elementTextIs} from "./component/helper";

export class SearchPage extends BasicPage{

    currentDate = 'mat-month-view tbody tr td[class="mat-calendar-body-cell mat-calendar-body-active ng-star-inserted"]'
    requestViewingButtonLocator = 'button[type="submit"]'
    bookingSuccessLocator = 'booking-success h1'
    get requestViewingButton() {
        return cy.get(this.requestViewingButtonLocator)
    }

    pickCurrentDate(){
        cy.get('button.mat-icon-button').click()
        //cy.get('mat-datepicker-content.mat-datepicker-content')
        cy.get(this.currentDate).click()
    }

    selectTime(hour, min) {
        this.selectDate('name="hours"', hour)
        this.selectDate('ng-reflect-name="mins"', min)
    }

    bookingSuccessTextDisplayed(text){
        elementTextIs(this.bookingSuccessLocator, text)
    }
}