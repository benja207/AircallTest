class PoplePage{

    getTabPeople(){
        return cy.get('[data-test="tab-bar-people"]')
    }

    getActionCreateContact(){
        return cy.get('[data-test="contact-create-button"]')
            .click()
    }

    getActionFillName(name){
        return cy.get('[data-test="first-name"]')
            .type(name)
    }

    getActionFillLastName(lastName){
        return cy.get('[data-test="last-name"]')
            .type(lastName)
    }

    getActionFillCompany(company){
        return cy.get('[data-test="company-name"]')
            .type(company)
    }

    getActionFillPhone(phone){
        return cy.get('[data-test="phone-with-country-input"]')
            .type(phone)
    }

    getActionFillNotes(note){
        return cy.get('[data-test="contact-notes"]')
            .type(note)
    }

    getSubmitButton(){
        return cy.get('[data-test="submit-button"]')
    }

    getContactName(){
        return cy.get('[data-test="contact-name"]')
    }

    getContachPhone(){
        return cy.get('[data-test="contact-ringing-phone-number"]')
    }

    getCompanyName(){
        return cy.get('[data-test="paragraph-text"]')
    }

    getContactSeachInput(){
        return cy.get('[data-test="contacts-search-input"]')
    }

    getTeammateButton(){
        return cy.get('[data-test="item-button"]')
    }
}

export default PoplePage