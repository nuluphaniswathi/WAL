"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Business = void 0;
const Person_1 = require("./Person");
class Business extends Person_1.Person {
    constructor(personname, age, Businessname) {
        super(personname, age);
        this.Businessname = Businessname;
    }
}
exports.Business = Business;
