const head=document.getElementsByTagName('head')[0];
head.insertAdjacentHTML('beforeend',`<link rel="stylesheet" href="assets/css/navbar.css">`)
document.body.insertAdjacentHTML('afterbegin',
            `
<div class="navbar">
                <ul type="none">
                    <li><a class="active" href="/">
                    <i class="fa-solid fa-house"></i>
                        Home
                        </a></li>
                    <!--<li><a href="#news">News</a></li>
                    <li><a href="#contact">Contact</a></li>-->
                </ul>
                <div id="filtering">
                        <input type="text" name="search" id="search" placeholder="Search By Title">
                        <select name="genre" id="genreFilter">
                            <option value="">Filter</option>
                        </select>
                    </div>
                    <ul type="none">
                    <li><a href="reg.html">Register</a></li>
                    <li><a href="login.html">Login</a></li>
                </ul>
            </div>
`)
