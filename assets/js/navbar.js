function getCurrentUser() {
    var currentJson = JSON.parse(sessionStorage.getItem('currentUser')) || '';
    return currentJson.fullName;
}

function logout() {
    sessionStorage.clear();
    console.log(sessionStorage)
}

const head = document.getElementsByTagName('head')[0];
head.insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="assets/css/navbar.css">`)

if (getCurrentUser() != null) {
    withName();
} else {
    withoutName();
}
function withName() {
    document.body.insertAdjacentHTML('afterbegin',
        `
<div class="navbar">
                <ul type="none">
                    <li><a class="active" href="index.html">
                    <i class="fa-solid fa-house"></i>
                        Home
                        </a></li>
                    <!--<li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>-->
                </ul>
                <div id="filtering">
                    </div>
                    <ul type="none">
                    <li><a href="#">${getCurrentUser()}</a></li>
                    <li><a href="favourites.html">Favourites</a></li>
                    <li><a href="index.html" onclick="logout()" >Log out</a></li>
                </ul>
            </div>
`)
}

function withoutName() {
    document.body.insertAdjacentHTML('afterbegin',
        `
<div class="navbar">
                <ul type="none">
                    <li><a class="active" href="index.html">
                    <i class="fa-solid fa-house"></i>
                        Home
                        </a></li>
                    <!--<li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>-->
                </ul>
                <div id="filtering">
                        
                    </div>
                    <ul type="none">
                    <li><a href="reg.html">Register</a></li>
                    <li><a href="login.html">Login</a></li>
                </ul>
            </div>
`)
}




