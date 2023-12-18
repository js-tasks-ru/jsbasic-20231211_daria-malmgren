function factorial(n) {
  // Initialize the result to 1 because the factorial of 0! and 1! are equal to 1
  let result = 1;

  // Check if n is 0 or 1, return 1 for these cases
  if (n === 0 || n === 1) {
    return 1;
  } else {
    // If n is greater than 1, iterate from 2 to n and multiply the result by the current value of i
    for (let i = 2; i <= n; i++) {
      result *= i;
    }
    return result;
  }
}

