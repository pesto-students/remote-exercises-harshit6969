// write your own test cases
import { flipArgs } from './flipArgs';

describe('flipArgs', () => {
  it('should return a function', () => {
    expect(typeof flipArgs()).toBe('function');
  });
  it('it should reverse the input arguments and divide a/b', () => {
    const foo = (a,b) => (a/b);
    const flipFunction = flipArgs(foo);
    expect(flipFunction(2,4)).toBe(2);
  });
});
