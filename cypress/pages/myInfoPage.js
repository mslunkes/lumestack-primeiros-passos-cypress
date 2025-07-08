class MyInfoPage {

    selectorsList(){
        const selectors ={
            firstNameField: "[name='firstName']",
            middleNameField: "[name='middleName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-mm-dd']",
            genericCombobox: ".oxd-select-text--arrow",
            item106Combobox: '.oxd-select-dropdown > :nth-child(106)',
            item3Combobox: '.oxd-select-dropdown > :nth-child(3)',
            dateCloseButton: ".--close",
            submitButton: "[type='submit']",
        }
        return selectors
    }

    fillPersonalDetails(firstName, middleName, lastName){
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().middleNameField).clear().type(middleName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        //cy.get(this.selectorsList().genericField).eq(3).clear().type('NickName')
    }
    fillEmployedDetails(employedId, otherId, numberDriverLicense,driverLicenseDate){
            cy.get(this.selectorsList().genericField).eq(3).clear().type(employedId)
            cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
            cy.get(this.selectorsList().genericField).eq(5).clear().type(numberDriverLicense)
            cy.get(this.selectorsList().genericField).eq(6).clear().type(driverLicenseDate)
            cy.get(this.selectorsList().dateCloseButton).click()
            //cy.get(this.selectorsList().genericField).eq(8).clear().type('ssnNumberTest')
            //cy.get(this.selectorsList().genericField).eq(9).clear().type('sinNumberTest')
    }

    saveForm(){
        cy.get(this.selectorsList().submitButton).eq(0).click({ force: true })
       
        cy.get('.oxd-toast-close')
    }

    fillStatus(){
        cy.get(this.selectorsList().genericCombobox).eq(0).click({ force: true })
        cy.get(this.selectorsList().item106Combobox).click() 
        cy.get(this.selectorsList().genericCombobox).eq(1).click({ force: true })
        cy.get(this.selectorsList().item3Combobox).click()
        

    }
}

export default MyInfoPage