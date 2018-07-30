import * as firebase from 'firebase';
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

database.ref().set({
    name: 'Dominik Szeremeta',
    age: 26,
    isSingle: false,
    location: {
        city: 'Philadelphia',
        country: 'United States'
    }
}).then(() => {
    console.log('Data is saved!');
}).catch((e) => {
    console.log('This failed', e);
});

//database.ref('age').set(27);
//database.ref('location/city').set('New York');

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
