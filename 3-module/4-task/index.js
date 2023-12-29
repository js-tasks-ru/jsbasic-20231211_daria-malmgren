function showSalary(users, age) {
  // Filter users based on their age 
  const filteredUsers = users.filter(user => user.age <= age);

  // Create an array of strings with each user's name and balance
  const userSalaries = filteredUsers.map(user => `${user.name}, ${user.balance}`);

  //  Create a single string with each user's information on a new line.
  const result = userSalaries.join('\n');

  return result;
}

