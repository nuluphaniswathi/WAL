import {Request,Response} from "express";
import jwt from "jsonwebtoken";
import * as dotenv from "dotenv";
dotenv.config({path:"../.env"})
const secretkey:any=process.env.SECRET_KEY||"";
//const jwt=require("jsonwebtoken");

//require('dotenv').config();


const verifyToken=(req:Request,res:Response,next:any)=>{
    console.log("verify token")
    //token verification logic
    //get bearer token from headers of req
    let bearerToken=req.headers.authorization;
    console.log(bearerToken);
    //check existance of bearer token
    if(bearerToken===undefined)
    {
        res.status(401).send({message:"unauthorized access"});
    }

    //if bearer token is existed get token from bearer token
    else{
        let token=bearerToken.split(" ")[1];//[bearer,token]
       
        try{
             //decode the token
        //let decoded=jwt.verify(token,process.env.SECRET_KEY);
        let decoded=jwt.verify(token,secretkey);
        res.status(200).send({message:"authenticated"})
        next()
   
        }
        catch(err)
        {
            res.send({message:"please relogin to continue..."})

        }

    }
    //decode the token=verification
}
//export
//module.exports=verifyToken;
export default verifyToken;