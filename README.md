# 📚 Playwright Learning Journey – E2E Testing Project

This project represents the next step in my learning journey with _Playwright_ and, this time, _end-to-end testing_ (E2E).

In the previous project, I focused mainly on automating individual UI elements and isolated interactions.  
With this project, I am transitioning to **complete user flows**, validating real application behavior from a user perspective.

The focus is on writing clean and maintainable tests using **Page Object Model (POM)**, handling dynamic user interface behavior, and generating clear test reports with **Allure**.

## 🚀 Tech Stack

- **Playwright**
- **TypeScript**
- **Allure Report**
- **Page Object Model (POM)**
- **Git & GitHub**

Implemented Test Scenarios

### 🔐 Login Tests

- Login with valid credentials
- Login with invalid username
- Login with invalid password
- Logout flow
- Navigation handled via reusable POMs

### ⚠️ Exceptions Page Tests

- Edit and save an existing row
- Add a new row
- Remove dynamically added row
- Validate success messages
- Handle dynamic elements and loading states

### 📊 Table Page Tests

- Verify table visibility and content
- Filter courses by language
- Filter by level (Beginner /Advanced)
- Sort table data
- Reset filters
- Validate external links
- Handle empty state when no data matches filters

### 🎯 Purpose of This Project

- Practice writing stable and readable E2E tests
- Improve test structure using the **Page Object Model (POM)**
- Handle dynamic UI elements, filters, and loading states
- Build a realistic QA automation portfolio project

The project also integrates **Allure Reporting**, providing clear and structured test execution steps and results.

## ▶️ How to Run the Tests

Install dependencies:

```bash
npm install


Run all tests:
npx playwright test

Generate Allure report:
allure generate ./allure-results --clean
Open Allure report:
allure open





```
