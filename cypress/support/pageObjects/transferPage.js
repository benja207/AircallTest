class TransferPage{

    getPeopleSearchContact(){
        return cy.get('[data-test="people-search-contacts-section"]')
    }

    getActionTransferCall(){
        return cy.get('[data-test="transfer-cold"]')
    }
}

export default TransferPage