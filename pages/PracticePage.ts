import {Page, Locator} from '@playwright/test'

export class PracticePage {
                  readonly page: Page
                  readonly testLoginPage: Locator

                  constructor (page: Page){
                                    this.page = page
                                    this.testLoginPage = page.getByRole('link', {name:'Test Login Page'})
                  }
                  async goToLoginPage(){
                                    await this.testLoginPage.click()
                  }
                    
}