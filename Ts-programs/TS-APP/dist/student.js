"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
// export interface StudentInterface{
//     rollno:number;
// }
const Person_1 = require("./Person");
class Student extends Person_1.Person {
    constructor(personname, age, studentname) {
        super(personname, age);
        this.studentname = studentname;
    }
}
exports.Student = Student;
