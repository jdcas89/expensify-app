import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import Header from '../components/Header';
import Footer from '../components/Footer';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExprensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import PageNotFound from '../components/PageNotFound';


const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExprensePage} />
        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        <Route component={PageNotFound} />
      </Switch>
      <Footer />
    </div>
  </BrowserRouter>
);

export default AppRouter;
