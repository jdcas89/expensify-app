import * as types from '../../actions/actionTypes';
import {login, logout }  from '../../actions/auth';

test('should setup login action object', () => {
  const uid = '12315123'
  const action = login(uid);
  expect(action).toEqual({
    type: types.LOGIN,
    uid
  })
})


test('should setup login action object', () => {
  const action = logout();
  expect(action).toEqual({
    type: types.LOGOUT
  })
})