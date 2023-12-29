function getMinMax(str) {
  const numbers = str.split(' ')
    // Discard non-numeric elements
    .filter(item => !isNaN(parseFloat(item)))
    // Ensure that all elements are numbers
    .map(item => parseFloat(item))
    // Further ensure that the elements are indeed numbers 
    .filter(item => typeof item === 'number' && !isNaN(item));
  // Find the minimum and maximum values
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  return { min, max };
}