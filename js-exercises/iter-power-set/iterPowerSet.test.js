import { iterPowerSet } from './iterPowerSet';

describe('iterPowerSet', () => {
  it('should return power set for a given set', () => {
    let InputSet = new Set([1, 2, 3]);
    let Result = new Set();
    Result.add(new Set([3, 2, 1]));
    Result.add(new Set([2, 1]));
    Result.add(new Set([3, 1]));
    Result.add(new Set([1]));
    Result.add(new Set([3, 2]));
    Result.add(new Set([2]));
    Result.add(new Set([3]));
    Result.add(new Set());
    expect(iterPowerSet(InputSet)).toEqual(Result);
    InputSet = new Set([4, 5]);
    Result = new Set();
    Result.add(new Set([4, 5]));
    Result.add(new Set([4]));
    Result.add(new Set([5]));
    Result.add(new Set());
    expect(iterPowerSet(InputSet)).toEqual(Result);
  });
});