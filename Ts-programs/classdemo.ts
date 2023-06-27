//class:multiple object of same type.it has logical existance,contains fields,constructors,methods
class Student{
    //fields
    //by default public fields
    //private username:string;
    //email:string

     //constructors
     //instead of declaring and initializing provide accessmodifiers to constructor parameter
     constructor(_username:string,private _email:string){
        //this refers to current object//parameter properties
        //this.username=username;
        //this.email=email;
     }
     //function test(private username)=>


      //getters& setters =>no need to use because we are not allowing to use outsiders
      get username(){
        return this._username;
      }
      set username(newValue){
        this._username=newValue

      }
      //methods
      getData(){
        console.log(this._username,this._email)
      }
      //static members=not a part of object
      static test:number=10;
}
//std1 is the reference of student object
let std1:Student=new Student("swathi","swathi@gmail.com");
//private only accessible within class
//it there is only one class both private and protected act as same way
//console.log(std1.username)
console.log(std1.getData());
console.log(std1.username);//getter invoked
std1.username="navya";//setter invoked
console.log(std1.username);//setter invoked
console.log(Student.test);