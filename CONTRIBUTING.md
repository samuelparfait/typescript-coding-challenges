# Contributing to TypeScript Coding Challenges

We welcome contributions to this repository! Follow the guidelines below to help maintain consistency and quality.

---

## Table of Contents

- [Getting Started](#getting-started)
- [Submitting a New Challenge](#submitting-a-new-challenge)
- [Improving Existing Challenges](#improving-existing-challenges)
- [Code Style Guidelines](#code-style-guidelines)
- [Pull Request Process](#pull-request-process)

---

## Getting Started

1. **Fork the Repository**:

   - Create a fork of this repository in your GitHub account.

2. **Clone the Repository**:

   ```bash
   git clone https://github.com/your-username/typescript-coding-challenges.git
   cd typescript-coding-challenges
   ```

3. **Install Dependencies**:

   - This project uses [Bun.js](https://bun.sh/). Ensure you have Bun installed, then run:
     ```bash
     bun install
     ```

4. **Set Up Your Branch**:
   - Create a branch for your contribution:
     ```bash
     git checkout -b add-challenge-name
     ```

---

## Submitting a New Challenge

### Folder Structure

Each challenge must adhere to the following folder structure:

```
.
├── challenges
│   └── yourChallengeName
│       ├── TASKS.md          # Instructions for the challenge
│       ├── yourChallengeName.test.ts  # Unit tests
│       └── yourChallengeName.ts       # The challenge implementation
```

### Steps to Add a New Challenge

1. **Create a New Folder**:

   - Use camelCase for the folder and file names (e.g., `yourChallengeName`).

2. **Write Instructions**:

   - Create a `TASKS.md` file with clear and concise instructions for the challenge.

3. **Add Unit Tests**:

   - Write comprehensive unit tests in a file named `yourChallengeName.test.ts`.

4. **Provide an Implementation** (optional):
   - Include a sample implementation in `yourChallengeName.ts`. Ensure it is easy to understand and adheres to the coding standards.

---

## Improving Existing Challenges

To improve an existing challenge:

1. Identify areas of improvement (e.g., clearer instructions, better test cases).
2. Make your changes while adhering to the existing folder structure and guidelines.
3. Update the `TASKS.md`, test files, or implementation as necessary.

---

## Code Style Guidelines

- Use **TypeScript** for all code.
- Follow best practices for readability, maintainability, and performance.
- Write **descriptive comments** where necessary.
- Ensure **tests are comprehensive** and cover edge cases.

---

## Pull Request Process

1. **Create a Pull Request (PR)**:

   - Push your branch to your forked repository:
     ```bash
     git push origin add-challenge-name
     ```
   - Open a PR to the `main` branch of the original repository.

2. **Provide Context**:

   - Include a clear description of your changes in the PR. Mention the purpose and any issues the changes address.

3. **Run Tests**:

   - Ensure all tests pass before submitting your PR:
     ```bash
     bun run test
     ```

4. **Resolve Feedback**:
   - Address any comments or requested changes from reviewers promptly.

---

## Additional Notes

- **Automatic Branch Deletion**:
  Once your PR is merged, the branch will be automatically deleted if this feature is enabled in the repository.

- **Code of Conduct**:
  Ensure your contributions adhere to the [Code of Conduct](CODE_OF_CONDUCT.md).

Thank you for contributing! Your efforts help improve this repository and benefit the developer community.
