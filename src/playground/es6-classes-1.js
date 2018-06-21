class Person {
    constructor(name = 'Bob', age = 24){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi. I am ${this.name}!`;
    }
    getDescription(){
        return  `Hi. ${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person{
    constructor(name, age, major){
        super(name, age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        //return  `Hi. ${this.name} is ${this.age} years old and I work in ${this.major}`;
        let description = super.getDescription();

        if(this.hasMajor()){
            description += ` Their major is ${this.major}`
        }

        return description;
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting(){
        let greeting = super.getGreeting();

        if(this.homeLocation){
            greeting += ` I live in ${this.homeLocation}`;
        }

        return greeting;
    }
}

const notMe = new Traveler('Krzy', 26, 'Mikolajki');
console.log(notMe.getGreeting());

const me = new Person();
console.log(me.getDescription());