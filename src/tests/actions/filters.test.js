import { setEndDate, setStartDate, setTextFilter, sortByDate, sortByAmount } from '../../actions/filters'
import moment from 'moment';
import * as types from '../../actions/actionTypes';

test('should generate setStartDate action object', () => {
  const startDateToSet = moment(0);
  const action = setStartDate(startDateToSet);
  expect(action).toEqual({
    type: types.SET_START_DATE,
    startDate:startDateToSet
  })
})

test('should generate setEndDate action object', () => {
  const endDateToSet = moment(0);
  const action = setEndDate(endDateToSet);
  expect(action).toEqual({
    type: types.SET_END_DATE,
    endDate:endDateToSet
  })
})


test('should generate setTextFilter action object with default values', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: types.SET_TEXT_FILTER,
    text:''
  })
})

test('should generate setTextFilter action object with default values', () => {
  const textToSet = 'Rent'
  const action = setTextFilter(textToSet);
  expect(action).toEqual({
    type: types.SET_TEXT_FILTER,
    text:textToSet
  })
})


test('should generate sortByAmount action object', () => {
  expect(sortByAmount()).toEqual({ type: types.SORT_BY_AMOUNT });
})

test('should generate sortByAmount action object', () => {
  expect(sortByDate()).toEqual({ type: types.SORT_BY_DATE });
})