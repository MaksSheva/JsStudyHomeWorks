// todo 1) Создайте смешанный массив, например [1, 2, 3, ‘a’, ‘b’, ‘c’, ‘4’, ‘5’, ‘6’].
//  Посчитайте сумму всех его чисел, включая строковые. Выведите сумму в alert.

// let arr = [1, 2, 3, 'a', 'b', 'c', '4', '5', '6', '7'];
// let sum = 0;
// for (let key of arr) {
//     key = parseInt(key);
//     if (isNaN(key) === false) {
//         sum = sum + key;
//     }
// }
// alert(sum);

//todo 2) Сгенерируйте массив из N случайных чисел с двумя знаками после запятой.
// Затем переберите массив и распечатайте в консоли значения его элементов, возведенные
// в пятую степень. Для возведения в степень используйте вложенный цикл (НЕ метод Math.pow(), НЕ оператор **).

// let arr = [];
// let a = 0;
// let arrSqr = [];
// for (let i = 0; i < 5; i++) {
//     let b = 1;
//     a = (Math.random()) + i;
//     a = a.toFixed(2);
//     arr.push(a);
//     for (let x = 0; x < 5; x++) {
//        b =  b * a;
//     }
//     console.log(b.toFixed(2));
//     arrSqr.push(b.toFixed(2));
// }
// console.log(arr, arrSqr);

//todo 3) Создайте пустой массив. В цикле до n на каждой итерации запускайте prompt для ввода любых символов,
// полученное значение добавляйте в конец созданного массива. После выхода из цикла посчитайте сумму всех
// чисел массива и выведите в alert полученный результат.

// let arr = [];
// let n = parseInt(prompt('Введите количество циклов', '10'));
// let sum = 0;
//
// for (let i = 0; i < n; i++) {
//    let a = prompt('Insert any value! ', '1');
//     arr.push(a);
// }
//
// alert(`массив выглядит вот так:  [${arr}]`);
//
// for (let j = 0; j < arr.length; j++) {
//     let b = arr[j];
//     arr[j] = parseInt(arr[j]);
//     if (isNaN(arr[j]) === false) {
//         sum = sum + arr[j];
//     } else {
//         arr[j] = b;
//     }
// }
//
// alert(`Cумма всех численных элементов массива равна:  ${sum} , arr = ${arr}`, );

//todo 4) Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
//  Добавьте в начало массива значение ‘Backbone.js’
//  Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
//  Добавьте в массив значение ‘CommonJS’ вторым элементом
//  Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”

// let arr = ['AngularJS', 'jQuery'];
// console.log(arr);
// arr.unshift('Backbone.js');
// console.log(arr);
// arr.push('ReactJS', 'Vue.js');
// console.log(arr);
// arr.splice(1, 0, 'CommonJS');
// console.log(arr);
// alert(`'Это здесь лишнее - ', ${arr[arr.indexOf('jQuery')]}`);
// arr.splice(arr.indexOf('jQuery'), 1);
// console.log(arr);


//todo 5) Создайте строку с текстом ‘Как однажды Жак звонарь сломал городской  фонарь’. Разбейте ее на массив слов,
// и переставьте слова в правильном порядке с помощью любых методов массива (indexOf, splice ...).
// Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.

// let string = 'Как однажды Жак звонарь сломал городской  фонарь';
// let arr = string.split( ' ');
// arr.splice(arr.indexOf('сломал'), 1);
// arr.splice(arr.indexOf(''), 1, 'сломал');
// alert(arr.join(' '));
// console.log(arr);

//todo 6) Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения.
// После того, как таблица сгенерирована, распечатайте значение в консоли:
//
// let arr = [];
// let fullArr = [];
//
// debugger
// for (let j = 1; j < 11; j++) {
//     let x = 0;
//     x = j;
//     for (let i = 1; i < 11; i++) {
//         arr.push(`${x}x${i} = ${x * i}`);
//     }
//
//     fullArr.push(arr);
//     arr = [];
// }
// console.log(fullArr);

//todo Level Up
// 1. Поиск элементов DOM (объектной структуры документа) с использованием нативных методов JS
// Используя поиск по селекторам querySelector и querySelectorAll из DOM API и свойство DOM-элемента style,
// задайте стили элементам таблицы в блоке #content. Редактировать HTML нельзя, CSS не нужен. Последовательность команд:
// Таблица расположена посредине страницы, расстояния между ее ячейками нет
// Все ячейки имеют ширину-высоту 10px, цвет фона #eee, границу 1px solid #000
// Фон в ячейках первых шести строк –#106B63
// Фон в ячейках строк 7-9 –#E7C610
// Фон в ячейках строк 10-12 – #C64A08
// Фон в ячейках строк 13-15 –#B43100
// Фон в ячейках всех оставшихся строк –#102173
// У некоторых ячеек есть класс none, задайте на jQuery стиль для этого класса: фона нет, границы нет
// Подсказка: для поиска элементов помогут “родственные селекторы”. Задать стиль всем элементам коллекции можно в цикле.

