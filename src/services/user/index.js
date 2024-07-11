let users = [];

function addUser(user) {
  users.push(user);
}

function getUserByUsername(username) {
  return users.find(user => user.username === username);
}

module.exports = { addUser, getUserByUsername };