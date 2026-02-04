import {test, expect} from '@playwright/test'
import { NavigationPage } from '../pages/navigationPage'
import { PracticePage } from '../pages/PracticePage'
import { LoginPage } from '../pages/loginPage'
import { validUser, invalidUser } from '../fixtures/loginData'

let loginPage: LoginPage
test.describe('login', ()=>{

test.beforeEach(async ({page})=>
{
const navigationPage = new NavigationPage(page)
const practicePage = new PracticePage (page)

loginPage = new LoginPage(page)

await page.goto('https://practicetestautomation.com/')
await navigationPage.goToPractice()
await practicePage.goToLoginPage()
await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/')
})



test('login test - login with valid credentials', async ({page})=>{

await loginPage.fillUserNameInput(validUser.username)
await loginPage.fillPasswordInput(validUser.password)
await loginPage.clickSubmitButton()

const successMessage = page.locator('.post-title')
const logoutButton = page.getByText('Log out')

await expect(successMessage).toHaveText('Logged In Successfully')  
await expect(logoutButton).toBeVisible()     
})

test('login test - logout', async ({page})=>{            

await loginPage.fillUserNameInput(validUser.username)
await loginPage.fillPasswordInput(validUser.password)
await loginPage.clickSubmitButton()
await page.getByText('Log out').click() 
await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/')
await expect(page.locator('#username')).toBeVisible() 
await expect(page.locator('#password')).toBeVisible()     
})

test('login test - login with invalid username', async ({page})=>{                    

await loginPage.fillUserNameInput(invalidUser.username)
await loginPage.fillPasswordInput(validUser.password)
await loginPage.clickSubmitButton()

const errorMessage = page.locator('#error')

await expect(errorMessage).toHaveText('Your username is invalid!')
})

test('login test - login with invalid password', async ({page})=>{  

await loginPage.fillUserNameInput(validUser.username)
await loginPage.fillPasswordInput(invalidUser.password)
await loginPage.clickSubmitButton()

const errorMessage = page.locator('#error')

await expect(errorMessage).toHaveText('Your password is invalid!')
})
})
