
class Person {

    constructor(name){
        this.name = name;
        this.age = 1;
    }

    hello() {
        console.log(`My name is ${this.name} and I am ${this.age} years old`)
    }

    growUp() {
        this.age++
    }

}