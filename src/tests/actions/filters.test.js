import moment from 'moment';
import { setStartDate, setEndDate, sortByDate, sortByAmount, setTextFilter } from '../../actions/filters';

test('should generate set start date action object', () => {
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type: 'SET_START_DATE',
        startDate: moment(0),
    });
});

test('should generate set end date action object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type: 'SET_END_DATE',
        endDate: moment(0),
    });
});

test('should sort by date', () => {
    expect(sortByDate()).toEqual({ type: 'SORT_BY', sortBy: 'date'});
});

test('should sort by amount', () => {
    expect(sortByAmount()).toEqual({ type: 'SORT_BY', sortBy: 'amount'});
});

test('should set text filter', () => {
    expect(setTextFilter()).toEqual({ type: 'SET_TEXT_FILTER', text: ''});
});

test('should set text filter', () => {
    expect(setTextFilter('Bill')).toEqual({ type: 'SET_TEXT_FILTER', text: 'Bill'});
});