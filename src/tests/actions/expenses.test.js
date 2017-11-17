import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
  const action = removeExpense({id:'123qwe'});
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123qwe'
  })
})

test('should setup edit expense action object', () => {
  const action = editExpense('123qwe', {note:'this is a note'});
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123qwe',
    updates:{note:'this is a note'}
  })
})



test('addExpense should have a default state', () => {

})