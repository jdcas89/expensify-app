import * as types from '../actions/actionTypes'
//Expenses reducer

const expensesReducerDefaultState = [];
export default (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case types.ADD_EXPENSE:
      return [...state, action.expense]
    case types.EDIT_EXPENSE:
      return state.map((expense) => {
        if(expense.id === action.id){
          return {
            ...expense,
            ...action.updates
          };
        }else{
          return expense;
        }
      })
    case types.REMOVE_EXPENSE:
      return state.filter(({ id }) => id !== action.id);
    case types.SET_EXPENSES:
      return action.expenses;
    default:
      return state;
  }
};

//export default expensesReducer;