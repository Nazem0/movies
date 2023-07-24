var urlParams = new URLSearchParams(window.location.search);
    var movieID=urlParams.get('movieID');
    var movies = "";
    var request = new XMLHttpRequest();
    request.open('get', 'assets/data/movies.json')
    request.send()
    request.onreadystatechange = () => {
        if (request.readyState == 4) {
            movies = JSON.parse(request.responseText)
            document.body.innerHTML+=(`
            <iframe width="560" height="315" src="${movies[movieID].Trailer}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`)
        }
    }