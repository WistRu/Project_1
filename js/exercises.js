let x = 5; console.log(x++);

console.log([] + false - null + true);
console.log(typeof([] + false - null + true));
console.log([]+false-null+true);

let y=1;
let x=y=2;
console.log(x);

console.log([]+1+2);

console.log("1"[0]);

console.log(2&&1&&null&&0&&undefined);

console.log(!!(1 && 2) == (1 && 2));
console.log(null || 2 && 3 || 4);
console.log(0 || null);

console.log(0 || "" || 2 || undefined || true || false);

// // to String
// //1
// console.log(String(null));
// console.log(String(4));
// //2
// console.log(typeof(5+""));
// const num = 5;
// console.log("http://vk.com/catalog/" + num);

// const fontSize = 26 + 'px';

// //to Number
// //1
// console.log(typeof(Number('4')));

// //2
// console.log(typeof(+'4'));

// //3
// console.log(typeof(parseInt('15px', 10)));

// let answ = +prompt('hi', "");

// //to boolean

// // 0, '', null, undefined, NaN - false;

// //1
// let switcher = null;
// if (switcher) {
//     console.log('Working...');
// }

// switcher = 1;

// if (switcher) {
//     console.log('Working...');
// }

// //2
// console.log(typeof(Boolean('4')));

// //3
// console.log(typeof(!!"444"));


// let str = 'some';
// let strObj = new String(str);

// console.log(typeof(str), typeof (strObj), strObj);

// console.dir([1,2,3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log("Hello");
//     }
// };

// const John = Object.create(soldier);

// const John = {
//     health: 100
// };

// John.__proto__ = soldier;

// Object.setPrototypeOf(John, soldier);


// John.sayHello();

// let a = 5,
//     b = a;

// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.x = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     d: 17,
//     e: 20
// };

// const clone = Object.assign({}, add);
// clone.d = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'bitch';

// console.log(newArray);
// console.log(oldArray);

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// log(...num);

// const array = ["a", "b"];

// const bitchArray = [...array];

// const q = {
//     one: 1,
//     two: 2
// };

// const w = {...q};

// const arr = [1, 4, 3, 10, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b) {
//     return a - b;
// }

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt("", "");
// const products = str.split(", ");
// products.sort();
// console.log(products.join('; '));

// arr.pop();
// arr.push(10);

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }


// const obj = new Object();
// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     }
// };

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

// console.log(options["colors"]["border"]);



// function first(){
//     // do something
//     setTimeout(function() {console.log(1);}, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`Я учу: ${lang}`);
//     callback();
// }

// function done() {
//     console.log('Я прошел этот урок')
// }

// learnJS('JavaScript', done);

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