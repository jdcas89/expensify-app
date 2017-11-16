import React from "react";
import { connect } from "react-redux";
import { removeExpense } from '../actions/expenses'

const ExpenseListItem = ({ dispatch, id, description, note, amount, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p> <strong>Notes: </strong> {note}</p>
    <p> <strong>Amount: </strong> {amount}</p>
    <p><strong> Date created:</strong> {createdAt}</p>
    <button onClick={() => {
      dispatch(removeExpense({id}))
    }}>Delete expense</button>
    <hr />
  </div>
);

export default connect()(ExpenseListItem);