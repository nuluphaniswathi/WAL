"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor(personname, age) {
        this.personname = personname;
        this.age = age;
    }
    getDetails() {
        console.log("Details of person");
    }
}
exports.Person = Person;
