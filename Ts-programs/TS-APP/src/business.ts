import {Person} from './Person'
export class Business extends Person{
    constructor(personname:string,age:number,private Businessname:string){
        super(personname,age)
    }
}