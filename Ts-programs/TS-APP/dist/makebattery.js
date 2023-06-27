"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MakeBattery = void 0;
const makepcbcam_1 = require("./makepcbcam");
class MakeBattery extends makepcbcam_1.MakePCBCam {
    makeBattery() {
        console.log("make battery");
    }
}
exports.MakeBattery = MakeBattery;
