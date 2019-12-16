// import {value, rnd, z, getName} from './testA.js';
// import Student from "./testB.js";
//
// console.log(value, rnd, z, getName());
// let instance = new Student('ivan');
// console.log(instance);

import DB from './db.js';
import { studentsListElement } from "./variables.js";
import { appendStudent } from "./utils.js";

let database = new DB('https://frontend-lectures.firebaseio.com');
console.log(database);
let studentsList = [];

database.getStudents().then(result => {
    let studentsList = Object.values(result);
    console.log('studentsList', studentsList);
studentsList.forEach(student => appendStudent(student, studentsListElement))
});