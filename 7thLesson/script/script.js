// let count = +prompt('Count', 0);
//
// if (Number.isNaN(count)) {
//     alert('Not valid number');
//     throw 'Not valid number';
// }
//
// let ulElement = document.createElement('ul');
// document.body.appendChild(ulElement);
//
// for (let i = 0; i < count; i++){
//     let liElement = document.createElement('li');
//     ulElement.appendChild(liElement);
//     let name = prompt('Enter name', 'John');
//     liElement.innerText = name;
//     console.log(name);
// }

//todo =================================================================

// let count = +prompt('Count', 0);
//
// if (Number.isNaN(count)) {
//     alert('Not valid number');
//     throw 'Not valid number';
// }
//
// let dlElement = document.createElement('dl');
// document.body.appendChild(dlElement);
//
// for (let i = 0; i < count; i++){
//     let dtElement = document.createElement('li');
//     dlElement.appendChild(dtElement);
//     let ddElement = prompt('Enter name', 'John');
//     dtElement.innerText = ddElement;
//
//     let title = prompt('Enter Title', '');
//     let value = prompt('Enter value', '');
//
//     dtElement.innerText = title;
//     ddElement.innerText = value;
// }

//todo =================================================================

let table = document.createElement('table');
document.body.appendChild(table);

for (let row = 0; row < 3; row++) {
    let tr = document.createElement('tr');
    table.appendChild(tr);

    for (let col = 0; col < 3; col++) {
        let td = document.createElement('td');
        tr.appendChild(td);
        let name = prompt('Name', 'John');
        td.innerText = name;
    }
}