import filtersReducer from '../../reducers/filters';
import moment from 'moment';
import * as types from '../../actions/actionTypes';

test('should setup filter values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'})
  expect(state).toEqual({
    text: '',
    sortBy:'date',
    startDate:moment().startOf('month'),
    endDate:moment().endOf('month')
  })
})

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, {type: types.SORT_BY_AMOUNT})
  expect(state.sortBy).toBe('amount');
})

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
  const state = filtersReducer(currentState, {type: types.SORT_BY_DATE})
  expect(state.sortBy).toBe('date');
})

//should set text filter
test('should set text filter', () => {
  const state = filtersReducer(undefined, {type: types.SET_TEXT_FILTER, text: 'rent'})
  expect(state.text).toBe('rent');
})
//should set startDate filter
test('should set startDate filter', () => {
  const state = filtersReducer(undefined, {type: types.SET_START_DATE, startDate: moment(1000)})
  expect(state.startDate).toEqual(moment(1000));
})
// should set endDate filter
test('should set endDate filter', () => {
  const state = filtersReducer(undefined, {type: types.SET_END_DATE, endDate: moment(2000)})
  expect(state.endDate).toEqual(moment(2000));
})