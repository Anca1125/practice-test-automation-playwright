import { Page, Locator } from '@playwright/test'

export class PracticePage {
  readonly page: Page
  readonly testLoginPage: Locator
  readonly testTablePage: Locator
  readonly testExceptionsPage: Locator

  constructor(page: Page) {
    this.page = page
    this.testLoginPage = page.getByRole('link', { name: 'Test Login Page' })
    this.testTablePage = page.getByRole('link', { name: 'Test Table' })
    this.testExceptionsPage = page.getByRole('link', { name: 'Test Exceptions' })
  }
}