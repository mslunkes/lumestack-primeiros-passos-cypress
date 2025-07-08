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

  it('User Info Update - Sucess', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password )
    
    dashboardPage.checkDashboardPage()
    
    menuPage.accessMyInfo()

    myInfoPage.fillPersonalDetails('First', 'Middle', 'Last')
    myInfoPage.fillEmployedDetails('EmplyedID', 'OtherID', '12345', '2028-07-10')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()
    
    
    
})

    it('Login - Fail', () => {
      loginPage.accessLoginPage()
      loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
      loginPage.checkAccessInvalid()
  })

  
  
  
})