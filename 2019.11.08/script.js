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


//todo 4) Не используя методы массива, напишите функцию аналог метода shift.
// Функция удаляет из переданного в параметре массива первый элемент и возвращает новый массив.

// debugger;
// function input(data) {
//     let arr = data;
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === 0) {
//             delete arr[0];
//         } else if (i !== 0) {
//             newArr[i - 1] = arr[i];
//         }
//     } return newArr;
// }
// let x = input([0, 1, 2, 3, 4, 5]);
// console.log(x);

//todo 5) Не используя методы массива, напишите функцию аналог метода массива push.
// Функция добавляет в конец переданного в параметре массив произвольное количество элементов.
//
// debugger;
// function input(data) {
//     let arr = data;
//     let value = prompt('Введите количество символов: ', 5);
//     for (let i = 0; i < value; i++) {
// arr[arr.length] = Math.round(Math.random() * 100);
//     } return arr;
// }
// let x = input([23, 1, 2, 3, 4, 5]);
// console.log(x);

//todo 6) Напишите функцию аналог метода ES6 Object.assign(). Первый параметр функции - целевой объект,
// поля которого будут изменены или расширены. Остальные параметры - объекты-источники,
// полями которых будет расширяться целевой объект.

// function addObjData(target, ...sources) {
//     sources.forEach(source => {
//         Object.defineProperties(target, Object.keys(source).reduce((descriptors, key) => {
//             descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
//             return descriptors;
//         }, {}));
//     });
//     return target;
// }
//
// let person1 = {
//     age: 20,
//     height: 180
// };
// let person2 = {
//     firstName: 'Maks',
//     gender: 'male'
// };
//
// let person3 = {
//     scinColor: 'black',
//     nationality: 'USA'
// };
// let fullPerson = addObjData(person1, person2, person3);
// console.log(fullPerson);

//todo 7) Напишите функцию setComment с параметрами: date, message, author.
// Дата и текст сообщения - обязательные параметры, если какой-то из них или оба отсутствуют,
// то выполнение функции должно обрываться, а пользователю выдаваться предупреждение (alert) о том,
// что данные переданы некорректно. Параметр author - опциональный, но должна происходить проверка:
// если параметр не передан, то вместо него подставляется значение ‘Anonymous’.
// Функция распечатывает в HTML текст в виде:
// <имя_автора>, <дата>
// <текст_сообщения>
// setComment('2016-11-02', 'Everything is ok', 'John');
// John, 2016-12-22
// Everything is ok
// setComment('2016-11-02', 'You could do it better!');
// Anonymous, 2016-12-22
// You could do it better!

// function setComment(date, message, author) {
//     const mockAuthor = 'Anonymous';
//     if (date === '' || date === undefined) {
//         return alert('Введите дату!!!');
//     } else if (message === '') {
//         return alert('Введите текст коммента');
//     } else if (author === '' || author === undefined) {
//         author = mockAuthor;
//     }
//     return alert(date + ' , ' + author + '\n' + message);
// }
//
// setComment(prompt('Введите дату', '20.11.19'), 'Тут могла быть Ваша реклама.');

//todo Вывел просто в алерт, хз как в ХТМЛ правильно скомпоновать.

//todo 8) Напишите функцию, которая в строке, состоящей из чисел, разделенных пробелом,
// находит максимальное и минимальное, и возвращает их

function highAndLow(data) {
    let resultData = parseInt(data);
 console.log(resultData);
}

highAndLow('10 d 25 sa 30 50 ad 34');