class Calls{
    
    getHangUpButton(){
        return cy.get('[data-test="hangup-button"]')
    }

    getActionMute(){
        return cy.get('[data-test="action-mute"]', { timeout: 10000 })
    }

    getActionUnmute(){
        return cy.get('[data-test="action-unmute"]', { timeout: 10000 })
    }

    getActionHold(){
        return cy.get('[data-test="action-hold"]', { timeout: 10000 })
    }

    getActionUnhold(){
        return cy.get('[data-test="action-unhold"]', { timeout: 10000 })
    }

    getActionRecord(){
        return cy.get('[data-test="action-start-recording"]', { timeout: 10000 })
    }

    getActionPauseRecord(){
        return cy.get('[data-test="action-pause-recording"]', { timeout: 10000 })
    }

    getActionAssign(){
        return cy.get('[data-test="assign-button"]')
    }

    getNoteButton(){
        return cy.get('[data-test="notes-button"]') 
    }

    getActionWriteNote(textNotes){  
        if((!textNotes || textNotes.length === 0 )){
            return cy.get('[data-test="note-textarea"]')
        }
        else
        return cy.get('[data-test="note-textarea"]').type(textNotes)
    }

    getActionNoteDone(){
        return cy.get('[data-test="notes-panel-done"]')
    }

    getTransferButton(){
        return cy.get('[data-test="transfer-button"]')
    }

    getCallsDetailInfo(){
        return cy.get('[data-test="call-details-info"]')
    }

    getTimerInfo(){
        return cy.get('[data-test="paragraph-text"]')
    }
}
export default Calls