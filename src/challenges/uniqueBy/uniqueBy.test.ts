import { describe, expect, it } from 'bun:test';

import { uniqueBy } from '@/challenges/uniqueBy/uniqueBy';

type MockData = {
  id: number;
  name: string;
  age: number;
  mood?: 'happy' | 'sad';
};

describe('uniqueBy', () => {
  it('should return the same array if there are no duplicates', () => {
    const mockData = [
      { id: 2, name: 'Mickey Mouse', age: 10 },
      { id: 0, name: 'Donald Duck', age: 25, mood: 'happy' },
    ];

    const result = uniqueBy('id', mockData);

    expect(result).toEqual(mockData);
  });

  it('should deduplicate objects based on the provided key', () => {
    const mockData = [
      { id: 2, name: 'Mickey Mouse', age: 10 },
      { id: 0, name: 'Donald Duck', mood: 'happy', age: 25 },
      { id: 2, name: 'Goofy', mood: 'sad' },
    ];

    const mockOuput = [
      { id: 2, name: 'Mickey Mouse', age: 10 },
      { id: 0, name: 'Donald Duck', age: 25, mood: 'happy' },
    ];

    const result = uniqueBy('id', mockData);
    expect(result).toEqual(mockOuput);
  });

  it('should not mutate the original array', () => {
    const mockData = [
      { id: 2, name: 'Mickey Mouse', age: 10 },
      { id: 0, name: 'Donald Duck', mood: 'happy', age: 25 },
      { id: 2, name: 'Goofy', mood: 'sad' },
    ];

    const newMockData = [...mockData];

    uniqueBy('id', mockData);

    expect(mockData).toEqual(newMockData);
  });

  it('should handle an empty array', () => {
    const mockData: MockData[] | undefined = [];

    const result = uniqueBy('id', mockData);

    expect(result).toEqual([]);
  });
});
