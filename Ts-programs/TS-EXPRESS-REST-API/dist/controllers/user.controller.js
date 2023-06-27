"use strict";
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteUser = exports.ModifyPassword = exports.GetDetailsByUsername = exports.loginUser = exports.CreateUser = void 0;
const express_async_handler_1 = __importDefault(require("express-async-handler"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const dotenv = __importStar(require("dotenv"));
dotenv.config({ path: "../.env" });
const secretkey = process.env.SECRET_KEY || "";
console.log("secret key:", secretkey);
//import models
const user_model_1 = require("../db/models/user.model");
exports.CreateUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield user_model_1.User.findOne({ where: { username: req.body.username } });
    let { username, password, Name } = req.body;
    if (user == undefined) {
        let hashedPassword = yield bcryptjs_1.default.hash(password, 5);
        password = hashedPassword;
        yield user_model_1.User.create({ username, password, Name });
        res.send({ message: "User created" });
    }
    else {
        res.send({ message: "user already exists" });
    }
}));
exports.loginUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let user = yield user_model_1.User.findOne({ where: {
            username: req.body.username
        } });
    console.log("users", user);
    if (user == undefined) {
        res.send({ message: "Invalid credentials" });
    }
    else {
        let result = yield bcryptjs_1.default.compare(req.body.password, user.dataValues.password);
        //if passwords not matched
        console.log(result);
        if (result === false) {
            res.status(400).send({ message: "Invalid password" });
        }
        else {
            //if credentials are verified create jwt token
            console.log("secretkey:", secretkey);
            let signedToken = jsonwebtoken_1.default.sign({ username: req.body.username }, secretkey, { expiresIn: "1d" });
            //remove password
            //delete user.dataValues.password
            //send jwt in res
            //res.status(200).send({message:"login success",token:signedToken,user:user.dataValues})
            res.status(200).send({ message: "login Success", payload: signedToken });
        }
    }
}));
exports.GetDetailsByUsername = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let user = req.params.user;
    let userdetails = yield user_model_1.User.findOne({ where: { username: user } });
    console.log(userdetails);
    if (userdetails == undefined) {
        res.send({ message: "user with that name not existed" });
    }
    else {
        res.send({ message: "userexisted", payload: userdetails.dataValues });
    }
}));
exports.ModifyPassword = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let getuser = user_model_1.User.findOne({ where: { username: req.params.user, status: true } });
    if (getuser == undefined) {
        res.send({ message: "no user to modify" });
    }
    else {
        let hashedPassword = yield bcryptjs_1.default.hash(req.body.password, 5);
        let password = hashedPassword;
        yield user_model_1.User.update({ password: password }, { where: { username: req.params.user } });
        res.send({ message: "password updated" });
    }
}));
exports.DeleteUser = (0, express_async_handler_1.default)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let getuser = yield user_model_1.User.findOne({ where: { username: req.params.user, status: true } });
    if (getuser != undefined) {
        let deleteuser = yield user_model_1.User.update({ status: "false" }, { where: { username: req.params.user } });
        if (deleteuser) {
            res.send({ message: "user deleted" });
        }
        else {
            res.send({ message: "user not deleted" });
        }
    }
    else {
        res.send({ message: "user not existed to delete" });
    }
}));
/*
export const testController=(req:Request,res:Response)=>{
    console.log("test working");
    res.send({message:"test working"});
}*/ 
