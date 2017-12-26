import * as types from "../actions/actionTypes";

import { firebase, googleAuthProvider } from "../firebase/firebase";

export const login = uid => ({
  type: types.LOGIN,
  uid
});

export const startLogin = () => {
  return dispatch => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
  };
};

export const logout = () => ({
  type: types.LOGOUT
});
export const startLogout = () => {
  return dispatch => {
    return firebase.auth().signOut();
  };
};
