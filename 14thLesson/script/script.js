// // let hamster = {
// //     eat(food) {
// //         this.stomach.push(food);
// //     },
// // };
// //
// // let lazy = {
// //     stomach: [],
// //     name:'Slowpoke',
// //     __proto__: hamster,
// // }
// //
// // let  speedy = {
// //     stomach: [],
// //     name: 'Flash',
// //     __proto__: hamster,
// // }
// //
// // speedy.eat('carrot');
// // console.log(lazy);
// // console.log(speedy);
//
//
//
// // Array.prototype.slice2 = function (s1, s2) {
// //
// //     let result = [];
// // s1 = s1 !== undefined ? s1:0;
// // s2 = s2 !== undefined ? s1: this.length;
// //     for (let i = s1; i < s2; i++) {
// //         result[i] = this[i];
// //     }
// //     return result;
// // }
// //
// // let data = [1, 2, 3];
// // console.log(data.slice2(0, 1));
//
// function Turtle(name) {
//     this.hasShell = true;
//     this.name = name;
// }
//
// Turtle.prototype.eatPizza = function () {
//     console.log(`${this.name} said: `);
//     console.log('Mmmm, yummy');
//
// }
//
// function Ninja(name) {
//     Turtle.call(this, name);
// }
//
// Ninja.prototype = Object.create(Turtle.prototype);
// Ninja.prototype.constructor = Ninja;
//
// let raphael = new Ninja('Raphael');
// let donatello = new Ninja('Donatello');
//
// raphael.eatPizza();
// donatello.eatPizza();
//
// console.log(raphael);
// console.log(raphael instanceof Ninja);
// console.log(raphael instanceof Turtle);
// console.log(raphael instanceof Object);
//
