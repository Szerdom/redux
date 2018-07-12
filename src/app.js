import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', note: 'Water bill', amount: 10 }));
store.dispatch(addExpense({ description: 'Gas bill', note: 'Gas bill', amount: 10 }));

store.dispatch(setTextFilter('elko'));

setTimeout(() => {
    store.dispatch(setTextFilter('zmianka'));
}, 3000);

const state = store.getState();
const vExp = getVisibleExpenses(state.expenses, state.filters);

console.log(vExp);

const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'));