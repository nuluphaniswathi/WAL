//create product class
class Product{
    constructor(public _productno:number,private _productName:string,private _brand:string,private _mrp:number){}
    public get productno(){
        return this._productno;
    }
    public set productno(newValue){
         this._productno=newValue;
    }
    public get productName(){
        return this._productName;
    }
    public set productName(newValue){
        this._productName=newValue;
    }
    public get brand(){
        return this._brand;
    }
    public set brand(newValue){
        this._brand=newValue;
    }
    public get mrp(){
        return this._mrp;
    }
    public set mrp(newValue){
        this._mrp=newValue;
    }
    getDiscount(discount:number){
        let mrp=this._mrp;
        let discount1=(discount/100)*mrp;
        let result=mrp-discount1;
        return result;
    }

}
let prod1=new Product(1,"product1","brand1",5000);
console.log(prod1);
console.log(prod1.getDiscount(5));
let prod2=new Product(2,"product2","brand2",5000);
console.log(prod2);
console.log(prod2.getDiscount(5));
let prod3=new Product(3,"product3","brand3",5000);
console.log(prod3);
console.log(prod3.getDiscount(5));
let prod4=new Product(4,"product4","brand4",5000);
console.log(prod4);
console.log(prod4.getDiscount(5));
let prod5=new Product(5,"product5","brand5",5000);
console.log(prod5);
console.log(prod5
    .getDiscount(5));
    // repo