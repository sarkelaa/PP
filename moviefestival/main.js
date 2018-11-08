var dataModule = (function () {

    var storage = {
        movies: [],
        programs: []
    }

    function Movie(name, length, genre) {
        this.name = name
        this.length = length
        this.genre = genre
    }

    Movie.prototype.getInfo = function () {
        return this.name + ", " + this.length
    }

    function createMovie(name, length, genre) {
        return new Movie(name, length, genre)
    }

    function addMovie(movie) {
        data.movies.push(movie)
    }

    return {
        createMovie: createMovie,
        addMovie: addMovie
    }

})();

var uiModule = (function () {
    var $titleInput = document.querySelector(".movie-title")
    var $lengthInput = document.querySelector(".movie-length")
    var $genreSelect = document.querySelector(".movie-genre")
    var $movieList = document.querySelector(".movie-list")

    // function getTitle() {
    //     return $titleInput.value
    // }

    // function getGenre() {
    //     return $titleInput.value
    // }

    function collectFormInput() {
        var movieTitle = $titleInput.value
        var movieLength = $lengthInput.value
        var movieGenre = $genreSelect.value


    }

    function displayMovie(movie) {
        $movieList.innerHTML += movie.getInfo() + "<br/>"
    }

    return {
        title: movieTitle,
        genre: movieGenre,
        length: movieLength,
        collectFormInput: collectFormInput,
        displayMovie: displayMovie
    }
})();

var controller = (function (ui, data) {

    function init() {
        // setup event listener
        setUpEventListener()

    }

    function setUpEventListener() {
        var $addMovie = document.querySelector(".add-movie");
        $addMovie.addEventListener("click", function (event) {

        })
    }
    // collect form data
    var movieObj = ui.collectFormInput()
    console.log(movieObj);

    // validate input

    // create Movie instance
    var movieInstance = data.createMovie(movieObj.title, movieObj.length, movieObj.genre);
    console.log(movieInstance);

    // add movie to list
    data.addMovie(movieInstance);

    // display movie
    ui.displayMovie(movieInstance);

    // reset form




})(uiModule, dataModule);



