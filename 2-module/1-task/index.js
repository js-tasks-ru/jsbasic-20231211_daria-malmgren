let salaries = {
  John: 1000,
  Ann: 1600,
  Pete: 1300,
  month: 'December',
  currency: 'USD',
  isPayed: false
};

function sumSalary(salaries) {
  let sum = 0;
  //Iterate through every property in the object
  for (let key in salaries) {
    // Validate inputs (ensure that the value is not NaN, Infinity, -Infinity and that the key is not one of the special properties)
    if (
      typeof salaries[key] === 'number' &&
      isFinite(salaries[key]) &&
      key !== 'month' &&
      key !== 'currency' &&
      key !== 'isPayed'
    ) {
      // Add the salaries value to the sum
      sum += salaries[key]; 
    }
  }

  return sum;
}

