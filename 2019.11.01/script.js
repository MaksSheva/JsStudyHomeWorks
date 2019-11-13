// todo 1) Создайте объект person, описывающий персону, с произвольным количеством произвольных полей.
//  С помощью оператора in или typeof проверьте наличие в объекте свойства, прочитанного из prompt,
//  и выведите его на экран. Если свойства нет, то добавляйте его в объект со значением, которое
//  также запрашивается из prompt.

// let person = {
//     firstname: prompt('Firstname', 'john'),
//     lastname: prompt('Lastname', 'doe'),
//     age: 30,
//     job: {position: 'developer', company: 'Google'}
// };
//
// for (let key in person) {
//     if (typeof person[key] === "string"){
//         console.log(key, person[key]);
//     }
// }

//todo 2) Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями,
// прочитанными из prompt (например: brand, model, resolution, color...), не используя
// вспомогательные переменные. Добавьте этот гаджет персоне, созданной ранее.

// let person = {
//     firstname: prompt('Firstname', 'john'),
//     lastname: prompt('Lastname', 'doe'),
//     age: 30,
// };
//
//  person.cellphone = {
//          brand: prompt('Brand', 'Xiaomi'),
//          model: prompt('Model', 'Mi MIX 3'),
//          resolution: +prompt('resolution', 1080),
//          color: prompt('Color', 'black')
//  };
//  console.log(person);


//todo 3) Запустите бесконечный цикл. В цикле вызывайте prompt, в котором пишется либо delete, либо update.
// В зависимости от указанного действия, удаляйте или добавляйте (редактируйте) свойство в объекте персоны
// (которая уже имеет телефон). Какое именно свойство удалять или добавлять - также читается из prompt.
// Какое значение будет у добавленного свойства - тоже берется из prompt. При нажатии на Отмена при появлении
// prompt редактирование person заканчивается. И обновленные данные распечатываются в консоли.

// let person = {
//     firstname: 'john',
//     lastname: 'doe',
//     age: 30,
//     cellphone: {
//         brand: 'Xiaomi',
//         model: 'Mi MIX 3',
//         resolution: 1080,
//         color: 'black'
//     }
// };
// debugger;
// while (true) {
//     let input = prompt('Choose delete or edit', 'edit');
//     if (input === 'delete') {
//         let deleteParam = prompt('What param we need to remove?', 'age');
//         delete person[deleteParam];
//         break;
//
//     } else if (input === 'edit') {
//         let editParam = prompt('What param we need to edit?', 'age');
//             let newData = prompt('Insert new value', 'value');
//             if (isNaN(newData)) {
//             } else {
//                 newData = parseInt(newData);
//             }
//             person[editParam] = (newData);
//             break;
//         } else {
//         break;
//     }
// }
// console.log(person);


//todo 4) Динамически (скриптом) создайте HTML элемент <dl>. Переберите в цикле (for..in)
// сгенерированный ранее объект person, добавляя dt - для имени свойства и dd - для значения свойства.
//
// let person = {
//     firstname: 'john',
//     lastname: 'doe',
//     age: 30,
//     cellphone: {
//         brand: 'Xiaomi',
//         model: 'Mi MIX 3',
//         resolution: 1080,
//         color: 'black'
//     }
// };
//
// let listElement = document.createElement('dl');
// document.body.appendChild(listElement);
//
// for (let key in person) {
//     if (typeof person[key]) {
//
//         let titleElement = document.createElement('dt');
//         listElement.appendChild(titleElement);
//         titleElement.innerText = key;
//
//         let defElement = document.createElement('dd');
//         listElement.appendChild(defElement);
//         defElement.innerText = person[key];
//     }
// }
// console.log();

//todo 5) Создайте объект dates для хранения дат. Первая дата – позавчера. Вторая дата – текущая дата
// (new Date) минус 365 дней. Из prompt читается дата в формате yyyy-MM-dd. Проверьте, попадает ли
// введенная дата в диапазон дат объекта dates.
//
// const day = 86400000;
// let startDate =  Date.now();
// let insertedDate = prompt('Insert date in format "yyyy-mm-dd"!' );
// insertedDate=insertedDate.split("-");
// let newDate=insertedDate[2]+"/"+insertedDate[1]+"/"+insertedDate[0];
// let d4 = new Date(newDate).getTime();
// let dates = {
//     d1: startDate - day * 2,
//     d2: startDate - day * 365,
//     d3: d4
// };
// if (dates.d1 > dates.d3 && dates.d3 > dates.d2) {
//     alert('Ееее бой!!! Введенная дата попадает в необходимый диапазон дат!')
// } else {
//     alert('Упс :( Введенная дата пролетела мимо заданного диапазона!');
// }

//todo 6) Создайте структуру данных, полностью описывающую html-разметку картинки.
// С помощью методов браузера добавьте ее на страницу со всеми атрибутами, читая значения свойств из созданного объекта.

// let image = {
//     src: "https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif",
//     alt: "Here you can imagine some image",
//     styler: "border: 1px solid #ccc",
//     width: "200"
// };
//
// let imageElement = document.createElement('img');
//
// imageElement.src = image.src;
// imageElement.alt = image.alt;
// imageElement.style = image.styler;
// imageElement.width = image.width;
// document.body.appendChild(imageElement);
