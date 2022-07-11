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



// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
//     }
// };

// start();


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?'),
//             b = prompt('На сколько оцените его?');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50 && !isNaN(b)) {
//             personalMovieDB.movies[a] = b;
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// };

// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     } else {
//         console.log('База данных фильмов скрыта / является приватной.')
//     }
// };

// function writeYourGenres() {
//     for (let i = 1; i < 4; i++) {
//         let a = prompt(`Ваш любимый жанр под номером ${i}.`);
//         personalMovieDB.genres[i - 1] = a;
//     }
// };

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         alert('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         alert('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         alert('Вы киноман');
//     } else {
//         alert('Произошла ошибка');
//     }
// };

// rememberMyFilms();
// detectPersonalLevel();
// writeYourGenres();
// showMyDB();

// personalMovieDB.checkedPrivat = showMyDB();

// var personalMovieDB = {
//     checkedPrivat: function(params) {
//     // ...do something
//     }
// };



// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже просмотрели?');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
//     }
// };



const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    qOfFilms: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже просмотрели?');    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        };
    },
    lastSeen: function() {
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
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat = false) {
            personalMovieDB.privat = true
        } else {
            personalMovieDB.privat = false
        };
    },
    checkPrivat: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        } else {
            console.log('База данных фильмов скрыта / является приватной.')
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            let a = prompt(`Ваш любимый жанр под номером ${i}.`);
            while (a == null || a == '') {
                a = prompt(`Введите ваш любимый жанр под номером ${i}, пожалуйста.`)
            }
            personalMovieDB.genres[i - 1] = a;
        }
        personalMovieDB.genres.forEach(function(element, index) {
            console.log(`Любимый жанр #${index + 1} - это ${element}`);
        });
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            alert('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
            alert('Вы классический зритель');
        } else if (personalMovieDB.count >= 30) {
            alert('Вы киноман');
        } else {
            alert('Произошла ошибка');
        }
    }
};

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?'),
//             b = prompt('На сколько оцените его?');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50 && !isNaN(b)) {
//             personalMovieDB.movies[a] = b;
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// };

// function showMyDB() {
//     if (personalMovieDB.privat == false) {
//         console.log(personalMovieDB);
//     } else {
//         console.log('База данных фильмов скрыта / является приватной.')
//     }
// };

// function writeYourGenres() {
//     for (let i = 1; i < 4; i++) {
//         let a = prompt(`Ваш любимый жанр под номером ${i}.`);
//         personalMovieDB.genres[i - 1] = a;
//     }
// };

// function detectPersonalLevel() {
//     if (personalMovieDB.count < 10) {
//         alert('Просмотрено довольно мало фильмов');
//     } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         alert('Вы классический зритель');
//     } else if (personalMovieDB.count >= 30) {
//         alert('Вы киноман');
//     } else {
//         alert('Произошла ошибка');
//     }
// };

personalMovieDB.qOfFilms();
personalMovieDB.lastSeen();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.checkPrivat();