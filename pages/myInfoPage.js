export { MyInfoPage }

class MyInfoPage {

     constructor(page) {

            this.page = page

          
            this.fullName = page.locator('.oxd-input--active').nth(1)
            this.middleName = page.locator('.oxd-input--active').nth(2)
            this.nameUser = page.locator('.oxd-input--active').nth(3)
            this.employeeId = page.locator('.oxd-input--active').nth(4)
            this.otherId= page.locator('.oxd-input--active').nth(5)
            this.driverLicense = page.locator('.oxd-input--active').nth(6)
            this.licenseExpire = page.locator('.oxd-input--active').nth(7)
            this.nationality = page.locator('.oxd-select-text--after').nth(0)
            this.maritalStatus = page.locator('[tabindex="0"]').nth(1)
            this.dateBirthday = page.locator('[placeholder="yyyy-dd-mm"]').nth(1)
            this.saveButton = page.getByRole('button', {name:'Save'}).nth(1)
 
}


async navigateMyInfoPage () {

            await this.page.goto('/web/index.php/pim/viewPersonalDetails/empNumber/7')

}


async personalDetails () {
   
            await this.fullName.fill('Elizabeth', {timeout:10000}) 
            await this.middleName.fill('silva',{timeout:10000})
            await this.nameUser.fill('enginieer',{timeout:10000})      
          
}

async employeesInfo () {

            await this.employeeId.fill('12345678')
            await this.otherId.fill('4957589')
            await this.driverLicense.fill('56788')
            await this.licenseExpire.fill('2024-10-10')
            await this.nationality.click()
            await this.maritalStatus.click()
            await this.dateBirthday.fill('2001-04-03')
          
}

async saveInfo () {

           await this.saveButton.click()
} 

}