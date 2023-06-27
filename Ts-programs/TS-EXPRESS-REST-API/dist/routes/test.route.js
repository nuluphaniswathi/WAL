"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
//IRouter is an interface type
const testApp = (0, express_1.Router)();
const test_controller_1 = require("../controllers/test.controller");
testApp.get('/test', test_controller_1.testController);
exports.default = testApp;
