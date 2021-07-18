class AssignList{

    getListRow(){
        return cy.get('[data-test="list-row"]')
    }

    getSearchField(){
        return cy.get('[data-test="search-field"]')
    }

}

export default AssignList