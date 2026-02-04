import {test, expect} from '@playwright/test'
import { NavigationPage } from '../pages/navigationPage'
import { PracticePage } from '../pages/PracticePage'


test.describe('login', ()=>{

test.beforeEach(async ({page})=>
{
const navigationPage = new NavigationPage(page)
const practicePage = new PracticePage (page)

await page.goto('https://practicetestautomation.com/')
await navigationPage.goToPractice()
await practicePage.goToLoginPage()
await expect(page).toHaveURL('https://practicetestautomation.com/practice-test-login/')
})
test('login test - login with valid credentials', async ({page})=>{
                  
})
})
