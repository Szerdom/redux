/*const person = {
    age: 26,
    location: {
        city: 'Phila',
        temp: 92
    }
}

const { name: firstName = 'Annon', age } = person;

console.log(`${firstName} is ${age}`);

const { temp: temperature, city } = person.location;

console.log(`It's ${temperature} in ${city}.`);*/

/*const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        //name: 'Penguin'
    }
}

const {name: publisherName = 'Self published'} = book.publisher;
console.log(publisherName); */


// Array destructuring

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania'];

const [, city, state, number = 14] = address;

console.log(`You are in ${city} ${state} ${number}`);

const item = ['Coffee (hot)', '$2', '$2.50', '$2.75'];

const [what, small, med, big] = item;

console.log(`Medium ${what} costs ${med}`);