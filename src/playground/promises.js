const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        /*resolve({
            name: 'Andrew',
            age: 26
        });
        resolve('This is my other resolved data');*/
        reject('Wrong');
    }, 1500);
});

console.log('Before');

promise.then((data) => {
    console.log(data);
})
.then(() => {
    console.log('Does it run?');
})
.catch((error) => {
    console.log('error', error);
});

console.log('After');