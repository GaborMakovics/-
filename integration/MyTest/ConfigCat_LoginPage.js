import * as pageData from '../../Helpers/loginPageHelper.js'

describe('ConfigCat » Login Page', () => {

    it('Login Page Has Two Main Parts', () => {
        cy.visit('/')
        cy.url().should('include', 'login')
        cy.get(pageData.upperPart).should('be.visible')
        cy.get(pageData.lowerPartInner).should('be.visible')
    })

    it('Login Page » Upper has logo and help icon', () => {
        cy.get(pageData.upperPart).get('app-logo').should('be.visible').then(($appLogo) =>{
            cy.wrap($appLogo).get('a').should('have.attr', 'href', pageData.mainSiteUrl)
        })
        cy.get(pageData.upperPart).get(pageData.helpLink).should('be.visible')
    })

    it('Login Page » Lower has Inner content', ()=> {
        cy.get(pageData.lowerPartInner).should('be.visible')
    })

    it('Login Page » Lower / Inner content contains all expected elements, links are correct', () => {
        cy.get(pageData.lowerPartInner).get('.cat').should('be.visible')
        cy.get(pageData.emailField).should('be.visible')
        cy.get(pageData.passwordField).should('be.visible')
        cy.get(pageData.forgotPassWordLink).should('be.visible').then(($link) => {
            cy.wrap($link).should('have.attr', 'href', '/forgotpassword')
        })
        cy.get(pageData.logInButton).should('be.visible')
        cy.get(pageData.signUpLink).should('be.visible').then(($link) => {
            cy.wrap($link).invoke('attr', 'href').should('include', '/signup')
        })
        cy.get(pageData.lowerPartInner).get('.sso').find('button').should('have.length', 6)
    })

    it('Login Page » Click on Help activates menu which has 5 links, urls are correct', () => {
        cy.get(pageData.helpLink).click()
        cy.get('#mat-menu-panel-0').should('be.visible').then(($menu) =>{
            cy.wrap($menu).find('a').should('have.length', 5).then(($links) => {
                cy.wrap($links).eq(0).should('have.attr', 'href', pageData.mainSiteUrl + '/docs')
                cy.wrap($links).eq(1).should('have.attr', 'href', pageData.mainSiteUrl + '/architecture')
                cy.wrap($links).eq(2).should('have.attr', 'href', pageData.mainSiteUrl + '/slack/')
                cy.wrap($links).eq(3).should('have.attr', 'href', pageData.mainSiteUrl + '/support')
                cy.wrap($links).eq(4).should('have.attr', 'href', pageData.mainSiteUrl + '/blog')
            })
        })
    })

    it('Login Page » Email and Password are required', () => {
        cy.visit('/')
        cy.get(pageData.logInButton).click()

        cy.get(pageData.lowerPartInner).find('mat-error').should('have.length', 3)
        cy.get(pageData.emailVaildationMessage)
            .should('be.visible').then(($mess) => {
                expect($mess).to.contain('This field is required.')
            })
        cy.get(pageData.passwordVaildationMessage)
            .should('be.visible').then(($mess) => {
                expect($mess).to.contain('This field is required.')
            })
        cy.url().should('include', 'login')

    })

    it('Login Page » Try to sign in with a random user/pw', () => {
        pageData.loginWithRandomUser()
        cy.get(pageData.emailVaildationMessage)
            .should('be.visible').then(($mess) => {
                expect($mess).to.contain('Wrong email or password. Please try again.')
            })
    })

    it('Login Page » Sign in with Free user', () => {
        pageData.loginWithTestUserFree()
    })
})