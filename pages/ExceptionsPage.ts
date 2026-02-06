import {Page, Locator, expect} from '@playwright/test'

export class ExceptionsPage {
                  readonly page: Page
                  readonly editButton: Locator
                  readonly addButton: Locator
                  readonly saveButton: Locator
                  readonly removeButton: Locator
                  readonly inputRow1: Locator
                  readonly inputRow2: Locator
                  readonly successMessage: Locator

                 

                  constructor (page: Page){
                                    this.page = page
                                    this.editButton = page.locator('#edit_btn')
                                    this.addButton = page.locator('#add_btn')
                                    this.saveButton = page.locator('#save_btn')
                                    this.removeButton = page.locator('#remove_btn')
                                    this.inputRow1 = page.locator('.input-field')
                                    this.inputRow2 = page.locator('#row2 input')
                                    this.successMessage = page.locator('#confirmation')

                  }
                  async clickEditButton(){
                                    await this.editButton.click()
                  }
                  async clickAddButton(){
                                    await this.addButton.click()
                  }
                  async clickSaveButton(){
                                    await this.saveButton.click()
                  }
                  async clickRemoveButton(){
                                    await this.removeButton.click()
                  }
                  async fillInputRow1( value: string){
                                    await this.inputRow1.fill(value)
                  }
                  async expectSuccesMessage(text:string){
                                    await expect(this.successMessage).toHaveText(text)
                  }
                  async fillInputRow2(value:string){
                                    await this.inputRow2.fill(value)
                  }
 
}