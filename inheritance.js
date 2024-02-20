class Person {
    constructor (_name, _age){
        this.name = _name
        this.age = _age
    }

    description (){
        return console.log(`This person's name is ${this.name} and he is ${this.age} years old`)
    }
}

class Programmer extends Person{
    // extends keywords brings all properties of Person class available to Programmer
    constructor(_name , _age ,_title){
        //super keyword makes properties of Person constructor available to Programmer
        super(_name, _age)

        this.title = _title
    }


}


var person1 = new Person("Kwabena", 20)

var programmer = new Programmer("Joseph", 30, "Software Engineer")

person1.description()

programmer.description()