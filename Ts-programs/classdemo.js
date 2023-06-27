//class:multiple object of same type.it has logical existance,contains fields,constructors,methods
var Student = /** @class */ (function () {
    //fields
    //by default public fields
    //private username:string;
    //email:string
    //constructors
    //instead of declaring and initializing provide accessmodifiers to constructor parameter
    function Student(_username, _email) {
        this._username = _username;
        this._email = _email;
        //this refers to current object//parameter properties
        //this.username=username;
        //this.email=email;
    }
    Object.defineProperty(Student.prototype, "username", {
        //getters& setters =>no need to use because we are not allowing to use outsiders
        get: function () {
            return this._username;
        },
        set: function (newValue) {
            this._username = newValue;
        },
        enumerable: false,
        configurable: true
    });
    //methods
    Student.prototype.getData = function () {
        console.log(this._username, this._email);
    };
    //static members=not a part of object
    Student.test = 10;
    return Student;
}());
//std1 is the reference of student object
var std1 = new Student("swathi", "swathi@gmail.com");
//private only accessible within class
//it there is only one class both private and protected act as same way
//console.log(std1.username)
console.log(std1.getData());
console.log(std1.username); //getter invoked
std1.username = "navya";
console.log(std1.username);
console.log(Student.test);
