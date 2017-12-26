import authReducer from '../../reducers/auth';
import * as types from "../../actions/actionTypes";


test("should setup auth values", () => {
  const state = authReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual({});
});

test('it should correctly login a user', () => {
  const uid = '11234512';
  const action = { type: types.LOGIN , uid}
  const state = authReducer(undefined, action);
  expect(state.uid).toEqual(action.uid);
})

test('it should correctly logout a user', () => {
  const action = { type: types.LOGOUT }
  const state = authReducer(undefined, action);
  expect(state).toEqual({});
})