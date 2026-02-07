import {Page, Locator} from '@playwright/test'

export class TablePage{
                  readonly page: Page

                  //TABLE SECTION
                  readonly pageHeading: Locator
                  readonly table: Locator
                  readonly tableHeaders: Locator
                  readonly tableRows: Locator

                  //FILTER
                  readonly anyRadioButton: Locator
                  readonly javaRadioButton: Locator
                  readonly pythonRadioButton: Locator

                  readonly begginerCheckBox: Locator
                  readonly intermediateCheckbox: Locator
                  readonly advancedCheckBox: Locator

                  readonly minEnrollments: Locator
                  readonly sortByDropdown: Locator
                  readonly sortByLevel: Locator
                  readonly resetButton: Locator

                  //LINKS
                  readonly linkButton: Locator



                  constructor(page: Page){
                                    this.page = page

                                    //TABLE SECTION
                                    this.pageHeading = page.getByRole('heading', {name: 'Test Table'})
                                    this.table = page.locator('table')
                                    this.tableHeaders = page.locator('table thead th')
                                    this.tableRows = page.locator('table tbody tr')

                                    //FILTER SECTION
                                    this.anyRadioButton = page.getByLabel(' Any')
                                    this.javaRadioButton = page.getByLabel(" Java")
                                    this.pythonRadioButton = page.getByLabel(' Python')

                                    this.begginerCheckBox = page.getByLabel(' Beginner')
                                    this.intermediateCheckbox= page.getByLabel(' Intermediate')
                                    this.advancedCheckBox = page.getByLabel(' Advanced')

                                    this.minEnrollments = page.locator('#enrollDropdown')
                                    this.sortByDropdown = page.locator('#sortBy')
                                    this.sortByLevel = page.getByRole('columnheader', { name: 'Level' })
                                    this.resetButton = page.locator('#resetFilters')

                                    //LINKS
                                    this.linkButton = page.getByRole('link', {name:'View'})
}

}