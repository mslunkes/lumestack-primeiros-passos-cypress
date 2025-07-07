import userData from '../fixtures/users/userData.json'
import LoginPage from '../pages/loginPage'
import DashboardPage from '../pages/dashboardPage'
import MenuPage from '../pages/menuPage'
import MyInfoPage from '../pages/myInfoPage'

const loginPage = new LoginPage
const dashboardPage = new DashboardPage
const menuPage = new MenuPage
const myInfoPage = new MyInfoPage

describe('Orange HRM Tests', () => {

  const selectorsList = {
    
    

  }

  it.only('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password )
    
    dashboardPage.checkDashboardPage()
    
    menuPage.accessMyInfo()
    
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.middleNameField).clear().type('MiddleNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    //cy.get(selectorsList.genericField).eq(3).clear().type('NickName')
    cy.get(selectorsList.genericField).eq(3).clear().type('Employed')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriverLicenseTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('2028-08-10')
    cy.get(selectorsList.dateCloseButton).click()
    //cy.get(selectorsList.genericField).eq(8).clear().type('ssnNumberTest')
    //cy.get(selectorsList.genericField).eq(9).clear().type('sinNumberTest')
    
    cy.get(selectorsList.genericCombobox).eq(0).click({ force: true })
    cy.get(selectorsList.item106Combobox).click() 
    cy.get(selectorsList.genericCombobox).eq(1).click({ force: true })
    cy.get(selectorsList.item3Combobox).click() 

    cy.get(selectorsList.submitButton).eq(0).click({ force: true })

    cy.get('body').should('contain', 'Successfully Updated')
    cy.get('.oxd-toast-close')
    
    
})

    it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
  })

  
  
  
})