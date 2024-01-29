const nonConstructibleChangeController = require('../src/controller/nonConstructibleChangeController');

test('Valid input', () => {
    const coins = [1, 2, 5];
    const result = nonConstructibleChangeController(coins);
    expect(result).toBe(4);
});

// Test 2: coins es un arreglo vacío
test('Empty array', () => {
    const coins = [];
    const result = nonConstructibleChangeController(coins);
    expect(result).toBe(1);
});

// Test 3: coins contiene elementos negativos
test('Negative values in array', () => {
    const coins = [1, 2, -3];
    expect(() => nonConstructibleChangeController(coins)).toThrowError("There are negative values in the array");
});