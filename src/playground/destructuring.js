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

const book = {
    title: 'Ego is the enemy',
    author: 'Ryan Holiday',
    publisher: {
        //name: 'Penguin'
    }
}

const {name: publisherName = 'Self published'} = book.publisher;
console.log(publisherName); 