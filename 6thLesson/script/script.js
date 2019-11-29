// let x=Math.random() * 10;
// let y=Math.random() * 10;
//
// if (x > y) {
//     alert('Call mom');
// }
//
// else {alert('Call dad')}
// console.log(Math.round(x), Math.round(y));
////============================================================================
// let x=-1;
//
// if (x > y) {
//     alert('Call mom');
// }
//
// else {alert('Call dad')}
// console.log(Math.round(x));
////============================================================================
// let age = prompt('How old are you?', ''),
////============================================================================
// try {
//     alert(item);
// } catch (e) {
//    console.log(e);
// }
//     alert('ALARMAAAA');
//
// let x = Math.random(),
//     y = Math.random();
// if (x > y) {
//     alert(x)
// } else {
//     alert(y)
// }

let inputElement = document.querySelector( '#input_color'),
    pElement = document.querySelector('#paragraph');
console.log(inputElement, pElement);

let color = inputElement.value;
console.log(color);

let drawColor;
switch (color) {
    case 'red': drawColor = '#ff0000'; break;
    case 'blue': drawColor = '#0000ff'; break;
    case 'green': drawColor = '#00ff00'; break;
    default: drawColor = '#123456'
}
pElement.style.color = drawColor;
