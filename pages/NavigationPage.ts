import {Page, Locator} from '@playwright/test'

export class NavigationPage {
                   readonly practiceLink: Locator
                  

                  constructor(page: Page){

                                    this.practiceLink = page.getByRole('link', { name: 'Practice', exact: true })
                                    
                  }

                  async goToPractice(){
                        await this.practiceLink.click()
                  }

                  
} 

          
