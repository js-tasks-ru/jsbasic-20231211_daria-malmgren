function filterRange(arr, a, b) {
  // Create a copy of the original array to avoid modifying
  let newArr = arr.slice();

  // Create a new array containing elements between 'a' and 'b'
  let filtered = newArr.filter((element) => {
    // Take elements greater than or equal to 'a' and less than or equal to 'b'
    return element >= a && element <= b;
  });
  return filtered;
}
