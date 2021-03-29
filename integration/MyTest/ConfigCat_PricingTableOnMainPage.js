import * as pageData from '../../Helpers/homePageHelper.js'
import * as tableHelper from '../../Helpers/tableHelper.js'

describe('ConfigCat » Pricing Table On Main Page', () => {
    const url = Cypress.env('testPage')
    it('Open home page » URL is correct', () => {
        cy.visit(url)
        cy.get('.accept-button').click()
        cy.url()
            .should('eq', url)
    })

    it('Home page » Page has navbar and value-wrapper', () => {
        cy.get(pageData.navBar)
            .should('be.visible')
        cy.get(pageData.valueWrapper)
            .should('be.visible')
    })

    it('Home page » Go to Pricing table', () => {
        cy.get(pageData.nav_pricing).click()
        cy.url()
            .should('eq', url + '#pricing')
        cy.get(pageData.pricingTable.pricingWrapper)
            .should('be.visible')
        cy.get(pageData.pricingTable.pricingCard)
            .should('be.visible')
    })

    it('Home page » Pricing section has two switches', () => {
        cy.get(pageData.pricingTable.switches)
            .should('have.length', 2)
    })

    it('Home page » Pricing table is displayed', () => {
        cy.get(pageData.pricingTable.pricingTable)
            .should('be.visible')
    })

    it('Home page » Pricing table has 6 columns', () => {
        tableHelper.getColumnsByRowIndex(pageData.pricingTable.pricingTable, 0)
            .should('have.length', 6)
    })

    //Check a cell content
    it('Home page » Pricing table » Free subscription costs $0', () => {
        tableHelper.getCellText(pageData.pricingTable.pricingTable, 'annual-usd', 1)
            .should('eq', '$ 0 / mo')
    })

    //Open a link from the table
    it('Home page » Pricing table » Click on (SLA) link', () => {
        tableHelper.getCellByRowIndex(pageData.pricingTable.pricingTable, 10, 0).find('a')
            .should('have.attr', 'href', '/sla')
            .click({force: true})
        cy.url()
            .should('eq', url + "sla/")
    })
    
})