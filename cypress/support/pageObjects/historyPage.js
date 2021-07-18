class HistoryPage{

    getListHistoryCalls(){
        return cy.get('[data-test="call-card-enriched"]')
    }

    getCallInformationStatus(status){
        return cy.get('[data-test="call-transferred-to-container"]')
            .should('contain', status)
    }
}

export default HistoryPage