/**
 * Unit tests for calculator.js
 *
 * Covers the four basic arithmetic operations (addition, subtraction,
 * multiplication, division), example operations from the reference
 * image (2 + 3, 10 - 4, 45 * 2, 20 / 5), and edge cases such as
 * division by zero, negative numbers, and decimals.
 */

const { add, subtract, multiply, divide } = require('../calculator');

describe('add', () => {
  test('adds two positive numbers (example: 2 + 3 = 5)', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('adds a positive and a negative number', () => {
    expect(add(5, -3)).toBe(2);
  });

  test('adds two negative numbers', () => {
    expect(add(-4, -6)).toBe(-10);
  });

  test('adds zero to a number', () => {
    expect(add(7, 0)).toBe(7);
  });

  test('adds decimal numbers', () => {
    expect(add(1.5, 2.25)).toBeCloseTo(3.75);
  });
});

describe('subtract', () => {
  test('subtracts two positive numbers (example: 10 - 4 = 6)', () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test('subtracts a larger number from a smaller number (negative result)', () => {
    expect(subtract(4, 10)).toBe(-6);
  });

  test('subtracts a negative number (equivalent to addition)', () => {
    expect(subtract(5, -3)).toBe(8);
  });

  test('subtracts zero from a number', () => {
    expect(subtract(9, 0)).toBe(9);
  });

  test('subtracts decimal numbers', () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

describe('multiply', () => {
  test('multiplies two positive numbers (example: 45 * 2 = 90)', () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test('multiplies a positive number by a negative number', () => {
    expect(multiply(6, -3)).toBe(-18);
  });

  test('multiplies two negative numbers', () => {
    expect(multiply(-4, -5)).toBe(20);
  });

  test('multiplies by zero', () => {
    expect(multiply(123, 0)).toBe(0);
  });

  test('multiplies decimal numbers', () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10);
  });
});

describe('divide', () => {
  test('divides two positive numbers (example: 20 / 5 = 4)', () => {
    expect(divide(20, 5)).toBe(4);
  });

  test('divides a negative number by a positive number', () => {
    expect(divide(-10, 2)).toBe(-5);
  });

  test('divides two negative numbers', () => {
    expect(divide(-9, -3)).toBe(3);
  });

  test('divides resulting in a decimal', () => {
    expect(divide(7, 2)).toBeCloseTo(3.5);
  });

  test('dividing zero by a number returns zero', () => {
    expect(divide(0, 5)).toBe(0);
  });

  test('throws an error when dividing by zero', () => {
    expect(() => divide(20, 0)).toThrow('Division by zero is not allowed.');
  });
});
