import {BasicPage} from "./basic-page";

export class ViewingsPage extends BasicPage{

    viewingProperties = 'viewings-card'
    bookedPropertyHas(address) {
        cy.get(this.viewingProperties).first().should('contain', address)
    }
}