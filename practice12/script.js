const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

const a = prompt('Один из последних просмотренных фильмов?', '');
const b = +prompt('Насколько Вы оцените его?', '');
const c = prompt('Один из последних просмотренных фильмов?', '');
const d = +prompt('Насколько Вы оцените его?', '');
personalMovieDb.movies[a] = b; 
personalMovieDb.movies[c] = d; 


console.log(personalMovieDb);