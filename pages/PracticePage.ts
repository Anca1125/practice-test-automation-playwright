import {Page, Locator} from '@playwright/test'

export class PracticePage {
                  readonly page: Page;
                  readonly testLoginPage: Locator;
                  readonly testExeptionsPage: Locator;

                  constructor (page: Page){
                                    this.page = page
                                    this.testLoginPage = page.getByRole('link', {name:'Test Login Page'});
                                    this.testExeptionsPage = page.getByRole('link', { name: 'Test Exceptions' });
                     
                  }
                  async goToLoginPage(){
                                    await this.testLoginPage.click();
                  }
                  async goToExceptionsPage(){
                                    await this.testExeptionsPage.click();
                    }
}