import React from "react";
import { connect } from "react-redux";
import selectExpensesTotal from '../selectors/expenses-total';
import selectExpenses from "../selectors/expenses";
import numeral from 'numeral';

export const ExpensesSummary = ({expenseCount, expenseTotal}) => (
  <div>
  {
    expenseCount === 0 ? (<p>There are no expenses.</p>) : 
    (
      expenseCount === 1 ? (<p>Viewing {expenseCount} expense totalling {numeral(expenseTotal/100).format("$0,0.00")}</p>) 
      : 
      (
        <p>Viewing {expenseCount} expenses totalling {numeral(expenseTotal/100).format("$0,0.00")}</p>
      )
    )
  }
  </div>
)

const mapStateToProps = (state, props) => {
  const visibleExpenses = selectExpenses(state.expenses, state.filters)
  return {
  expenseCount: visibleExpenses.length,
  expenseTotal: selectExpensesTotal(visibleExpenses)
}
};

export default connect(mapStateToProps)(ExpensesSummary);
