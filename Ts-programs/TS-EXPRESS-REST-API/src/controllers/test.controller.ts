import {Request,Response} from 'express';
import expressAsyncHandler from "express-async-handler";
export const testController=(req:Request,res:Response)=>{
    console.log("test working");
    res.send({message:"test working"});
}