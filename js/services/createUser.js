app.factory('user', function() {

  var currentUser;

  function getCurrentUser() {
    return currentUser;
  }

  function createUser() {
    var user = {};
    users = getUsers();
    user.id = user.name = users.length;
    users.push(user);
    currentUser = user;
    localStorage.users = JSON.stringify(users);
  }

  function getUsers() {
    if ( localStorage.users == undefined ) {
      var users = [];
    }
    else {
      var users = JSON.parse(localStorage.users);
    }
    return users;
  }

  function changeName(id, newName) {
    var users = getUsers();
    for ( var i = 0; i < users.length; i++) {
      if ( users[i].id == id) {
        users[i].name = newName;
        currentUser = users[i];
      }
    }

    localStorage.users = JSON.stringify(users);
  }

  return {
    newUser: createUser,
    getUsers: getUsers,
    currentUser: getCurrentUser,
    changeName: changeName
  }

});
