var username;
var email;
var user = {};
var oldDB = JSON.parse(localStorage.getItem('users'));

function checkLocalStorage() {
    var localUser = [];
    var localEmail = [];
    username = document.getElementById('username').value;
    email = document.getElementById('email').value;
    for (var i = 0; i < oldDB.length; i++) {
        localUser[i] = oldDB[i].username;
    }
    if (localUser.indexOf(username) || localEmail.indexOf(email) > -1) {
        alert('Username or Email are no available!');
    } else {
        register();
    }
}

function register() {
    var users = [];
    if (oldDB) {
        users = oldDB;
    }
    username = document.getElementById('username').value;
    email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    user = {
        username: username,
        email: email,
        password: password,
    };
    users.push(user);
    var json = JSON.stringify(users);
    localStorage.setItem('users', json);
}