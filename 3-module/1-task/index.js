function namify(users) {
  // Using the map method to create a new array containing only the 'name' property from each user object
  let names = users.map(user => user.name);
  return names;
}

