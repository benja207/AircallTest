Cypress.Commands.add('login', () => {
    
    cy.visit('/')

    //This assert is used to be sure that we are in the login page
    cy.url().should('include','/login')

    cy.get('[data-test="signin-email-input"]')
        .type('benja71093@gmail.com')

    cy.get('[data-test="signin-password-input"]')
        .type('jZA$02d.')

    cy.get('[data-test="signin-button"]')
        .click()

    cy.get('[data-test="continue-button"]')
        .click()

    cy.get('[data-test="next-button"]', { timeout: 10000 })
        .should('be.visible')

    //I'm using a for as long as I need to click in "Next" button 4 times
    for (var i = 0; i < 4; i++){
    cy.get('[data-test="next-button"]')
        .click()
    }

    //This assert is used to be sure that we are in the keyboard page
    cy.url().should('include','/keyboard')
})

Cypress.Commands.add('callFunction', () => {
    cy.get('[data-test=keyboard-input-text]')
    .type('+3238083708')

    cy.get('[data-icon="iconKeypadFilled"]')
    .click()

    cy.get('[data-test="keyboard-button-dial"]')
    .click()

    //It waits 10 seconds until we are in the call screen, it uses to take 7 seconds to get in
    cy.get('[data-test="action-hold"]', { timeout: 10000 })
        .should('be.visible')
})