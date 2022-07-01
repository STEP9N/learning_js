"use strict";

// const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?');
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотренных фильмов?'),
//     b = +prompt('На сколько оцените его?'),
//     c = prompt('Один из последних просмотренных фильмов?'),
//     d = +prompt('На сколько оцените его?');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB.movies);

// ______

// const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// for (let i = 0; i < 2; i++) {
//     let a = prompt('Один из последних просмотренных фильмов?')
//     while (a == null || a.length == 0 || a.length >= 50) {
//         a = prompt('Введите один из последних просмотренных фильмов, пожалуйста.')
//     }
//     let b = prompt('Насколько оцените его?')
//     personalMovieDB.movies[a] = b
// };

// if (numberOfFilms <= 10 && numberOfFilms >= 0) {
//     alert('Просмотрено довольно мало фильмов');
// } else if (numberOfFilms > 10 && numberOfFilms < 30) {
//     alert('Вы классический зритель');
// } else if (numberOfFilms >= 30) {
//     alert('Вы киноман');
// } else {
//     alert('Ошибка');
// };

// console.log(personalMovieDB.movies);

// ______


// const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?');

// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// personalMovieDB.movies[a] = b;

// for (let i = 0; i < 2; i++) {
//     const a = prompt('Один из последних просмотренных фильмов?'),
//         b = prompt('На сколько оцените его?');

//     if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//         personalMovieDB.movies[a] = b;
//     } else {
//         console.log('error');
//         i--;
//     }
// }

// if (personalMovieDB.count < 10) {
//     console.log('Просмотрено довольно мало фильмов');
// } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//     console.log('Вы классический зритель');
// } else if (personalMovieDB.count >= 30) {
//     console.log('Вы киноман');
// } else {
//     console.log('Произошла ошибка');
// }

// console.log(personalMovieDB.movies);



let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
    }
}

start();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 0; i < 2; i++) {
    const a = prompt('Один из последних просмотренных фильмов?'),
        b = prompt('На сколько оцените его?');

    if (a != null && b != null && a != '' && b != '' && a.length < 50 && !isNaN(b)) {
        personalMovieDB.movies[a] = b;
    } else {
        console.log('error');
        i--;
    }
}

function showMyDB() {
    if (personalMovieDB.privat == false) {
        console.log(personalMovieDB);
    } else {
        console.log('База данных фильмов скрыта / является приватной.')
    }
}

function writeYourGenres() {
    for (let i = 0; i < 3; i++) {
        let a = prompt('Ваш любимый жанр под номером ', i+1);
        personalMovieDB.genres[a] = i+1;
    }
};

if (personalMovieDB.count < 10) {
    alert('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    alert('Вы классический зритель');
} else if (personalMovieDB.count >= 30) {
    alert('Вы киноман');
} else {
    alert('Произошла ошибка');
}


writeYourGenres();
showMyDB();