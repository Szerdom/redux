import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters, altFilters } from '../fixture/filters';
import moment from 'moment';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={filters}
            setTextFilter={setTextFilter}
            sortByDate={sortByDate}
            sortByAmount={sortByAmount}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('should render ExpenseListFilters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});


test('should render ExpenseListFilters with alt data correctly', () => {
    wrapper.setProps({
        filters: altFilters
    });
    expect(wrapper).toMatchSnapshot();
});

test('should handle text change', () => {
    const event = {
        preventDefault() {},
        target: {value: 'newValue'}
    };
    wrapper.find('input').simulate('change', event);
    expect(setTextFilter).toHaveBeenCalledWith('newValue');
});

test('should handle sort by date', () => {
    const event = {
        target: {value: 'date'}
    };
    wrapper.find('select').simulate('change', event);
    expect(sortByDate).toHaveBeenCalled();
});

test('should handle sort by amount', () => {
    const event = {
        target: {value: 'amount'}
    };
    wrapper.find('select').simulate('change', event);
    expect(sortByAmount).toHaveBeenCalled();
});

test('should handle date changes', () => {
    const startDate = moment(0).add(4, 'days');
    const endDate = moment(0).add(8, 'days');
    wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({ startDate, endDate });
    expect(setStartDate).toHaveBeenCalledWith(startDate);
    expect(setEndDate).toHaveBeenCalledWith(endDate);
});

test('should handle date focus changes', () => {
    const calendarFocused = 'startDate';
    wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});