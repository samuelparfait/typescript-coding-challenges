export function uniqueBy<T extends Record<string, any>>(
  key: keyof T,
  array: T[]
): T[] {
  const seenKeys = new Set<T[keyof T]>();
  const result: T[] = [];

  for (const item of array) {
    const keyValue = item[key];

    if (!seenKeys.has(keyValue)) {
      seenKeys.add(keyValue);
      result.push(item);
    }
  }

  return result;
}
