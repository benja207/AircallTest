class LoginPage{

    getActionFillEmail(email){
        if((!email || email.length === 0 )){
            return cy.get('[data-test="signin-email-input"]')
        }
        else
        return cy.get('[data-test="signin-email-input"]').type(email)
    }

    getActionFillPassword(password){
        if((!password || password.length === 0 )){
            return cy.get('[data-test="signin-password-input"]')
        }
        else
        return cy.get('[data-test="signin-password-input"]').type(password)
    }

    getSignInButton(){
        return cy.get('[data-test="signin-button"]')
    }

    getToast(){
        return cy.get('[data-test=toast-destructive]')
    }

}

export default LoginPage