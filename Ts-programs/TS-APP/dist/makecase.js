"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Makecase = void 0;
const makebattery_1 = require("./makebattery");
class Makecase extends makebattery_1.MakeBattery {
    makeCase() {
        console.log("make case");
    }
}
exports.Makecase = Makecase;
