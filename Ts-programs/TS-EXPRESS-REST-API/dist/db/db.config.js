"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
//const {Sequelize}=require("sequelize")//it is a constructor we can use it by instantiating it
//create instance
//const DB_NAME:any="userapi";
const sequelize = new sequelize_1.Sequelize(
// process.env.DB_NAME,
"userapi", "wal", "WESTAGILELABS2023", 
// process.env.DB_USER,
// process.env.PASSWORD,
{
    host: 'localhost',
    dialect: "mysql"
});
//export
//module.exports=sequelize;
exports.default = sequelize;
