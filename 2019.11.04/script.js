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


//todo 4) Создайте массив со значениями: ‘AngularJS’, ‘jQuery’
//  Добавьте в начало массива значение ‘Backbone.js’
//  Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
//  Добавьте в массив значение ‘CommonJS’ вторым элементом
//  Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”


//todo 5) Создайте строку с текстом ‘Как однажды Жак звонарь сломал городской  фонарь’. Разбейте ее на массив слов,
// и переставьте слова в правильном порядке с помощью любых методов массива (indexOf, splice ...).
// Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.


//todo 6) Используя вложенные циклы, сформируйте двумерный массив, содержащий таблицу умножения.
// После того, как таблица сгенерирована, распечатайте значение в консоли: