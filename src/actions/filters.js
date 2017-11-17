import * as types from './actionTypes';

export const setTextFilter = (text = '') => ({
  type: types.SET_TEXT_FILTER,
  text
})

export const sortByDate = () => ({
  type: types.SORT_BY_DATE
})

export const sortByAmount = () => ({
  type: types.SORT_BY_AMOUNT
})

export const setStartDate = (startDate) => ({
 type: types.SET_START_DATE,
  startDate
})

export const setEndDate = (endDate) => ({
  type: types.SET_END_DATE,
  endDate
})