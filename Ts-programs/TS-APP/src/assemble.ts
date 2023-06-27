import {Makecase} from './makecase';
class Assemble extends Makecase{
    assembleall():void{
       console.log("assemble all");

    }
}
let obj=new Assemble();
obj.assembleall();
obj.makeBattery();
obj.makeCamera();
obj.makeCase();
obj.makePCB();
console.log(obj);

