import LoginPage from'../support/pageObjects/loginPage'

describe('Login failures', () => {

    const loginPage = new LoginPage()

    it('Wrong email', () => {

        cy.visit('/')

        cy.url()
            .should('include','/login')
    
        loginPage.getActionFillEmail('benja71093')

        loginPage.getActionFillPassword('jZA$02d.')

        loginPage.getSignInButton()
            .click()

        loginPage.getToast()
            .should('be.visible')

        loginPage.getSignInButton()
            .should('be.disabled')
    })

    it('Wrong password', () => {

        cy.visit('/')

        cy.url()
            .should('include','/login')
    
        loginPage.getActionFillEmail('benja71093@gmail.com')

        loginPage.getActionFillPassword('jZA$..')

        loginPage.getSignInButton()
                .click()

        loginPage.getToast()
                .should('be.visible')
            
        loginPage.getSignInButton()
                .should('be.disabled')
    })

    it('No email and no password', () => {

        cy.visit('/')

        cy.url()
        .should('include','/login')

        loginPage.getActionFillEmail('')

        loginPage.getActionFillPassword('')

        loginPage.getSignInButton()
                .click()

        loginPage.getToast()
                .should('be.visible')
            
        loginPage.getSignInButton()
                .should('be.disabled')
    })
})