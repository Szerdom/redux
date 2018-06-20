class Person {
    constructor(name = 'Bob', age){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi. I am ${this.name}!`;
    }
    getDescription(){
        return  `Hi. ${this.name} is ${this.age} years old`;
    }
}

const notMe = new Person('Krzy', 26);
console.log(notMe.getDescription());

const me = new Person();
console.log(me.getGreeting());