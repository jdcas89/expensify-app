import React from "react";
import { connect } from "react-redux";
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from "../selectors/expenses";
import numeral from 'numeral';
import expensesTotal from "../selectors/expenses-total";
import { Link } from 'react-router-dom';

export const ExpensesSummary = ({ expenseCount, expenseTotal }) => {
  const expenseWord = expenseCount === 1 ? 'expense' : 'expenses';
  const formattedExpensesTotal =  numeral(expenseTotal / 100).format('$0,0.00')


  return (
    <div className="page-header">

    <div className="content-container">
      <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totalling <span>{formattedExpensesTotal}</span></h1>
      <div className="page-header__actions">
        <Link className="button" to="/create"> Add Expense</Link>
      </div>
    </div>

  </div>
  )

}



const mapStateToProps = (state, props) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  return {
    expenseCount: visibleExpenses.length,
    expenseTotal: selectExpensesTotal(visibleExpenses)
  }
};

export default connect(mapStateToProps)(ExpensesSummary);
