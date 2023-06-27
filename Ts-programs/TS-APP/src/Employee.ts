import {Person} from './Person'
import { Address } from './Address'
export class Employee extends Person {
    //has a relationship private add:Address
     constructor(pname:string,page:number,private designation:string,private add:Address
        ){
        super(pname,page)
     }
}
