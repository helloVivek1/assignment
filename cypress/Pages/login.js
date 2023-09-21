class login{
    get userName_txt(){
        return cy.get("#username")
    }
    get password_txt(){
        return cy.get("#password")
    }
    get signIn_btn(){
        return cy.get('[value="SIGN IN"]')
    }
    get warningPopup(){
        return cy.get('#warningModal .close')
    }

    loginApp(url,data){
        cy.visit(url)
        this.userName_txt.type(data.userName)
        this.password_txt.type(atob(data.password),{log:false})
        this.signIn_btn.click()
        this.warningPopup.should('be.visible').click()
    }
}

let loginPageObj=new login()
export default loginPageObj