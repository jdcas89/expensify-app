import { addExpense, editExpense, removeExpense } from '../../actions/expenses'
import * as types from '../../actions/actionTypes';

test('should setup remove expense action object', () => {
  const action = removeExpense({id:'123qwe'});
  expect(action).toEqual({
    type: types.REMOVE_EXPENSE,
    id: '123qwe'
  })
})

test('should setup edit expense action object', () => {
  const action = editExpense('123qwe', {note:'this is a note'});
  expect(action).toEqual({
    type: types.EDIT_EXPENSE,
    id: '123qwe',
    updates:{note:'this is a note'}
  })
})



test('addExpense action should have provided data', () => {
  const expenseData = {
    description:'this is a description',
    amount: 2000,
    createdAt:10000,
    note:'this is a note'
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: types.ADD_EXPENSE,
    expense:{
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('addExpense action should have default data', () => {
  const expenseData = {
    description:'',
    amount: 0,
    createdAt:0,
    note:''
  }
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: types.ADD_EXPENSE,
    expense:{
      ...expenseData,
      id: expect.any(String)
    }
  })
})