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

// const numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?');
// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// let a = prompt('Один из последних просмотренных фильмов?');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;

// console.log(personalMovieDB.movies);

// let a = prompt('Один из последних просмотренных фильмов?');

// if (a == null || a.length == 0 || a.length >= 50) {
//     a = prompt('Введите один из последних просмотренных фильмов, пожалуйста');
// };



const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

for (let i = 1; i < 5; i++) {
    let a = prompt('Один из последних просмотренных фильмов?')
    while (a == null || a.length == 0 || a.length >= 50) {
        a = prompt('Введите один из последних просмотренных фильмов, пожалуйста.')
    }
    let b = prompt('Насколько оцените его?')
    personalMovieDB.movies[a] = b
};

if (numberOfFilms <= 10 && numberOfFilms >= 0) {
    alert('Просмотрено довольно мало фильмов');
} else if (numberOfFilms > 10 && numberOfFilms < 30) {
    alert('Вы классический зритель');
} else if (numberOfFilms >= 30) {
    alert('Вы киноман');
} else {
    alert('Ошибка');
};

console.log(personalMovieDB.movies);