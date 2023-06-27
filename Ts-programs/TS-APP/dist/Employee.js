"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
const Person_1 = require("./Person");
class Employee extends Person_1.Person {
    //has a relationship private add:Address
    constructor(pname, page, designation, add) {
        super(pname, page);
        this.designation = designation;
        this.add = add;
    }
}
exports.Employee = Employee;
