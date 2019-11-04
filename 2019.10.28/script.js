// todo 1) Нарисуйте блок-схему, иллюстрирующую алгоритм приготовления чашечки чая.

// link to block-schema https://prnt.sc/prlyyy

// // todo 2) Используя любой цикл, напишите программу, которая в консоли выводит текстовое поздравление.
// //  В каждой итерации выводится по строке. Программа поздравляет того, чье имя определяется в
// //  переменной username:
// // Happy birthday to you
// // Happy birthday to you
// // Happy birthday dear {{username}}
// // Happy birthday to you
//
// let greeting = 'Happy birthday to you';
// let repeat = 0;
// let username = 'Nataliya';
//
// for (repeat; repeat < 2; repeat ++){
//     console.log(greeting);
// }
// console.log('Happy birthday dear ' + username);
// console.log(greeting);

//todo 3) Сформируйте строку вида ".#.#.#.#.#." чередованием символов . и # в каждой итерации
// с помощью цикла for. После выхода из цикла распечатайте полученную строку.
//
//
// let dot = '.';
// let hash = '#';
// let result = 0;
//
// for (let i = 0; i < 100; i++){
//     if ( i % 2 === 0) {result +=dot;
//     } else {
//         result += hash;
//     }
// }
// console.log((result += dot).toString() + (result += hash).toString());

//todo 4) Напишите цикл с шагом 1, в теле которого распечатываются квадраты каждого четного
// значения счетчика.


// for (let i = 0; i < 100; i++){
//     if ( i % 2 === 0) {console.log(i * i);
//     } else {
//         console.log('======================');
//     }
// }

//todo 5) Напишите цикл с confirm, который продолжается при нажатии
// на Отмена и прерывается при нажатии на Ok.

// let window = prompt('press ok or cancel');
//
// while (window)

//todo 6) В окно prompt вводится число. Напишите цикл, в котором суммируются все нечетные числа
// до диапазона, введенного пользователем. Результат отобразите в окне alert.

let input = +prompt('Введите верхнее число диапазона', 3);
let result = 0;

for (let i = 0; i < input; i++) {
    if (i % 2 !== 0) {
        result = result + i;
    }
}
alert(result);

