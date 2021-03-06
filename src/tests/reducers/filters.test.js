import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default filter values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month'),
    });
});

test('should set sortBy to amount', () => {
    const state = filtersReducer(undefined, { type: 'SORT_BY', sortBy: 'amount'});
    expect(state.sortBy).toBe('amount');
});

test('should set sortBy to date', () => {
    const action = { type: 'SORT_BY' };
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    }
    const state = filtersReducer(currentState, action);
    expect(state.sortBy).toBe('date');
});

test('should set text filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_TEXT_FILTER', text: 'bill' });
    expect(state.text).toBe('bill');
});

test('should set startDate filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_START_DATE', startDate: moment(0).add(2, 'days').valueOf() });
    expect(state.startDate).toBe(moment(0).add(2, 'days').valueOf());
});

test('should set endDate filter', () => {
    const state = filtersReducer(undefined, { type: 'SET_END_DATE', endDate: moment(0).add(2, 'days').valueOf() });
    expect(state.endDate).toBe(moment(0).add(2, 'days').valueOf());
});