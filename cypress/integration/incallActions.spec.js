import Calls from'../support/pageObjects/calls'
import MainPage from'../support/pageObjects/mainPage'
import AssignList from'../support/pageObjects/assignList'
import Tags from'../support/pageObjects/tags'
import TransferPage from '../support/pageObjects/transferPage'
import HistoryPage from '../support/pageObjects/historyPage'
import PeoplePage from '../support/pageObjects/peoplePage'

describe('Incall actions', () => {
    
    const calls = new Calls()
    const mainPage = new MainPage()
    const assignList = new AssignList()
    const tags = new Tags()
    const transferPage = new TransferPage()
    const historyPage = new HistoryPage()
    const peoplePage = new PeoplePage()

    //beforeEach is used to repeat a function before each test (it)
    beforeEach(() => {
        //This is a custom command that is inside support/commands
        cy.login()
      })
      
    it('Mute a call', () => {

        cy.callFunction()

        //With this assertion, we can know if the button is enabled at this moment
        calls.getActionMute()
            .click()
            .should('not.be.disabled')
         
        //This is how we check that the button is enabled, otherwise it would fail
        calls.getActionUnmute()
            .should('not.be.disabled')
            .click()

        calls.getActionMute()
            .should('not.be.disabled')

    })

    it('Hold a call', () => {
        
        cy.callFunction()
 
        calls.getActionHold()
            .click()
            .should('not.be.disabled')

        calls.getActionUnhold()
            .should('be.visible')
            .should('not.be.disabled')
            .click()

        calls.getActionHold()
            .should('not.be.disabled')
    })

    it('Record a call', () => {

        cy.callFunction()
       
       calls.getActionRecord()
            .click()
            .should('not.be.disabled')

        calls.getActionPauseRecord()
            .should('be.visible')
            .should('not.be.disabled')
            .click()

        calls.getActionRecord()
            .should('be.visible')

    })

    it('Keyboard limit caracteres', () => {

        //I'm pretty sure this is a bug, the test plan says there is a limit of 23 caracteres, but I have wrote 28 and they are displayed on the phone
        //But maybe it says that it º work with 23 numbers, in that case it would not be a bug
        mainPage.getKeyboardInput()
            .type('1234567890123456789012345678')

        mainPage.getExpectKeyboardLength()

    })

    it('Keyboard functionality', () => {
        mainPage.getKeyboardInput()
            .type('+3238083708')
        
        mainPage.getCloseButton()
            .click()
        
        //I use the dial button to check that when I click on close, I get back to the keyboard  
        mainPage.getDialButton()
            .should('be.visible')
            
        mainPage.getKeyboardInput()
            .should('be.empty')
    })

    it('Assign call', () => {

        cy.callFunction()

        calls.getActionAssign()
            .click()

        mainPage.getTitleText()
            .should('contain', ('Assign to'))

        //I choose first because it will always assign the call to my user
        assignList.getListRow()
            .first()
            .click()

        /*Also, its possible to write who you want to assign the call
        assignList.getSearchField()
            .type('Benjamin San Miguel')

        assignList.getListRow()
            .first()
            .click()
        */
        

       mainPage.getToastPrimary()
            .should('be.visible')
    })

    it('Tag action', () => {
        
        cy.callFunction()

        tags.getTagsButton()
            .click()

        mainPage.getTitleText()
            .should('contain', ('Tags'))

        tags.getActionSelectTag()

        //I need to check if the tag selected is the one expected, I do it with the back ground color of the dot
        tags.getActionSelectedTag()

        tags.getTagsPanel()
            .click()
            
        //After I select a tag, I have to hang up the call, go to the history and check if the last call made (should be mine) has a tag
        calls.getHangUpButton()
            .click()

        mainPage.getHistoryButton()
            .click()

        //Check that we are in history
        cy.url()
            .should('include','/history')

        //Wait until the first tag dot is visible and we check that is the same tag comparing background colors 
        tags.getActionCheckTagDot()
     
    })

    it('Comment action', () => {

        const textNotes = 'Hello, I am testing note area'
        cy.callFunction()

        calls.getNoteButton()
            .click()

        calls.getActionWriteNote(textNotes)

        calls.getActionNoteDone()
            .click()
    
        calls.getHangUpButton()
            .click()

        /*        
        Reading the test plan, it says that after writing a note, the keypad button should be a ✓ button, but it doesn't happens, I'm not sure about if that's a bug, or the test plan is old
            cy.get('[data-test="tab-bar-keypad"]')
            .should('not.be.visible')
        */

        calls.getNoteButton()
            .should('be.visible')
            .click()
            
        //We can check that the texts notes are saving correctly    
        calls.getActionWriteNote()
            .should('contain', textNotes)
            
    })

    it('Transfer action', () => {

        mainPage.getTabSettings()
            .click()

        //I set my status unavailable because I'm calling my self, and I need the call ends by it self
        mainPage.setActionStatusUnavailable()

        mainPage.getActionModalClose()

        cy.callFunction()

        calls.getTransferButton()
            .click()

        mainPage.getTitleText()
            .should('contain', ('Transfer to'))

        mainPage.getKeyboardInput()
            .type('test user 2')

        transferPage.getPeopleSearchContact()
            .first()
            .click()

        transferPage.getActionTransferCall()
            .click()

        mainPage.getHistoryButton()
            .should('be.visible')
            .click()

        //cy.get('[data-test="on-call-text"]')
          //  .should('be.disabled')

        cy.wait(10000)

        historyPage.getListHistoryCalls()
            .first()
            .click()

        //I check is transferred looking for the test
        historyPage.getCallInformationStatus('Transferred')
    })

    it('Create a contact', () => {

        //This test is problematic, as I cant delete my own user or phone, so I cant create it, and then delete it. (Please, delete my username if you can, its my real phone number)
        //As I cant delete it, its going to fail

        peoplePage.getTabPeople()
            .click()

        peoplePage.getActionCreateContact()

        peoplePage.getActionFillName('Benjamin')

        peoplePage.getActionFillLastName('San Miguel')

        peoplePage.getActionFillCompany('Aircall')

        peoplePage.getActionFillPhone('+34617869505')

        peoplePage.getActionFillNotes('For testing purposes')

        peoplePage.getSubmitButton()
            .click()

        peoplePage.getContactName()
            .should('contain', 'Benjamin San Miguel')

        peoplePage.getContachPhone()
            .should('contain', '+34617869505')

        peoplePage.getCompanyName()
            .should('contain', 'Aircall')

        mainPage.getActionModalClose()

        peoplePage.getTabPeople()
            .click()
    })

    it('Timer test', () => {

        //This is probably a bug, the timer starts at 00:01 instead of 00:00, I'm not sure if it should starts at 00:00 or 00:01, so it's failing for now
        cy.callFunction()

        calls.getTimerInfo()
            .first()
            .should('contain', '00:00')
    })
})