"use strict";
//create express app
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//import * as express from 'express';
const express_1 = __importDefault(require("express"));
//when ever install express need to install definitely typed 
//import express,{Application} from 'express';
//express()return appliation object
const app = (0, express_1.default)();
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: "../.env" });
console.log(process.env.PORT);
const port = process.env.PORT;
app.listen(port, () => console.log('server on 3000'));
//importing sequelize
const db_config_1 = __importDefault(require("./db/db.config"));
db_config_1.default.authenticate()
    .then(() => console.log("DB conection is suceess"))
    .catch((err) => console.log("err in DB connection", err));
//import testapp
//import testApp from './routes/test.route';
//app.use('/test-api',testApp);
//import userApp
const user_route_1 = __importDefault(require("./routes/user.route"));
app.use('/user-api', user_route_1.default);
//error handling middleware
app.use("*", (req, res, next) => {
    res.send({ message: "invalid path" });
});
//default error middleware
app.use((err, req, res, next) => {
    res.send({ "error": err.message });
});
