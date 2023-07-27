var emailLogin;
var userLogin;
var check;
oldDB = JSON.parse(localStorage.getItem('users')) || [];


function checkLocalStorageLogin() {
    emailLogin = document.getElementById('emailLogin').value;
    var passwordLogin = document.getElementById('passwordLogin').value;

    for (let i = 0; i < oldDB.length; i++) {
        if (oldDB[i].email == emailLogin && oldDB[i].password == passwordLogin) {
            check = 0;
            login(oldDB[i].username);
            break;
        } else {
            check = 1;
        }
    }
    if (check == 1) {
        alert('Email or password are not incorrect!');
    }
}

function login(user) {
    userLogin = user;
    emailLogin = document.getElementById('emailLogin').value;
    userObj = { 'email': emailLogin, 'user': userLogin }

    var userJson = JSON.stringify(userObj);
    sessionStorage.setItem('currentUser', userJson);
}

function getCurrentUser() {
    var currentJson = JSON.parse(sessionStorage.getItem('currentUser'));
    return currentJson.user;
}

