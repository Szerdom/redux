import * as firebase from 'firebase';
import moment from 'moment';
import * as expensesActions from '../actions/expenses';

const config = {
    apiKey: "AIzaSyB_HYH3uAICRV7nqmhdWIRubJXHU0uYih8",
    authDomain: "redux-szerdom.firebaseapp.com",
    databaseURL: "https://redux-szerdom.firebaseio.com",
    projectId: "redux-szerdom",
    storageBucket: "redux-szerdom.appspot.com",
    messagingSenderId: "785824269519"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});

database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key, snapshot.val());
});
/*database.ref('expenses')
    .once('value')
    .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((child) => {
            expenses.push({
                id: child.key,
                ...child.val()
            });
        });

        console.log(expenses);
    }, (e) => {
        console.log('Error', e);
    });*/

/*database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];
        snapshot.forEach((child) => {
            expenses.push({
                id: child.key,
                ...child.val()
            });
        });

        console.log(expenses);
}, (e) => {
    console.log('Error', e);
});*/






/*database.ref('expenses').remove();

database.ref('expenses').push({
    description: 'Gum',
    note: '',
    amount: 195,
    createdAt: moment(0).valueOf(),
});
database.ref('expenses').push({
    description: 'Rent',
    note: '',
    amount: 109500,
    createdAt: moment(0).subtract(4, 'days').valueOf(),
});
database.ref('expenses').push({
    description: 'Credit Card',
    note: '',
    amount: 4500,
    createdAt: moment(0).add(4, 'days').valueOf(),
});*/

/*database.ref('notes/-LIkRgSv8Uxr_3XdeKe9').update({
    body: 'Buy food'
});*/

/*const firebaseNotes = {
    notes: {
        aaa: {
            title: 'First note!',
            body: 'This is my note'
        },
        bbb: {
            title: 'second note!',
            body: 'This is my note'
        }
    }
}*/

/*database.ref('notes').push({
    title: 'To do',
    body: 'Go for a run'
});*/

/*database.ref().set({
    name: 'Dominik Szeremeta',
    age: 26,
    job: {
        title: 'Software Developer',
        company: 'Google'
    },
    stressLevel: 6,
    location: {
        city: 'Philadelphia',
        country: 'United States'
    }
}).then(() => {
    console.log('Data is saved!');
}).catch((e) => {
    console.log('This failed', e);
});

database.ref('age').set(27);
database.ref('location/city').set('New York');

database.ref('attributes').set({
    height: 190,
    weight: 180
}).then(() => {
    console.log('Updated');
}).catch((e) => {
    console.log('Error update', e);
});

database.ref('isSingle')
.remove()
.then(() => {
    console.log('Data was removed');
})
.catch((e) => {
    console.log('Data was not removed', e);
});

database.ref().update({
    stressLevel: 9,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
});*/

/*const onValueChanged = database.ref().on('value', (snapshot) => {
    const result = snapshot.val();
    console.log(`${result.name} is ${result.age} yo and a ${result.job.title} at ${result.job.company}`);
}, (e) => {
    console.log('Error fetching', e);
});

setTimeout(() => {
    database.ref('age').set(22);
}, 3000);

setTimeout(() => {
    database.ref().off('value', onValueChanged);
}, 5000);

setTimeout(() => {
    database.ref('age').set(27);
}, 7000);*/