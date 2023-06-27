//create Employee type with frst namel,lastname,age and basic.
//hra=15%
//da=10%
type Employ={
    firstname:string,
    lastname:string,
    age:number,
    basic:number

}
//create function which receive employee type object as arg and return the salar of him
let Emp1:Employ={
    firstname:"swathi",
    lastname:"nulu",
    age:20,
    basic:10000
}
let Emp2:Employ={
    firstname:"ranii",
    lastname:"nulu",
    age:20,
    basic:20000
}
let Emp3:Employ={
    firstname:"preethi",
    lastname:"nulu",
    age:20,
    basic:30000
}
let Emp4:Employ={
    firstname:"mothi",
    lastname:"nulu",
    age:20,
    basic:40000
}


function basicSalary(emp:Employ):number{
    let hra=0.15*emp.basic;
    let da=0.1*emp.basic;
    let salary=hra+da+emp.basic;
    return  salary;
}
console.log("basic salary of emp1:",basicSalary(Emp1))


//Write another function that receives an array of employee objects as arg and return the emp with lowest salary
function EmployeeObjects(emp:Employ[]):Employ{
    let minSalary=99999;
    let minsalaryEmployee;
    for(let i=0;i<emp.length;i++){
        let hra=0.15*emp[i].basic;
        let da=0.1*emp[i].basic;
        let salary=hra+da+emp[i].basic;
        if(salary<minSalary){
            minSalary=salary
            minsalaryEmployee=emp[i]

        } 
    }
    return minsalaryEmployee;


}
console.log("minsalaryEmployee:",EmployeeObjects([Emp1,Emp2,Emp3,Emp4]))



function test(a:number,b:number,c:number=1):number{
    return a+b+c;
}
console.log(test(10,20));
function test1(a:(number|string),b?:number,c:number=1){
    console.log(a,b,c);
}
test1("10");




//interfaces
// interface Person{
//     readonly username:string,
//     age:number,
//     //optional property
//     mobile?:number
// }
// interface Person{
//     rollno:number;
// }
// let p:Person={
//     username:"test",
//     age:10,
//    // mobile:45,
//     rollno:15
// }
// console.log("object p:",p);
// //p.username="mamatha"; cannot assign value because it is readlonly property

// //create student type
// type Student={
//     rollno:number,
//     city:string;
// }
// // type Student={
// //     age:number
// // }do not add fields or remove fields in type

// let s1:Student={
//     rollno:100,
//     city:"hyd"
// }

// console.log("hello world");
// let a=10;
// console.log("a=",a);
// //declare variable
// //typescript provides datatype safety
// let b:number=10;
// let s:string='hello';
// let state:boolean=true;
// //any datatype
// let x:any;
// x=1;
// x='hi'
// let person:object={
//     name:"swathi",
//     age:20
// }
// //person=10;
// let skills:string[]=['html','css']
// console.log(skills)
// //union types
// let roll:string|number|boolean;
// roll='n170210';
// roll=10;
// roll=true;
// console.log(roll)
// //for union types of array mention it in ()
// let rollNumbers:(string|number)[]=[1,'a']
// console.log("roll numbers:",rollNumbers);
