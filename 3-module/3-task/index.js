function camelize(str) {
  return str
    // Split the string into an array of words wherever a hyphen occurs
    .split('-')
    // Iterate through each word in the array
    .map((word, index) => {
      if (index === 0) {
        // The first word remains untouched
        return word;
      } else {
        // Subsequent words are written with the capital letter
        return word.charAt(0).toUpperCase() + word.slice(1);
      }
    })
    // Bring the modified words back together into a single string without any separators
    .join('');
}