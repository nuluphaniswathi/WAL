"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
const db_config_1 = __importDefault(require("../db.config"));
const sequelize_1 = require("sequelize");
//const sequelize=require("../db/db.config");
//const {DataTypes}=require("sequelize");
exports.User = db_config_1.default.define("user", {
    username: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    Name: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    status: {
        type: sequelize_1.DataTypes.STRING,
        defaultValue: true
    }
}, {
    timestamps: false,
    createdAt: false,
    updatedAt: false,
    //tableName:"abcd",
    freezeTableName: true
});
db_config_1.default.sync();
