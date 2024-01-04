function makeFriendsList(friends) {
  // Make the container for the list of friends
  let ul = document.createElement('ul');

  // Make the list of friends with the help of innerHTML
  ul.innerHTML = friends.map(friend => `<li>${friend.firstName} ${friend.lastName}</li>`).join('');

  return ul;
}

