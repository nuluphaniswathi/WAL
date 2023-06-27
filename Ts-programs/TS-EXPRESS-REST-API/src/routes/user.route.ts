import express ,{IRouter,Router} from "express";
//IRouter is an interface type
const UserApp:IRouter=Router();
import verifyToken from "../middlewares/verifyToken";

import {CreateUser,loginUser,GetDetailsByUsername,ModifyPassword,DeleteUser} from '../controllers/user.controller';

//bodyparser
UserApp.use(express.json());

UserApp.post('/create-user',CreateUser)
UserApp.post('/login-user',loginUser);
UserApp.get('/username/:user',GetDetailsByUsername);
UserApp.put('/modify-password/:user',verifyToken,ModifyPassword);
UserApp.delete('/delete-user/:user',verifyToken,DeleteUser);
//testApp.get('/test',testController)


export default UserApp;