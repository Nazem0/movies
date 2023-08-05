const genresContainer = document.getElementById('genres');
let genres = [
    "Action",
    "Adventure",
    "Animation",
    "Biography",
    "Comedy",
    "Crime",
    "Documentary",
    "Drama",
    "Family",
    "Fantasy",
    "History",
    "Horror",
    "Music",
    "Mystery",
    "Romance",
    "Sci-Fi",
    "Thriller",
    "War",
    "Western"
];

for(let i=0;i<genres.length;i++)
{
    genresContainer.innerHTML+=`<div>
    <input type="checkbox" id="genre${i}" name="genre[]" value="${genres[i]}">
    <label for="genre${i}">${genres[i]}</label><br>
    </div>`
}

// const ratedContainer=document.getElementById('rated');

// let rateddddd = [
//     "G", 
//     "PG",
//     "PG-13",
//     "R",
//     "NC-17"
//   ];

// for(let i=0;i<rateddddd.length;i++)
// {
//     ratedContainer.innerHTML+=`<div>
//     <input type="checkbox" id="rating${i}" name="rating[]" value="${rateddddd[i]}">
//     <label for="rating${i}">${rateddddd[i]}</label><br>
//     </div>`
// }