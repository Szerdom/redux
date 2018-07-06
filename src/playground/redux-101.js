import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const resetCount = ({ resetTo = 0 } = {}) => ({
    type: 'RESET',
    resetTo
});

const setCount = ({ setTo = 24 } = {}) => ({
    type: 'SET',
    setTo
});

const countReducer = (state = { count: 0 }, action) => {
    switch(action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            }
        case 'RESET':
            return {
                count: action.resetTo
            }
        case 'SET':
            return {
                count: action.setTo
            }
        default: 
            return state;
    }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(incrementCount({ incrementBy: 6 }));

//unsubscribe();

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(resetCount({ resetTo: 100}));

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 30}));

store.dispatch(setCount({ setTo: 50 }));

store.dispatch(setCount());
