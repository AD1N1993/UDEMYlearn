const numberOfFilms = +prompt('Сколько фильмов Вы уже посмотрели?', '');
const personalMovieDb = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

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
// let count = 0;
// while (count < 2) {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     const b = +prompt('Насколько Вы оцените его?', '');
//     count++;

//     if (a != null && b != null & a != '' & b != '' && a.length < 50) {
//         personalMovieDb.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         count--;
//     }
// }
// let count = 0;
// do {
//     const a = prompt('Один из последних просмотренных фильмов?', '');
//     const b = +prompt('Насколько Вы оцените его?', '');
//     count++;
//      if (a != null && b != null & a != '' & b != '' && a.length < 50) {
//         personalMovieDb.movies[a] = b;
//         console.log('done');
//     } else {
//         console.log('error');
//         count--;
//     }
// } while (count < 2);


if (personalMovieDb.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDb.count >= 10 && personalMovieDb.count < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDb.count >= 30) {
    alert('Вы киноман');
} else {
    console.log('Произошла ошибка!');
}



console.log(personalMovieDb);