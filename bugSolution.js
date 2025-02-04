function foo(a, b) {
  // Input validation and type checking
  if (typeof a !== 'number' || typeof b !== 'number') {
    console.error('Error: Inputs must be numbers.');
    return null; // Or throw an error
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(1, "2")); // Error: Inputs must be numbers.
console.log(foo(null, 2)); // Error: Inputs must be numbers.
console.log(foo(undefined, 2)); // Error: Inputs must be numbers.
console.log(foo(true, 2)); // Error: Inputs must be numbers.
console.log(foo(false, 2)); // Error: Inputs must be numbers.
console.log(foo([1, 2], 2)); // Error: Inputs must be numbers.
console.log(foo({a: 1}, 2)); // Error: Inputs must be numbers.
console.log(foo(NaN, 2)); // Error: Inputs must be numbers.
console.log(foo(Infinity, 2)); // Infinity