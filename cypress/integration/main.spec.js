import Calls from'../support/pageObjects/calls'
import MainPage from'../support/pageObjects/mainPage'
import HistoryPage from '../support/pageObjects/historyPage'
import PeoplePage from '../support/pageObjects/peoplePage'

describe('Testing main functionality', () => {

    const calls = new Calls()
    const mainPage = new MainPage()
    const historyPage = new HistoryPage()
    const peoplePage = new PeoplePage()

    beforeEach(() => {
        //This is a custom command that is inside support/commands
        cy.login()
      })

    it('Main functionality', () => {

        const myName = 'Benjamin San Miguel'

        mainPage.getKeyboardInput()
            .type('+34617869505')
            .clear()
            .should('be.empty')
            
        for (let i=0; i < 7; i++){
            mainPage.getActionClickKey3()
            }

        mainPage.getKeyboardInput()
            .clear()
            .should('be.empty')
        
        peoplePage.getTabPeople()
                .click()

        cy.url()
            .should('include','/people')

        peoplePage.getContactSeachInput()
            .type(myName)

        peoplePage.getTeammateButton()
            .first()
            .should('be.visible')
            .click()

        peoplePage.getContactName()
            .should('contain', myName)

        mainPage.getActionModalClose()

        mainPage.getHistoryButton()
            .click()

        cy.url()
            .should('include','/history')
        
        historyPage.getListHistoryCalls()
            .first()
            .should('be.visible')
            .click()

        calls.getNoteButton()
            .should('be.visible')

        calls.getCallsDetailInfo()
            .should('contain', 'Call Information')
        })

    it('Settings tab', () => {

        mainPage.getTabSettings()
            .click()

        mainPage.getSettingsPanel()
            .should('be.visible')
        
        mainPage.getItemButton()
            .contains('Account')
            .click()

        mainPage.getTitleText()
            .should('contain', 'Account')
        
        //The DOM has 2 close buttons, so I have to click the first one, the one related with the new window
        mainPage.getActionModalClose()

        mainPage.getItemButton()
            .contains('Sounds & Devices')
            .click()

        mainPage.getTitleText()
            .should('contain', 'Sounds & Devices')

        mainPage.getActionModalClose()

        mainPage.getItemButton()
            .contains('Call Preferences')
            .click()

        mainPage.getTitleText()
            .should('contain', 'Call Preferences')

        mainPage.getActionModalClose()

        mainPage.getItemButton()
            .contains('Working Hours')
            .click()
    
        mainPage.getTitleText()
            .should('contain', 'Working Hours')
            
        mainPage.getActionModalClose()

        mainPage.getItemButton()
            .contains('Email Notifications')
            .click()
    
        mainPage.getTitleText()
            .should('contain', 'Email notifications')

        mainPage.getActionModalClose()

        mainPage.getItemButton()
            .contains('Support')
            .click()
    
        mainPage.getTitleText()
            .should('contain', 'Support')
            
        mainPage.getActionModalClose()

        /*Cypress cant handle more than a window at the same time, so I'm not testing this function as I'm not the sure that this URL is dynamic
        cy.get('[data-test="item-button"]')
            .contains('Refer a friend')
            .click()
    
        cy.window().
            its('open').
            should('be.called')
        */

        mainPage.getItemButton()
            .contains('Log Out')
            .click()

        cy.url()
            .should('include','/login')
    })
})