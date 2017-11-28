import selectExpensesTotal from '../../selectors/expenses-total';
import expenses from '../fixtures/expenses'

test('should return 0 when you have an empty array', () => {
  const sum = selectExpensesTotal([]);
  expect(sum).toBe(0)
});

test('It should correctly sum the amount of one expenses', () => {
  const sum = selectExpensesTotal([expenses[0]]);
   expect(sum).toBe(195)
})
test('It should correctly sum the amount of all expenses', () => {
  const sum = selectExpensesTotal(expenses);
   expect(sum).toBe(7195)
})