import {BasicPage} from "./basic-page";

export class SavedPage extends BasicPage{

    savedProperties = '.props-liked property-card'

    open(){
        cy.visit('/tenant/manage/liked-properties')
    }

    unsaveProperty(text){
        cy.contains(this.savedProperties, text).find('button .favourite__btn').click()
    }

    savedPropertyIs(property) {
        this.pageHasElementWithText(this.savedProperties, property)
    }


}

