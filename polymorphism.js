// The act of redifining a method inside a derived child class of a parent

class Animal {
    constructor(_name){
        this.name = _name
    }

    // Method that is eventually going to be overriden to achieve polymorphism
    makeSound(){
        console.log("Generic Animal Sound!!!")
    }
}

class Dog extends Animal{
    constructor(_name){
        super(_name)

    }
    // Polymorphism
    // Redefining makeSound method
    makeSound(){
        // Using super.makeSOund will use the Parent's class method
        super.makeSound()

        console.log("WHoof whoof!!")
    }
}


const a1 = new Animal("Kwabena")
a1.makeSound()

const a2 = new Dog("Joe")
a2.makeSound()