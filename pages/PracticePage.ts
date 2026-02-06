import {Page, Locator} from '@playwright/test'

export class PracticePage {
                  readonly page: Page
                  readonly testLoginPage: Locator
                  readonly testTablePage: Locator

                  constructor (page: Page){
                                    this.page = page
                                    this.testLoginPage = page.getByRole('link', {name:'Test Login Page'})
                                    this.testTablePage = page.getByRole('link', {name: 'Test Table'})
                  }
                  async goToLoginPage(){
                                    await this.testLoginPage.click()
                  }
                  async goToTablePage(){
                                    await this.testTablePage.click()
                  }
                    
}