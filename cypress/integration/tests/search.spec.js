/// <reference types="cypress" />

context('Search', () => {
    beforeEach(() => {
        cy.visit("localhost:8080/search")
    })

    it("News feed", () => {
        cy.get(".input-container input").type("Guidelines", {delay: 100})
        cy.get(".input-container button").click()
        cy.get(".card h3").should(($text) => {
            expect($text.text()).equal("Guidelines issued for resuming public activities and work settings")
        })
    })
})
