import React from "react";
import ExpenseForm from "./ExpenseForm";
import { connect } from "react-redux";
import { startAddExpense } from "../actions/expenses";

export class AddExpensePage extends React.Component {
  addExpense = expense => {
    this.props.startAddExpense(expense);
    this.props.history.push("/");
  };

  render() {
    return (
      <div>
        <h2>Create Expense</h2>
        <ExpenseForm onSubmit={this.addExpense} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddExpense: expense => dispatch(startAddExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);
