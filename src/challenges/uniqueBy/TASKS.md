# Deduplicate Objects by Key

## Overview

You are tasked with implementing the `uniqueBy` function to deduplicate an array of objects based on a provided key. Your implementation must ensure the following:

- The **original array must not be mutated**.
- The **order of elements must be preserved**.
- Only the **first occurrence of each key** should be retained.

The setup is currently using **Bun.js** with **TypeScript**. However, you are free to use an alternative testing suite, such as **Node.js**, **Vitest**, or **Jest**, if you prefer.

---

## Function to Update

You will be updating the following function:

```typescript
export function uniqueBy() {}
```

---

### Type Definition

The mock data type is defined as:

```typescript
type MockData = {
  id: number;
  name: string;
  age: number;
  mood?: 'happy' | 'sad';
};
```

---

## Requirements

1. **Preserve Input Order**: Ensure the order of objects in the result matches their first appearance in the input array.
2. **Avoid Mutations**: Confirm that the input array is not modified during execution.
3. **Handle Edge Cases**: Account for scenarios like empty arrays or arrays with undefined values.
4. **Pass All Tests**: Your function must pass all the tests in the provided suite.

---

## Running the Tests

To run the tests with the current setup using **Bun.js**, execute the following command:

```bash
bun run test
```

If you choose to use an alternative testing framework, ensure the test cases are adapted accordingly.

---

## Notes

- **TypeScript** is used in this project. Your function must adhere to the provided type definitions.
- Focus on writing clean, maintainable, and efficient code.
- Feel free to optimize the function for readability and performance.

Good luck!

```

```
