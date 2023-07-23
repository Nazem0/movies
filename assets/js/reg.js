var username;
var email;
var user = {};

function checkLocalStorage() {
    var local =[];
    username = document.getElementById('username').value;
    for (var i = 0; i < localStorage.length + 1; i++) {
        var key = localStorage.key(i)
        // console.log('local : ' + localStorage.getItem(i));
        // console.log(`${key}: ${localStorage.getItem(key)}`);
        local[i] = key;
    }
    console.log(local);
}
// if (username != key) {
//     console.log('1')
//     register();

// } else {
//     console.log('2')
//     alert('Username is no available!');
    
// }
function register() {
    username = document.getElementById('username').value;
    email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    user = {
        username: username,
        email: email,
        password: password,
    };
    var json = JSON.stringify(user);
    localStorage.setItem(username, json);
    console.log('the register user is: ' + json);
}