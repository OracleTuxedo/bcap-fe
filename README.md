# Rules

## Commitlint

**Commitlint** is a tool used to enforce a consistent commit message format, helping teams maintain clear commit history and making it easier to understand what changes have been made. Below are detailed explanations of common commit message types that can be enforced by **Commitlint**, with examples and use cases:

### 1. **chore**

Routine tasks that don't change application functionality or features.

- **Example Commit Message:**
  `chore: update project README with contributing guidelines`
- **Use Case:**
  Updating documentation, renaming files, or other maintenance tasks that don't directly affect code execution.

### 2. **docs**

Changes to documentation (e.g., `README.md`, inline comments).

- **Example Commit Message:**
  `docs: add API usage examples for the authentication service`
- **Use Case:**
  Adding or updating documentation without modifying the application code, making it easier for new developers or end-users to understand the project.

### 5. **feat**

A new feature that enhances the application.

- **Example Commit Message:**
  `feat: add a dark mode toggle to the settings page`
- **Use Case:**
  Introducing new user-visible functionality, such as adding a new API endpoint or UI component.

### 6. **fix**

A bug fix for the application.

- **Example Commit Message:**
  `fix: resolve login error when using invalid credentials`
- **Use Case:**
  Correcting unexpected behavior in the system, such as fixing logic errors, typos in the code, or runtime exceptions.

### 8. **refactor**

Code changes that neither fix a bug nor add a feature but improve code structure.

- **Example Commit Message:**
  `refactor: modularize user authentication logic`
- **Use Case:**
  Improving maintainability by restructuring code, splitting functions into smaller ones, or following better design patterns.

### 9. **revert**

Revert a previous commit.

- **Example Commit Message:**
  `revert: revert "feat: add a new analytics dashboard"`
- **Use Case:**
  Undoing changes introduced in an earlier commit, often due to bugs or unintended side effects.

### 10. **style**

Changes that do not affect application functionality but improve code style (e.g., formatting, spacing).

- **Example Commit Message:**
  `style: fix indentation and remove trailing spaces`
- **Use Case:**
  Enforcing consistent code formatting, such as adhering to a specific style guide, without changing the program's behavior.

---

### 11. **test**

Adding or modifying tests (unit, integration, or end-to-end).

- **Example Commit Message:**
  `test: add unit tests for user service methods``
- **Use Case:**
  Adding new test cases, fixing existing ones, or improving coverage for better reliability.

---

## Benefits of Commitlint Rules

- Enforce consistent commit message conventions.
- Help generate automated changelogs using tools like **semantic-release**.
- Improve readability and traceability of changes in the codebase.
