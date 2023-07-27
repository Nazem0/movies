var email;
var check;
oldDB = JSON.parse(localStorage.getItem('users')) || [];


function checkLocalStorageLogin() {
    var localEmailLogin = [];
    var LocalPassword = [];
    var email = document.getElementById('emailLogin').value;
    var password = document.getElementById('passwordLogin').value;

    for (let i = 0; i < oldDB.length; i++) {
        if (oldDB[i].email == email && oldDB[i].password == password) {
            check = 0;
            login();
            break;
        } else {
            check = 1;
        }
    }
    if(check == 1){
        alert('Email or password are not incorrect!');
    }
}

function login() {
    email = document.getElementById('emailLogin').value;
    sessionStorage.setItem('email', email);
}

