export abstract class Mobile{
    abstract makePCB():void;
    abstract makeCamera():void;
    abstract makeBattery():void;
    abstract makeCase():void;
    abstract assembleall():void;

}


//cannot create an instance of abstract class
//let obj=new Mobile();
// let obj=new Making();
// console.log(obj);
