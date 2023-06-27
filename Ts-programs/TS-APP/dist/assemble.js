"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const makecase_1 = require("./makecase");
class Assemble extends makecase_1.Makecase {
    assembleall() {
        console.log("assemble all");
    }
}
let obj = new Assemble();
obj.assembleall();
obj.makeBattery();
obj.makeCamera();
obj.makeCase();
obj.makePCB();
console.log(obj);
