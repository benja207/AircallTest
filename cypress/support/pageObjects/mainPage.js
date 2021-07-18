class MainPage{

    getKeyboardInput(){
        return cy.get('[data-test=keyboard-input-text]')
    }

    getDialButton(){
        return cy.get('[data-test="keyboard-button-dial"]')
    }

    getExpectKeyboardLength(){
        return expect('[data-test=keyboard-input-text]').to.have.lengthOf(23)
    }

    getCloseButton(){
        return cy.get('[type="button"]')
    }

    getTitleText(){
        return cy.get('[data-test=title-text]')
    }

    getToastPrimary(){
        return  cy.get('[data-test="toast-primary"]', { timeout: 10000 })
    }

    getHistoryButton(){
        return cy.get('[data-test="tab-bar-history"]')
    }

    getTabSettings(){
        return cy.get('[data-test="tab-bar-settings"]')
    }

    setActionStatusUnavailable(){
        return cy.get('[data-test="unavailable"]')
        .click()
    }

    getActionModalClose(){
        return cy.get('[data-test="modal-close"]')
        .first()
        .click()
    }

    getActionClickKey3(){
        return cy.get('[data-test="keyboard-key-3"]')
        .click()
    }

    getItemButton(){
        return cy.get('[data-test="item-button"]')
    }

    getSettingsPanel(){
        return cy.get('[data-test="panel"]')
    }
}

export default MainPage