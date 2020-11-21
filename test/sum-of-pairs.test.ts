import { sumOfPairs } from '../src/sum-of-pairs';

describe('Sum of pairs tests', () => {
  
  test('should return undefined when list is empty', () => {
    expect(sumOfPairs([], 1)).toBe(undefined);
  });

  test('should return [1, 2] when list is [1, 2, 3] and sum is 3', () => {
    expect(sumOfPairs([1, 2, 3], 3)).toMatchObject([1, 2]);
  });

  test('should return [1, 7] when list is [1, 4, 8, 7, 3, 15] and sum is 8', () => {
    expect(sumOfPairs([1, 4, 8, 7, 3, 15], 8)).toMatchObject([1, 7]);
  });

  test('should return [0, -6] when list is [1, -2, 3, 0, -6, 1] and sum is -6', () => {
    expect(sumOfPairs([1, -2, 3, 0, -6, 1], -6)).toMatchObject([0, -6]);
  });

  test('should return undefined when list is [20, -13, 40] and sum is -7', () => {
    expect(sumOfPairs([20, -13, 40], -7)).toBe(undefined);
  });

  test('should return [1, 1] when list is [1, 2, 3, 4, 1, 0] and sum is 2', () => {
    expect(sumOfPairs([1, 2, 3, 4, 1, 0], 2)).toMatchObject([1, 1]);
  });

  test('should return [3, 7] when list is [10, 5, 2, 3, 7, 5] and sum is 10', () => {
    expect(sumOfPairs([10, 5, 2, 3, 7, 5], 10)).toMatchObject([3, 7]);
  });

  test('should return [4, 4] when list is [4, -2, 3, 3, 4] and sum is 8', () => {
    expect(sumOfPairs([4, -2, 3, 3, 4], 8)).toMatchObject([4, 4]);
  });

  test('should return [0, 0] when list is [0, 2, 0] and sum is 0', () => {
    expect(sumOfPairs([0, 2, 0], 0)).toMatchObject([0, 0]);
  });

  test('should return [13, -3] when list is [5, 9, 13, -3] and sum is 10', () => {
    expect(sumOfPairs([5, 9, 13, -3], 10)).toMatchObject([13, -3]);
  });

});