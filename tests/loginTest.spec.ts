import {test, expect} from '@playwright/test'
import { allure } from 'allure-playwright'
import { NavigationPage } from '../pages/NavigationPage'
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

test('login test - login with valid credentials', async ({page}) => {
await allure.step('fill username and password input & click submit', async() => {
 await loginPage.fillUserNameInput(validUser.username)
 await loginPage.fillPasswordInput(validUser.password)
 await loginPage.clickSubmitButton()
})
        
await allure.step('a success message is displayed', async() => {
 await  expect(loginPage.successMessage).toHaveText('Logged In Successfully') 
 await expect(loginPage.logoutButton).toBeVisible()               
})       
})

test('login test - logout', async ({page})=>{            
await allure.step('fill username and password input & click submit', async() => {
 await loginPage.fillUserNameInput(validUser.username)
 await loginPage.fillPasswordInput(validUser.password)
 await loginPage.clickSubmitButton()
})

await allure.step('a success message and logout button are displayed', async() => {
 await  expect(loginPage.successMessage).toHaveText('Logged In Successfully') 
 await expect(loginPage.logoutButton).toBeVisible()               
})

await allure.step('click on logout button', async() => {
 await loginPage.logoutButton.click()
})

 await allure.step('page to return to login and the inputs fields become visible', async() => {
 await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/')
 await expect(page.locator('#username')).toBeVisible() 
 await expect(page.locator('#password')).toBeVisible()
})    
})

test('login test - login with invalid username', async ({page}) => {
await allure.step('type invalid username', async() => {
 await loginPage.fillUserNameInput(invalidUser.username)
})

await allure.step('type valid passoword', async() => {
 await loginPage.fillPasswordInput(validUser.password)                 
})

await allure.step('click on submit button', async() => {
 await loginPage.clickSubmitButton()
})

await allure.step('an error message is displayed', async() => {
 await expect(loginPage.errorMessage).toHaveText('Your username is invalid!')
})                
})

test('login test - login with invalid password', async({page}) => {
await allure.step('type valid username', async() => {
 await loginPage.fillUserNameInput(validUser.username)                 
}) 

await allure.step('type invalid password', async() => {
 await loginPage.fillPasswordInput(invalidUser.password)
})

await allure.step('click submit button', async() => {
 await loginPage.clickSubmitButton()
})

await allure.step('an error message is displayed', async() => {
 await expect(loginPage.errorMessage).toHaveText('Your password is invalid!')                 
})
})              
})                 










