import validator from "validator";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter'
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses'
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize';
import "normalize.css/normalize.css";
import "./styles/styles.scss";



const store = configureStore();

store.dispatch(addExpense({description:'Water bill', note:'September 2017', amount: 200, createdAt: 5000}))
store.dispatch(addExpense({description:'Gas bill', note:'August 2017', amount: 400, createdAt: 2000}))

const jsx = (
  <Provider store={store}>
  <AppRouter />
  </Provider>
)

ReactDOM.render(jsx, document.getElementById("app"));
