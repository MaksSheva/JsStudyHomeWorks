//todo 1) Создайте функцию p и a, которые будут служить короткими именами для prompt и alert соответственно,
// то есть запрашивать окно с полем ввода и выводить любое пользовательское сообщение в стандартном модальном
// окне. Напишите функцию d, которая будет служить коротким именем для debugger, то есть запускать процесс отладки.
// Используя эти псевдонимы получите значение из prompt и отобразите в alert. А процесс работы скрипта проконтролируйте
// с помощью функции, которая служит для дебага.

// function p(name , mockName) {
//     return prompt(name , mockName);
// }
//
// function a(name) {
//     alert(name);
// }
//
// function d() {
//     debugger;
// }
//
// d();
// let name = p('Enter your name', 'John');
// a(name);
// a('Hello World')

//todo 2) Используя стрелочный синтаксис ES6, напишите функцию max (аналог Math.max),
// которая сравнивает два числа и возвращает большее: 

// let max = (a, b) => {
//     let x = a > b ? a : b;
//     return x;
// }
// let result = max(+prompt('Введите первое число', 1), (+prompt('Введите второе число', 2)));
// alert('Наибольшим числом является ' + result);

//todo 3) Используя синтаксис ES5, напишите функцию-аналог Math.min().
// Функция принимает любое количество чисел и возвращает меньшее из них:

// debugger;
// let arrayMin = function (a) {
//     let arr = [];
//     for (let i = 0; i < a; i++) {
//         let x = +prompt('Insert value ', 1);
//         arr.push(x);
//     }
//     console.log(arr);
//
//     function sortNumber(a, b) {
//         return a - b;
//     }
//
//     arr.sort(sortNumber);
//     return arr[0];
//     console.log(arr);
// }
//
// let min = arrayMin(+prompt('Введите количество значений ', 1))
// alert('Минимальным значением будет ' + min);

let arrayMin = function (a) {
    let arr = [];
    for (let i = 0; i < a; i++) {
        let x = prompt('Insert value ', 1);
        parseInt(x);
        
    }
    console.log(arr);

    function sortNumber(a, b) {
        return a - b;
    }

    arr.sort(sortNumber);
    return arr[0];
    console.log(arr);
}

let min = arrayMin(+prompt('Введите количество значений ', 1))
alert('Минимальным значением будет ' + min);

//todo 4) Не используя методы массива, напишите функцию аналог метода shift.
// Функция удаляет из переданного в параметре массива первый элемент и возвращает новый массив.
// debugger;
// function input(...args) {
//     return console.log(input())
// }
// console.log( input(1, 2, 3, 4, 5));