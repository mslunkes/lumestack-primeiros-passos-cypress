class MyInfoPage {
    selectorList(){
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
}