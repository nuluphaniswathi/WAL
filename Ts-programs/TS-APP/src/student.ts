// export interface StudentInterface{
//     rollno:number;
// }
import {Person} from './Person'
export class Student extends Person{
    constructor(personname:string,age:number,private studentname:string){
        super(personname,age)
    }
    
}