'use strict';
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
    }
}
start();

const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', '');
        const b = +prompt('Насколько Вы оцените его?', '');

        if (a != null && b != null & a != '' & b != '' && a.length < 50) {
            personalMovieDb.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }

    }
}
// rememberMyFilms();

function detectedPersonalLevel() {
    if (personalMovieDb.count < 10) {
        alert('Просмотрено довольно мало фильмов');
    } else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
        alert('Вы классический зритель');
    } else if (personalMovieDb.count >= 30) {
        alert('Вы киноман');
    } else {
        console.log('Произошла ошибка!');
    }
}
// detectedPersonalLevel();

function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDb);
    }
}
// showMyDB(personalMovieDb.private);

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDb.genres[i - 1] = prompt(`Ваш любимый жанр под номером: ${i}`,'');
    }
}
writeYourGenres();
console.log(personalMovieDb);