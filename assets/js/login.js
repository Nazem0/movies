var emailLogin;
var fullNameLogin;
var check;
oldDB = JSON.parse(localStorage.getItem('users')) || [];


function checkLocalStorageLogin() {
    emailLogin = document.getElementById('emailLogin').value;
    var passwordLogin = document.getElementById('passwordLogin').value;

    for (let i = 0; i < oldDB.length; i++) {
        if (oldDB[i].email == emailLogin && oldDB[i].password == passwordLogin) {
            check = 0;
            login(oldDB[i].fullName);
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
    fullNameLogin = user;
    emailLogin = document.getElementById('emailLogin').value;
    userObj = { 'email': emailLogin, 'fullName': fullNameLogin }

    var userJson = JSON.stringify(userObj);
    sessionStorage.setItem('currentUser', userJson);
}