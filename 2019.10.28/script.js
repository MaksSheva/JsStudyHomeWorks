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
//
// let input = +prompt('Введите верхнее число диапазона', 3);
// let result = 0;
//
// for (let i = 0; i < input; i++) {
//     if (i % 2 !== 0) {
//         result += i + i;
//     } else {}
//     console.log(result)
// }
// alert(result);

//todo 7) Напишите бесконечный цикл, который прерывается при помощи команды break, когда Math.random() > 0.99.
// Выведите в окно alert случайное число, прервавшее цикл, и количество итераций цикла.

// let x;
// let y = 0.99;
// let z = 0;
// while (true) {
//     x = Math.random();
//     z = z + 1;
//     if (x > y) {
//         break;
//     }
// }
// alert('Цикл прервался числом: ' + x + ' ! ' + 'Количество итераций: ' + z + '!');

//todo 8) Используя вложенные циклы, распечатайте в консоли значения таблицы умножения: 1х1=1, 1x2=2 ... 2x1=2, 2x2=4...

// for (let i = 1; i < 10; i++) {
//     for (let j = 1; j < 10; j++) {
//         let x = i * j;
//         console.log(i + ' x ' + j + ' =', x);
//     }
// }

//todo 9) Используя вложенные циклы, сформируйте строку чередованием символов . и # таким образом, чтобы получился
// шахматный узор. Для перевода строки используйте символ \n. Код должен поддерживать легкое изменение размеров доски.

let dot = '.';
let hash = '#';
let result = '';

for (let j = 0; j < 3; j++) {
    for (let i = 0; i < 12; i++) {
        if (i % 2 === 0) {
            result += dot;
        } else if (i % 2 !== 0) {
            result += hash;
        }
    }
}
console.log(result, '\n');