function isEmpty(obj) {
  // Iterate through the properties of the object
  for (let key in obj) {
    // The object is not empty if the loop runs and finds at least one property
    return false;
  }
  // The object is empty if the loop does not run 
  return true;
}
