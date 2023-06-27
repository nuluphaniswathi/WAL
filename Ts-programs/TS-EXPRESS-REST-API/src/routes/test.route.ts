import {IRouter,Router} from "express";
//IRouter is an interface type
const testApp:IRouter=Router();
import {testController} from '../controllers/test.controller'

testApp.get('/test',testController)


export default testApp;