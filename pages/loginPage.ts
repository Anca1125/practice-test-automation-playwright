import {Page, Locator} from '@playwright/test'

export class LoginPage { 
                  readonly page: Page
                  readonly userNameInput: Locator
                  readonly passwordInput: Locator
                  readonly submitButton: Locator
                  readonly logoutButton: Locator

                  constructor(page: Page){
                                    this.page = page
                                    this.userNameInput = page.locator('#username')
                                    this.passwordInput = page.locator('#password')
                                    this.submitButton = page.locator('#submit')
                                    this.logoutButton = page.getByText('Log out')
                  }
                  
                  async fillUserNameInput(value: string){
                                    await  this.userNameInput.fill(value)
                  }
                  async fillPasswordInput(value: string){
                                    await this.passwordInput.fill(value)
                  }
                  async clickSubmitButton(){
                                    await this.submitButton.click()
                  }
                  async clickLogoutButton(){
                                    await this.logoutButton.click()
                  }
                  
}