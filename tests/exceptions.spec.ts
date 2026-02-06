import {test, expect} from '@playwright/test'
import {allure} from 'allure-playwright'
import { NavigationPage } from '../pages/NavigationPage'
import { PracticePage } from '../pages/PracticePage'
import {ExceptionsPage} from '../pages/ExceptionsPage'
import { rowData } from '../fixtures/exceptionsData'

let exceptionsPage: ExceptionsPage
test.describe('exceptions',() => {
 test.beforeEach(async ({page}) => {

const navigationPage = new NavigationPage(page)
const practicePage = new PracticePage (page)

exceptionsPage = new ExceptionsPage(page)

await page.goto('https://practicetestautomation.com/')
await navigationPage.goToPractice()
await practicePage.goToExceptionsPage()
await expect(page.getByRole('heading', { name: 'Test Exceptions' })).toBeVisible()
 })
test('exceptions - user is able to edit and save row 1', async ({page})=>{

await allure.step('edit button is visible', async() => {
 await expect(exceptionsPage.editButton).toBeVisible()
})

await allure.step('click on edit button', async() => {
 await exceptionsPage.clickEditButton()
})

await allure.step('input field is active and user is able to edit', async() => {
 await exceptionsPage.fillInputRow1(rowData.row1.text)
})

await allure.step('save changes', async() => {
 await exceptionsPage.clickSaveButton()
})

await allure.step('the success message is dispalyed', async() => {
 await exceptionsPage.expectSuccesMessage('Row 1 was saved')
})
})

test('user is able to add and save a new row', async ({page}) => {

await allure.step('add button is visible', async() => {
 await expect(exceptionsPage.addButton).toBeVisible()
})  
   
await allure.step('click on add button an wait for loading the new row', async() => {
 await exceptionsPage.clickAddButton()
})

await allure.step('waiting for loading and the row 2 is visible', async() => {
 await expect(exceptionsPage.successMessage).toBeVisible()
})  

await allure.step('chekching the success message', async() => {
 await expect(exceptionsPage.successMessage).toHaveText('Row 2 was added')
}) 

await allure.step('the user is able to type in row2', async() => {
 await exceptionsPage.fillInputRow2(rowData.row2.text)
}) 

await allure.step('the user is able to save row2',async() => {
 await exceptionsPage.clickSaveButton()
})

await allure.step('the success message for saving the new row is displayed', async() =>{
 await expect(exceptionsPage.successMessage).toHaveText('Row 2 was saved')
})         
})
test('user is able to remove row2', async ({page}) => {

await allure.step('click on add button', async() => {
 await exceptionsPage.clickAddButton()
})

await allure.step('row 2 is visible and a success message is displayed', async() => {
 await expect(exceptionsPage.successMessage).toBeVisible()
})

await allure.step('the user is able to remove row2', async() => {
 await exceptionsPage.clickRemoveButton()
})

await allure.step('row 2 is removed and a succes message is displayed', async() => {
 await expect(exceptionsPage.successMessage).toHaveText('Row 2 was removed')
})
})
})







