"use strict";


const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?');
        }
    },
    detectPersonalLevel: function () {
        console.log(personalMovieDB.count);
        if (personalMovieDB.count < 10) {
            console.log('меньше 10');
        } else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10) {
            console.log('10-30');
        } else if (personalMovieDB.count > 30) {
            console.log('>30');
        } else {
            console.log('error');
        }
    },
    rememberMyFilms: function () {
        let i = 0;
        do {
        const a = prompt('Один из последний просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его??', '');
        if (a == '' || a == null || a.length > 50 || b == '' || b == null || b.length > 50) {
            i--;
            continue;
        } else {
            personalMovieDB.movies[a] = b;
        }
        i++;
        }
        while (i < 2);
    },
    showMyDB: function (hidden) {
        if (!hidden) {console.log(personalMovieDB);}
    },
    writeYourGenres: function () {
        // for (let i = 1; i <= 3; i++) {
            // personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
            // while (personalMovieDB.genres[i - 1] == '' || personalMovieDB.genres[i - 1] == null) {
            //     personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
            // }
            // // console.log(personalMovieDB.genres[i - 1]);
        let genre = '';
        do {
            genre = prompt(`Введите ваши любимые жарны через ","`);
        } while (genre == '' || genre == null);
        personalMovieDB.genres = genre.split(', ');
        personalMovieDB.genres.sort();
        // }
        personalMovieDB.genres.forEach(function(genre, i) {
            console.log(`Любимый жанр #${i + 1} - это ${genre}`);
        });
    },
    toogleVisibleMyDB: function() {
        console.log(personalMovieDB.privat);
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {personalMovieDB.privat = true;}
    }
};

personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
// personalMovieDB.toogleVisibleMyDB();
personalMovieDB.showMyDB(personalMovieDB.privat);

// !!!!!!!!!!!!!
// for (let i = 0; i < 2; i++) {
//     let a = prompt('Один из последний просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его??', '');
//     if (a == '' || a == null || a.length > 50 || b == '' || b == null || b.length > 50) {
//         i--;
//         continue;
//     } else {
//         personalMovieDB.movies[a] = b;
//     }   
// }

// let i = 0;
// while (i < 2) {
//     let a = prompt('Один из последний просмотренных фильмов?', ''),
//         b = prompt('На сколько оцените его??', '');
//     if (a == '' || a == null || a.length > 50 || b == '' || b == null || b.length > 50) {
//         i--;
//         continue;
//     } else {
//         personalMovieDB.movies[a] = b;
//     }
//     i++;
// }

// const a = prompt('Один из последний просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его??', ''),
//       c = prompt('Один из последний просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его??', '');

// !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!




