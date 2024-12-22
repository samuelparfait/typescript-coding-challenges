# TypeScript Coding Challenges Repository

This repository serves as a **template for technical tests**. Companies can fork it to provide coding challenges for new candidates. The challenges focus on various aspects of **TypeScript** and allow candidates to demonstrate their coding skills.

---

## Repository Structure

- **challenges**: Contains the individual coding challenges.
  - Each challenge should have its own folder, named using **camelCase**.
  - Inside each challenge folder, you'll find:
    - `TASKS.md`: The instructions for the challenge.
    - `nameOfFunction.test.ts`: Unit tests for the challenge.
    - `nameOfFunction.ts`: The function to implement.
- **solutions**: Contains solution files (to be removed before forking).
  - These files provide reference solutions, but they should not be available to candidates.
- **index.ts**: The entry point for Bun.js (decorates the terminal).

---

## How to Contribute

To add a new challenge:

1. **Create a New Folder**:

   - Use **camelCase** for the folder name, representing the function (e.g., `deduplicateObjects`).

2. **Add Challenge Files**:
   - `TASKS.md`: Provide detailed instructions for the challenge.
   - `nameOfFunction.test.ts`: Write comprehensive tests for the function.
   - `nameOfFunction.ts`: Create the function implementation to be completed by candidates.
3. **Remove Solution Folder**:

   - Before forking the repo, delete the `solutions` folder so that candidates can't see the solution.

4. **Update the README**:

   - Add your challenge to the list of available challenges.

5. **Submit a Pull Request**:
   - After making your changes, submit a pull request to the main branch.

**Disclaimer:**

This repository is intended for educational and evaluation purposes. The quality and complexity of the challenges may vary.

---

## Setup

```bash
bun install
```

## Running Tests

To run the tests for the challenge, execute the following in your terminal:

```bash
bun run test
```
