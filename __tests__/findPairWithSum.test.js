const findPairWithSumController = require('../src/controller/findPairWithSumController');

test('Find the corect pair for the target', () => {
    const numbers = [1, 2, 3, 4, 5];
    const targetSum = 9;
  
    const result = findPairWithSumController(numbers, targetSum);
  
    expect(result).toEqual([4, 5]);
});
  
test('Did not find the correct pair for the target', () => {
    const numbers = [1, 2, 3, 4, 5];
    const targetSum = 11;
  
    const result = findPairWithSumController(numbers, targetSum);
  
    expect(result).toEqual([]);
});

test('numbers is not an array', () => {
    const invalidInput = 'not-an-array';
    const targetSum = 10;
  
    expect(() => findPairWithSumController(invalidInput, targetSum)).toThrowError('first parameter must be an array & second parameter must be an integer.');
});

test('target sum is not an integer', () => {
    const numbers = [1, 2, 3, 4, 5];
    const invalidTargetSum = 10.5;
  
    expect(() => findPairWithSumController(numbers, invalidTargetSum)).toThrowError('first parameter must be an array & second parameter must be an integer.');
});

test('numbers must only contain integers', () => {
    const numbers = [1, 'magicDog', 3, 4, 5];
    const targetSum = 10;
  
    expect(() => findPairWithSumController(numbers, targetSum)).toThrowError('numbers must only contain integers.');
});
  
test('numbers cant have repetitive numbers', () => {
    const numbers = [1, 2, 2, 4, 5];
    const targetSum = 6;

    expect(() => findPairWithSumController(numbers, targetSum)).toThrow('numbers cant contain repetitive numbers.');
});
