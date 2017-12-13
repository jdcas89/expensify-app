import validator from "validator";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize';
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import {firebase } from './firebase/firebase'

const store = configureStore();
const jsx = (
  <Provider store={store}>
  <AppRouter />
  </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

store.dispatch(startSetExpenses()).then(() => {
  ReactDOM.render(jsx, document.getElementById("app"));
})

firebase.auth().onAuthStateChanged((user) => {
  if(user){
    console.log('logged in')
  }else{
    console.log('logged out')
  }
})