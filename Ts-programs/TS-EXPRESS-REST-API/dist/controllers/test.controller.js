"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.testController = void 0;
const testController = (req, res) => {
    console.log("test working");
    res.send({ message: "test working" });
};
exports.testController = testController;
