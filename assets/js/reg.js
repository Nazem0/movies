var username;
var email;
var user = {};

function checkLocalStorage() {
    var local = [];
    username = document.getElementById('username').value;
    // +1 34an m4 by5o4 el loop law mafe4 users
    for (var i = 0; i < localStorage.length + 1; i++) {
        var key = localStorage.key(i)
        // console.log('local : ' + localStorage.getItem(i));
        // console.log(`${key}: ${localStorage.getItem(key)}`);
        local[i] = key;
    }
    if (local.indexOf(username) > -1) {
        //console.log('1')
        alert('Username is no available!');
    } else {
        // console.log('2')
        register();
    }
    //console.log(local);
}
var users=[];
if(localStorage.getItem('users')){
    users+=localStorage.getItem('users');
}
// var users=localStorage.getItem('users');
function register() {
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
    // localStorage.setItem(username, json);
    localStorage.setItem('users', json);
   // console.log('the register user is: ' + json);
}