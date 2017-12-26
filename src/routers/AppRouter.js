import React from "react";
import { Router, Route, Switch, Link, NavLink } from "react-router-dom";
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginPage from '../components/LoginPage';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExprensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import PageNotFound from '../components/PageNotFound';
import PrivateRoute from './PrivateRoute';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExprensePage} />
        <PrivateRoute path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default AppRouter;
