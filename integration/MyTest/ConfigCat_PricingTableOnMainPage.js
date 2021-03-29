import * as pageData from '../../Helpers/homePageHelper.js'
import * as tableHelper from '../../Helpers/tableHelper.js'

describe('ConfigCat » Pricing Table On Main Page', () => {
    const url = Cypress.env('testPage')
    it('Open home page » URL is correct', () => {
        cy.visit(url)
        cy.get('.accept-button').click()
        cy.url().should('eq', url)
    })

    it('Home page » Page has navbar and value-wrapper', () => {
        cy.get(pageData.navBar).should('be.visible')
        cy.get(pageData.valueWrapper).should('be.visible')
    })

    it('Home page » Go to Pricing table', () => {
        cy.get(pageData.nav_pricing).click()
        cy.url().should('eq', url + '#pricing')
        cy.get(pageData.pricingTable.pricingWrapper).should('be.visible')
        cy.get(pageData.pricingTable.pricingCard).should('be.visible')
    })

    it('Home page » Pricing section has two switches', () => {
        cy.get(pageData.pricingTable.switches).should('have.length', 2)
    })

    it('Home page » Pricing table is displayed', () => {
        cy.get(pageData.pricingTable.pricingTable).should('be.visible')
    })

    it('Home page » Pricing table has 6 columns', () => {
        tableHelper.getColumns(pageData.pricingTable.pricingTable, 'pricing-name').should('have.length', 6)
        tableHelper.getCellText(pageData.pricingTable.pricingTable, 'pricing-name', 1).then(val => cy.log(val))
    })
})