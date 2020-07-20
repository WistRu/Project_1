"use strict";

// const str = "teSt";
// const arr = [1, 2, 3];

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());
// console.log(str);

// const fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit'));

// const logg = "Hello world!";

// // console.log(logg.slice(-6));

// // console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 2));

// const num = 12.2;
// console.log(Math.round(num));

// const test = "12.2px";
// console.log(parseInt(test));
// console.log(parseFloat(test));


// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }
// while (num <= 55);

// for (let i = 1; i < 2; i + 0) {
//     console.log(num);
//     num++;
//     // if (num == 60) {
//     //     break;
//     // }
// }


// if (asfasf) {
//     console.log("ok");
// } else {
//     console.log("error");
// }

// const num = 'soso';

// if (num < 49) {
//     console.log("error");
// } else if (num > 100) {
//     console.log("too much");
// } else {
//     console.log('ok')
// }

// (num === 50) ? console.log('ok') : console.log('error');

// switch (num) {
//     case 49:
//         console.log('49');
//         break;
//     case 51:
//         console.log('50');
//         break;
//     case 'soso':
//         console.log('soso');
//         break;
//     default:
//         console.log('нихуя');
//         break;
// }


let numberOfFilms;

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

rememberMyFilms();
detectPersonalLevel();
writeYourGenres();
showMyDB(personalMovieDB.privat);

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


function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');
    }
}

function detectPersonalLevel() {
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
}

function rememberMyFilms() {
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
}

function showMyDB(hidden) {
    if (!hidden) {console.log(personalMovieDB);}
}

function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        console.log(personalMovieDB.genres[i - 1]);
    }
}