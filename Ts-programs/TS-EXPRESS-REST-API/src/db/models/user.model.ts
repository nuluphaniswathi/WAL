import sequelize from "../db.config";
import {DataTypes} from "sequelize";
//const sequelize=require("../db/db.config");
//const {DataTypes}=require("sequelize");
export const User=sequelize.define("user",{
    username:{
        type:DataTypes.STRING,
        allowNull:false
    },
    password:{
        type:DataTypes.STRING,
        allowNull:false
    },
    Name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:DataTypes.STRING,
        defaultValue:true
    }
},{
    timestamps:false,
    createdAt:false,
    updatedAt:false,
    //tableName:"abcd",
    freezeTableName:true 

})
sequelize.sync();
