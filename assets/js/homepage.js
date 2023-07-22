var moviesContainer = document.getElementById('moviesContainer');
var search = document.getElementById('search');
var genreFilter = document.getElementById('genreFilter')

var movies = "";
var request = new XMLHttpRequest();
request.open('get', 'assets/data/movies.json')
request.send()
request.onreadystatechange = () => {
    if (request.readyState == 4) {
        movies = JSON.parse(request.responseText)
        drawMovies();
    }
}
var genres = [];
function drawMovies() {
    moviesContainer.innerHTML = "";
    for (var i = 0; i < movies.length; i++) {
        if (movies[i].Genre.indexOf(genreFilter.value) != -1 && movies[i].Title.toLowerCase().indexOf(search.value.toLowerCase()) != -1) {
            genreSplit = movies[i].Genre.split(',');
            moviesContainer.innerHTML += `
        <div class="movie">
            <a href="movie.html?movieID=${i}">
            <img src=${movies[i].Poster}>
            <div>
                <h2>${movies[i].Title}</h2>
                <!--<div>
                    <b>Story</b>
                    <p>${movies[i].Plot}</p>
                </div>-->
                <p>
                    <b>Genre: </b>
                    ${movies[i].Genre.split(',').join(', ')}
                </p>
                <p><b>Year: </b> ${movies[i].Year}</p>
            </div>
            </a>
        </div>`;
            for (var j = 0; j < genreSplit.length; j++) {
                if (!genres.includes(genreSplit[j])) {
                    genres.push(genreSplit[j]);
                    genreFilter.innerHTML += `<option value=${genreSplit[j]}>${genreSplit[j]}</option>`;
                }
            }
        }
    }
}
genreFilter.addEventListener('change', () => {
    drawMovies();
})


search.addEventListener('change', () => {
    drawMovies();
}
);
/*
-------------->GOING TO NEED THIS TO GET SPECIFIC URL PARAMETER<--------------
// Create urlParams query string
var urlParams = new URLSearchParams(window.location.search);

// Get value of single parameter
var sectionName = urlParams.get('section');

// Output value to console
console.log(sectionName);

Using the movie index we show it in another page and using js we display that specific movie
*/
