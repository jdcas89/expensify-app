import uuid from "uuid";
import * as types from './actionTypes';
import database from '../firebase/firebase';




export const addExpense = (expense) => ({ 
  type: types.ADD_EXPENSE, 
  expense
});

export const removeExpense = ({ id } = {}) => ({
  type: types.REMOVE_EXPENSE,
  id
});

export const startRemoveExpense = ({id} = {}) => {
  return (dispatch) => {
    return database.ref(`expenses/${id}`).remove().then(() => {
      dispatch(removeExpense({id}));
    })
  }
}

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
    return database.ref('expenses').push(expense).then((ref) => {
      dispatch(addExpense({
        id: ref.key,
        ...expense
      }))
    })
  }
}

//
export const setExpenses = (expenses) => ({
  type: types.SET_EXPENSES,
  expenses
})

export const startSetExpenses = () => {
  return (dispatch) => {
    return database.ref('expenses').once('value').then((snapshot) => {
      const expenses = [];
      snapshot.forEach((childSnapshot) => {
        expenses.push({
          id:childSnapshot.key,
          ...childSnapshot.val()
        })
      })
      dispatch(setExpenses(expenses));
    })
  }
}