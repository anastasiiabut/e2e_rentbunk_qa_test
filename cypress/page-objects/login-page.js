import {Input} from "./component/input";

export class LoginPage {
    get email() {
        return new Input('input[type="text"]')
    }

    get password() {
        return new Input('input[type="password"]')
    }

    get signinButton(){
        return cy.get('button[id="user-signin"]')
    }

    get profileButton(){
        return cy.get('button[id="button_nav-profile"]')
    }

    get profileDropdown() {
        return cy.get('.mat-menu-content button')
    }

    open() {
        cy.visit('/signin')
    }

    login(user) {
        this.email.clearAndType(user.email)
        this.password.clearAndType(user.password)
        this.signinButton.click()
    }

    logout(){
        this.profileButton.click()
        this.profileDropdown.contains('Logout').click()
    }

}