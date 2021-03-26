export const upperPart = '.upper'
export const lowerPart = '.app-outlet'
export const emailField = '#email'
export const passwordField = '#password'
export const lowerPartInner = '.content-inner .ng-star-inserted'
export const helpLink = '.help'
export const mainSiteUrl = 'https://configcat.com'
export const forgotPassWordLink = 'a[routerlink="/forgotpassword"]'
export const signUpLink = 'a[routerlink="/signup"]'
export const logInButton = 'button.submit-button'
export const emailVaildationMessage = 'mat-error[data-robot="email-validation"]'
export const passwordVaildationMessage = 'mat-error[data-robot="password-validation"]'

import * as users from '../Helpers/usersHelper'
import * as stringhelper from '../Helpers/stringHelper'

export function loginWithTestUserFree() {
    cy.visit('/')
    cy.get('.title').should('contain', 'LOG IN')
    cy.get(emailField).type(users.userEmailFree)
    cy.get(passwordField).type(users.userPasswordFree)
    cy.get(logInButton).click()
    //assertSettingsPageVisible()
}

export function loginWithRandomUser() {
    cy.visit('/')
    cy.get('.title').should('contain', 'LOG IN')
    cy.get(emailField).type(stringhelper.generateRandomEmail())
    cy.get(passwordField).type(stringhelper.generateRandomString(10))
    cy.get(logInButton).click()
    //assertSettingsPageVisible()
}