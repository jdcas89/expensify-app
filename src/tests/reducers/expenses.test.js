import expensesReducer from "../../reducers/expenses";
import moment from "moment";
import * as types from "../../actions/actionTypes";
import expenses from "../fixtures/expenses";

test("should setup expenses values", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove an expense by id", () => {
  const action = { type: types.REMOVE_EXPENSE, id: expenses[1].id };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove an expense if id is not found", () => {
  const action = { type: types.REMOVE_EXPENSE, id: "-100" };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const expense = { description: "rent", amount: 4000 }
  const action = { type: types.ADD_EXPENSE, expense: expense };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, expense]);
});

test("should edit an expense", () => {
  const action = { type: types.EDIT_EXPENSE, id: expenses[0].id, updates: { description: "TEST", amount: 5000, note: "this is a note" } };
  const state = expensesReducer(expenses, action);
  expect(state[0]).toEqual({
    id: expenses[0].id,
    description: "TEST",
    amount: 5000,
    note: "this is a note",
    createdAt: 0
  });
});

test("should not edit an expense if id not found", () => {
  const action = { type: types.EDIT_EXPENSE, id:'-100', updates: { description: "TEST", amount: 5000, note: "this is a note" } };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should set expenses', () => {
  const otherExpenses = [expenses[0], expenses[2]];
  const action = { type: types.SET_EXPENSES, expenses: otherExpenses };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(otherExpenses);
})