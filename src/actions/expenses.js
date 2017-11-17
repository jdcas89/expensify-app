import uuid from "uuid";
import * as types from './actionTypes';



export const addExpense = ({ description = "", note = "", amount = 0, createdAt = 0 } = {}) => ({ 
  type: types.ADD_EXPENSE, 
  expense: { id: uuid(), description, note, amount, createdAt } 
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
