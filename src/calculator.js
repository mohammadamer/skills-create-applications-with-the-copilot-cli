#!/usr/bin/env node

/**
 * calculator.js
 *
 * A simple Node.js CLI calculator supporting the four basic
 * arithmetic operations:
 *   - Addition       (add)
 *   - Subtraction     (subtract)
 *   - Multiplication  (multiply)
 *   - Division        (divide)
 *
 * Usage:
 *   node calculator.js <operation> <num1> <num2>
 *
 * Examples:
 *   node calculator.js add 5 3
 *   node calculator.js subtract 10 4
 *   node calculator.js multiply 6 7
 *   node calculator.js divide 20 4
 */

/** Adds two numbers. */
function add(a, b) {
  return a + b;
}

/** Subtracts the second number from the first. */
function subtract(a, b) {
  return a - b;
}

/** Multiplies two numbers. */
function multiply(a, b) {
  return a * b;
}

/** Divides the first number by the second. Throws on division by zero. */
function divide(a, b) {
  if (b === 0) {
    throw new Error('Division by zero is not allowed.');
  }
  return a / b;
}

// Map of supported operations to their implementations.
const operations = {
  add,
  subtract,
  multiply,
  divide,
};

/**
 * Runs the calculator CLI: parses arguments, validates input,
 * performs the requested operation, and prints the result.
 */
function main() {
  const [, , operation, rawA, rawB] = process.argv;

  if (!operation || rawA === undefined || rawB === undefined) {
    console.error('Usage: node calculator.js <add|subtract|multiply|divide> <num1> <num2>');
    process.exitCode = 1;
    return;
  }

  const fn = operations[operation];
  if (!fn) {
    console.error(
      `Unknown operation "${operation}". Supported operations: ${Object.keys(operations).join(', ')}.`
    );
    process.exitCode = 1;
    return;
  }

  const a = Number(rawA);
  const b = Number(rawB);

  if (Number.isNaN(a) || Number.isNaN(b)) {
    console.error('Both arguments must be valid numbers.');
    process.exitCode = 1;
    return;
  }

  try {
    const result = fn(a, b);
    console.log(result);
  } catch (err) {
    console.error(err.message);
    process.exitCode = 1;
  }
}

if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide };
