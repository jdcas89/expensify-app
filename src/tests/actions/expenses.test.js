import { 
  startAddExpense, addExpense, editExpense, 
  removeExpense, setExpenses, startSetExpenses, 
  startRemoveExpense } from '../../actions/expenses'
import * as types from '../../actions/actionTypes';
import expenses from '../fixtures/expenses';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import database from '../../firebase/firebase'

const createMockStore = configureMockStore([thunk])

beforeEach((done) => {
  const expensesData = {}
  expenses.forEach(({id, description, note, amount, createdAt}) => {
    expensesData[id] = {description , note, amount , createdAt }
  })
  database.ref('expenses').set(expensesData).then(() => done());
})

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
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: types.ADD_EXPENSE,
    expense:expenses[2]
  })
})

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount : 7000,
    note: 'This is a note vibe',
    createdAt: 1000
  }
  store.dispatch(startAddExpense(expenseData)).then((expense) => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.ADD_EXPENSE,
      expense:{
        id: expect.any(String),
        ...expenseData
      }
    })

    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
   
  }).then((snapshot) =>{
    expect(snapshot.val()).toEqual(expenseData)
    done()
  })
})

test('should add expense with defaults to database and store', (done) => {
  const store = createMockStore({});
  const expenseDefaults = {
    description: '',
    amount : 0,
    note: '',
    createdAt: 0
  }
  store.dispatch(startAddExpense()).then((expense) => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.ADD_EXPENSE,
      expense:{
        id: expect.any(String),
        ...expenseDefaults
      }
    })

    return database.ref(`expenses/${actions[0].expense.id}`).once('value')
   
  }).then((snapshot) =>{
    expect(snapshot.val()).toEqual(expenseDefaults)
    done()
  })
})

test('should setup set expenses action object with data', () => {
  const action = setExpenses(expenses);

  expect(action).toEqual({
    type: types.SET_EXPENSES,
    expenses: expenses
  })
})

test('should fetch the expenses from firebase', (done) => {
  const store = createMockStore({});
  store.dispatch(startSetExpenses()).then(()=>{
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: types.SET_EXPENSES,
      expenses
    })
    done();
  })
})

test('should remove a record from the database', (done) => {
  const store = createMockStore({});
  const id = expenses[2].id;
  store.dispatch(startRemoveExpense({id})).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type:types.REMOVE_EXPENSE,
      id
    })
    return database.ref(`expenses/${id}`).once('value')
   
  }).then((snapshot) => {
    expect(snapshot.val()).toBeFalsy();
    done();
  })
})
// test('addExpense action should have default data', () => {
//   const expenseData = {
//     description:'',
//     amount: 0,
//     createdAt:0,
//     note:''
//   }
//   const action = addExpense(expenseData);
//   expect(action).toEqual({
//     type: types.ADD_EXPENSE,
//     expense:{
//       ...expenseData,
//       id: expect.any(String)
//     }
//   })
// })