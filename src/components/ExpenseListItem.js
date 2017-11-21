import React from "react";
import { Link } from 'react-router-dom'
import moment from 'moment'

const ExpenseListItem = ({ id, description, note, amount, createdAt }) => (
  <div>
  <Link to={`/edit/${id}`}>  <h3>{description}</h3></Link>
   
    <p> <strong>Notes: </strong> {note}</p>
    <p> <strong>Amount: </strong> {amount}</p>
    <p><strong> Date created:</strong> {moment(createdAt).format('MMMM Do YYYY')}</p>
    <hr />
  </div>
);

export default ExpenseListItem;