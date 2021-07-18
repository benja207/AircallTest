class Tags{
    getTagsButton(){
        return cy.get('[data-test="tags-button"]')
    }

    getActionSelectTag(){
        return cy.get('[data-test="item-tag"]')
        .first()
        .click()
    }

    getActionSelectedTag(){
        return cy.get('[data-test="selected-tag"]')
        .should('be.visible')
        .should('have.css', 'background-color', 'rgb(0, 61, 76)')
    }

    getTagsPanel(){
        return cy.get('[data-test="tags-panel-done"]')
    }

    getActionCheckTagDot(){
        cy.get('[data-test="tag-dot"]',  { timeout: 10000 })
        .first()
        .should('be.visible')
        .should('have.css', 'background-color', 'rgb(0, 61, 76)')
    }
}
export default Tags