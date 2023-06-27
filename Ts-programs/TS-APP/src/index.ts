import {Employee} from './Employee';
import { Business } from './business';
import { Student } from './student'; 
import { Address } from './Address';
//import {Making} from './Mobile';
//let obj=new Mobile();
//let obj=new Making();
//console.log(obj);

let addr=new Address("hyd");
let addr1=new Address("vizag");
let emp=new Employee("ravi",20,"developer",addr);
console.log(emp);
console.log(addr==addr1);
console.log(addr==addr);

//emp.getDetails();
let emp1=new Employee("ravi",20,"developer",addr);
console.log(emp1);
//emp.getDetails();
let emp2=new Employee("ravi",20,"developer",addr1);
console.log(emp2);
emp.getDetails();
// let std=new Student("swathi",21,"swathistud");
// console.log(std);
// let busObj=new Business("ravi",20,"carbusiness");
// console.log(busObj);



// console.log("welcome");
// console.log("hello");
// import {Student} from './studentInterface';
// let obj=new Student(10);
// console.log(obj);
// Implement the following relationship.
// Person------Student
//             ------Employee
//             ----- Businessman
// where Person class can have all common properties and Employee,Student & Businessman contain their specific properties.