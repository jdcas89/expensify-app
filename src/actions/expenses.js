import uuid from "uuid";
import * as types from './actionTypes';
import database from '../firebase/firebase';




export const addExpense = (expense) => ({ 
  type: types.ADD_EXPENSE, 
  expense
});

export const removeExpense = ({ id }) => ({
  type: types.REMOVE_EXPENSE,
  id
});

export const editExpense = (id, updates) => ({
  type: types.EDIT_EXPENSE,
  id,
  updates
});

export const startAddExpense = (expenseData = {}) => {
  return (dispatch) => {
    const {
      description = "", note = "", amount = 0, createdAt = 0
    } = expenseData;
    const expense = {description, note, amount , createdAt}
    database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    })
  }
}