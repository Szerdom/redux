import React from 'react';
import ReactDOM from 'react-dom';
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

const state = store.getState();
const vExp = getVisibleExpenses(state.expenses, state.filters);

console.log(vExp);
//console.log(getVisibleExpenses());

ReactDOM.render(<AppRouter />, document.getElementById('app'));