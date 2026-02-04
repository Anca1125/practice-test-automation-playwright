import {test, expect} from '@playwright/test'


test('login test - login with valid credentials', async ({page})=>{
                  await page.goto('https://practicetestautomation.com/')
                  await page.getByRole('link', { name: 'Practice', exact: true }).click()
})

