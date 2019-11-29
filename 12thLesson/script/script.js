// function slice() {
// let result = [];
//     for (let i = 0; i<this.length; i++) {
//     result[i] = this[i];
// }
//     return result;
// }
// console.log(slice.call([1, 2, 3]));


// function bind(context, fn, ...args) {
//     return function () {
//         fn.call(context);
//     }
// }
// function test() {
//     console.log(this)
// }
//
// let user = {
//     firstname: 'John',
//     lastname: 'Doe'
// }
//
// let bindedTest = bind(window, test);
// bindedTest();


function getFullName() {
return `${this.firstname || 'John'} ${this.lastname || 'Anonymous'}`;
}

let users = [];

for (let i = 0; i <3; i++) {
    let value = prompt('Enter your full name', 'John Doe');
    let [firstname, lastname] = value.split(' ');
    let user = {
        firstname: firstname,
        lastname: lastname
    };
    console.log(user);
    users.push(user);
}
console.log(users);

users.forEach((user) => {
    alert(getFullName.call(user));
})