import validator from "validator";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import AppRouter, { history } from './routers/AppRouter'
import configureStore from './store/configureStore';
import { startSetExpenses } from './actions/expenses';
import {login, logout }  from './actions/auth';
import 'react-dates/lib/css/_datepicker.css'
import 'react-dates/initialize';
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import {firebase } from './firebase/firebase'

const store = configureStore();
let hasRendered = false;
const renderApp = () => {
  if(!hasRendered){
    ReactDOM.render(jsx, document.getElementById("app"));
    hasRendered = true;
  }
 
}
const jsx = (
  <Provider store={store}>
  <AppRouter />
  </Provider>
)

ReactDOM.render(<p>Loading...</p>, document.getElementById("app"));

firebase.auth().onAuthStateChanged((user) => {
  if(user){
    console.log(user);
    store.dispatch(login(user.uid))
    store.dispatch(startSetExpenses()).then(() => {
      renderApp();
      if(history.location.pathname === '/'){
        history.push('/dashboard')
      }
    })
  }else{
    store.dispatch(logout())
    renderApp();
    history.push('/')
  }
})