
//Implement Student interface with a class 
//and add a method to return rollno and street of a student
/*
interface Skill{
    skill_name:string,
    skill_desc:string

}*/

interface Student {
    rollno:number|string;
    addresses:{
        perm_address:{
            city:string,
            pincode:string
        }
        temp_address:{
            city:string,
            pincode:string,
            street:string
        }

    }
   /* skills:{
        "skill_name":string,
        "skill_desc":string
    }*/
}
class TestEmp implements Student{
        rollno:string|number;
        addresses:{
        perm_address:{
            city:string,
            pincode:string
        }
        temp_address:{
            city:string,
            pincode:string,
            street:string
        }

    }
    //skills={skill_name:"html",skill_desc:"description"}
    constructor(rollno:number,address:{perm_address:{city, pincode}; temp_address:{city, pincode, street}}){
        this.rollno=rollno;
        this.addresses=address;
    }

    //constructor(public rollno,public addresses)
    //public getDetails(){
       // return [this.rollno,this.addresses.temp_address.street]
    //}
   /* skills:[{skill_name:"html",skill_desc:"description"},
    {skill_name:"css",skill_desc:"description"}]*/
}
let StuObj:TestEmp=new TestEmp(10, {perm_address:{city:"hyd", pincode:"533220"},temp_address:{
    city:"vih",
    pincode:"533220",
    street:"hyd"
}});
//console.log(StuObj.getDetails());
console.log(StuObj);



//nested interfaces
// interface Skill{
//     skill_name:string,
//     skill_desc:string

// }
// interface Test{
//     a:number;
//     //sum(x:number,y:number):number;
//     sum():void;
// }
// interface Test1{

// }
// /*
// class TestEmp implements Skill{
//     skill_name: string='react';
//     skill_desc:string='its js library';
// }*/
// class TestEmp implements Test,Test1
// {
//     //we can add more fields irrespective to interface in class but in object not possible
//     //a=10;
//     //b:number;
//    /* sum(m:number,n:number):number{
//         this.a=10,
//         this.b=20;
//         return 0;
//     }*/
//     constructor(public a:number,private b:number){
//         this.a=10;
//         this.b=20;
//     }
//     sum(): void {
//         console.log("Sum")
//     }

// }

// //instantiating the testemp containing interface
// let obj:TestEmp=new TestEmp(10,20);
// console.log(obj);
// console.log(obj.sum())





/*
interface Employee{
    eno:number|string,
    username:string,
    //address and skills contain complex datatype
    address:{
        city:string,
        pincode:number
    }
    skills:string[]

}
let emp:Employee={
    eno:100,
    username:"swathi",
    address:{
        city:"kku",
        pincode:533220
    },
    skills:['html','react']
}
interface Skill{
    skill_name:string,
    skill_desc:string

}

interface Student{
    rollno:number|string;
    addresses:{
        perm_address:{
            city:string,
            pincode:string
        }
        temp_address:{
            city:string,
            pincode:string
        }

    },
    skills:Skill[]
}
let skillObj1:Student={
    rollno:10,
    addresses:{
        perm_address:{
            city:"kesanakurru",
            pincode:"533220",
        },
        temp_address:{
            city:"vijayawada",
            pincode:"533220",
        }
    },
    skills:[{skill_name:"html",skill_desc:"description"},
    {skill_name:"css",skill_desc:"description"}]
}
console.log(skillObj1);
console.log(skillObj1.addresses.temp_address);

*/














/*
interface Person{
        readonly username:string,
        age:number,
    //     //optional property
     mobile?:number
}
let p=new Person()==>error no initializer for object
console.log(p);*/