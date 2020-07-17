"use strict";

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


const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

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

let i = 0;
do{
    let a = prompt('Один из последний просмотренных фильмов?', ''),
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

if (personalMovieDB.count < 10) {
    console.log('меньше 10');
} else if (personalMovieDB.count <= 30 && personalMovieDB.count >= 10) {
    console.log('10-30');
} else if (personalMovieDB.count > 30) {
    console.log('>30');
} else {
    console.log('error');
}

// const a = prompt('Один из последний просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его??', ''),
//       c = prompt('Один из последний просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его??', '');



console.log(personalMovieDB);