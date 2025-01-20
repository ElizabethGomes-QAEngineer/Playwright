const { LoginPage } = require('../pages/loginPage')
const { MyInfoPage } = require('../pages/myInfoPage')
const { test } = require('@playwright/test') 


test.describe('my info section' , () => {

      test.beforeEach(async ({ page }) => {
        
           await page.goto('/')

       })
    
      test('login with sucess', async({page}) =>{

           const login = new LoginPage(page)
           await login.loginWithUser()

           const myInfoPage = new MyInfoPage(page)
           await myInfoPage.navigateMyInfoPage ()
           await myInfoPage.personalDetails()
           await myInfoPage.employeesInfo()
           await myInfoPage.saveInfo()
      
       })  


})