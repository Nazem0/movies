var username;
var email;
var user = {};
var oldDB = [];
oldDB = JSON.parse(localStorage.getItem('users'))||[];
console.log(oldDB);

function checkLocalStorage() {
    var localEmail = [];
    email = document.getElementById('email').value;
    for (var i = 0; i < oldDB.length; i++) {
        localEmail[i] = oldDB[i].email;
    }
    if (localEmail.indexOf(email) > -1) {
        alert('Username or Email are not available!');
    } else {
        register();
    }
}

function register() {
    var users = [];
    if (oldDB) {
        users = oldDB;
    }
    let fullName = document.getElementById('fullName').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    user = {
        fullName: fullName,
        email: email,
        password: password,
    };
    users.push(user);
    var json = JSON.stringify(users);
    localStorage.setItem('users', json);
}