import {test, expect, Page} from '@playwright/test'
import { allure } from 'allure-playwright'
import { NavigationPage } from '../pages/navigationPage'
import { PracticePage } from '../pages/PracticePage'
import { TablePage } from '../pages/TablePage'


let navigationPage!: NavigationPage
let practicePage!: PracticePage
let tablePage!: TablePage

test.describe('test table page', () => {

 test.beforeEach(async ({page}) => {

navigationPage = new NavigationPage(page)
practicePage = new PracticePage (page)
tablePage = new TablePage(page)

await page.goto('https://practicetestautomation.com/');
await navigationPage.goToPractice();
await practicePage.goToTablePage();
})
test('test table - page loads successfully', async ({page}) => {
await allure.step('verify page heading is visible', async() => {
 await expect(tablePage.pageHeading).toBeVisible()
}) 

await allure.step('verify table is visible', async() => {
 await expect(tablePage.table).toBeVisible()
})
})

test('test table filter courses by Java language', async ({page}) => {
await allure.step('select Java language radio button', async() => {
 await tablePage.javaRadioButton.check()
}) 

await allure.step('verify that table contain only java courses', async () => {
 await expect(tablePage.table).toContainText('Java')                
})
})    

test('test table - filter by level begginer and advanced', async ({page}) => {
await allure.step('select beginner level', async () => {
 await tablePage.begginerCheckBox.check()
 })

await allure.step('select advanced level', async () => {
 await tablePage.advancedCheckBox.check()
 })

await allure.step('verify filters results are displayed', async () => {

const rows = await tablePage.tableRows.count()
expect(rows).toBeGreaterThan(0)
})

await allure.step('verify filtered levels are present in the table', async () => {
 await expect(tablePage.table).toContainText('Advanced')
 await expect(tablePage.table).toContainText('Beginner')  
})
})

test('test table - sort courses by language', async ({page}) => {
await allure.step('sort by language', async () => {
 await tablePage.sortByLevel.selectOption({label:'language'})                 
})
await allure.step('verify table is still displayed aftre sorting', async () => { 

const rows = await tablePage.tableRows.count()
expect(rows).toBeGreaterThan(0)
})
})

test('test table - filter courses by enrollments value', async ({page})=> {
await allure.step('click on min enrollments dropdown', async () => {
 await tablePage.minEnrollments.click()
})  

await allure.step('select 5,000+ enrollment option', async () => {
 await page.getByRole('option', { name: '5,000+' }).click()
})

await allure.step('verify filter results are displayed', async () => {
  
const rows = await tablePage.tableRows.count()
expect(rows).toBeGreaterThan(0)
})               
})

test('test table - reset values', async({page}) => {
await allure.step('select java', async () => {
 await tablePage.javaRadioButton.check()
})

await allure.step('reset button is visible', async() => {
 await expect(tablePage.resetButton).toBeVisible()                 
})

await allure.step('click on reset button', async() => {
 await tablePage.resetButton.click()                 
})

await allure.step('reset button is hidden', async() => {
 await expect(tablePage.resetButton).toBeHidden()                 
})
})

test('test table - reset filters restore full table', async({page}) => {

let rowsAfterFilter: number
let rowsAfterReset: number

await allure.step('select java', async () => {
 await tablePage.javaRadioButton.check()
})

await allure.step('store number of rows after filter', async () => {
 rowsAfterFilter = await tablePage.tableRows.count()
 expect(rowsAfterFilter).toBeGreaterThan(0)
})

await allure.step('click on reset button', async() => {
 await tablePage.resetButton.click()                 
})

await allure.step('verify table is reset',  async() => {
 rowsAfterReset = await tablePage.tableRows.count()
 await expect(rowsAfterReset).toBeGreaterThan(0)
})
})

test('test table - verify links', async ({page}) => {

let newPage: Page

await allure.step('click on link button', async() => {
 [newPage] = await Promise.all([
  page.context().waitForEvent('page'), 
  tablePage.linkButton.first().click()
])
})

await allure.step('verify user is navigated to the course page', async () => {
 await newPage.waitForLoadState()
 await expect(newPage).not.toHaveURL('https://practicetestautomation.com/practice-test-table/')
})
})

test('test table - no courses are displayed when all levels are deselected', async() => {
await allure.step('deselect all levels', async() => {
 await tablePage.begginerCheckBox.click()
 await tablePage.advancedCheckBox.click()
 await tablePage.intermediateCheckbox.click()
})

await allure.step('verify no data message is displayed', async() => {
 await expect(tablePage.page.locator('#noData')).toContainText(' No matching courses.')
})
})
})