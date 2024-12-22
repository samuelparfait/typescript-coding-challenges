import { describe, expect, it } from 'bun:test';

import { uniqueBy } from '@/index';

type MockData = {
  id: number;
  name: string;
  age: number;
  side?: 'light' | 'dark';
};

describe('uniqueBy', () => {
  it('should return the same array if there are no duplicates', () => {
    const mockData = [
      { id: 2, name: 'Anakin', age: 10 },
      { id: 0, name: 'Obi-Wan', side: 'light', age: 25 },
    ];

    const result = uniqueBy('id', mockData);

    expect(result).toEqual(mockData);
  });

  it('should deduplicate objects based on the provided key', () => {
    const mockData = [
      { id: 2, name: 'Anakin', age: 10 },
      { id: 0, name: 'Obi-Wan', side: 'light', age: 25 },
      { id: 2, name: 'Darth Vader', side: 'dark' },
    ];

    const mockOuput = [
      { id: 2, name: 'Anakin', age: 10 },
      { id: 0, name: 'Obi-Wan', side: 'light', age: 25 },
    ];

    const result = uniqueBy('id', mockData);
    expect(result).toEqual(mockOuput);
  });

  it('should not mutate the original array', () => {
    const mockData = [
      { id: 2, name: 'Anakin', age: 10 },
      { id: 0, name: 'Obi-Wan', side: 'light', age: 25 },
      { id: 2, name: 'Darth Vader', side: 'dark' },
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
