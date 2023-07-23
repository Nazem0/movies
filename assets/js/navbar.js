document.body.insertAdjacentHTML('afterbegin',`<body>
<style>
    .navbar {
background-color: rgba(0, 0, 0, 0.3);
overflow: hidden;
position: fixed;
top: 0;
width: 100%;
}

/* Style the links inside the navigation bar */
.navbar a {
float: left;
color: #f2f2f2;
text-align: center;
padding: 14px 16px;
text-decoration: none;
font-size: 17px;
transition: 0.5s;

}

/* Change the color of links on hover */
.navbar a:hover {
background-color: #ddd;
color: black;
}

/* Add a color to the active/current link */
.topnav a.active {
background-color: #04AA6D;
color: white;
}
</style>
<div class="navbar">
    <a class="active" href="#home">Home<img src="assets/data/house-solid.svg" alt=""></a>
    <a href="#news">News</a>
    <a href="#contact">Contact</a>
    <a href="#about">help</a>
</div>
</body>`)