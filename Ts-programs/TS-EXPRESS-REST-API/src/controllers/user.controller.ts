import {Request,Response} from 'express';
import expressAsyncHandler from "express-async-handler";

import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import {Op} from  "sequelize";
import * as dotenv from "dotenv";
dotenv.config({path:"../.env"})
const secretkey:any=process.env.SECRET_KEY||"";
console.log("secret key:",secretkey);
//import models
import {User} from "../db/models/user.model";


export const CreateUser=expressAsyncHandler(async(req:Request,res:Response)=>{
    let user=await User.findOne({where:{username:req.body.username}})
    let {username,password,Name}=req.body;

    if(user==undefined){
    let hashedPassword=await bcryptjs.hash(password,5);
    password=hashedPassword;
    await User.create({username,password,Name});
      res.send({message:"User created"})
    }
    else{
      res.send({message:"user already exists"})
    }
})
export const loginUser=expressAsyncHandler(async(req:Request,res:Response)=>{
    let user=await User.findOne({where:{
        username:req.body.username
}})
      console.log("users",user);
      if(user==undefined){
        res.send({message:"Invalid credentials"})
      }
      else{
        let result=await bcryptjs.compare(req.body.password,user.dataValues.password)
        //if passwords not matched
        console.log(result)
        if(result===false)
        {
            res.status(400).send({message:"Invalid password"});
        }
        else{
            //if credentials are verified create jwt token
            console.log("secretkey:",secretkey);
            let signedToken=jwt.sign({username:req.body.username},secretkey,{expiresIn:"1d"})
            //remove password
            //delete user.dataValues.password
            //send jwt in res
            //res.status(200).send({message:"login success",token:signedToken,user:user.dataValues})
            res.status(200).send({message:"login Success",payload:signedToken})
        }

      }
})

export const GetDetailsByUsername=expressAsyncHandler(async(req:Request,res:Response)=>{
    let user=req.params.user;
    let userdetails=await User.findOne({where:{username:user}});
    console.log(userdetails);
    if(userdetails==undefined){
        res.send({message:"user with that name not existed"})
    }
    else{
        res.send({message:"userexisted",payload:userdetails.dataValues});
    }
})

export const ModifyPassword=expressAsyncHandler(async(req:Request,res:Response)=>{
    let getuser=User.findOne({where:{username:req.params.user ,status:true}});
    if(getuser==undefined){
        res.send({message:"no user to modify"})
    }
    else{
    let hashedPassword:any=await bcryptjs.hash(req.body.password,5);
    let password:any=hashedPassword;
   await User.update({password:password},{where:{username:req.params.user}});
   res.send({message:"password updated"});
    }
})
export const DeleteUser=expressAsyncHandler(async(req:Request,res:Response)=>{
    let getuser=await User.findOne({where:{username:req.params.user,status:true}})
    if(getuser!=undefined)
    {
    let deleteuser=await User.update({status:"false"},{where:{username:req.params.user}});
    if(deleteuser){
        res.send({message:"user deleted"})
    }
    else{
        res.send({message:"user not deleted"})
    }
    }
    else{
        res.send({message:"user not existed to delete"})
    }

})
/*
export const testController=(req:Request,res:Response)=>{
    console.log("test working");
    res.send({message:"test working"});
}*/