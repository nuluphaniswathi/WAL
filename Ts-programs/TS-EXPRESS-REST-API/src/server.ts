

//create express app




//import * as express from 'express';
import express,{Application,Request,Response} from 'express';
//when ever install express need to install definitely typed 
//import express,{Application} from 'express';
//express()return appliation object
const app:Application=express();
import * as dotenv from 'dotenv';
dotenv.config({path:"../.env"});
console.log(process.env.PORT)
const port:any=process.env.PORT;
app.listen(port,():void=>console.log('server on 3000'));
//importing sequelize
import sequelize from './db/db.config';
sequelize.authenticate()
.then(()=>console.log("DB conection is suceess"))
.catch((err:any)=>console.log("err in DB connection",err))
//import testapp
//import testApp from './routes/test.route';
//app.use('/test-api',testApp);
//import userApp
import UserApp from './routes/user.route';
app.use('/user-api',UserApp);

//error handling middleware
app.use("*",(req:Request,res:Response,next:any)=>{
    res.send({message:"invalid path"})
})
//default error middleware
app.use((err:Error,req:Request,res:Response,next:any)=>{
  res.send({"error":err.message})
})

