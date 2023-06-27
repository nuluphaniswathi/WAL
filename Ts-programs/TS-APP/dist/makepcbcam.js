"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakePCBCam = void 0;
const Mobile_1 = require("./Mobile");
class MakePCBCam extends Mobile_1.Mobile {
    makePCB() {
        console.log("make pcb");
    }
    makeCamera() {
        console.log("make camera");
    }
}
exports.MakePCBCam = MakePCBCam;
