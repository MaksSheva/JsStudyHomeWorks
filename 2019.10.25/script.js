//1st

//todo Создайте блок-схему, описывающую алгоритм поиска минимального из трех чисел. Запишите алгоритм программно:
// создайте три переменные с любыми числовыми значениями; используя только вложенные условные операторы if
// (НЕ логические операторы), найдите минимальное число и отобразите на экране его значение.

// 'use strict';
//
// let x = parseInt(prompt('Введите x', '1'));
// let y = parseInt(prompt('Введите y', '2'));
// let z = parseInt(prompt('Введите z', '3'));
//
// if (x < y) {
//     if (x < z) {
//         alert('x - наименьшее значение: ' + x);
//     }
// } else if (y < z) {
//     alert('y - наименьшее значение: ' + y);
// } else if (z < x) {
//     if (z < y) {
//         alert('z - наименьшее значение: ' + z);
//     }
// } else {
//     alert('x , y , z - равны!');
// }

//todo =============================================

//2nd

//todo По склону Фудзи ползет улитка. Ее скорость определяется в диалоговом окне. Проверить и вывести на экран,
// улитка двигается вперед, назад или остается на месте (скорость (вектор) положительная, отрицательная или ноль)

// 'use strict';
//
// let x = parseInt(prompt('Введите скорость улитки: ', '5'));
// if (x > 0) {
//     alert('Улитка ползёт вверх со скоростью ' + x  + ` км в час`);
// } else if (x < 0) {
//     alert('Улитка ползёт вниз со скоростью ' + x + ` км в час`);
// }
// else if (x === 0) {
//     alert('Улитка чилит на солнышке :)');
// } else {
//     alert('Введите валидное значение скорости!');
// }


//todo =============================================

////3rd
//todo У вас и у вашего друга в кармане столько денег, сколько было указано в окнах prompt. В зависимости от общей
// суммы ваших сбережений вы можете полететь на Мальту изучать английский язык или выпить пива. С помощью условного
// оператора определите ваши возможности и отобразите на экране в alert.

// 'use strict';
//
// let x = parseInt(prompt('Сколько у Вас сбережений? ', '5'));
// let y = parseInt(prompt('Сколько сбережений у Вашего друга? ', '5'));
// const z = 1000;
// if ((x + y) >= z) {
//     alert('Дружище, у нас с тобой есть ' + (x + y)  + ' долларов и мы можем полететь на Мальту учить английский!!!');
// } else {
//     alert('Дружище, у нас с тобой есть ' + (x + y) + ' долларов. Этого не хватит на Мальту, Но хватит здрово попить пивка!!!');
// }

//todo =============================================

////4th

//todo В переменную age запишите возраст человека.
// Если значение больше или равно 20 и меньше 30, в alert выводится “Выслать повестку”.

// 'use strict';
//
// let age = parseInt(prompt('Введите свой возраст: ', '21'));
// if (age >= 31) {
//     alert('Гуляй смело, ты слишком стар для этого дерьма.');
// } else if (age <= 19) {
//     alert('Малышь, неси молоко домой, а-то мамка наругает!');
// } else {
//     alert('Выслать повестку!');
// }

//todo =============================================

////5th

//todo Чтобы добраться домой, вас устраивают маршрутки номер 7, 225 и 255.
// Какая маршрутка приехала – определяется в prompt. Если ваша, то вы едете домой, в противном случае – ожидаете.

// 'use strict';
//
// let x = parseInt(prompt('Номер приехавшей маршрутки?: ', '7'));
// if ((x === 7) || (x === 225) || (x === 255)) {
//     alert('Ура, едем домой!!!');
// } else {
//     alert('Блин, не моя маршрутка. Ожидаю свою.');
// }

//todo =============================================

////6th

//todo В переменную day записан текущий день недели. Если это не суббота и не воскресенье,
// выведите в alert сентенцию о необходимости идти на работу.

// 'use strict';
//
// let x = new Date().getDay();
// if ((x === 0) || (x ===6)) {
//     alert('Выходной, высыпаемся.');
// } else {
//     alert('Рабочий день! Выходим на работу!');
// }

//todo =============================================

////7th //todo Доделать!!!!!!!!!!

//todo Получите из prompt значение для имени пользователя. Выведите на экран приветствие.
// Учтите вариант, что пользователь может не ввести ничего или нажать на Отмена.
//
// 'use strict';
//
// let name = prompt('Введите Ваше имя: ', 'John');
//
// if (name === null) {
//     alert('Введите Ваше имя!');
// } else if (name !== '') {
//     alert('Привет ' + name + '!');
// } else {
//     alert('Введите Ваше имя!');
// }

//todo =============================================

////8th

//todo Напишите калькулятор обмена валюты USD-UAH. Из первого prompt читается тип операции
// (регистр символов не имеет значения), из второго - сумма, подлежащая конвертации.
// Используя switch, рассчитайте результат конвертации. Результат выведите его в alert.
//
// 'use strict';
//
// var currencyName = prompt('Введите валюту(uah или us): ', 'uah').toLowerCase();
// let value;
// const rate = 24.87;
//
// switch (currencyName) {
//     case 'uah' :
//         value = parseInt(prompt('Введите сумму: ', '100'));
//         alert('За ' + value + ' гривен вы получите ' + (value / rate) + ' долларов.');
//         break;
//     case 'us' :
//         value = parseInt(prompt('Введите сумму: ', '100'));
//         alert('За ' + value + ' долларов вы получите ' + (value * rate) + ' гривен.');
//         break;
//     default:
//         alert('Введите корректное название валюты');
//         break;
// }

//todo =============================================

////9th

//todo Создайте две переменные: greeting и lang. Переменная greeting – пустая строка.
// Переменная lang может принимать три значения: 'ru', 'en', 'de' (например, из prompt).
// Если она имеет значение 'ru', то в переменную greeting запишите приветствие на русском языке,
// если имеет значение 'en' – то на английском, если 'de' – на немецком. Выведите на экран
// приветствие в зависимости от значения переменной lang. Решите задачу через if-else и через switch-case.
//
// 'use strict';
//
// let lang = prompt('Выберите язык (ru, en, de): ', 'uah').toLowerCase();
// let greeting;
//
// if ( lang !== '') {
//     switch (lang) {
//         case 'ru': greeting = alert('Привет! Как дела?'); break;
//         case 'en': greeting = alert('Hello! How are you?'); break;
//         case 'de': greeting = alert('Hallo! Wie geht es Ihnen?'); break;
//         default: alert('Выбранный язык не поддерживается!')
//     }
// } else {
//     alert('Выберите язык')
// }

//todo =============================================

////10th

//todo В переменной month хранится текущий месяц (new Date()).
// Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).
//
// 'use strict';
//
// let x = new Date().getMonth();
// // let x = +prompt('Введите месяц (0-11): ', 1); //todo Юзать для проверки)
//
// if ((x === 11) || (x === 0) || (x === 1)) {
//     alert('Зима');
// } else if ((x === 2) || (x === 3) || (x === 4)) {
//     alert('Весна');
// } else if ((x === 5) || (x === 6) || (x === 7)) {
//     alert('Лето');
// } else if ((x === 8) || (x === 9) || (x === 10)) {
//     alert('Осень');
// } else {
//     alert('Something goes wrong :(')
// }

//todo =============================================

////11th

//todo Переменная lang может принимать два значения: 'ru' и 'en'. Переменная day принимает значение от 0 до 6-ти.
// Если lang имеет значение 'ru', то в переменную result запишите название дня недели на русском языке в соответствии
// со значением переменной day (0 – воскресенье, 1 – понедельник, 2 – вторник и т.д.).
// Если же lang имеет значение 'en' – то аналогично, но день недели будет на английском.

// 'use strict';
//
// let lang = prompt('Выберите язык(en, ru): ', 'en');
// let day;
//
// if (lang === 'ru') {
//     day = +prompt('Введите день (0 - 6): ', 0);
//     switch (day) {
//         case 0:
//             alert('Воскресенье');
//             break;
//         case 1:
//             alert('Понедельник');
//             break;
//         case 2:
//             alert('Вторник');
//             break;
//         case 3:
//             alert('Среда');
//             break;
//         case 4:
//             alert('Четверг');
//             break;
//         case 5:
//             alert('Пятница');
//             break;
//         case 6:
//             alert('Суббота');
//             break;
//         default:
//             alert('Введите корректное значение дня');
//             break;
//     }
// } else if (lang === 'en') {
//     day = +prompt('Choose day value (0 - 6): ', 0);
//     switch (day) {
//         case 0:
//             alert('Sunday');
//             break;
//         case 1:
//             alert('Monday');
//             break;
//         case 2:
//             alert('Tuesday');
//             break;
//         case 3:
//             alert('Wednesday');
//             break;
//         case 4:
//             alert('Thursday');
//             break;
//         case 5:
//             alert('Friday');
//             break;
//         case 6:
//             alert('Saturday');
//             break;
//         default:
//             alert('Input correct day value!');
//             break;
//     }
// } else {
//     alert('Choose correct language value / Введите корректное значение языка')
// }


////12th

//todo Найдите и исправьте ошибки в коде:
let x = prompt('x', 0);
let error;

switch (x) {
    case 0: error = 'На ноль делить нельзя'; break;
    case 1: error = 'На единицу делить бессмысленно'; break;
    case NaN: error = 'Не математическая операция'; break;
}

if (error !== '') {
    alert(error);
} else {
    alert(100 / x);
}



//todo =============================================
