import { longestWordInString } from './longestWordInString';

describe('longestWordInString', () => {
  it('should return a string', () => {
    expect(typeof longestWordInString("3rd day exercise")).toBe('string');
  });
  it("Finds longest word in a string", () => {
    expect(longestWordInString("3rd day exercise")).toEqual("exercise");
    expect(longestWordInString("I cannot create PR correctly")).toEqual("correctly");
    expect(longestWordInString("Help me please")).toEqual("please");
  });
});
